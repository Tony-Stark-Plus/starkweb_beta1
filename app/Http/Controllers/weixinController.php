<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;
use App\videoList;
use Parsedown;
use App\discussions;
use App\users;


class weixinController extends Controller
{
    //
    public function index(Request $request)
    {
        //文章总数
        $article_num = articleList::count();
        //分页需要的页数
        $page_num = ceil($article_num / 10);
        $articleList = articleList::latest()->skip(($request['page'] - 1) * 10)->take(10)->get(['id', 'aname', 'kind_class', 'created_at', 'kind']);
        $this->date_to_en($articleList);
        //Api重构
        $data['page_num'] = $page_num;
        $data['articleList'] = $articleList;
        return $data;
    }

    //vue也用了
    public function articleContent($id)
    {
        $articleContent = articleList::where('id', $id)->first(['id', 'aname', 'content', 'created_at']);
        $articleContent['content'] = Parsedown::instance()
            ->setMarkupEscaped(true)
            ->text($articleContent['content']);
        $articleAllList = articleList::latest()->get(['id', 'aname']);
        //声明前、后一篇文章
        $previous_article=null;
        $next_article = null;
        foreach ($articleAllList as $key => $val) {
            if($val->id ==$id){
                if ($key >= 1) {
                    $previous_article = $articleAllList[$key - 1];
                }

                if($key<=count($articleAllList)-2){
                    $next_article = $articleAllList[$key+1];
                }
                break;
            }
        }
        $articleContent['previous_article']=$previous_article;
        $articleContent['next_article']=$next_article;
        return $articleContent;
    }
    public function videoList(Request $request)
    {
        //视频总数
        $video_num = videoList::count();
        //分页需要的页数
        $page_num = ceil($video_num / 10);
        $videoList = videoList::latest()->skip(($request['page'] - 1) * 10)->take(10)->get();
        $this->date_to_en($videoList);
        $data['page_num'] = $page_num;
        $data['videoList'] = $videoList;
        $data['page_index'] = (int)$request['page'];
        return $data;
    }
    public function find_video_mes(Request $request){
        $data = videoList::find($request['id']);
        $data['created_time'] = substr($data['created_at'],0,10);
        $url = $data['videoUrl'];
        $data['download_name'] = $this->get_download_name($url);
        unset($data->created_at,$data->updated_at);
        return $data;
    }
    public function articleList(Request $request)
    {
        $articleList = articleList::latest()->skip(($request['page'] - 1) * 10)->take(10)->get(['id','aname','kind','created_at','content','kind_class']);
        //文章总数
        $article_num = articleList::count();
        //分页需要的页数
        $page_num = ceil($article_num / 10);

        $data['page_num'] = $page_num;
        $data['articleList'] = $articleList;
        $data['page_index'] = (int)$request['page'];
        return $data;
    }
    public function discuss_list()
    {
        $dicussions = discussions::all();
        foreach ($dicussions as $item) {
            $item['states'] = explode(',', $item['states']);
            $str_gap = $this->time_gap_format($item['created_at']);
            $item['str_gap'] = $str_gap;
            //获取dicussion关联的user信息
            $item_p = $item;
            $user_info['uname'] = $item_p->user->uname;
            $user_info['imgUrl'] = $item_p->user->imgUrl;
            $item['user_info'] = $user_info;
            unset($item->user,$item->updated_at);
        }
        return $dicussions;
    }
    public function discussion_content(Request $request){
        $discussion = discussions::find($request['discussion_id']);
        $discussion['publish_time'] = $this->time_gap_format($discussion['created_at']);
        unset($discussion['created_at'],$discussion['updated_at'],$discussion['states']);
        $publish_user_info['uname']= $discussion->user->uname;
        $publish_user_info['imgUrl']= $discussion->user->imgUrl;
        $discussion['publish_user_info'] = $publish_user_info;
        return $discussion;
    }
//    获取微信openid
    public function getOpenId(Request $request){
        $appId = 'wx1e1d18b996c0027e';
        $secret = '6e0bae5bc063e7ee1c39deae3b6f39bc';
        $url = "https://api.weixin.qq.com/sns/jscode2session?appid=".$appId."&secret=".$secret."&js_code=".$request['code']."&grant_type=authorization_code";
        $curl = curl_init();
        //设置抓取的url
        curl_setopt($curl, CURLOPT_URL,$url);
        //设置头文件的信息作为数据流输出
        curl_setopt($curl, CURLOPT_HEADER, 1);
        //设置获取的信息以文件流的形式返回，而不是直接输出。
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        //执行命令
        $res = curl_exec($curl);
        //关闭URL请求
        curl_close($curl);
        //处理字符串
        $vowels = array('"','}','{');
        $res = str_replace($vowels,'',$res);
        $arr = explode(":",$res);
        return $arr[count($arr)-1];
    }
//    储存openId
    public function storeOpenId(Request $request){
//        $res  = videoList::where('id','=',$request['articleId'])->update(['likedId' => 'fsdfsvg']);
//        return $res;
        return $request;
    }
}