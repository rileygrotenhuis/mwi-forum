<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(PostResource::collection(Post::orderBy('created_at', 'desc')->get()));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(User $user, Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'tag' => ['required', 'string', Rule::in(['engineering', 'design', 'project management', 'marketing', 'leadership'])],
        ]);

        $post = Post::create([
            'title' => $fields['title'],
            'content' => $fields['content'],
            'tag' => $fields['tag'],
        ]);

        return response(new PostResource($post), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return response(new PostResource($post));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $fields = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'tag' => 'required|string',
        ]);

        $this->authorize('update', $post);

        $post->fill($fields);

        $post->save();

        return response(new PostResource($post));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);

        $post->delete();

        return response(204);
    }
}
