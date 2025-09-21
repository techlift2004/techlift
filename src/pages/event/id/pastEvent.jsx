import React from 'react'
import { Card } from '@/components/ui/card'
import image1 from "@/assets/event/Media.svg"
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function card() {

    const team = [
        {
            image: image1,
            name: "Tech Life Summits 2025",
            des: "Gathering of Tech Enthusiast ",
            location: "Lagos Conference Hall, Nig.",
            type: "Tech"
        },

        {
            image: image1,
            name: "Tech Life Summits 2025",
            des: "Gathering of Tech Enthusiast ",
           location: "Lagos Conference Hall, Nig.",
             type: "Tech"
        },
       
    ]

    return (
        <div className='flex flex-col gap-10 items-start pt-20 px-10'>
                <h1 className='font-poppin font-normal text-[40px] text-start '>Past Events</h1>
          
            <div className="grid grid-cols-2 space-x-15 gap-4">
                {team.map((member, index) => (
                    <Card key={index} className="w-full h-full">
                        <div className="flex flex-col  items-start h-full">
                            <img
                                src={member.image}
                                alt=""
                                className="w-full max-h-[394px] rounded-t-xl "
                            />
                            <div className="flex flex-col justify-between items-center pt-3 gap-5 flex-grow">
                                <div className="flex flex-col items-start px-5 gap-2 pb-8 pt-3">
                                    <p className='font-Inter font-medium text-[24px] bg-[#EDE6F2] px-5 py-1 text-text rounded-[30px] '>{member.type}</p>
                                    <h2 className="font-Inter font-semibold text-[24px]">
                                        {member.name}
                                    </h2>
                                    <p className="font-Inter font-normal text-gray-text text-[16px]">
                                        {member.des}
                                    </p>
                                    <div className='flex flex-row gap-1 items-center text-text'>
                                        <MapPin />
                                        <p className='font-Inter font-normal text-[20px]'>{member.location}</p>
                                    </div>

                                    <Button className='bg-button-background text-[18px] font-poppin font-medium py-6'>Learn More</Button>
                                </div>
                              
                            </div>
                        </div>
                    </Card>
                ))}
            </div>


        </div>
    )
}
