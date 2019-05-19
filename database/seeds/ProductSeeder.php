<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Selecione quantos itens fakes a tabela vai ter
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Product::class, 10)->create();
    }
}
