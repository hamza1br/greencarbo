<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validation
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'entreprise' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        try {
            Mail::send(new ContactMail($validated));

            return response()->json([
                'success' => true,
                'message' => 'Message envoyé avec succès!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue lors de l\'envoi du message.'
            ], 500);
        }
    }
}
