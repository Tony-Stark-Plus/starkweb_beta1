<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class discussions extends Model
{
    //
    protected $table = 'discussions';
    public $timestamps = true;
    protected $fillable=['title','content','user_id','states'];
    public function user(){
        return $this->belongsTo(users::class);//$discussion->user->uname
    }
}
