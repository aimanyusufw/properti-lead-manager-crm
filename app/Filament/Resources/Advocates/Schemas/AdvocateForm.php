<?php

namespace App\Filament\Resources\Advocates\Schemas;

use App\Models\Advocate;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AdvocateForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    FileUpload::make("photo")
                        ->image()
                        ->placeholder("Upload advocate's photo")
                        ->imageEditor()
                        ->imageEditorAspectRatios(['3:4'])
                        ->imageCropAspectRatio('3:4')
                        ->disk('public')
                        ->directory('advocates')
                        ->columnSpanFull(),
                    TextInput::make('name')
                        ->placeholder('John Doe')
                        ->required(),
                    TextInput::make('email')
                        ->label('Email address')
                        ->placeholder("example@example.com")
                        ->email()
                        ->required(),
                    TextInput::make('phone')
                        ->placeholder("+1234567890")
                        ->tel(),
                    Textarea::make('address')
                        ->placeholder("1234 Main St, City, Country")
                        ->rows(3)
                        ->columnSpanFull(),
                    TextInput::make('specialization')
                        ->placeholder("e.g., Real Estate, Corporate Law")
                        ->required(),
                    TextInput::make('license_number')
                        ->placeholder("ABC123456")
                        ->required(),
                    TextInput::make('firm_name')
                        ->placeholder("e.g., Doe & Associates")
                        ->required(),
                    Textarea::make('notes')
                        ->placeholder("Additional information about the advocate")
                        ->rows(3)
                        ->columnSpanFull(),
                ])->columns(["sm" => 2])->columnSpan(2),
                Section::make("Time Stamps")
                    ->description("details of when data was changed and also created")
                    ->schema([
                        Placeholder::make("created_at")
                            ->content(fn(?Advocate $record): string => $record ? date_format($record->created_at, "M d, Y") : "-"),
                        Placeholder::make("updated_at")
                            ->content(fn(?Advocate $record): string => $record ? date_format($record->updated_at, "M d, Y") : "-"),
                    ])->columnSpan(1),

            ])->columns(3);
    }
}
