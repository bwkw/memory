<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dating extends Model
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
    
    public function getAllDatings($user_id)
    {
        return $this->with('schedule')->where('user_id', $user_id)->get();
    }
    
    public function getOneDating($user_id, $dating_id)
    {
        return $this->find($dating_id)->with('schedule')->where('user_id', $user_id)->get();
    }
}
