import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import ConfirmationNewsLetterSignup from "../../../../emails/newsletter/ConfirmationNewsLetterSignup";
import NotificationNewsLetterSignup from "../../../../emails/newsletter/NotificationNewsLetterSignup";

export async function POST(request: NextRequest) {
   const { email } = await request.json();

   const resend = new Resend(process.env.RESEND_KEY);
   const audience = process.env.RESEND_AUDIENCE!;

   try {
      // add signee to the audience
      await resend.contacts.create({
         email,
         unsubscribed: false,
         audienceId: audience
      });

      // send confirmation email to signee
      const { data: confirmData } = await resend.emails.send({
         from: "laplaya@laplayamexicancafe.com",
         to: email,
         subject: "Welcome to the La Playa Newsletter!",
         react: ConfirmationNewsLetterSignup(),
         headers: {
            'List-Unsubscribe': '<https://www.laplayamexicancafe.com/unsubscribe>'
         },
      });

      // calc length of contact list
      const { data: contactList } = await resend.contacts.list({
         audienceId: audience,
      });
      const numOfContacts = contactList!.data.length;
      
      // notify la playa of new signup
      const { data: notifyData } = await resend.emails.send({
         from: "laplaya@laplayamexicancafe.com",
         to: "elizabeth@laplayamexicancafe.com",
         cc: "Laplayamain@gmail.com",
         subject: "New Newsletter Signup!",
         react: NotificationNewsLetterSignup({ numOfContacts, email })
      });

      const data = { confirmData, notifyData };
      return NextResponse.json({ data });
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
   }
};
