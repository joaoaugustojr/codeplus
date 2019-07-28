<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Store;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

    public $timestamps = true;
    protected $table = 'users';

    protected $fillable = [
        'store_id', 'name', 'login', 'password', 'status'
    ];

    protected $hidden = ['password', 'remember_token',];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
