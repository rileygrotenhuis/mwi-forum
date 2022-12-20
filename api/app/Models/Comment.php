<?php

namespace App\Models;

use App\Traits\UserHasResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory, UserHasResource;

    /**
     * The attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'content',
        'post',
    ];

    /**
     * Returns user resource of the object
     *
     * @return \App\Models\User
     */
    public function getUserAttribute()
    {
        return User::where('id', $this->author)->first();
    }

    /**
     * Returns reply resources of the object
     *
     * @return \App\Models\Reply
     */
    public function getRepliesAttribute()
    {
        return Reply::where('comment', $this->id)->orderBy('created_at', 'desc')->get();
    }
}
