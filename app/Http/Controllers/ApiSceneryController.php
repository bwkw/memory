<?php

namespace App\Http\Controllers;

use App\Models\Scenery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApiSceneryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Scenery $scenery)
    {
        $sceneries = $scenery->getYourAllSceneries($request->user()->id);
        return response()->json($sceneries, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Scenery $scenery)
    {
        $scenery->name = $request->name;
        $scenery->latitude = $request->latitude;
        $scenery->longitude = $request->longitude;
        $scenery->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('sceneries', $image, 'public');
        $scenery->image_path = Storage::disk('s3')->url($path);
        $scenery->schedule_id = $request->schedule_id;
        $scenery->user_id = $request->user()->id;
        $scenery->save();
        
        return response()->json($scenery, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Scenery  $scenery
     * @return \Illuminate\Http\Response
     */
    public function show(Scenery $scenery)
    {
        return response()->json($scenery, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Scenery  $scenery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Scenery $scenery)
    {
        $scenery->name = $request->name;
        $scenery->latitude = $request->latitude;
        $scenery->longitude = $request->longitude;
        $scenery->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('sceneries', $image, 'public');
        $scenery->image_path = Storage::disk('s3')->url($path);
        $scenery->schedule_id = $request->schedule_id;
        $scenery->save();
        
        return response()->json($scenery, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Scenery  $scenery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Scenery $scenery)
    {
        $scenery->delete();
        $sceneries = Scenery::all();
        return response()->json($sceneries, 200);
    }
}
