<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Auth\LoginController@index')->name('rt.telaLogin');
Route::post('/', 'Auth\LoginController@auth')->name('rt.authUser');
Route::get('/login', function () {
    return redirect()->route('rt.telaLogin');
});

Route::group(['namespace' => 'Dashboard', 'middleware' => 'auth', 'prefix' => 'dashboard'], function () {
    Route::get('/', 'DashController@index')->name('rt.dashboard');
    Route::resource('/usuarios', 'UsersController');
});
