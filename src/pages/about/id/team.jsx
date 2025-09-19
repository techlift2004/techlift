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

       <div className="grid grid-cols-4 space-x-15 gap-4">
  {team.map((member, index) => (
    <Card key={index} className="w-full h-full">
      <div className="flex flex-col items-center h-full">
        <img
          src={member.image}
          alt=""
          className="w-full px-4 max-h-[194px]"
        />
        <div className="flex flex-col justify-between items-center pt-3 gap-5 flex-grow">
          <div className="flex flex-col items-center">
            <h2 className="font-Inter font-medium text-text text-[24px]">
              {member.name}
            </h2>
            <p className="font-Inter font-normal text-gray-text text-[16px]">
              {member.role}
            </p>
          </div>
          <hr className="border-[1px] w-full" />
          <div className="flex flex-row gap-2 items-center p-3 rounded-[8px] bg-[#FFF4F4]">
            <a href={member.website} target="_blank" rel="noopener noreferrer">
              <img src={websites} alt="website" />
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedins} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>


    </div>
  )
}
