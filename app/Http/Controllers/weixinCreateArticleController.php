<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;

class weixinCreateArticleController extends Controller
{
    public function store_article(Request $request){
        $articleStore['aname'] = $request['article_title'];
        $articleStore['content'] = $request['article_content'];
        $articleStore['kind'] = $request['article_kind'];
        $articleStore['kind_class'] = $request['article_kind'];
        $result = articleList::create($articleStore);
        return $result;
    }
}
