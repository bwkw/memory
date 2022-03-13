<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    
    protected $casts = [
        'start' => 'datetime: Y-m-d H:i',
        'end' => 'datetime: Y-m-d H:i'
    ];
    
    public function datings()
    {
        return $this->hasMany(Dating::class);
    }
    
    public function foods()
    {
        return $this->hasMany(Food::class);
    }
    
    public function sceneries()
    {
        return $this->hasMany(Scenery::class);
    }
    
    public function travels()
    {
        return $this->hasMany(Travel::class);
    }
    
    public function getAllSchedules($user_id)
    {
        return $this->where('user_id', $user_id)->get();
    }
    
    public function getAllEvents($user_id)
    {
        $datings = $this->with('datings')->where('user_id', $user_id)->first()->datings;
        foreach($datings as $dating) {
            $dating->category = 'datings';
        };
        $foods = $this->with('foods')->where('user_id', $user_id)->first()->foods;
        foreach($foods as $food) {
            $food->category = 'foods';
        };
        $sceneries = $this->with('sceneries')->where('user_id', $user_id)->first()->sceneries;
        foreach($sceneries as $scenery) {
            $scenery->category = 'sceneries';
        };
        $travels = $this->with('travels')->where('user_id', $user_id)->first()->travels;
        foreach($travels as $travel) {
            $travel->category = 'travels';
        };
        
        $events = $datings->concat($foods)->concat($sceneries)->concat($travels)->sortBy([ ['shooting_date', 'desc'] ]);
        
        return $events;
    }
}
