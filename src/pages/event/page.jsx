import React from 'react'
import hero1 from '@/assets/event/hero1.svg'
import hero2 from '@/assets/event/hero2.svg'
import { Button } from '@/components/ui/button'
import UpcomingEvent from "./id/upcomingEvent"
import PastEvent from './id/pastEvent'

export default function page() {
    return (
        <div>
            <div className="px-10 py-14 bg-linear-to-b to-[#7700CD] from-[#3C0067] flex flex-row justify-between items-center ">
                <div className="flex flex-col items-start gap-6  max-w-[760px] ">
                    <h1 className="text-[48px] font-Nunito font-bold text-white  ">
                        Experience the Future of Tech
                        With TechLift Events.
                    </h1>
                    <p className="font-normal max-w-[580px] text-white font-Nunito text-[20px]">
                        Join a community of innovation, creators, and professionals at
                        conferences, meetups, designed to inspire, connect, and empower.
                    </p>
                    <Button className="bg-button-background rounded-2xl py-6 px-10 ">
                        Register Now
                    </Button>
                </div>

                <div className="flex flex-row gap-0 items-center">
                    <img src={hero1} className="max-w-[215px] h-[404px]" alt="" />
                    <img src={hero2} className="max-w-[316x] h-[404px]" alt="" />
                </div>
            </div>

            <UpcomingEvent />
            <PastEvent />
        </div>
    )
}
