<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;
use App\videoList;
use App\discussions;
use App\users;
use App\comments;
class weixinCommentController extends Controller
{
    public function get_comment(Request $request){
        $comment_arr = [];
        $comments = comments::where(['discussion_id' => $request['discussion_id'], 'type' => $request['type']])->orderBy('created_at', 'asc')->get(['id','user_id','body','type','discussion_id','parent_id','reply_id','created_at']);
        foreach ($comments as $item){
            array_push($comment_arr,$this->change($item));
        }
        $arr = [];
        foreach ($comment_arr as $item) {
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
        return $arr;
    }

    //评论信息完善
    public function change($item)
    {
        $item['uname'] = $item->user->uname;
        $item['imgUrl'] = $item->user->imgUrl;
        if ($item->reply_id != 0) {
            $item['reply_mes'] = comments::find($item->reply_id)->user;
        }
        $array = [
            "id" => $item['id'],
            "content" => $item['body'],
            "user_id" => $item['user_id'],
            "discussion_id" => $item['discussion_id'],
            "created_at" => $item['created_at'],
            "parent_id" => $item['parent_id'],
            "uname" => $item['uname'],
            "str_gap" => $this->time_gap_format($item['created_at']),
            "imgUrl" => $item['imgUrl'],
            "reply_id" => $item['reply_mes']['id'],
            "reply_uname" => $item['reply_mes']['uname']
        ];
        return $array;
    }
    //储存评论回复
    public function reply (Request $request)
    {
        $request->all();
        $input = $request->all();
        $comment = [];
        $comment['body'] = $input['body'];
        $comment['discussion_id'] = $input['discussion_id'];
        $comment['user_id'] = $input['user_id'];
        $comment['parent_id'] = $input['parent_id'];
        $comment['reply_id'] = $input['reply_id'];
        $comment['type'] = $input['type'];
        //返回新增的评论数据
        $result = comments::create($comment);

        $array['user']=users::where('id',$input['user_id'])->first(['imgUrl','id','uname']);

        $array['reply_name'] = $input['reply_uname'];
        $array['comment'] = $result;
        echo json_encode($array);
    }
}
