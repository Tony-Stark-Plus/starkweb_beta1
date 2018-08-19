@extends('layouts/layout')
@section('title')
    <div class="title_wrap">
        <h4>适合自己的学习路径</h4>
    </div>
    @endsection
@section('container')
    <div class="container learn">
        <div class="row">
           <div class="wrap col-md-10 offset-md-1">
               <div class="row">
                   <div class="item col-md-6 ">
                       <a href="/404">
                           <div class="javascript learn_area">
                               <i class="devicons devicons-javascript"></i>
                               <p>做更好的人机交互</p>
                           </div>
                       </a>
                   </div>
                   <div class="item col-md-6">
                       <a href="/404">
                           <div class="laravel learn_area">
                               <i class="devicons devicons-laravel"></i>
                               <p>后端-laravel实践</p>
                           </div>
                       </a>
                   </div>
                   <div class="item col-md-6">
                       <a href="/404">
                           <div class="appstore learn_area">
                               <i class="devicons devicons-appstore"></i>
                               <p>开发工具大杂烩</p>
                           </div>
                       </a>
                   </div>
                   <div class="item col-md-6">
                       <a href="/404">
                           <div class="docker learn_area">
                               <i class="devicons devicons-docker"></i>
                               <p>代码的禅意人生</p>
                           </div>
                       </a>
                   </div>
               </div>
           </div>
        </div>
    </div>
@endsection