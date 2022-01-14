<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TravelController;
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

Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/travels', [TravelController::class, 'index'])->name('travel_index');
Route::get('/travels/{travel}', [TravelController::class, 'show'])->name('travel_show');
