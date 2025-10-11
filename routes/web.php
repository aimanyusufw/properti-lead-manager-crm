<?php

use App\Models\Advocate;
use App\Models\Client;
use App\Models\ClientCase;
use App\Settings\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

Route::get('/', function () {
    return inertia('Home', [
        'title' => app(SiteSetting::class)->site_title ?? 'Properti Lead CRM',
        'subtitle' => app(SiteSetting::class)->site_subtitle ?? 'Your Ultimate Property Lead Management Solution',
        'description' => app(SiteSetting::class)->site_description ?? 'Manage your property leads efficiently with Properti Lead CRM',
    ]);
})->name('home');

Route::get('advocates', function () {
    return Advocate::latest()->paginate(4);
});

Route::post('send-case', function (Request $request) {
    $validated = $request->validate([
        "first_name" => "required|string|max:255",
        "last_name" => "required|string|max:255",
        "email" => "required|email|unique:clients,email|max:255",
        "phone" => "nullable|string|max:20",
        "case_type" => "required|string|max:1000",
        "urgency_level" => "required|string|max:1000",
        "property_location" => "nullable|string|max:1000",
        "case_details" => "nullable|string|max:5000",
    ]);

    $client = Client::create([
        "first_name" => $validated["first_name"],
        "last_name" => $validated["last_name"],
        "email" => $validated["email"],
        "phone" => $validated["phone"],
    ]);

    ClientCase::create([
        "client_id" => $client->id,
        "case_type" => $validated["case_type"],
        "urgency_level" => Str::lower($validated["urgency_level"]),
        "property_location" => $validated["property_location"],
        "case_details" => $validated["case_details"],
    ]);

    return to_route("home")->with(["success" => "Case sended successfully."]);
})->name('send-case');
