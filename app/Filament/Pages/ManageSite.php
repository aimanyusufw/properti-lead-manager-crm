<?php

namespace App\Filament\Pages;

use App\Settings\SiteSetting;
use BackedEnum;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Pages\SettingsPage;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

class ManageSite extends SettingsPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::Cog;

    protected static string|UnitEnum|null $navigationGroup = 'Settings';

    protected static ?string $navigationLabel = 'Site Settings';

    protected static ?string $title = 'Site Settings';

    protected static string $settings = SiteSetting::class;

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()->schema([
                    Section::make("Main")->schema([
                        TextInput::make('site_title')
                            ->label('Site Title')
                            ->placeholder("Laravel - site_subtitle")
                            ->helperText('Your site title for SEO')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('site_subtitle')
                            ->label('Site Subtitle')
                            ->placeholder("site_title - Welcome!")
                            ->helperText('Your Site subtitle for SEO')
                            ->maxLength(255),
                        Textarea::make('site_description')
                            ->rows(5)
                            ->placeholder("Your site description!")
                            ->helperText('Your Site description for SEO')
                            ->maxLength(255),
                    ]),
                    Section::make("Contacts")
                        ->schema([
                            TextInput::make('contacts.email')
                                ->helperText('Your organization profesional email')
                                ->placeholder("info@company.com")
                                ->email()
                                ->maxLength(255),
                            TextInput::make('contacts.phone_number')
                                ->helperText('Your organization profesional phone number')
                                ->placeholder("1234-5678-90")
                                ->numeric()
                                ->tel()
                                ->maxLength(255),
                            Textarea::make('contacts.address')
                                ->rows(4)
                                ->helperText("Your organization address!")
                                ->placeholder('Laravel S.t Welcome')
                                ->maxLength(255),
                        ])->columns(1)
                        ->collapsible(),
                    Section::make("Social Media")
                        ->schema([
                            Repeater::make("social_media")->schema([
                                TextInput::make('name')
                                    ->helperText('Name of the sociale media platform')
                                    ->placeholder("e.g Instagram, Youtube")
                                    ->maxLength(255),
                                TextInput::make('url')
                                    ->label("Url of the social media")
                                    ->placeholder('https://platform.com/app')
                                    ->helperText("Url of your social media account")
                                    ->maxLength(255),
                            ])->columns(2),
                        ])
                        ->columnSpan(2)
                        ->collapsible()
                ])->columns(["sm" => 1])->columnSpan(2),
                Section::make("Media")
                    ->description("Your app media")
                    ->schema([
                        FileUpload::make('favicon')
                            ->label('Favicon')
                            ->helperText('Recommended size: 32x32')
                            ->required(false),
                    ])
                    ->columnSpan(1),
            ])->columns(3);
    }
}
