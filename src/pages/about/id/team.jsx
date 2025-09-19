import React from 'react'
import { Card } from '@/components/ui/card'
import image1 from "@/assets/about/image1.svg"
import websites from "@/assets/icons/website.png"
import linkedins from "@/assets/icons/linkedin.svg"

export default function team() {

    const team = [
        {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },

         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        },
         {
            image: image1,
            name: "Janet Doe",
            role: "Technical Team Lead",
            linkedin: "www.linkedin.com",
            website: "www.website.com",
        }
    ]

  return (
    <div className='flex flex-col gap-10 items-center pt-20 px-10'>
       <div className='flex flex-col'>
         <h1 className='font-poppin font-semibold text-[40px] text-text'>The Brains Behind the Magic</h1>

        <p className='font-Nunito font-normal text-[22px] text-gray-text '>Meet the leadership and advisor team behind TechLifts</p>
       </div>

        <div className='grid grid-cols-4  space-x-20 gap-5 space-y-5'>
            {team.map((team, index) => (
            <Card className='w-full'>
                <div key={index} className='flex flex-col items-center'>
                    <img src={team.image} alt="" className='w-full px-4  max-h-[194px]' />
                  <div className='flex flex-col justify-center items-center pt-3 gap-5'>
                      <div className='flex flex-col items-center'>
                        <h2 className='font-Inter font-medium text-text text-[24px] '>{team.name}</h2>
                        <p className='font-Inter font-normal text-gray-text text-[16px] '>{team.role}</p>
                    </div>
                    <hr className='border-[1px] w-full px-10 ' />
                    <div className='flex flex-row gap-2 items-center p-3 rounded-[8px] bg-[#FFF4F4]'>
                        <a href={team.website}><img src={websites} alt="" /></a>
                        <a href={team.linkedin}><img src={linkedins} alt="" /></a>
                    </div>
                  </div>

                </div>

            </Card>

             ))}
        </div>

    </div>
  )
}
