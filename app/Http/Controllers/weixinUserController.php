<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\users;
use Gregwar\Captcha\CaptchaBuilder;
use Session;
class weixinUserController extends Controller
{
    public function login(Request $request){
        $input = $request;
        $user = users::where('email','=',$input['email'])->first();
        if ($input['password'] == $user['password'] && Session('starkcaptcha') == $input['verification']){
            return 'ok';
        }

    }
    //生成图形验证码
    public function captcha(){
        $builder = new CaptchaBuilder;
        $builder->build($width = 160, $height = 40, $font = null);
        //获取验证码内容
        $phrase = $builder->getPhrase();
        //把内容存入session
        Session::flash('starkcaptcha', $phrase);
        //生成图片
        header("Cache-Control: no-cache, must-revalidate");
        header('Content-Type: image/jpeg');
        $builder->output();
    }
}
