<?php

namespace App\Filament\Resources\ClientCases\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ClientCasesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('client.first_name')
                    ->numeric()
                    ->badge()
                    ->color('blue')
                    ->sortable(),
                TextColumn::make('advocate.name')
                    ->badge()
                    ->color('blue')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('case_type')
                    ->searchable(),
                TextColumn::make('urgency_level')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'low' => 'success',
                        'normal' => 'primary',
                        'high' => 'warning',
                        'critical' => 'danger',
                    })
                    ->searchable(),
                TextColumn::make('client_budget')
                    ->prefix("$")
                    ->numeric()
                    ->sortable(),
                TextColumn::make('status')
                    ->color(fn(string $state): string => match ($state) {
                        'open' => 'success',
                        'in_progress' => 'warning',
                        'closed' => 'danger',
                        'on_hold' => 'secondary',
                    })
                    ->badge()
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                //
            ]);
    }
}
