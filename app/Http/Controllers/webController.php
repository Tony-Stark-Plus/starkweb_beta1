<?php

namespace App\Http\Controllers;

use Cookie;
use Illuminate\Http\Request;
use App\videoList;
use App\articleList;
use Parsedown;
use App\discussions;
use App\comments;
use App\users;
use Softon\SweetAlert\Facades\SWAL;

class webController extends Controller
{


    public function videoList()
    {
        $data = [];
        $this->data_with_cookie($data);
        $videoList = videoList::orderBy('created_at', 'desc')->paginate(12);
        $this->date_to_en($videoList);
        return view('video/video-list', ['videoList' => $videoList])->with('data', $data);
    }

    public function articleList()
    {
        $articleList = articleList::orderBy('created_at', 'desc')->paginate(12);
        $this->data_with_cookie($data);
        return view('article/articles-list', compact('articleList', $articleList))->with('data', $data);
    }

    public function login()
    {
        $data = [];
        $this->data_with_cookie($data);
        return view('user/login')->with('data', $data);
    }

    public function register()
    {
        $data = [];
        $this->data_with_cookie($data);
        return view('user/register')->with('data', $data);
    }

    //退出登录
    public function exit()
    {
        Cookie::queue(Cookie::forget('user_id'));
        Cookie::queue(Cookie::forget('imgUrl'));
        return redirect('video-list');
    }

    public function learn()
    {
        $data = [];
        $this->data_with_cookie($data);
        return view('/learn/learn')->with('data', $data);
    }

    public function discuss_community()
    {
        $dicussions = discussions::all();
        foreach ($dicussions as $item) {
            $item['states'] = explode(',', $item['states']);
            $str_gap = $this->time_gap_format($item['created_at']);
            $item['str_gap'] = $str_gap;
        }
        $data['discussions'] = $dicussions;
        $this->data_with_cookie($data);
        return view('/discuss/discuss_community')->with('data', $data);
    }

    public function discuss_create()
    {
        $data = [];
        $this->data_with_cookie($data);
        return view('/discuss/discuss_create')->with('data', $data);
    }

    public function articleContent($discussion_id)
    {
        //定义上一篇文章和下一篇文章
        $previous_article = null;
        $next_article = null;
        $discussion = articleList::find($discussion_id);
        $articleList = articleList::latest()->get(['id', 'aname']);
        //在 $articleList 中获取索引值
        $index = $this->find_arr_index($articleList, $discussion->id);
        if ($index != 0) {
            $previous_article = $articleList[$index - 1];
        }
        if ($index != count($articleList) - 1) {
            $next_article = $articleList[$index + 1];
        }
        //获取该页面的评论及处理
        $comments = comments::where(['discussion_id' => $discussion_id, 'type' => 'a'])->orderBy('created_at', 'asc')->get();
        $comments = $this->changeArray($comments);
        $arr = [];
        foreach ($comments as $item) {
            if ($item['parent_id'] == 0) {
                $arr[] = [$item];
            } else {
                foreach ($arr as &$itemp) {
                    if ($itemp[0]['id'] == $item['parent_id']) {
                        $itemp[] = $item;
                    }
                }
            }
        }

        $pre_item = articleList::find($discussion_id - 1, ['id', 'aname']);
        $item = articleList::find($discussion_id);
        $next_item = articleList::find($discussion_id + 1, ['id', 'aname']);
        //转化发表时间
        $time_create = explode(' ', $item->created_at);
        $content = Parsedown::instance()
            ->setMarkupEscaped(true)
            ->text($item->content);
        $data = [];
        //comment相关数据
        $data['comments'] = $arr;
        $data['discussion'] = $discussion;
        $data['type'] = 'a';
        $data['title'] = $item->aname;
        $data['pre_item'] = $pre_item;
        $data['next_item'] = $next_item;
        $data['time_create'] = $time_create[0];
        $data['other_article'] = [
            'previous_article' => $previous_article,
            'next_article' => $next_article
        ];
        $this->data_with_cookie($data);
        return view('article/article-content', compact('content', $content))->with('data', $data);
    }

    public function video($discussion_id)
    {
        $discussion = videoList::find($discussion_id);
        //获取该video页面的评论
        $comments = comments::where(['discussion_id' => $discussion_id, 'type' => 'v'])->orderBy('created_at', 'asc')->get();
        $comments = $this->changeArray($comments);
        $arr = [];
        foreach ($comments as $item) {
            if ($item['parent_id'] == 0) {
                $arr[] = [$item];
            } else {
                foreach ($arr as &$itemp) {
                    if ($itemp[0]['id'] == $item['parent_id']) {
                        $itemp[] = $item;
                    }
                }
            }
        }

        $data = [];
        $data['comments'] = $arr;
        $data['discussion'] = $discussion;
        $data['type'] = 'v';
        $data['download_name'] = $this->get_download_name($discussion['videoUrl']);
        $this->data_with_cookie($data);
        return view('video/video')->with('data', $data);
    }

    public function discuss_content($discussion_id)
    {
        $discussion = discussions::find($discussion_id);
        $comments = comments::where(['discussion_id' => $discussion_id, 'type' => 'd'])->orderBy('created_at', 'asc')->get();
        $comments = $this->changeArray($comments);
        $arr = [];
        foreach ($comments as $item) {
            if ($item['parent_id'] == 0) {
                $arr[] = [$item];
            } else {
                foreach ($arr as &$itemp) {
                    if ($itemp[0]['id'] == $item['parent_id']) {
                        $itemp[] = $item;
                    }
                }
            }
        }
        $data = [];
        $data['comments'] = $arr;
        //计算发布多长时间
        $str_gap = $this->time_gap_format($discussion['created_at']);
        $discussion['str_gap'] = $str_gap;
        //将discussion 返回到页面
        $data['discussion'] = $discussion;
        $data['type'] = 'd';
        $this->data_with_cookie($data);
        return view('/discuss/discuss_content')->with('data', $data);
    }

    //评论返回数据处理
    public function change($item)
    {
        $item['uname'] = $item->user->uname;
        $item['imgUrl'] = $item->user->imgUrl;
        if ($item->reply_id != 0) {
            $item['reply_mes'] = comments::find($item->reply_id)->user;
        }
        return [
            "id" => $item['id'],
            "content" => $item['body'],
            "user_id" => $item['user_id'],
            "discussion_id" => $item['discussion_id'],
            "created_at" => $item->created_at,
            "updated_at" => $item['updated_at'],
            "parent_id" => $item['parent_id'],
            "uname" => $item['uname'],
            "str_gap" => $this->time_gap_format($item['created_at']),
            "imgUrl" => $item['imgUrl'],
            "reply_id" => $item['reply_mes']['id'],
            "reply_uname" => $item['reply_mes']['uname']
        ];
    }

    public function changeArray($data)
    {
        $ret = [];
        foreach ($data as $item) {
            $ret[] = $this->change($item);
        }
        return $ret;
    }

    public function p()
    {
        $jsonp = SWAL::message('Good Job', 'You have successfully logged In!', 'info')::getFacadeAccessor();
//        dd(swal('Your Title','Text'));
        return $jsonp;
        return redirect('test1')->with('jsonp', $jsonp);
    }

    public function p1()
    {
        return view('test');
    }

}
