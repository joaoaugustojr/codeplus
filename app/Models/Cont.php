<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cont extends Model
{
    use SoftDeletes;

    //comentario teste

    protected $fillable = [
        'list_cont_id', 'product_id', 'stock_sell', 'stock_dep', 'stock_total'
    ];
}
