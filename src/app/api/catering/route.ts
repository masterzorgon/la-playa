import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import ConfirmationCateringRequest from "../../../../emails/catering/ConfirmationCateringRequest";
import NotificationCateringRequest from "../../../../emails/catering/NotificationCateringRequest";

export async function POST(request: NextRequest) {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        partySize,
        date,
        message
    } = await request.json();

    const resend = new Resend(process.env.RESEND_KEY);

    try {
        // send confirmation email to signee
        const { data: confirmData } = await resend.emails.send({
            from: "laplaya@laplayamexicancafe.com",
            to: [email as string],
            subject: "La Playa Catering Request Confirmation",
            react: ConfirmationCateringRequest(),
            headers: {
                'List-Unsubscribe': '<https://www.laplayamexicancafe.com/unsubscribe>'
            }
        });

        // send notification email to la playa
        const { data: notifData } = await resend.emails.send({
            from: "laplaya@laplayamexicancafe.com",
            to: "Laplayamain@gmail.com",
            cc: ["elizabeth@laplayamexicancafe.com",],
            subject: "New Catering Request!",
            react: NotificationCateringRequest({
                firstName,
                lastName,
                email,
                phoneNumber,
                partySize,
                date,
                message
            })
        });

        const data = { confirmData, notifData };
        return NextResponse.json({ data });
    } catch (error) {
        console.log("error", error);
    }
}