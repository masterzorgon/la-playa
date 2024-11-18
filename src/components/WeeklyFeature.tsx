"use client";

import { useState, useEffect } from 'react';

import { Button } from '@/components/Button'

import {
    ActionIcon,
    OrderIcon
} from '@/images/icons'

interface WeeklyFeature {
    title: string;
    subTitle: string;
    description: string;
    image: string;
}

export function WeeklyFeature() {
    const [weeklyFeature, setWeeklyFeature] = useState<any>();

    useEffect(() => {
        const fetchWeeklyFeature = async () => {
            const url = "/api/weekly-feature";

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const result = await response.json();

                setWeeklyFeature(result);
                console.log("success", result);
            } catch (error) {
                console.error("Request failed:", error);
            }
        };

        fetchWeeklyFeature();
    }, []);

  return (
    <>
        <div className="relative isolate z-10 bg-cyan-800 md:py-32 pb-32">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                    <img 
                        src={weeklyFeature?.entry?.fields?.image?.fields?.file?.url || ""}
                        className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                        alt=""
                    />
                    <div className="h-96 w-full flex-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {weeklyFeature?.entry?.fields?.title || "Loading..."}
                        </h2>
                        <p className='mt-10 text-white text-2xl font-semibold'>
                            {weeklyFeature?.entry?.fields?.subTitle || "Loading..."} 
                        </p>
                        <p className="mt-2 text-lg leading-8 text-gray-200">
                            {weeklyFeature?.entry?.fields?.description || "Loading..."} 
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Button
                                href="/menu"
                                variant="outline"
                            >
                                <span className="mr-1.5">View Menu</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button variant="solid" color="cyan" href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip" target="_blank" rel="noopener noreferrer">
                                <span className="mr-1.5">Order Pickup</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    </>
  )
}
