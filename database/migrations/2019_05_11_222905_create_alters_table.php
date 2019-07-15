<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAltersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alters', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('list_alter_id')->unsigned();

            $table->double('price', 10, 3)->nullable();
            $table->double('price_alter', 10, 3)->nullable();
            $table->string('status')->nullable()->default('PENDENTE');

            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('list_alter_id')->references('id')->on('list_alters')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alters');
    }
}
