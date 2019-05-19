<?php

use Faker\Generator as Faker;

//define dados aleatorios para preencimento de table

$factory->define(\App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'price' => $faker->randomFloat(2, 0, 8),
        'description' => $faker->text
    ];
});
