<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Alter extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'list_alter_id', 'product_id', 'price', 'price_alter', 'status'
    ];
}
