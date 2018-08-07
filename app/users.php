<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    //
    protected $table = 'users';
    public $timestamps = true;
    protected $fillable=['uname','email','password','imgUrl'];
    public function discussions(){
        return $this->hasMany(discussions::class);//$users->discussions
    }
    // const CREATED_AT = 'login_date';
    // const UPDATED_AT = 'last_update';
}
