import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import ConfirmationNewsLetterSignup from "../../../../emails/newsletter/ConfirmationNewsLetterSignup";
import NotificationNewsLetterSignup from "../../../../emails/newsletter/NotificationNewsLetterSignup";

export async function POST(request: NextRequest) {
   const { email } = await request.json();

   const resend = new Resend("re_QezkroZU_KY9ukYL53CtHA1GqEvQeg7eo");
   const audience = "b6bf1183-0ff3-4e7b-8754-dc9303c4d249"!;

   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // if (!emailRegex.test(email)) {
   //    console.error("Error: Invalid email format.");
   //    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
   // }

   try {
      // add signee to the audience
      await resend.contacts.create({
         email,
         unsubscribed: false,
         audienceId: audience
      });

      // send confirmation email to signee
      const data = await resend.emails.send({
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
      await resend.emails.send({
         from: "laplaya@laplayamexicancafe.com",
         to: "nathan.zebedee@gmail.com",
         // to: "Laplayamain@gmail.com",
         // cc: "elizabeth@laplayamexicancafe.com",
         subject: "New Newsletter Signup!",
         react: NotificationNewsLetterSignup({ numOfContacts, email })
      });

      return NextResponse.json({ data });
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
   }
};
