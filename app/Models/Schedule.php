<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    
    public function getYourAllSchedules($user_id)
    {
        return $this->where('user_id', $user_id)->get();
    }
}
