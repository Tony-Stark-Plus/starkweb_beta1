<div class="row">
    <div class="col-md-8 offset-md-1 comments">
        @foreach($data['comments'] as $item)
            {{--渲染父评论--}}
            <div class="media  p-1">
                <img src={{$item[0]['imgUrl']}} alt="" class="mr-1 mt-1" style="width:45px;">
                <div class="media-body media_main">
                    <a href="" class="style-a">{{$item[0]['uname']}}</a>
                    <span class="style-time">{{$item[0]['str_gap']}}前</span>
                    <p class="main-text">{{$item[0]['content']}}</p>
                    <div class="style-reply">
                        @if($data['cookie']['user_id'])
                            <div class="reply_trigger">回复</div>
                        @endif
                        <div class="reply_form">
                            @csrf
                            <input type="hidden" name="discussion_id" value={{$data['discussion']->id}}>
                            <input type="hidden" name="user_id" value={{$data['cookie']['user_id']}}>
                            <input type="hidden" name="parent_id" value={{$item[0]['id']}}>
                            <input type="hidden" name="reply_id" value={{$item[0]['id']}}>
                            <input type="hidden" name="reply_uname" value={{$item[0]['uname']}}>
                            <input type="hidden" name="type" value={{$data['type']}}>
                            <input type="text" class="form-control" id="" placeholder="写回复..."
                                   name="body_reply">
                            <div class="reply_btn" id="">回复</div>
                        </div>
                    </div>
                    {{--渲染子评论--}}
                    @for($i=1;$i<count($item);$i++)
                        <div class="media p-1 ">
                            <img src={{$item[$i]['imgUrl']}} alt="" class="mr-1 mt-1" style="width:45px;">
                            <div class="media-body">
                                <a href="" class="style-a">{{$item[$i]['uname']}}</a>
                                <span class="style-reply-font">&nbsp;回复&nbsp;</span>
                                <a href="" class="style-a">{{$item[$i]['reply_uname']}}</a>
                                <span class="style-time">{{$item[$i]['str_gap']}}前</span>
                                <p class="main-text">{{$item[$i]['content']}}</p>
                                <div class="style-reply">
                                    @if($data['cookie']['user_id'])
                                        <div class="reply_trigger">回复</div>
                                    @endif
                                    <div class="reply_form">
                                        @csrf
                                        <input type="hidden" name="discussion_id"
                                               value={{$data['discussion']->id}}>
                                        <input type="hidden" name="user_id"
                                               value={{$data['cookie']['user_id']}}>
                                        <input type="hidden" name="parent_id" value={{$item[0]['id']}}>
                                        <input type="hidden" name="reply_id" value={{$item[$i]['id']}}>
                                        <input type="hidden" name="reply_uname" value={{$item[$i]['uname']}}>
                                        <input type="hidden" name="type" value={{$data['type']}}>
                                        <input type="text" class="form-control" id="" placeholder="写回复..."
                                               name="body_reply">
                                        <div class="reply_btn" id="">回复</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor
                </div>
            </div>

        @endforeach
    </div>
</div>
{{--发表评论--}}
@if($data['cookie']['imgUrl'])
    <div class="row">
        <div class="col-md-8 offset-md-1 comment-form">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="media p-0">
                <img src={{$data['cookie']['imgUrl']}} alt="" class="border mr-2  rounded-circle"
                     style="width:45px;">
                <div class="media-body form_comment">
                    @csrf
                    <input type="hidden" name="discussion_id" value={{$data['discussion']->id}}>
                    <input type="hidden" name="user_id" value={{$data['cookie']['user_id']}}>
                    <input type="hidden" name="type" value={{$data['type']}}>
                    <div class="form-group">
                        <input type="text" class="form-control" id="" placeholder="写评论..." name="body_comment">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" id="btn_comment">发表评论</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@else
    {{--登录后评论--}}
    <div class="row">
        <div class="col-md-8 offset-md-1 ">
            <div class="btn btn-success login-then-comment"><a href="/user/login">登 录 后 评 论</a></div>
        </div>
    </div>
@endif