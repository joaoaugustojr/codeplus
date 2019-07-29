<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    protected $redirectTo = '/dashboard';

    public function __construct()
    { }

    public function index()
    {
        return view('dashboard.painels.usuarios');
    }
}
