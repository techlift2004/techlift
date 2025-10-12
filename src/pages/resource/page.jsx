import React from 'react'
import hero1 from '@/assets/event/hero1.svg'
import hero2 from '@/assets/event/hero2.svg'
import { Button } from '@/components/ui/button'
import Resources from './id/resources'

export default function page() {
    return (
        <div>
            <div className="px-5 sm:px-8 md:px-10 py-10 md:py-14 bg-gradient-to-b from-[#3C0067] to-[#7700CD] flex flex-col md:flex-row justify-between  items-center gap-10 md:gap-0">
                <div className="flex flex-col items-center md:items-start gap-5 md:gap-6 max-w-[760px] text-center md:text-left">
                    <h1 className="text-[48px] sm:text-[46px] md:text-[48px] font-Nunito font-bold text-white leading-tight">
                       Discover a Collection of Guide tools and carefully curated to help you learn.
                    </h1>
                    <p className="font-Nunito font-normal text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-[580px] mx-auto md:mx-0">
                       Explore Valuable materials, guides and tools to help you maximize Techlift
                    </p>
                    <Button className="bg-button-background rounded-2xl py-4 px-8 sm:py-5 sm:px-10 text-[16px] sm:text-[18px] mt-3">
                       Explore Platform
                    </Button>
                </div>


                <div className="flex flex-row justify-center md:justify-end gap-2 sm:gap-4 items-center">
                    <img
                        src={hero1}
                        className="w-[140px] sm:w-[180px] md:w-[215px] h-auto"
                        alt="TechLift event 1"
                    />
                    <img
                        src={hero2}
                        className="w-[180px] sm:w-[230px] md:w-[316px] h-auto"
                        alt="TechLift event 2"
                    />
                </div>
            </div>

           <Resources />
        </div>
    )
}
