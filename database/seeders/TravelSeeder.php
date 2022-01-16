<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TravelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('travel')->insert([
            'name' => '下呂温泉',
            'latitude' => 35.8083342,
            'longitude' => 137.2496708,
            'shooting_date' => date('2021-01-16 12:30:00'),
            'image_path' => 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/travels/%E4%B8%8B%E5%91%82%E6%B8%A9%E6%B3%89.jpeg',
        ]);
    }
}
