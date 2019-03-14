<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class articleList extends Model
{
    //
    protected $table='articleList';
    public $timestamps=true;
    protected $fillable = [
        'aname', 'kind', 'kind_class','content'
    ];
}
