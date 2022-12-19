<?php

namespace App\Policies;

use App\Models\Reply;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReplyPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the given reply can be updated by the user
     *
     * @param  \App\Reply  $reply
     * @return bool
     */
    public function update(User $user, Reply $reply)
    {
        return $user->id === $reply->author;
    }

    /**
     * Determine if the given reply can be deleted by the user
     *
     * @param  \App\Reply  $reply
     * @return bool
     */
    public function delete(User $user, Reply $reply)
    {
        return $user->id === $reply->author;
    }
}
