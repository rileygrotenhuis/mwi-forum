<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $response = [
            'user' => new UserResource($user),
            'posts' => PostResource::collection($user->posts()),
        ];

        return response($response);
    }

    /**
     * Display the authenticated user.
     *
     * @return \Illuminate\Http\Response
     */
    public function me()
    {
        $user = User::where('id', auth()->user()->id)->first();

        $response = [
            'user' => new UserResource($user),
            'posts' => PostResource::collection($user->posts()),
        ];

        return response($response);
    }
}
