@extends('dashboard.dashboard')

@section('breadcrumbs')
    <section id="breadcrumbs" caminho="Dashboard • Usuários"></section>
@endsection

@section('painel')
    <section class="headerTable">
        <button type="button" class="">Adicionar</button>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><ion-icon name="search"></ion-icon></span>
            </div>
            <input type="text" class="form-control" placeholder="Pesquisar Usuários" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </section>

    <table class="table table-striped table-borderless table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Login</th>
            <th scope="col">Status</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>JOÃO AUGUSTO DA SILVA JUNIOR</td>
            <td>joaoaugusto</td>
            <td>ATIVO</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
                <ul class="btnActions">
                    <li><ion-icon class="btnView" name="eye"></ion-icon></li>
                    <li><ion-icon class="btnEdit" name="create"></ion-icon></li>
                    <li><ion-icon class="btnRemove" name="trash"></ion-icon></li>
                </ul>
            </td>
          </tr>
        </tbody>
      </table>
@endsection
