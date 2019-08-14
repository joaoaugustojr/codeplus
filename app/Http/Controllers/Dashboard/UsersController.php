<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    protected $redirectTo = '/dashboard';

    public function __construct()
    { }

    public function index()
    {
        return view('dashboard.painels.usuarios');
    }

    public function show(Request $request)
    {
        return json_encode(User::select('id', 'name', 'login', 'status')->get());
    }
}
