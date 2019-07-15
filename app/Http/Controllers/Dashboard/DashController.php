<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashController extends Controller
{

    protected $redirectTo = '/dashboard';

    public function index()
    {
        return 'dashboard';
    }
}
