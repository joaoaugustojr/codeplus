@extends('dashboard.dashboard')

@section('breadcrumbs')
    <section id="breadcrumbs" caminho="Dashboard • Usuários"></section>
@endsection

@section('painel')

    <section id="users" token="{{ csrf_token() }}"></section>

@endsection
