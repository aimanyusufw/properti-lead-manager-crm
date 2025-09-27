<?php

namespace App\Filament\Resources\Clients\Schemas;

use App\Models\Client;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ClientForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    TextInput::make('first_name')
                        ->placeholder('John')
                        ->required(),
                    TextInput::make('last_name')
                        ->placeholder('Doe')
                        ->required(),
                    TextInput::make('email')
                        ->placeholder("example@example.com")
                        ->label('Email address')
                        ->email()
                        ->required(),
                    TextInput::make('phone')
                        ->placeholder("+1234567890")
                        ->tel(),
                    Textarea::make('address')
                        ->placeholder("1234 Main St, City, Country")
                        ->rows(5)
                        ->columnSpanFull(),
                ])->columns(["sm" => 2])->columnSpan(2),
                Section::make("Time Stamps")
                    ->description("details of when data was changed and also created")
                    ->schema([
                        Placeholder::make("created_at")
                            ->content(fn(?Client $record): string => $record ? date_format($record->created_at, "M d, Y") : "-"),
                        Placeholder::make("updated_at")
                            ->content(fn(?Client $record): string => $record ? date_format($record->updated_at, "M d, Y") : "-"),
                    ])->columnSpan(1),
            ])->columns(3);
    }
}
