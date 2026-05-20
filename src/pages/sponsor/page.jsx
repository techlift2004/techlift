import React from 'react'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Network, LineChart, HandHeart } from 'lucide-react';

export default function SponsorPage() {
  const benefits = [
    {
      icon: <Network className="w-8 h-8 text-[#7700CD]" />,
      title: "Broad Community Reach",
      description: "Gain direct access to a growing demographic of passionate tech enthusiasts, developers, and designers."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-[#7700CD]" />,
      title: "Empower the Youth",
      description: "Your sponsorship actively contributes to providing essential learning resources and mentorship to young talent."
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#7700CD]" />,
      title: "Foster Innovation",
      description: "Partner with an ecosystem that drives technological innovation and problem-solving through collaboration."
    }
  ];

  return (
    <div className='flex flex-col w-full bg-white'>
      {/* 1. HERO SECTION */}
      <div className='relative w-full min-h-[350px] md:min-h-[450px] flex flex-col justify-center items-center overflow-hidden pt-20 pb-16'>
        <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556761175-5973e2101869?q=80&w=1800&auto=format&fit=crop)`, backgroundSize: "cover", backgroundPosition: "center" }} className="absolute inset-0 z-0 scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C0067]/90 to-[#7700CD]/95 z-0"></div>

        <div className='flex flex-col z-10 px-6 text-center max-w-4xl'>
          <h1 className='text-white text-[44px] sm:text-[50px] md:text-[60px] font-Nunito font-bold leading-tight'>
            Partner with TechLift
          </h1>
          <p className='text-white/90 text-lg sm:text-[20px] md:text-[24px] font-Nunito font-normal mt-4'>
            Empowering the Next Generation of Tech Leaders together.
          </p>
        </div>
      </div>

      {/* 2. WHY SPONSOR GRID */}
      <div className="w-full bg-[#f8f9fc] py-16 md:py-24 px-6 lg:px-20 text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold font-Nunito text-[#3C0067] mb-4">Why Sponsor Us?</h2>
        <p className="text-gray-600 font-poppin max-w-2xl mx-auto mb-12 md:text-lg">
          When you partner with TechLift, you're investing in the future of technology by supporting diverse, driven individuals aiming to make an impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 md:p-10 rounded-[24px] border-none shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(119,0,205,0.15)] hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className="bg-[#ECD3FF] p-5 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-Nunito mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 font-poppin leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. CALL TO ACTION SECTION */}
      <div className='flex justify-center items-center py-20 md:py-28 px-4 sm:px-6 bg-white'>
        <div className="max-w-5xl w-full bg-gradient-to-tr from-[#3C0067] to-[#7700CD] rounded-[32px] p-10 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          {/* Decorative radial gradients/shapes to make it pop */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <h2 className='text-white text-[32px] md:text-[46px] font-Nunito font-bold leading-tight relative z-10'>
            Every Naira Goes a Long Way
          </h2>
          <p className="text-white/90 font-poppin mt-4 mb-4 text-lg md:text-xl max-w-2xl relative z-10">
            Join hands with us in making tech education accessible. Your donations directly fund resources, workshops, and opportunities for our growing community.
          </p>

          <Button
            onClick={() => window.open("https://forms.gle/nXpPgkAynYv9aJuq7", "_blank")}
            className='bg-white text-[#7700CD] hover:bg-gray-100 hover:text-[#5c0099] mt-8 px-12 py-7 text-[18px] md:text-[22px] font-bold rounded-2xl shadow-xl hover:scale-105 transition-all relative z-10'>
            Donate Here
          </Button>
        </div>
      </div>

    </div>
  )
}
