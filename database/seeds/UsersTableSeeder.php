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
            'name' => 'JOÃO AUGUSTO DA SILVA JÚNIOR',
            'login' => 'joaoaugusto',
            'password' => bcrypt('adm102030'),
        ]);
    }
}
