<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Comment;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the given comment can be updated by the user
     * 
     * @param \App\Comment $comment
     * @return bool
     */
    public function update(User $user, Comment $comment)
    {
        return $user->id === $comment->author;
    }

    /**
     * Determine if the given comment can be deleted by the user
     * 
     * @param \App\Comment $comment
     * @return bool
     */
    public function delete(User $user, Comment $comment)
    {
        return $user->id === $comment->author;
    }
}
