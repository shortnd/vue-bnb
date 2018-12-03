<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Joe Doe',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
            'saved' => [1, 5, 7, 9]
        ]);
    }
}
