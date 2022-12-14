<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'author' => new UserResource($this->user),
            'post' => $this->post,
            'replies' => ReplyResource::collection($this->replies),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
