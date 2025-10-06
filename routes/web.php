<?php

use App\Models\Advocate;
use App\Models\Client;
use App\Models\ClientCase;
use App\Settings\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'title' => app(SiteSetting::class)->site_title ?? 'Properti Lead CRM',
        'subtitle' => app(SiteSetting::class)->site_subtitle ?? 'Your Ultimate Property Lead Management Solution',
        'description' => app(SiteSetting::class)->site_description ?? 'Manage your property leads efficiently with Properti Lead CRM',
    ]);
});

Route::get('advocates', function () {
    return Advocate::latest()->paginate(4);
});


Route::post('send-case', function (Request $request) {
    $request->validate([
        "first_name" => "required|string|max:255",
        "last_name" => "required|string|max:255",
        "email" => "required|email|max:255",
        "phone" => "string|max:20",
        "case_type" => "required|nullable|string|max:1000",
        "urgency_level" => "required|nullable|string|max:1000",
        "property_location" => "nullable|string|max:1000",
        "case_details" => "string|max:5000",
    ]);

    $client = Client::create([
        "first_name" => $request->first_name,
        "last_name" => $request->last_name,
        "email" => $request->email,
        "phone" => $request->phone,
    ]);

    ClientCase::create([
        "client_id" => $client->id,
        "case_type" => $request->case_type,
        "urgency_level" => $request->urgency_level,
        "property_location" => $request->property_location,
        "case_details" => $request->case_details,
    ]);

    return back()->with('success', 'Your case has been submitted successfully.');
});
