<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function auth(Request $request)
    {
        $data = [
            'login'     => $request->get('user'),
            'password'  => $request->get('password')
        ];

        return $data;
    }
}
