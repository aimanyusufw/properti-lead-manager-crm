<?php

namespace App\Filament\Resources\ClientCases\Schemas;

use App\Models\ClientCase;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ClientCaseForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()->schema([
                    Select::make('client_id')
                        ->label("Client Name/ID")
                        ->relationship("client", "first_name")
                        ->searchable()
                        ->required(),
                    Select::make('advocate_id')
                        ->label("Advocate Name/ID")
                        ->relationship("advocate", "name")
                        ->searchable()
                        ->required(),
                    TextInput::make('case_type')
                        ->placeholder('e.g., Property Dispute, Contract Review')
                        ->required(),
                    Textarea::make('property_location')
                        ->placeholder("1234 Main St, City, Country")
                        ->rows(4)
                        ->columnSpanFull(),
                    Select::make('urgency_level')
                        ->options([
                            'low' => 'Low',
                            'normal' => 'Normal',
                            'high' => 'High',
                            'critical' => 'Critical',
                        ])
                        ->required()
                        ->default('normal'),
                    TextInput::make('client_budget')
                        ->prefix("$")
                        ->placeholder('e.g., 5000')
                        ->numeric(),
                    Textarea::make('case_details')
                        ->placeholder("Detailed description of the case")
                        ->columnSpanFull(),
                    Textarea::make('internal_notes')
                        ->placeholder("Internal notes for staff")
                        ->columnSpanFull(),
                    Select::make('status')
                        ->options([
                            'open' => 'Open',
                            'in_progress' => 'In Progress',
                            'closed' => 'Closed',
                            'on_hold' => 'On Hold',
                        ])
                        ->required()
                        ->default('open'),
                ])->columns(["sm" => 2])->columnSpan(2),
                Section::make("Time Stamps & Thumbnail")
                    ->description("details of when data was changed and also created")
                    ->schema([
                        Placeholder::make("created_at")
                            ->content(fn(?ClientCase $record): string => $record ? date_format($record->created_at, "M d, Y") : "-"),
                        Placeholder::make("updated_at")
                            ->content(fn(?ClientCase $record): string => $record ? date_format($record->updated_at, "M d, Y") : "-"),
                    ])->columnSpan(1),
            ])->columns(3);
    }
}
