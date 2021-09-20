<?php

namespace App\Http\Controllers;

use App\Models\Scenery;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Scenery $scenery)
    {
        return view('Home.index');
    }
}
