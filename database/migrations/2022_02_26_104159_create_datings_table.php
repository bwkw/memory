<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datings', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->float('latitude', 10, 7);
            $table->float('longitude', 10, 7);
            $table->date('shooting_date');
            $table->string('image_path', 300)->nullable();
            $table->foreignId('schedule_id')->constrained();
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('datings');
    }
}
