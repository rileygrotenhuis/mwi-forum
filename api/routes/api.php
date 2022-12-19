<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::group(['prefix' => 'users'], function () {
        Route::get('/me', [UserController::class, 'me']);
        Route::get('/{user}', [UserController::class, 'show']);
    });

    Route::group(['prefix' => 'posts'], function () {
        Route::get('/', [PostController::class, 'index']);
        Route::post('/', [PostController::class, 'create']);
        Route::get('/{post}', [PostController::class, 'show']);
        Route::put('/{post}', [PostController::class, 'update']);
        Route::delete('/{post}', [PostController::class, 'destroy']);
    });

    Route::group(['prefix' => 'comments'], function () {
        Route::post('/{post}', [CommentController::class, 'create']);
        Route::put('/{comment}', [CommentController::class, 'update']);
        Route::delete('/{comment}', [CommentController::class, 'delete']);
    });

    Route::group(['prefix' => 'replies'], function () {
        Route::post('/{comment}', [ReplyController::class, 'create']);
        Route::put('/{reply}', [ReplyController::class, 'update']);
        Route::delete('/{reply}', [ReplyController::class, 'delete']);
    });
});
