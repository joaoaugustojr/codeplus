@extends('templates.home')

@section('title')
    {{'codeplus - Login'}}
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/stylesLogin.css') }}">
@endsection

@section('content')

<section class="container-fluid" >

    <section class="loginBox bg-white text-center">

        {{-- <div id="example"></div> --}}

        <div class="codePlusLogo text-center d-inline-block justify-content-center">
            <img class="text-center" src="{{ asset('src/images/logocodeplus.png') }}">
            <ion-icon class="dropIcon" name="arrow-dropdown"></ion-icon>
        </div>

        <form class="d-inline-block formLogin" action="" method="post">

            <div class="groupInput">
                <div class="iconLogin"><ion-icon name="apps"></ion-icon></div>
                <input type="text" name="estabelecimento" id="" placeholder="Código do Estabelecimento">
            </div>
            <div class="groupInput">
                <div class="iconLogin"><ion-icon name="person"></ion-icon></div>
                <input type="text" name="login" id="" placeholder="Usuário">
            </div>
            <div class="groupInput">
                <div class="iconLogin"><ion-icon name="key"></ion-icon></div>
                <input type="password" name="password" id="" placeholder="Senha">
            </div>

            <button class="btnLogin" type="submit">Login</button>
        </form>

        <p class="text-capitalize textSuport"><small class="font-weight-light">não consegue entrar? contate suporte</small></p>

    </section>

</section>

@endsection
