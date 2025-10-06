<?php

namespace Database\Seeders;

use App\Models\Advocate;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $advocates = [
            [
                "name" => "Emily Smith",
                "bio" => "Emily is a dedicated property advocate known for her meticulous approach to legal challenges. With a background in environmental law, she brings a unique perspective to property disputes.",
                "imageUrl" => "/Assets/Advocate_1.png",
            ],
            [
                "name" => "Jhon Doe",
                "bio" => "John is a seasoned property advocate with over 15 years of experience in navigating complex land disputes and transactions. His expertise lies in risk assessment and legal strategy formulation.",
                "imageUrl" => "/Assets/Advocate_2.png",
            ],
            [
                "name" => "Michael Johnson",
                "bio" => "Michael has a wealth of experience in property law, specializing in commercial real estate. His strategic insights have helped numerous clients achieve favorable outcomes.",
                "imageUrl" => "/Assets/Advocate_3.png",
            ],
            [
                "name" => "Erina Wood",
                "bio" => "Erina is a rising star in property law, known for her innovative approach to legal challenges. She is passionate about advocating for her clients' rights and finding creative solutions to complex issues.",
                "imageUrl" => "/Assets/Advocate_4.png",
            ],
        ];

        foreach ($advocates as $advocate) {
            Advocate::create([
                'name' => $advocate['name'],
                'notes' => $advocate['bio'],
                'email' => strtolower(str_replace(' ', '.', $advocate['name'])) . '@example.com',
                'photo' => ltrim($advocate['imageUrl'], '/'),
            ]);
        }
    }
}
