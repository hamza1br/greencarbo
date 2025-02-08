<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app'); // Utilise notre nouvelle vue
});

Route::post('/contact', [App\Http\Controllers\ContactController::class, 'submit']);