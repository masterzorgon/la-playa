"use client";

import Image from 'next/image'
import clsx from 'clsx'
import { Suspense } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import bestBar from '@/images/logos/best-bar.svg'
import bestFajitas from '@/images/logos/best-fajitas.svg'
import bestHappyHour from '@/images/logos/best-happy-hour.svg'
import bestStuff from '@/images/best-stuff.png'

import {
    ActionIcon,
    OrderIcon
} from '@/images/icons'

function FallBack() {
    return (
        <div>
            <p>Your browser doesn&apos;t support video</p>
        </div>
    );
};

function VideoComponent() {
    return (
        <video
            preload="none"
            aria-label="Video player"
            playsInline
            autoPlay
            loop
            muted
            className="absolute left-1/3 top-1/2 max-w-none translate-x-[-40%] translate-y-[-60%] object-cover"
        >
            <source src={require("@/images/videos/alt.mp4")} type='video/mp4' />
        </video>
    );
};

export function Hero() {

    return (
        <div className="relative overflow-hidden">
            <Suspense fallback={<FallBack />}>
                <VideoComponent />
            </Suspense>
        
            <div className='absolute z-10 h-[1000px] w-screen bg-black/30' />
            
            <Container className='relative text-white pt-32 pb-52 lg:pb-96 h-full z-10'>
                <div className="flex flex-col items-start lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto lg:max-w-none">
                        <h1 className="text-6xl sm:text-8xl font-medium tracking-tight">
                            Made Locally,<br />Con Amor
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-white font-semibold sm:tracking-wide sm:w-2/3 xl:w-1/2">
                            At La Playa, we pride ourselves in cooking with love.
                            Come join us and enjoy a homemade meal made according to
                            Mexican tradition.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Button
                                href="https://www.doordash.com/store/la-playa-mexican-cafe-harlingen-607767/"
                                variant="solid"
                                color="white"
                            >
                                <span className="mr-1.5">Get Delivery</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button variant="solid" color="cyan" href="/menu">
                                <span className="mr-1.5">View Menu</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                            </Button>
                        </div>
                    </div>

                    <div className="justify-start mt-10 sm:mt-0 w-full">
                        <p className="text-lg font-semibold text-white text-left my-4">
                            Our Restaurant Is Award-Winning
                        </p>
                        <ul
                            role="list"
                            className="-ml-1 flex flex-wrap gap-x-10"
                        >
                            {[
                                ['Best Bar and Lounge', bestBar],
                                ['Best Fajitas', bestFajitas],
                                ['Best Happy Hour', bestHappyHour],
                            ].map(([name, logo, className]) => (
                                <li 
                                    key={name} 
                                    className={clsx('mb-4', className)}
                                >
                                    <Image src={logo} alt={name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};