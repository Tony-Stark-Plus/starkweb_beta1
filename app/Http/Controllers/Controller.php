<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Cookie;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function data_with_cookie(&$data) {
        $data['cookie']=[];
        $data['cookie']['user_id'] = Cookie::get('user_id');
        $data['cookie']['imgUrl']= Cookie::get('imgUrl');
    }
    public function time_gap_format(&$time){
        $time_gap=time()-strtotime($time);
        $t=$time_gap;
        if($t<60){
            $time_gap=floor($t)."秒";
        }
        elseif($t<3600){
            $time_gap=floor($t/60).'分钟';
        }
        elseif($t<86400){
            $time_gap=floor($t/3600).'小时';
        }
        elseif($t<2592000){
            $time_gap=floor($t/86400).'天';
        }
        elseif($t<31104000){
            $time_gap=floor($t/2592000).'月';
        }
        else{
            $time_gap=floor($t/31104000).'年';
        }
        return $time_gap;
    }
    //找出数组中某个元素索引
    public function find_arr_index($arr,$find_id){
        foreach($arr as  $key=>$item){
            if($item['id']==$find_id){
                return $key;
            }
        }
    }
    
    //日期转化为英文
    public function date_to_en(&$videoList)
    {
        for ($i = 0; $i < count($videoList); $i++) {
            $time_created = $videoList[$i]['created_at'];
            $year = substr($time_created, 0, 4);
            $day = substr($time_created, 8, 2);
            $month = substr($time_created, 5, 2);
            switch ($month) {
                case "01":
                    $month = "Jan";
                    break;
                case "02":
                    $month = "Feb";
                    break;
                case "03":
                    $month = "Mar";
                    break;
                case "04":
                    $month = "Apr";
                    break;
                case "05":
                    $month = "Mar";
                    break;
                case "06":
                    $month = "Jun";
                    break;
                case "07":
                    $month = "Jul";
                    break;
                case "08":
                    $month = "Agu";
                    break;
                case "09":
                    $month = "Sep";
                    break;
                case "10":
                    $month = "Oct";
                    break;
                case "11":
                    $month = "Nov";
                    break;
                case "12":
                    $month = "Dec";
                    break;
            }
            $videoList[$i]['date_en']=$month.' '.$day.'，'.$year;
        }
    }
}

