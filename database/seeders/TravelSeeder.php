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
        $datas = [
            [
                'name' => '下呂温泉',
                'latitude' => 35.8083342,
                'longitude' => 137.2496708,
                'shooting_date' => date('2021-09-02'),
                'image_path' => 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/travels/%E4%B8%8B%E5%91%82%E6%B8%A9%E6%B3%89.jpeg',
                'schedule_id' => 1,
                'user_id' => 1
            ],
            [
                'name' => 'テストデータ',
                'latitude' => 35.8083342,
                'longitude' => 137.2496708,
                'shooting_date' => date('2022-02-27'),
                'image_path' => 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/travels/%E4%B8%8B%E5%91%82%E6%B8%A9%E6%B3%89.jpeg',
                'schedule_id' => 1,
                'user_id' => 2
            ],
        ];
        
        DB::table('travel')->insert($datas);
    }
}
