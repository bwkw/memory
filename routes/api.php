<?php

use App\Http\Controllers\ApiTravelController;
use App\Http\Controllers\ApiSceneryController;
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
    Route::get('/sceneries', [ApiSceneryController::class, 'index'])->name('api_scenery_index');
});
