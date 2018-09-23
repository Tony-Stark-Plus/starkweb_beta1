<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;

class weixinController extends Controller
{
    //
    public function index(Request $request)
    {
        //文章总数
        $article_num = articleList::count();
        //分页需要的页数
        $page_num =ceil($article_num/10);
        $articleList = articleList::latest()->skip(($request['page']-1)*10)->take(10)->get(['id', 'aname', 'kind_class', 'created_at', 'kind']);
        $this->date_to_en($articleList);
        //Api重构
        $data['page_num']=$page_num;
        $data['articleList']=$articleList;
        return $data;
    }
    public function articleContent($id){
        $articleContent=articleList::where('id',$id)->get(['id', 'aname','content','created_at']);
        return $articleContent;
    }
}
