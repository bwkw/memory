<?php

namespace App\Http\Controllers;

use App\Models\Dating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApiDatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Dating $dating)
    {
        $datings = $dating->getAllDatings();
        return response()->json($datings, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Dating $dating, Request $request)
    {
        $dating->name = $request->name;
        $dating->latitude = $request->latitude;
        $dating->longitude = $request->longitude;
        $dating->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('datings', $image, 'public');
        $dating->image_path = Storage::disk('s3')->url($path);
        $dating->save();
        
        return response()->json($dating, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dating  $dating
     * @return \Illuminate\Http\Response
     */
    public function show(Dating $dating)
    {
        return response()->json($dating, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dating  $dating
     * @return \Illuminate\Http\Response
     */
    public function update(Dating $dating, Request $request)
    {
        $dating->name = $request->name;
        $dating->latitude = $request->latitude;
        $dating->longitude = $request->longitude;
        $dating->shooting_date = $request->shooting_date;
        $image = $request->file('image');
        $path = Storage::disk('s3')->putFile('datings', $image, 'public');
        $dating->image_path = Storage::disk('s3')->url($path);
        $dating->save();
        
        return response()->json($dating, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dating  $dating
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dating $dating)
    {
        $dating->delete();
        $datings = Dating::all();
        return response()->json($datings, 200);
    }
}
