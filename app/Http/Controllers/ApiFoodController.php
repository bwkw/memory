<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApiFoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Food $food)
    {
        $foods = $food->getAllFoods();
        return response()->json($foods, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Food $food, Request $request)
    {
        $food->name = $request->name;
        $food->latitude = $request->latitude;
        $food->longitude = $request->longitude;
        $food->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('foods', $image, 'public');
        $food->image_path = Storage::disk('s3')->url($path);
        $food->save();
        
        return response()->json($food, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function show(Food $food)
    {
        return response()->json($food, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function update(Food $food, Request $request)
    {
        $food->name = $request->name;
        $food->latitude = $request->latitude;
        $food->longitude = $request->longitude;
        $food->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('foods', $image, 'public');
        $food->image_path = Storage::disk('s3')->url($path);
        $food->save();
        
        return response()->json($food, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Food  $food
     * @return \Illuminate\Http\Response
     */
    public function destroy(Food $food)
    {
        $food->delete();
        $foods = food::all();
        return response()->json($foods, 200);
    }
}
