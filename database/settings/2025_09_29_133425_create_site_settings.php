<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('site.site_title', "Laravel");
        $this->migrator->add('site.site_subtitle', "Welcome!");
        $this->migrator->add('site.site_description', "Your site description!");
        $this->migrator->add('site.social_media', []);
        $this->migrator->add('site.contacts', ["email" => "laravel@example.com", "address" => "", "phone_number" => ""]);
        $this->migrator->add('site.languages', [["name" => "Indonesia", "iso_code" => "ID"]]);
        $this->migrator->add('site.favicon', null);
        $this->migrator->add('site.logo', null);
    }
};
