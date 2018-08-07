<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\discussions;

class DicussionController extends Controller
{
    //
    public function store(Request $request){
        $input=$request->all();
       //验证
        $create_errors=[];
        if(strlen($input['title'])<10){
            $create_errors['title']="标题字符至少10字符";
        }
        if(count($input['states'])>3){
            $create_errors['states']="标签最多三个";
        }
        if(strlen($input['content'])<5){
            $create_errors['content']="内容至少要10个字符";
        }
        if(count($create_errors)!=0){
            return redirect()->back()->with('create_errors',$create_errors);
        }
        //将数组变成字符串储存在数组库中
        $input['states']=implode(',',$input['states']);
        $user = discussions::create($input);
        if($user){
            $result='success';
            return redirect('/discuss_community')->with('result',$result);
        }
    }
}
