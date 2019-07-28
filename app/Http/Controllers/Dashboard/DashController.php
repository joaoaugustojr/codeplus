<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Store;
use Auth;
use App\User;

class DashController extends Controller
{

    protected $redirectTo = '/dashboard';

    public function __construct()
    { }

    public function index()
    {
        return view('dashboard.dashboard', compact('user'));
    }
}
