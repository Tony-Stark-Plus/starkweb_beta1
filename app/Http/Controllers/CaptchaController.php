<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Gregwar\Captcha\CaptchaBuilder;
use Session;

class CaptchaController extends Controller
{
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
