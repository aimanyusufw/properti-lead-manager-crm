<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained('clients')->onDelete('cascade');
            $table->foreignId('advocate_id')->nullable()->constrained('advocates')->onDelete('cascade');
            $table->string('case_type');
            $table->text('property_location')->nullable();
            $table->string('urgency_level')->default('normal');
            $table->decimal('client_budget', 10, 2)->nullable();
            $table->text('case_details')->nullable();
            $table->text('internal_notes')->nullable();
            $table->string('status')->default('open');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cases');
    }
};
