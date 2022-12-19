<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the given post can be updated by the user
     *
     * @param  \App\Post  $post
     * @return bool
     */
    public function update(User $user, Post $post)
    {
        return $user->id === $post->author;
    }

    /**
     * Determine if the given post can be deleted by the user
     *
     * @param  \App\Post  $post
     * @return bool
     */
    public function delete(User $user, Post $post)
    {
        return $user->id === $post->author;
    }
}
