import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  
  interface CateringRequestProps {
    numOfContacts: number,
    signee: string,
  }
  
  const NotificationNewsLetterSignup = ({
    numOfContacts,
    signee
  }: CateringRequestProps) => {
    const previewText = "New Signup For The La Playa Newsletter!";
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
                <img
                  src="https://drive.google.com/thumbnail?id=1AOf9PIM9-zdnPwWCfg_pGedJF2gz581V"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
                New Signup For The La Playa Newsletter!
              </Heading>
              <Text className="text-black text-[14px] leading-[24px] text-center">
                The La Playa Newsletter now has {numOfContacts} signups! The new signee is {signee}.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default NotificationNewsLetterSignup;
  