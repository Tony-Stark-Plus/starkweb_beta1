<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\articleList;

class weixinController extends Controller
{
    //
    public function index(){
        $articleList = articleList::latest()->get(['id', 'aname','kind_class','created_at'])->take(15);
        $this->date_to_en($articleList);
        return $articleList;
    }
}
