@extends('layouts/layout')
@section('header-change')
<div class="user-profile">
<a href="/user/login" class="button login">登录</a>
<a href="/user/register" class="button register">注册</a>
</div>
@endsection
@section('title')
<div class="title_wrap">
    <h3>Login</h3>
</div>
@endsection
@section('container')
    <div id="form" class="profile row">
        <form action="/user/login" id="" method="post" class="form col-md-6 offset-md-3 col-10 offset-1">
            <div class="form-group">
                @csrf
                <label for="email" class="control-label">邮箱:</label> 
                <input id="email" name="email" type="email" class="form-control" placeholder="请输入邮箱" value={{Session('login_error')['email']}}>
            </div>
            {{--邮箱格式错误--}}
            @foreach($errors->get('uname') as $error)
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    <strong>Error!</strong>{{$error}}
                </div>
                @endforeach
            <div class="form-group">
                    <label for="password" class="control-label">密码</label> 
                    <input id="password" name="password" type="password" class="form-control" placeholder="密码" value={{Session('login_error')['password']}}>
            </div>
            {{--密码格式错误--}}
            @foreach($errors->get('uname') as $error)
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    <strong>Error!</strong>{{$error}}
                </div>
            @endforeach

            {{--密码或邮箱错误--}}
            @if(Session('login_error')['main_error'])
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    {{Session('login_error')['main_error']}}
                </div>
            @endif
            <div class="form-group">
                <div class="col-md-12" style="justify-content: flex-end;display:flex;padding:0;">
                    <input type="text" name="captcha" class="form-control" placeholder="请输入验证码" style="margin-right:10px;font-size:14px;" required>
                    <a id="refresh-captcha">
                        <img src="/captcha/1" alt="验证码" tilte="刷新图片" width="160" height="60" id="captcha">
                    </a>
                </div>
                {{--返回验证码错误--}}
                @if(Session('login_error')['captcha'])
                    <div class="alert alert-danger">
                        <a class="close" data-dismiss="alert">×</a>
                        {{Session('login_error')['captcha']}}
                    </div>
                @endif

            </div>
            <div class="form-group buttons">
                <button type="submit" class="btn btn-control"style="font-weight: bold;">马 上 登 录</button> 
                <a href="https://www.codecasts.com/password/reset" class="text-muted">忘 记 密 码?</a> 
                <div class="row" style="margin-top: 14px;">
                    <div class="col-6 col-md-6 link">
                        <a href="https://www.codecasts.com/auth/github"><i class="fa fa-github"></i> 使用Github登录</a>
                    </div>
                    <div class="col-6 col-md-6 link">
                        <a href="https://www.codecasts.com/auth/weibo" class="pull-right"><i class="fa fa-weibo"></i> 使用微博登录</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection