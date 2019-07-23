<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class Store extends Model
{

    use SoftDeletes;

    protected $fillable = [
        'name', 'name_fantasy', 'cnpj'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
