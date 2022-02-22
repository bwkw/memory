<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApiTravelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $travels = Travel::all();
        return response()->json($travels, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Travel $travel)
    {
        $travel->name = $request->name;
        $travel->latitude = $request->latitude;
        $travel->longitude = $request->longitude;
        $travel->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('travels', $image, 'public');
        $travel->image_path = Storage::disk('s3')->url($path);
        $travel->save();
        
        return response()->json($travel, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function show(Travel $travel)
    {
        return response()->json($travel, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Travel $travel)
    {
        $travel->name = $request->name;
        $travel->latitude = $request->latitude;
        $travel->longitude = $request->longitude;
        $travel->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('travels', $image, 'public');
        $travel->image_path = Storage::disk('s3')->url($path);
        $travel->save();
        
        return response()->json($travel, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Travel $travel)
    {
        $travel->delete();
        $travels = Travel::all();
        return response()->json($travels, 200);
    }
}
