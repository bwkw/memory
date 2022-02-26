<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('datings')->insert([
            'name' => '恋人岬',
            'latitude' => 34.8676239,
            'longitude' => 138.7553376,
            'shooting_date' => date('2021-05-25'),
            'image_path' => 'https://couple-memory.s3.ap-northeast-1.amazonaws.com/sceneries/%E6%81%8B%E4%BA%BA%E5%B2%AC.png',
            'schedule_id' => 1
        ]);
    }
}
