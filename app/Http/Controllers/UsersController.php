<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\users;
use App\Http\Requests\FormRules;
use Cookie;
use Response;
use Softon\SweetAlert\Facades\SWAL;
class UsersController extends Controller
{
    //
    public function index(){
        $users=users::all();
        return $users;
    }

    public function store(FormRules $request){
        $input=$request->all();
        $input['imgUrl']='http://xsy-cdn.xyz/head-img/'.rand(1,10).'.jpg';
        if(users::create($input))
        {
            $user = users::where('email','=',$input['email'])->first(['id']);

            Cookie::queue('user_id', $user['id'], 1000);
            Cookie::queue('imgUrl',$input['imgUrl'],1000);
            $data = [
                "alert" => "register",
                "cookie" => []
            ];
            $this->data_with_cookie($data);
            $alert=[
                'type'=> 'success',
                'title'=> '注册成功',
                'text'=> 'Welcome to Starkweb!',
                'showConfirmButton'=>false,
                'timer'=> '2500',
            ];
            $data['alert']=json_encode($alert);
            return redirect('video-list')->with('data', $data);
        }
    }

    public function login(Request $request)
    {
        $input = $request;
        $login_error = [
            'main_error' => '',
            'captcha' => '',
            'email' => $input['email'],
            'password' => $input['password']
        ];
        $user = users::where('email','=',$input['email']);
        $user_pwd = $user->first(['password']);
        if ($input['password'] == $user_pwd['password'] && Session('starkcaptcha') == $input['captcha']) {
//       登陆成功，返回data数据
            $data = [
                "alert" => "login",
                "cookie" => []
            ];
            Cookie::queue('imgUrl', $user->first()->imgUrl, 1000);
            Cookie::queue('user_id',$user->first(['id'])['id'], 1000);
            $this->data_with_cookie($data);
            $alert=[
                    'type'=> 'success',
                    'title'=> '登录成功',
                    'text'=> 'Welcome back!',
                    'showConfirmButton'=>false,
                    'timer'=> '2500',
            ];
            $data['alert']=json_encode($alert);
            return redirect('video-list')->with('data', $data);
        }
        else {
            //返回验证码错误
            if (Session('starkcaptcha') != $input['captcha']) {
                $login_error['captcha'] = "验证码错误";
            }
            //返回该登录用户密码错误
            if ($input['password'] != $user_pwd['password']) {
                $login_error['main_error'] = '邮箱不存在或密码错误';
            }

            return redirect()->back()->with('login_error', $login_error);

        }

    }
}
