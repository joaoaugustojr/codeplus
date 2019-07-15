<?php

use Illuminate\Database\Seeder;
use App\Models\Store;

class StoreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Store::create([
            'name' => 'DJAIR DAVID DE SOUZA E CIA LTDA',
            'name_fantasy' => 'SUPERMERCADO PRIMAVERA LOJA 1',
            'cnpj' => '37610722000178'
        ]);
    }
}
