@extends('layouts/layout')
@section('css')
    <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/solarized-dark.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
@endsection
@section("title")
    <div class="title_wrap">
        <h4>{{$data['title']}}</h4>
        <h6 style="color:#9b9b9b;font-size:14px;"><img class="rounded-circle spin" style="border:1px solid #fff"
                                                       src="http://ozz0bm6k3.bkt.clouddn.com/head-img/1.jpg" alt=""
                                                       width="30px">&nbsp;&nbsp;&nbsp;<span style="color: #111111;">stark</span>
            发表于{{$data['time_create']}}</h6>
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
                @if($data['other_article']['previous_article'])
                    <li class="previous">
                        <a href={{"/article-content/".$data['other_article']['previous_article']->id}}>
                            <div class="fa_div">
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </div>
                            <div class="arrow-font">
                                <p class="font-special">上一篇</p>
                                <p>{{$data['other_article']['previous_article']->aname}}</p>
                            </div>
                        </a>
                    </li>
                @else
                    <li class="previous">
                        <span>已是最新章节</span>
                    </li>
                @endif
                @if($data['other_article']['next_article'])
                    <li class="next">
                        <a href={{"/article-content/".$data['other_article']['next_article']->id}}>
                            <div class="arrow-font">
                                <p class="font-special">下一篇</p>
                                <p>{{$data['other_article']['next_article']->aname}}</p>
                            </div>
                            <div class="fa_div">
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
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
        <h4>点击图片返回</h4>
        <div class="img_wrap">

        </div>
    </div>
    @include('layouts.comments')

@endsection
@section('script')
    <script>
        $(document).ready(function () {
            $('.articleContent img').addClass('mark_img');
            $(document).on('click', '.mark_img', function () {
                var status = $('.show_img').css('display');
                if (status == 'none') {
                    $('.show_img').show()
                    $('.show_img > .img_wrap').append($(this).clone());
                    $('body,html').css({'overflow':'hidden'});
                }
                else {
                    $('.show_img').hide();
                    $('.show_img > .img_wrap > img').remove();
                    $('html,body').css({'overflow':'auto'});
                }
            })
        })

    </script>
@endsection