@extends('templates.home')

@section('title')
    {{'codeplus - Dashboard'}}
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/dash.css') }}">
    <link rel="stylesheet" href="{{ asset('css/breadcrumbs.css') }}">
@endsection

@section('content')

<section class="container-fluid p-0 m-0">
        @yield('navBar')
        <section class="d-flex">
            @yield('menu')
            @yield('dashContent')
        </section>
</section>

@endsection
