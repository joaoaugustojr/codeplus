@extends('templates.dash')

@section('navBar')
    <nav class="navbar navbar-expand-lg navBarBG">
            <ion-icon class="text-white" name="menu" size="large"></ion-icon>
            <div class="infoUser">
                <ul class="text-white d-none d-md-inline">
                    <li><p>Bem Vindo! {{ Auth::user()->name }}</p></li>
                    <li><p>{{ Auth::user()->store->name }}</p></li>
                </ul>
                <ion-icon class="text-white" name="ios-contact"></ion-icon>
            </div>
    </nav>
@endsection

@section('menu')
    <ul class="menu d-inline-block m-0 p-0">
        <img class="d-block" src={{ asset('src/images/logocodeplus.png') }} />
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-today"></ion-icon>
                <span>Dashboard</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-apps"></ion-icon>
                <span>Produtos</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="ios-list"></ion-icon>
                <span>Contagens</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-pricetags"></ion-icon>
                <span>Alterações</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-calendar"></ion-icon>
                <span>Validade</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-arrow-dropdown-circle"></ion-icon>
                <span>Importação</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="ios-people"></ion-icon>
                <span>Usuários</span>
            </a>
        </li>
        <li>
            <a href="http://">
                <ion-icon class="text-white" name="md-cog"></ion-icon>
                <span>Configurações</span>
            </a>
        </li>
    </ul>
@endsection

@section('dashContent')
    <div class="container-fluid"></div>
@endsection
