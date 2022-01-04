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
            'address' => '岐阜県下呂市湯之島',
            'image_path' => 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/travels/%E4%B8%8B%E5%91%82%E6%B8%A9%E6%B3%89.jpeg',
        ]);
    }
}
