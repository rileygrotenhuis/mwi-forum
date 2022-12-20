<?php

namespace App\Models;

use App\Traits\UserHasResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, UserHasResource;

    /**
     * The attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'tag',
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
     * Returns comment resources of the object
     *
     * @return \App\Models\Comment
     */
    public function getCommentsAttribute()
    {
        return Comment::where('post', $this->id)->orderBy('created_at', 'desc')->get();
    }
}
