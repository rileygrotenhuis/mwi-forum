<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Reply;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory(3)->create();

        $posts = [];

        foreach ($users as $user) {
            $post = Post::factory()->create([
                'author' => $user->id
            ]);

            $posts[] = $post;
        }

        $comments = [];

        foreach ($posts as $post) {
            foreach ($users as $user) {
                $comment = Comment::factory()->create([
                    'author' => $user->id,
                    'post' => $post->id
                ]);

                $comments[] = $comment;
            }
        }

        foreach ($comments as $comment) {
            foreach ($users as $user) {
                Reply::factory()->create([
                    'author' => $user->id,
                    'comment' => $comment->id
                ]);
            }
        }
    }
}
