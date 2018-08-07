@extends('layouts/layout')
@section('css')
   <style type="text/css">
       .img_wrap{
            width:100%;
            background:url('http://ozz0bm6k3.bkt.clouddn.com/img/fantastic/4.jpg') no-repeat center;
            height:120px;
            padding:40px 0;
       }
   </style>
    @endsection
@section("title")
    <div class="jumbotron" style="background:url('http://ozz0bm6k3.bkt.clouddn.com/img/fantastic/1.jpg') no-repeat center;padding:1.9rem 1rem;">
        <div class="container">
            <h1>Stark_web 社区</h1>
            <p>more share, more gain</p>
            <p><a class="btn btn-primary btn-md" href="/discuss_community/create" role="button">create your own idea »</a></p>
        </div>
    </div>
@endsection
@section('container')
    <div class="row">
        <div class="col-md-10 offset-md-1 discussion_list">
            @foreach($data['discussions'] as $item)
                <div class="media p-2 item">
                    <a href="" class="item-left">
                        <img src="http://ozz0bm6k3.bkt.clouddn.com/img/head-img/79b6ecc879848cf82cf14becc46f36fc.jpeg"
                             alt="John Doe" class="mr-2 mt-0 rounded-circle" style="width:45px;border:1.5px solid #339966">
                    </a>
                    <a href={{"/discuss_community/content/".$item->id}} class="item-right">
                        <ul class="item-right">
                            <li><h6>{{$item->title}}</h6></li>
                            <li class="tags">
                                @foreach($item['states'] as $state)
                                    <span class="tag">{{$state}}</span>
                                @endforeach
                            </li>
                            <li class="mes">由&nbsp;{{$item->user->uname}}&nbsp;于&nbsp;{{$item->str_gap}}&nbsp;前发布</li>
                            <li class="sub_content">{{$item->content}}</li>
                        </ul>
                    </a>
                </div>
                @endforeach
        </div>
    </div>
@endsection
@if(Session('result')=='success' || null)
@section('script')
    <script>
        swal("创作成功", "", "success");
    </script>
@endsection
@endif