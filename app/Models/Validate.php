<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Validate extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'product_id', 'validade', 'status', 'description'
    ];
}
