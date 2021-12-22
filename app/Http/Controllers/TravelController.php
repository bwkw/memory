<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;

class TravelController extends Controller
{
    public function index(Travel $travel)
    {
        return view('Travel/index');
    }
    
    public function index_datas()
    {
        $travels = Travel::all();
        return response()->json($travels, 200);
    }
}
