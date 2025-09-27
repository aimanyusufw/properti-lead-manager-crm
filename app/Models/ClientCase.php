<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientCase  extends Model
{
    protected $table = 'cases';

    protected $fillable = [
        'client_id',
        'advocate_id',
        'case_type',
        'client_budget',
        'status',
        'case_details',
        'internal_notes',
        'property_location',
        'urgency_level',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function advocate()
    {
        return $this->belongsTo(Advocate::class);
    }
}
