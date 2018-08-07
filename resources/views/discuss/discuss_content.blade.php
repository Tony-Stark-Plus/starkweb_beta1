@extends('layouts/layout')
@section('container')
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1 discussion_content">
                <div class="d_title"><h4>{{$data['discussion']->title}}</h4></div>
                <div class="jumbotron d_sub">
                    <a href="" class="d_sub_img">
                        <img src={{$data['discussion']->user->imgUrl}} alt="">
                    </a>
                    <div class="d_sub_content">
                        <ul class="d_person_mes">
                           <li style="color:#15b982;">{{$data['discussion']->user->uname}}&nbsp;</li>
                            <li style="font-size:15px;">发表于<strong>{{$data['discussion']->str_gap}}</strong>前</li>
                            <li></li>
                        </ul>
                        <p class="d_sub_content_main">{{$data['discussion']->content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection