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
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    partySize: string,
    date: string,
    message?: string,
}

const NotificationPrivateEventRequest = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    partySize,
    date,
    message
}: CateringRequestProps) => {
    const previewText = "New Catering Request!";

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
                            New Private Event Request!
                        </Heading>

                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            The customer's name is: <span className="font-bold">{firstName} {lastName}</span>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            Their email is: <span className="font-bold">{email}</span>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            Their phone number is: <span className="font-bold">{phoneNumber}</span>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            Their party size is: <span className="font-bold">{partySize} people</span>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] text-center">
                            Their desired catering date is: <span className="font-bold">{date}</span>
                        </Text>
                        {
                            message && (
                                <Text className="text-black text-[14px] leading-[24px] text-center">
                                    There message is: <span className="font-bold">{message}</span>
                                </Text>
                            )
                        }
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default NotificationPrivateEventRequest;
