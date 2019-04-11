<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class videoList extends Model
{
    //
    protected $table = 'videoList';
    public $timestamps = true;
    protected  $fillable=['id','vname','likedId'];
    public function comment(){
        return $this->hasMany(comments::class,'discussion_id','id');//$discussion->comment
    }
}
