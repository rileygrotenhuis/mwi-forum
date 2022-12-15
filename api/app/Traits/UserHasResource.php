<?php

namespace App\Traits;

trait UserHasResource
{
    /**
     * Save authenticated user on create
     */
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (auth()->user()) {
                $userId = auth()->user()->id;
                $model->author = $userId;
            }
        });
    }
}
