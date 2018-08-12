<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\postCommentRequest;
use App\comments;
use App\users;

class commentController extends Controller
{
    //评论储存
    public function store (Request $request)
    {
        $request->all();
        $input = $request->all();
        $comment = [];
        $comment['body'] = $input['body'];
        $comment['discussion_id'] = $input['discussion_id'];
        $comment['user_id'] = $input['user_id'];
        $comment['parent_id'] = 0;
        $comment['reply_id'] = 0;
        $comment['type'] = $input['type'];
        //返回新增的评论数据
        $result = comments::create($comment);


        $user = users::where('id', $input['user_id']);

        $array['user'] = $user->first(['uname', 'imgUrl']);
        $array['comment'] = $result;
        echo json_encode($array);
    }

    //回复储存
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
