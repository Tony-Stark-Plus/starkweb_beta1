@extends('layouts/layout')
@section('css')
@endsection
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
                    <li class="video-list-item">
                        <div class="row">
                            <div class="item-front col-md-1 un-watch">
                                <span class="select-like"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                            </div>
                            <div class="item-main col-md-8 item-main-mobile-adjust">
                                <a href={{"/video/".$item->id}}>
                                    <div class="camera"><i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></div>
                                    <div class="video-name">
                                        {{$item->vname}}
                                        <div class="mobile-show-date">{{$item->month}} {{$item->day}}， {{$item->year}}</div>
                                    </div>
                                    {{--<span class="duihao"><i class="fa fa-check-square" aria-hidden="true"></i></span>--}}
                                </a>
                            </div>
                            <div class="item-behind col-md-3 un-watch">
                                <span>{{$item->date_en}}</span>
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
@section('script')

    @include('sweetalert::cdn')
    @if (Session::has('data.alert'))
    <script>
        swal({!! Session::pull('data.alert') !!});
    </script>
    @endif
@endsection