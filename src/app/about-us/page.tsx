import Image from "next/image";

import { SectionBreak } from "@/components/SectionBreak";

import foodShowcase3 from '@/images/food-showcase3.jpg';
import foodShowcase4 from '@/images/food-showcase4.jpg';
import foodShowcase5 from '@/images/food-showcase5.jpg';
import foodShowcase6 from '@/images/food-showcase6.jpg';
import foodShowcase7 from '@/images/food-showcase7.jpg';

export default function AboutUs() {

    const stats = [
        { label: 'Using only the best ingredients', value: 'Quality' },
        { label: 'Serving you with enthusiasm', value: 'Care' },
        { label: 'Cooking for you, with love', value: 'Compassion' },
    ];

    return (
        <>
            <div className="relative isolate">
                <div
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-45"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>

                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Our craft is our passion
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    La Playa Mexican Cafe was opened in July of 2006 in Harlingen Texas by the Trevino family. We enjoy bringing a bit of twist to the Harlingen community, differentiating from other Mexican restaurants with selecting ingredients to accent the traditional Mexican cuisine from interior Mexico for a flavorful experience, including our our award-winning margaritas and fajitas.
                                    We take pride in our Mexican heritage and want to share this rich history
                                    with you through warm meals and wonderful service.{" "}
                                    <span className="font-semibold">
                                        When you walk into La Playa Mexican Cafe, you will be greeted like family.
                                    </span>
                                </p>
                            </div>
                            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <Image
                                            src={foodShowcase5}
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <Image
                                            src={foodShowcase6}
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={foodShowcase7}
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <Image
                                            src={foodShowcase3}
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={foodShowcase4}
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionBreak
                className="mb-10 sm:mb-20"
                subClassOne="bg-transparent"
            />

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8 pb-32">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                Since opening our doors in 2006, our mission has remained the same: to serve the harlingen community
                                with fresh, quality Mexican cuisine that is authentic to tradition.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                <p>
                                    Our goal is to provide dynamic menu, providing delicious high quality meals, great tasting items for reasonable price. This is demonstrated through receiving awards accolades on La Playa tender marinated fajitas and tasting, fresh, and potent margaritas.
                                </p>
                                <p className="mt-10">
                                    Additionally, La Playa offers menu selections outside of traditional dishes such as quail, providing noteworthy culinary delights to the local community. We are truly grateful to be a part of Harlingen community!
                                </p>
                                <p className="mt-10">
                                    La Playa Mexican Cafe extends itself to the community by offering services with Dine-in, Curbside pickup, and DoorDash. As well as providing Catering that can be delivered and have a Private Room that can accommodate up to 75 people.
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};