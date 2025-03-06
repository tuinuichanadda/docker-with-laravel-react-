<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            ['title' => 'First Post', 'content' => 'This is the first post.'],
            ['title' => 'Second Post', 'content' => 'This is the second post.']
        ]);
    }
}
