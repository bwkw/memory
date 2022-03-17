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
    
    public function getAllSceneries($user_id)
    {
        return $this->with('schedule')->where('user_id', $user_id)->get();
    }
    
    public function getOneScenery($user_id, $scenery_id)
    {
        return $this->find($scenery_id)->with('schedule')->where('user_id', $user_id)->get();
    }
}
