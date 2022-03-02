<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scenery extends Model
{
    use HasFactory;
    
    protected $guarded = [
        'id',
        'image_path',
        'created_at',
        'updated_at'
    ];
    
    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }
    
    public function getAllSceneries()
    {
        return $this->with('schedule')->get();
    }
}
