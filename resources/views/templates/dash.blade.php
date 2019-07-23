@extends('templates.home')

@section('title')
    {{'codeplus - Dashboard'}}
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/dash.css') }}">
@endsection

@section('content')

<section class="container-fluid p-0 m-0">
        <nav class="navbar navbar-expand-lg navBarBG">
                <ion-icon class="text-white" name="menu" size="large"></ion-icon>
                <div class="infoUser">
                    <ul class="text-white d-none d-md-inline">
                        <li><p>Bem Vindo! {{ $user->name }}</p></li>
                        <li><p>{{$user->store->name}}</p></li>
                    </ul>
                    <ion-icon class="text-white" name="ios-contact"></ion-icon>
                </div>
        </nav>
</section>


@endsection
