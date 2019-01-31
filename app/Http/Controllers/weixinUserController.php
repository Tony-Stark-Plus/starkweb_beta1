<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\users;
use Gregwar\Captcha\CaptchaBuilder;
use Session;
use Cookie;
class weixinUserController extends Controller
{
    public function login(Request $request){
        $input = $request;
        $user = users::where('email','=',$input['email'])->first();
        if($user){
            if ($input['password'] == $user['password'] ){
                if(Session('starkcaptcha') == $input['verification']){
                    //储存用户cookie
                    Cookie::queue('user_id', $user['id'], 1000);
                    Cookie::queue('imgUrl',$user['imgUrl'],1000);
                    $login_mes['success'] = 'ok';
                    return $login_mes;

                }else{
                    $login_mes['error'] = '验证码错误';
                    return $login_mes;
                }
            }
            else{
                $login_mes['error'] = '密码错误';
                return $login_mes;
            }
        }
        else{
            $login_mes['error'] = '您尚未注册';
            return $login_mes;
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
    public function get_cookie(){
        $user_cookie['user_id'] = Cookie::get('user_id');
        $user_cookie['imgUrl'] = Cookie::get('imgUrl');
        return $user_cookie;
    }
    public function exit()
    {
        Cookie::queue(Cookie::forget('user_id'));
        Cookie::queue(Cookie::forget('imgUrl'));
        return redirect('/#/videoList');
    }
}
