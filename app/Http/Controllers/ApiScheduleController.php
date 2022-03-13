<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ApiScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Schedule $schedule)
    {
        $schedules = $schedule->getAllSchedules($request->user()->id);
        return response()->json($schedules, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Schedule $schedule)
    {
        $schedule->title = $request->title;
        $schedule->start = $request->start;
        $schedule->end = $request->end;
        $schedule->user_id = $request->user()->id;
        $schedule->save();
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Schedule $schedule)
    {
        $events = $schedule->getAllEvents($request->user()->id);
        $scheduleEvents = collect([]);
        $scheduleEvents->put('schedule', $schedule);
        return response()->json($events, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        $schedule->title = $request->title;
        $schedule->start = $request->start;
        $schedule->end = $request->end;
        $schedule->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schedule $schedule)
    {
        $schedule->delete();
    }
}
