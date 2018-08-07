<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts/layout');
});
Route::get('/user/login','webController@login');

Route::get('/user/register','webController@register');

Route::get('/articles-list','webController@articleList');

//用户注册
Route::post('/user/store','UsersController@store');

//用户登录
Route::post('/user/login','UsersController@login');



Route::get('/video','webController@video');
Route::get('/video-list','webController@videoList');

Route::get('/article-content/{id}','webController@articleContent');

//验证码
Route::get('/captcha/{random}','CaptchaController@captcha');

//退出登录
Route::get('/exit','webController@exit');

Route::get('/learn','webController@learn');

Route::get('/discuss_community','webController@discuss_community');

Route::get('/discuss_community/create','webController@discuss_create');
Route::post('/discuss_community/store','DicussionController@store');
Route::get('/discuss_community/content/{discussion_id}','webController@discuss_content');