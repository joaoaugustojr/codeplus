<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conts', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('list_cont_id')->unsigned();

            $table->double('stock_sell', 10, 3)->nullable();
            $table->double('stock_dep', 10, 3)->nullable();
            $table->double('stock_total', 10, 3)->nullable();

            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('list_cont_id')->references('id')->on('list_conts')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conts');
    }
}
