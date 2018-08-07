@extends('layouts/layout')
@section("title")
    <div class="title_wrap">
        <h4>WEB开发相关的文章、教程、随心记</h4>
    </div>
@endsection
@section('container')
    <div class="article-list container">
        <div class="wrap">
            <div class="row">
                <div class="col-md-8 offset-md-2 article-list">
                    <ul class="article-list-items">
                        @foreach($articleList as $item)
                        <li class="article-list-item">
                            <span class="item-status">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </span>
                            <span class="item-link">
                                <a href={{"/article-content/".$item->id}}>
                                    <h6>{{$item->aname}}</h6>
                                    <small>{{$item->updated_at}}</small>
                                </a>
                            </span>
                            <span class="item-kind kind-php">php</span>
                            <div class="clear"></div>
                        </li>
                        @endforeach
                    </ul>
                </div>
                <div class="pages col-md-8 offset-md-2">
                    {{$articleList->links()}}
                </div>
            </div>

        </div>
    </div>    
@endsection