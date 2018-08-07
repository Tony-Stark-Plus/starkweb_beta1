@extends('layouts/layout')
@section('header-change')
<div class="user-profile">
<a href="/user/login" class="button login">登录</a>
<a href="/user/register" class="button register">注册</a>
</div>
@endsection
@section('title')
<div class="title_wrap">
    <h3>Register</h3>
</div>
@endsection

@section('container')
    <div id="form" class="proflie row">
        <form action="/user/store" method="POST" class="col-md-6 offset-md-3 col-10 offset-1" id="register">
            @csrf
            <input type="hidden" name="_token" value="y25RB6UTiFLpLU6Uy2l1THPcPHogGQFQgrQCdXFs"> 
            <div class="form-group">
                    {{ csrf_field() }}
                <label for="name" class="control-label">用户名:</label> 
                <input id="name" type="text" placeholder="用户名唯一英文或数字组合" name="uname" required="required" autofocus="autofocus" class="form-control" value={{old('uname')}}>
               
                    @foreach($errors->get('uname') as $error)
                    <div class="alert alert-danger">
                        <a class="close" data-dismiss="alert">×</a>
                        <strong>Error!</strong>{{$error}}
                    </div>
                    @endforeach

            </div> 
            <div class="form-group user-register-tooltip">
                <label for="email" class="control-label">邮箱:</label> 
                <input id="email" type="email" name="email" placeholder="请不要随意填测试邮箱" required="required" class="form-control" value={{old('email')}}>
             
                @foreach($errors->get('email') as $error)
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    <strong>Error!</strong>{{$error}}
                </div>
                @endforeach
            
            </div>
            <div class="form-group">
                <label for="password" class="control-label">密码:</label> 
                <input id="password" type="password" placeholder="密码需要6~18位" name="password" required="required" class="form-control">
            
                @foreach($errors->get('password') as $error)
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    <strong>Error!</strong>{{$error}}
                </div>
                @endforeach
          
            </div> 
            <div class="form-group">
                <label for="password_confirmation" class="control-label">确认密码:</label> 
                <input id="password_confirmation" name="password_confirmation" type="password" value="" class="form-control">
            
                @foreach($errors->get('password_confirmation') as $error)
                <div class="alert alert-danger">
                    <a class="close" data-dismiss="alert">×</a>
                    <strong>Error!</strong>{{$error}}
                </div>
                @endforeach
            
            </div> 
                <input name="code" type="hidden" value="">
            <div class="form-group buttons">
                <p class="agreement">注册时请您一定要阅读<a href="/agreement" target="_blank" rel="noreferrer noopener" style="text-align: left;">STARKWEB服务条款和版权声明 </a></p> 
                <button type="submit" class="btn btn-control" style="font-weight: bold;">马 上 注 册</button> 
                <div class="row link">
                    <a href="/auth/github" class="col-6 col-md-6"><i class="fa fa-github"></i> 使用 Github 登录</a>
                    <a href="/auth/weibo" class="pull-right col-6 col-md-6"><i class="fa fa-weibo"></i> 使用微博登录</a>
                </div>
            </div>
        </form>
    </div>
@endsection
@section('script')
<script src="https://cdn.bootcss.com/jquery-validate/1.17.0/jquery.validate.min.js"></script>
@endsection