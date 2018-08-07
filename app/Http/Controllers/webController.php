<?php

namespace App\Http\Controllers;
use Cookie;
use Illuminate\Http\Request;
use App\videoList;
use App\articleList;
use Parsedown;
use App\discussions;
class webController extends Controller
{
    public function videoList(){
        $data=[];
        $this->data_with_cookie($data);
        $videoList = videoList::paginate(12);
//        $time_created=$videoList[0]['created_at'];
//        $videoList[0]['year']=substr($time_created,5,2);
//        return $videoList[0]['year'];
        for($i=0;$i<12;$i++){
            $time_created=$videoList[$i]['created_at'];
            $videoList[$i]['year']=substr($time_created,0,4);
            $videoList[$i]['day']=substr($time_created,8,2);
            $month=substr($time_created,5,2);
           switch ($month){
                case "01":
                    $month="Jan";
                    break;
                case "02":
                    $month="Feb";
                    break;
                case "03":
                    $month="Mar";
                    break;
                case "04":
                    $month="Apr";
                    break;
                case "05":
                    $month="Mar";
                    break;
                case "06":
                    $month="Jun";
                    break;
                case "07":
                    $month="Jul";
                    break;
                case "08":
                    $month="Agu";
                    break;
                case "09":
                    $month="Sep";
                    break;
                case "10":
                    $month="Oct";
                    break;
                case "11":
                    $month="Nov";
                    break;
                case "12":
                    $month="Dec";
                    break;
            }
            $videoList[$i]['month']=$month;
        }
        return view('video/video-list', ['videoList' => $videoList])->with('data',$data);
    }
    public function video(){
        $data=[];
        $this->data_with_cookie($data);
        return view('video/video')->with('data',$data);
    }
    public function articleContent($id){
        $pre_item=articleList::find($id-1,['id','aname']);
        $item=articleList::find($id);
        $next_item=articleList::find($id+1,['id','aname']);
        //转化发表时间
        $time_create=explode(' ',$item->created_at);
        $content=Parsedown::instance()
            ->setMarkupEscaped(true)
            ->text($item->content);
        $data=[];
        $data['title']=$item->aname;
        $data['pre_item']=$pre_item;
        $data['next_item']=$next_item;
        $data['time_create']=$time_create[0];
        $this->data_with_cookie($data);
        return view('article/article-content',compact('content',$content))->with('data',$data);
    }
    public function articleList(Request $request){
        $articleList = articleList::paginate(12);
        $this->data_with_cookie($data);
        return view('article/articles-list',compact('articleList',$articleList))->with('data',$data);
    }
    public function login(){
        $data=[];
        $this->data_with_cookie($data);
        return view('user/login')->with('data',$data);
    }
    public function register(){
        $data=[];
        $this->data_with_cookie($data);
        return view('user/register')->with('data',$data);
    }
    //退出登录
    public function exit(){
        Cookie::queue('email', null , -1);
        Cookie::queue('imgUrl', null , -1);
        return redirect('video-list');
    }
    public function learn(){
        $data=[];
        $this->data_with_cookie($data);
        return view('/learn/learn')->with('data',$data);
    }
    public function discuss_community(){
        $dicussions=discussions::all();
        foreach ($dicussions as $item){
            $item['states']=explode(',',$item['states']);
            $time_gap=time()-strtotime($item['created_at']);
            $str_gap=$this->time_gap_format($time_gap);
            $item['str_gap']=$str_gap;
        }
        $data['discussions']=$dicussions;
        $this->data_with_cookie($data);
        return view('/discuss/discuss_community')->with('data',$data);
    }
    public function discuss_create(){
        $data=[];
        $this->data_with_cookie($data);
        return view('/discuss/discuss_create')->with('data',$data);
    }

    public function discuss_content($discussion_id){
        $discussion=discussions::find($discussion_id);
        $data=[];
        //计算发布多长时间
        $time_gap=time()-strtotime($discussion['created_at']);
        $str_gap=$this->time_gap_format($time_gap);
        $discussion['str_gap']=$str_gap;
        //将discussion 返回到页面
        $data['discussion']=$discussion;

        $this->data_with_cookie($data);
        return view('/discuss/discuss_content')->with('data',$data);
    }



}
