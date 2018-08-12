<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comments extends Model
{
    //
    protected $table = 'comments';
    public $timestamps = true;
    protected $fillable=['body','user_id','discussion_id','parent_id','reply_id','type'];
    public function user(){
        return $this->belongsTo(users::class,'user_id','id');//$comments->user->uname
    }
    public function discussion(){
        return $this->belongsTo(discussions::class,'discussion_id','id');//$comments->discussion->uname
    }
}