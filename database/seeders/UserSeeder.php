<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
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
                'id' => 1,
                'name' => 'テスト1',
                'email' => 'test1@gmail.com',
                'password' => Hash::make('test1'),
            ],
            [
                'id' => 2,
                'name' => 'テスト2',
                'email' => 'test2@gmail.com',
                'password' => Hash::make('test2'),
            ],
        ];
        
        DB::table('users')->insert($datas);
    }
}
