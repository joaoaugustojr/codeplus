<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

use Models\Store;

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

    public function stores()
    {
        return $this->BelongsTo(Store::class);
    }
}
