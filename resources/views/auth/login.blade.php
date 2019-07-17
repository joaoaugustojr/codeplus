@extends('templates.home')

@section('title')
    {{'codeplus - Login'}}
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/stylesLogin.css') }}">
@endsection

@section('content')

<section class="container-fluid" >

    <section
        id="login"
        msgSuport="Não Consegue Entrar? Contate Suporte"
        token="{{ csrf_token() }}"
        img="{{ asset('src/images/logocodeplus.png') }}"
        >
    </section>

</section>

@endsection
