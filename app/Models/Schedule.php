<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    
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
        $foods = $this->with('foods')->where('user_id', $user_id)->first()->foods;
        $sceneries = $this->with('sceneries')->where('user_id', $user_id)->first()->sceneries;
        $travels = $this->with('travels')->where('user_id', $user_id)->first()->travels;
        $events = $datings->concat($foods)->concat($sceneries)->concat($travels)->sortBy([ ['shooting_date', 'desc'] ]);
        
        return $events;
    }
}
