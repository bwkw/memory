<?php

namespace App\Http\Controllers;

use App\Models\Scenery;
use Illuminate\Http\Request;

class SceneryController extends Controller
{
    public function getdatas(Scenery $scenery)
    {
        return response()->json([$scenery]);
    }
    
    public function index(Scenery $scenery)
    {
        return view('index');
    }
    
    
}
