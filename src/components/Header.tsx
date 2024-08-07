'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

import {
  ActionIcon,
  FacebookIcon,
  InstagramIcon,
  OrderIcon,
  TikTokIcon
} from '@/images/icons'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-white"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className='bg-cyan-800'>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-white p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-cyan-800 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/about-us">
                              About Us
                            </MobileNavLink>
                            <MobileNavLink href="/catering">
                              Catering & Reservations
                            </MobileNavLink>
                            <MobileNavLink href="/private-events">
                              Private Events
                            </MobileNavLink>
                            <MobileNavLink href="/hours">
                              Hours & Location
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="/menu" variant="outline">
                              <span className="mr-1.5 text-white">View Menu</span>
                              <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                            </Button>
                            <Button
                              variant="solid"
                              color="white"
                              href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="mr-1.5">Order Pickup</span>
                              <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/menu" variant="outline" className="hidden lg:block border-black">
              <span className="text-white">View Menu</span>
            </Button> */}
            <div className='hidden lg:flex items-center gap-x-2'>
              <Link href="https://www.tiktok.com/@la.playa.mexican.cafe">
                <TikTokIcon className='w-6 h-5 sm:h-6' />
              </Link>
              <Link href="https://www.facebook.com/LaPlayaMexicanCafe">
                <FacebookIcon className='w-6 h-5 sm:h-6' />
              </Link>
              <Link href="https://www.instagram.com/LAPLAYAMEXICANCAFE">
                <InstagramIcon className='w-6 h-5 sm:h-6' />
              </Link>
            </div>
            <Button
              variant="solid"
              color="white"
              href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <span>Order Pickup</span>
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
