<?php

namespace App\Filament\Resources\ClientCases;

use App\Filament\Resources\ClientCases\Pages\CreateClientCase;
use App\Filament\Resources\ClientCases\Pages\EditClientCase;
use App\Filament\Resources\ClientCases\Pages\ListClientCases;
use App\Filament\Resources\ClientCases\Schemas\ClientCaseForm;
use App\Filament\Resources\ClientCases\Tables\ClientCasesTable;
use App\Models\ClientCase;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class ClientCaseResource extends Resource
{
    protected static ?string $model = ClientCase::class;

    protected static string | UnitEnum | null $navigationGroup = 'Management';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::Briefcase;

    public static function form(Schema $schema): Schema
    {
        return ClientCaseForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ClientCasesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListClientCases::route('/'),
            'create' => CreateClientCase::route('/create'),
            'edit' => EditClientCase::route('/{record}/edit'),
        ];
    }
}
