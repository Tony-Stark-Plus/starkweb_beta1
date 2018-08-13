@extends('layouts/layout')
@section('css')
{{--  <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video-js.css" rel="stylesheet">  --}}
@endsection

@section('container')
    <div class="container video">
       <div class="row">
            <div class="col-md-2 mobile side padding-change"></div>
            <div class="col-md-8 col-sm-12 padding-change video-part">
                <div class="previous change-lesson"><i class="fa fa-backward" aria-hidden="true"></i></div>
                <div class="next change-lesson"><i class="fa fa-forward" aria-hidden="true"></i></div>   
                <video id="my-player" style="width:100%; height:100%;" 
                class="video-js vjs-big-play-centered vjs-play-progress vjs-slider-bar .vjs-volume-level vjs-load-progress" 
                controls preload="auto" poster="img/video.jpg"
                    data-setup='{ "aspectRatio":"860:500", "playbackRates": [0.5,1, 1.5, 2] }'>
                        <source src={{ $data['discussion']['videoUrl']}} type="video/mp4"></source>
                        <source src={{ $data['discussion']['videoUrl']}} type="video/webm"></source>
                        <source src={{ $data['discussion']['videoUrl']}} type="video/ogg"></source>
                        <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">
                        supports HTML5 video
                        </a>
                        </p>
                </video>
            </div>
            <div class="col-md-2 mobile side padding-change"></div>
       </div>
    </div>
    @include('layouts.comments')
@endsection
@section('script')
{{--  <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video.js"></script>  --}}
@endsection