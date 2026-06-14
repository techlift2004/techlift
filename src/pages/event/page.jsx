import React from 'react'
import { Button } from '@/components/ui/button'
import UpcomingEvent from "./id/upcomingEvent"
import PastEvent from './id/pastEvent'
import event from "../../assets/doc/event.jpg"
import event2 from "../../assets/doc/eventss.jpg"

export default function page() {
    return (
        <div className='pt-20'>
            <div className="px-5 sm:px-8 md:px-10 py-10 md:py-14 bg-gradient-to-b from-[#3C0067] to-[#7700CD] flex flex-col md:flex-row justify-between  items-center gap-10 md:gap-0">
                <div className="flex flex-col items-center md:items-start gap-5 md:gap-6 max-w-[760px] text-center md:text-left">
                    <h1 className="text-[48px] sm:text-[46px] md:text-[48px] font-Nunito font-bold text-white leading-tight">
                        Experience the Future of Tech
                        <br className="hidden md:block" />
                        With TechLift Events.
                    </h1>
                    <p className="font-Nunito font-normal text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-[580px] mx-auto md:mx-0">
                        Join a community of innovation, creators, and professionals at
                        conferences, meetups, designed to inspire, connect, and empower.
                    </p>
                    <Button className="bg-button-background rounded-2xl py-4 px-8 sm:py-5 sm:px-10 text-[16px] sm:text-[18px] mt-3">
                        Register Now
                    </Button>
                </div>


                <div className="flex flex-row justify-center md:justify-end gap-4 items-center relative">
                    <div className="w-[140px] sm:w-[180px] md:w-[215px] h-[180px] sm:h-[220px] md:h-[260px] rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.5)] z-10 translate-y-6 hover:scale-105 transition-all duration-500">
                        <img
                            src={event}
                            className="w-full h-full object-cover rounded-[12px]"
                            alt="Tech conference audience"
                        />
                    </div>
                    <div className="w-[180px] sm:w-[230px] md:w-[316px] h-[200px] sm:h-[250px] md:h-[320px] rounded-2xl p-1 bg-white/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-0 -translate-x-6 hover:scale-105 hover:z-20 transition-all duration-500">
                        <img
                            src={event2}
                            className="w-full h-full object-cover rounded-[12px]"
                            alt="Tech speaker presenting"
                        />
                    </div>
                </div>
            </div>

            <UpcomingEvent />
            <PastEvent />
        </div>
    )
}
