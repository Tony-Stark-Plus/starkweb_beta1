<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;
use Parsedown;
use phpDocumentor\Reflection\Types\Object_;

class weixinController extends Controller
{
    //
    public function index(Request $request)
    {
        //文章总数
        $article_num = articleList::count();
        //分页需要的页数
        $page_num = ceil($article_num / 10);
        $articleList = articleList::latest()->skip(($request['page'] - 1) * 10)->take(10)->get(['id', 'aname', 'kind_class', 'created_at', 'kind']);
        $this->date_to_en($articleList);
        //Api重构
        $data['page_num'] = $page_num;
        $data['articleList'] = $articleList;
        return $data;
    }

    public function articleContent($id)
    {
        $articleContent = articleList::where('id', $id)->first(['id', 'aname', 'content', 'created_at']);
//        $articleContent['content'] = Parsedown::instance()
//            ->setMarkupEscaped(true)
//            ->text($articleContent['content']);
        $articleAllList = articleList::latest()->get(['id', 'aname']);
        //声明前、后一篇文章
        $previous_article=null;
        $next_article = null;
        foreach ($articleAllList as $key => $val) {
            if($val->id ==$id){
                if ($key >= 1) {
                    $previous_article = $articleAllList[$key - 1];
                }

                if($key<=count($articleAllList)-2){
                    $next_article = $articleAllList[$key+1];
                }
            }
        }
        $articleContent['previous_article']=$previous_article;
        $articleContent['next_article']=$next_article;
        return $articleContent;
    }
}
