@extends('templates.home')

@section('title')
    {{'codeplus - Login'}}
@endsection

@section('content')

<section class="container-fluid" >

    <section class="dados d-flex justify-content-center align-items-center">

        <div class="logo">
            <h1>teste 1</h1>
        </div>

        {!! Form::open(['route' => 'rt.telaLogin', 'method' => 'post']) !!}
        {!! Form::close() !!}

    </section>

</section>

@endsection
