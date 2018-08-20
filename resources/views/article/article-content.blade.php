@extends('layouts/layout')
@section('css')
    <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/androidstudio.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
@endsection
@section("title")
<div class="title_wrap">
    <h4>{{$data['title']}}</h4>
    <h6 style="color:#9b9b9b;font-size:14px;"><img class="rounded-circle spin" style="border:1px solid #fff" src="http://ozz0bm6k3.bkt.clouddn.com/head-img/1.jpg" alt="" width="30px">&nbsp;&nbsp;&nbsp;<span style="color: #111111;">stark</span> 发表于{{$data['time_create']}}</h6>
</div>
@endsection
@section('container')
    <div class="row">
        <div class="col-md-8 offset-md-2 main-content">
            <article>
                <div class="articleContent">
                    {!!$content!!}
                </div>
            </article>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 offset-md-2 arrow-nav">
            <ul>
               @if($data['pre_item'])
                    <li class="previous">
                        <a href={{"/article-content/".$data['pre_item']->id}}>
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            <span>{{$data['pre_item']->aname}}</span>
                        </a>
                     @else
                        <li class="next">
                            <span>前面没东西</span>
                        </li>
                   @endif
                @if($data['next_item'])
                       <li class="next">
                           <a href={{"/article-content/".$data['next_item']->id}}>
                               <span>{{$data['next_item']->aname}}</span>
                               <i class="fa fa-arrow-right" aria-hidden="true"></i>
                           </a>
                       </li>
                    @else
                       <li class="next">
                           <span>已是最后一篇</span>
                       </li>
                   @endif
            </ul>
        </div>
    </div>
    <div class="show_img">
        <h3>点击图片返回</h3>
        <div class="img_wrap">

        </div>
    </div>
    @include('layouts.comments')

@endsection
@section('script')
    <script>
        $(document).ready(function(){
            $('.articleContent img').addClass('mark_img');
            $(document).on('click','.mark_img',function(){
                var status=$('.show_img').css('display');
                if(status == 'none')
                {
                    $('.show_img').css('display','block');
                    $('.show_img > .img_wrap').append($(this));
                }
                else{
                    $('.show_img').css('display','none');
                    $('.show_img > .img_wrap').html('');
                }
                // $('.show_img > .img_wrap').append($(this));
            })
        })

    </script>
    @endsection