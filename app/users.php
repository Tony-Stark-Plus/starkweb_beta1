<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    //
    protected $table = 'users';
    public $timestamps = true;
    protected $fillable=['uname','email','password','imgUrl'];
    public function discussion(){
        return $this->hasMany(discussions::class);//$users->discussion
    }
    public function comment(){
        return $this->hasMany(comments::class,'user_id','id');//$users->comment
    }
}
