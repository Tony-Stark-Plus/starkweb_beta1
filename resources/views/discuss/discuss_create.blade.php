@extends('layouts/layout')
@section("css")
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
@endsection
@section("title")
   <div class="title_wrap" style="background-color: #0b0b0b;opacity: .7;  margin-bottom:10px;" >
       <h3 style="padding:30px 0; color:#fff;">
           create  @if($data['cookie']['imgUrl'])
               &nbsp;&nbsp;<img src={{ $data['cookie']['imgUrl']}} alt="" style="border:1.5px solid #15b982; width:40px; " class="img-fluid rounded-circle spin" >'s&nbsp;&nbsp;
           @else
                       own
           @endif
           idea

       </h3>

   </div>
@endsection
@section('container')
    <div class="row">
        <div class="offset-md-2 col-md-8">
            <form method="POST" action="/discuss_community/store">
                @if(count(Session('create_errors'))!=0)
                    @foreach(Session('create_errors') as $item)
                        <div class="alert alert-danger">
                            <a class="close" data-dismiss="alert">×</a>
                            <strong>{{$item}}</strong>
                        </div>
                    @endforeach
                    @endif
                @csrf
                <input type="hidden" name="user_id" value={{$data['cookie']['user_id']}}>
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="帖子标题" name="title">
                </div>
                <div class="form-group">
                    <select multiple class="js-example-basic-multiple form-control" name="states[]">
                        <option value="php">php</option>
                        <option value="js">js</option>
                        <option value="vue">vue</option>
                        <option value="laravel">laravel</option>
                        <option value="html/css">html/css</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea  class="form-control" id="" placeholder="请使用Markdown 格式书写" cols="10" rows="15" name="content"></textarea>
                </div>
                <div class="form-group">
                    <input class="btn btn-success form-control" type="submit" value="提交">
                </div>
            </form>
        </div>
    </div>
@endsection
@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.js-example-basic-multiple').select2();
            $('.select2-search__field').attr({'placeholder':'请选择标签(最多三个哦)' , 'style':'width:11em'});
        });
    </script>
    @endsection

