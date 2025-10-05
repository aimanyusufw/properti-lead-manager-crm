<?php

use App\Settings\SiteSetting;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'title' => app(SiteSetting::class)->site_title ?? 'Properti Lead CRM',
        'subtitle' => app(SiteSetting::class)->site_subtitle ?? 'Your Ultimate Property Lead Management Solution',
        'description' => app(SiteSetting::class)->site_description ?? 'Manage your property leads efficiently with Properti Lead CRM',
    ]);
});
