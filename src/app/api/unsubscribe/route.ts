import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import ConfirmationUnsubscribe from "../../../../emails/unsubscribe/ConfirmationUnsubscribe";

export async function POST(request: NextRequest) {
    const { email } = await request.json();

    const resend = new Resend(process.env.RESEND_KEY);

    // Email validation using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
        console.error("Error: Invalid email format.");
        return; // Stop execution if the email format is invalid
    }

    try {
        // remove user from audience
        const { data } = await resend.contacts.remove({
            email: email as string,
            audienceId: process.env.RESEND_AUDIENCE as string
        });

        // send confirmation email to user
        await resend.emails.send({
            from: "laplaya@laplayamexicancafe.com",
            to: [email as string],
            subject: "You Unsubscribed from the La Playa Newsletter",
            react: ConfirmationUnsubscribe(),
        });
        
        return NextResponse.json({ data });
    } catch (error) {
        console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
}