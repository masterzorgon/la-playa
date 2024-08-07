import { FaceSmileIcon, ClockIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
    {
        name: 'Contact Information',
        icon: PhoneIcon,
        details: [
            {
                key: "Phone",
                value: "(956) 421-2000"
            },
            {
                key: "Address",
                value: "502 S 77 Sunshine Strip, Harlingen, TX"
            },
        ]
    },
    {
        name: 'Happy Hour',
        icon: FaceSmileIcon,
        details: [
            {
                key: "Monday - Friday",
                value: "3PM - 6:30PM"
            },
            {
                key: "Saturday",
                value: "11AM - 5PM"
            },
            {
                key: "Sunday",
                value: "All Day"
            },
        ],
    },
    {
        name: 'Hours of Operation',
        icon: ClockIcon,
        details: [
            {
                key: "Sunday & Monday",
                value: "11AM - 9PM"
            },
            {
                key: "Tuesday - Thursday",
                value: "11AM - 10PM"
            },
            {
                key: "Friday & Saturday",
                value: "11AM - 11PM"
            },
        ],
    },
]

export default function Hours() {
    return (
        <>
            <div className='oveflow-hidden'>
                <div className="px-6 lg:px-8 py-24 sm:py-20 h-full">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Hours and Contact
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Find our hours-of-operation and contact information below.
                            We hope you can join us soon for some delicious, authentic Mexican cuisine.
                        </p>
                    </div>
                    
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name} className="flex gap-x-4 rounded-xl bg-cyan-400/20 p-6 ring-1 ring-inset ring-white/10 backdrop-blur-md">
                                <card.icon className="h-7 w-5 flex-none text-cyan-400" aria-hidden="true" />
                                <div className="text-base leading-7">
                                    <h3 className="font-semibold text-gray-900">{card.name}</h3>
                                    <ul className='text-gray-600 text-sm pt-2'>
                                        {card.details?.map(({ key, value }) => (
                                            <li key={key}>
                                                <span className='font-semibold'>{key}</span>: {
                                                    key.includes("Phone") 
                                                        ? <a className="hover:text-gray-900" href="tel:+1 (956) 421-2000">{value}</a>
                                                        : <span>{value}</span>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};