<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, Comment $comment)
    {
        $fields = $request->validate([
            'content' => 'required|string',
        ]);

        $reply = Reply::create([
            'content' => $fields['content'],
            'comment' => $comment->id,
        ]);

        return response(new ReplyResource($reply), 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reply $reply)
    {
        $fields = $request->validate([
            'content' => 'required|string',
        ]);

        $this->authorize('update', $reply);

        $reply->fill($fields);

        $reply->save();

        return response(new ReplyResource($reply));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reply $reply)
    {
        $this->authorize('delete', $reply);

        $reply->delete();

        return response(204);
    }
}
