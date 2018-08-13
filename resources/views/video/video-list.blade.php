@extends('layouts/layout')
@section('header-change')
<div class="user-mes">
    <div class="message mobile pad">
        <img src="/img/message.png" alt="">
    </div>
    <div class="head-photo">
        无
    </div>
</div>
@endsection
@section("title")
<div class="title_wrap">
    <h3>web开发视频更新，All in here!</h3>
</div>
@endsection
@section('container')
    <div class="container video-list">
        <div class="row">
            <div class="col-md-8 offset-md-2 mobile-adjust offset-1 main-content">

                <ul class="video-list-items">

                    <!-- content goes here -->
                    @foreach($videoList as $item)
                    <li v-for="(item,index) in items" @click="onItemClick(index, item)" class="video-list-item">
                        <div class="row">
                            <div class="item-front col-md-1 un-watch">
                                <span class="select-like"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                            <div class="item-main col-md-9 item-main-mobile-adjust">
                                <a href={{"/video/".$item->id}}>
                                    <span class="camera"><i class="fa fa-video-camera" aria-hidden="true"></i></span>
                                    <span class="video-name">{{$item->vname}}</span>
                                    <span class="duihao"><i class="fa fa-check-square" aria-hidden="true"></i></span>
                                </a>
                            </div>
                            <div class="item-behind col-md-2 un-watch">
                                <span>{{$item->month}} {{$item->day}}， {{$item->year}}</span>
                            </div>
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
        {{ $videoList->links() }}
    </div>
@endsection

@if(Session::get('data')['alert']=='register')
@section('script')
<script>
    swal("注册成功", "Welcome to STARKWEB", "success");
</script>
@endsection
@endif
@if(Session::get('data')['alert']=='login')
@section('script')
<script>
    swal("登录成功", "Welcome Back", "success");
</script>
@endsection
@endif
