<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schedules')->insert([
            'title' => '岐阜旅行',
            'start' => date('2021-09-02'),
            'end' => date('2021-09-03'),
            'user_id' => 2
        ]);
    }
}
