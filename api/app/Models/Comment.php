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
}
