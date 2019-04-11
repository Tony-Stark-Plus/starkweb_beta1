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

Route::get('/',function (){
    return view('layouts/master');
});
Route::get('/user/login','webController@login');

Route::get('/user/register','webController@register');

Route::get('/articles-list','webController@articleList');

//用户注册
Route::post('/user/store','UsersController@store');

//用户登录
Route::post('/user/login','UsersController@login');



Route::get('/video/{discussion_id}','webController@video');
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

Route::get('/comment/store','commentController@store');
Route::get('/comment/reply','commentController@reply');
//Route::get('/404',function(){
//    return view('errors.404');
//});
Route::get('/hljs',function(){
    return view('title');
});
Route::get('/weixin/articleList/{page}','weixinController@index');
Route::get('/weixin/articleContent/{id}','weixinController@articleContent');
Route::get('/weixin/articleListVue/{page}','weixinController@articleList');

Route::get('/weixin/videoList/{page}','weixinController@videoList');
Route::get('/weixin/find_video_mes/{id}','weixinController@find_video_mes');

Route::get('/weixin/discuss_list','weixinController@discuss_list');
Route::get('/weixin/discussion_content/{discussion_id}','weixinController@discussion_content');

Route::post('/weixin/login','weixinUserController@login');
Route::post('/weixin/register','weixinUserController@register');

Route::get('/weixin/captcha/{random}','weixinUserController@captcha');

Route::get('/weixin/get_cookie','weixinUserController@get_cookie');

Route::get('/weixin/exit','weixinUserController@exit');

Route::post('/weixin/getComment','weixinCommentController@get_comment');
Route::post('/weixin/reply_store','weixinCommentController@reply_store');
Route::post('/weixin/store_article','weixinCreateArticleController@store_article');
Route::get('/getWeixinOpenId','weixinController@getOpenId');
Route::get('/storeWeixinOpenId','weixinController@storeOpenId');