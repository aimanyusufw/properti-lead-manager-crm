<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Advocate extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'specialization',
        'license_number',
        'firm_name',
        'notes',
    ];

    public function cases()
    {
        return $this->hasMany(ClientCase::class);
    }
}
