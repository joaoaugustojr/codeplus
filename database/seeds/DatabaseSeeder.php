<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Chama as funções para criar as seeders
     *
     * @return void
     */
    public function run()
    {
        //$this->call(StoreTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
