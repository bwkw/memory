<?php

use App\Http\Controllers\ApiDatingController;
use App\Http\Controllers\ApiFoodController;
use App\Http\Controllers\ApiSceneryController;
use App\Http\Controllers\ApiScheduleController;
use App\Http\Controllers\ApiTravelController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['prefix' => 'api/datings'], function(){
    Route::get('/', [ApiDatingController::class, 'index'])->name('api_dating_index');
    Route::post('/', [ApiDatingController::class, 'store'])->name('api_dating_store');
    Route::get('/{dating}', [ApiDatingController::class, 'show'])->name('api_dating_show');
    Route::post('/{dating}/delete', [ApiDatingController::class, 'destroy'])->name('api_dating_delete');
    Route::post('/{dating}/edit', [ApiDatingController::class, 'update'])->name('api_dating_update');
});

Route::group(['prefix' => 'api/foods'], function(){
    Route::get('/', [ApiFoodController::class, 'index'])->name('api_food_index');
    Route::post('/', [ApiFoodController::class, 'store'])->name('api_food_store');
    Route::get('/{food}', [ApiFoodController::class, 'show'])->name('api_food_show');
    Route::post('/{food}/delete', [ApiFoodController::class, 'destroy'])->name('api_food_delete');
    Route::post('/{food}/edit', [ApiFoodController::class, 'update'])->name('api_food_update');
});

Route::group(['prefix' => 'api/sceneries'], function(){
    Route::get('/', [ApiSceneryController::class, 'index'])->name('api_scenery_index');
    Route::post('/', [ApiSceneryController::class, 'store'])->name('api_scenery_store');
    Route::get('/{scenery}', [ApiSceneryController::class, 'show'])->name('api_scenery_show');
    Route::post('/{scenery}/delete', [ApiSceneryController::class, 'destroy'])->name('api_scenery_delete');
    Route::post('/{scenery}/edit', [ApiSceneryController::class, 'update'])->name('api_scenery_update');
});

Route::group(['prefix' => 'api/travels'], function(){
    Route::get('/', [ApiTravelController::class, 'index'])->name('api_travel_index');
    Route::post('/', [ApiTravelController::class, 'store'])->name('api_travel_store');
    Route::get('/{travel}', [ApiTravelController::class, 'show'])->name('api_travel_show');
    Route::post('/{travel}/delete', [ApiTravelController::class, 'destroy'])->name('api_travel_delete');
    Route::post('/{travel}/edit', [ApiTravelController::class, 'update'])->name('api_travel_update');
});

Route::group(['prefix' => 'api/schedules'], function(){
    Route::get('/', [ApiScheduleController::class, 'index'])->name('api_schedule_index');
    Route::post('/', [ApiScheduleController::class, 'store'])->name('api_schedule_store');
    // Route::get('/{travel}', [ApiTravelController::class, 'show'])->name('api_travel_show');
    // Route::post('/{travel}/delete', [ApiTravelController::class, 'destroy'])->name('api_travel_delete');
    // Route::post('/{travel}/edit', [ApiTravelController::class, 'update'])->name('api_travel_update');
});


Route::get('/{any}', function () {
    return view('main');
})->where('any','.*')->middleware('auth');
