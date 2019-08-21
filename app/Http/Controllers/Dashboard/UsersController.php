<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    protected $redirectTo = '/dashboard';
    private $store_id;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->store_id = Auth::user()->store_id;
            return $next($request);
        });
    }

    public function index()
    {
        return view('dashboard.painels.usuarios');
    }

    public function show(Request $request)
    {
        return json_encode(User::select('id', 'name', 'login', 'status')->where('store_id', $this->store_id)->get());
    }

    public function store(Request $request)
    {
        try {

            $data = $request->all();

            $request->validate([
                'name' => 'required|string|max:50',
                'password' => 'required',
                'login' => 'required',
            ]);

            $data['password'] = bcrypt($data['password']);
            $data['store_id'] = $this->store_id;

            User::create($data);

            return 'ok';
        } catch (\Exception $th) {
            return response()->json(['errors' => $th->getMessage()]);
        }
    }
}
