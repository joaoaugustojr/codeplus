@extends('templates.home')

@section('title')
    {{'codeplus - Dashboard'}}
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/dash.css') }}">
@endsection

@section('content')

<section class="container-fluid p-0 m-0">
        @yield('navBar')
        @yield('menu')
        @yield('dashContent')
</section>

@endsection
