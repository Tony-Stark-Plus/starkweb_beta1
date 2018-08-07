<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Alert;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Facade;

class AlertController extends Facade
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    // public function register(){
    // Alert::success('注册成功');
    // return Redirect::to('/video-list#/video-list');
    // }
}

