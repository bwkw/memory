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
        $datas = [
            [
                'title' => '岐阜',
                'start' => date('2021-09-13'),
                'end' => date('2021-09-14'),
                'user_id' => 2
            ]
        ];
        
        DB::table('schedules')->insert($datas);
    }
}
