<?php

use App\Http\Controllers\ApiFoodController;
use App\Http\Controllers\ApiSceneryController;
use App\Http\Controllers\ApiTravelController;

use Illuminate\Http\Request;
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

Route::group(['middleware' => 'api'], function(){
    Route::get('/travels', [ApiTravelController::class, 'index'])->name('api_travel_index');
    Route::post('/travels', [ApiTravelController::class, 'store'])->name('api_travel_store');
    Route::get('/travels/{travel}', [ApiTravelController::class, 'show'])->name('api_travel_show');
    Route::post('/travels/{travel}/delete', [ApiTravelController::class, 'destroy'])->name('api_travel_delete');
    Route::post('/travels/{travel}/edit', [ApiTravelController::class, 'update'])->name('api_travel_update');
    Route::get('/sceneries', [ApiSceneryController::class, 'index'])->name('api_scenery_index');
    Route::get('/foods', [ApiFoodController::class, 'index'])->name('api_food_index');
});
