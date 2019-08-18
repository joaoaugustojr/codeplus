<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'store_id' => 1,
            'name' => 'MIGUEL AUGUSTO MARTINS DA SILVA',
            'login' => 'miguelaugusto',
            'password' => bcrypt('adm102030'),
        ]);
    }
}
