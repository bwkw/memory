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
            'name' => '岐阜旅行',
            'beginning_datetime' => date('2021-09-02'),
            'ending_datetime' => date('2021-09-03'),
        ]);
    }
}
