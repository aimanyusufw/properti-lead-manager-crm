<?php

namespace App\Filament\Resources\Advocates;

use App\Filament\Resources\Advocates\Pages\CreateAdvocate;
use App\Filament\Resources\Advocates\Pages\EditAdvocate;
use App\Filament\Resources\Advocates\Pages\ListAdvocates;
use App\Filament\Resources\Advocates\Schemas\AdvocateForm;
use App\Filament\Resources\Advocates\Tables\AdvocatesTable;
use App\Models\Advocate;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class AdvocateResource extends Resource
{
    protected static ?string $model = Advocate::class;

    protected static string | UnitEnum | null $navigationGroup = 'Management';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::UserCircle;

    public static function form(Schema $schema): Schema
    {
        return AdvocateForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AdvocatesTable::configure($table);
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
            'index' => ListAdvocates::route('/'),
            'create' => CreateAdvocate::route('/create'),
            'edit' => EditAdvocate::route('/{record}/edit'),
        ];
    }
}
