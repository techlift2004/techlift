import React from 'react'
import bgImage from "@/assets/contact/logo.svg";
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div  style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "420px 420px", }} className='flex flex-col justify-center items-center  bg-center bg-no-repeat gap-4  h-[100vh] bg-contain pt-4'>

        <div className='flex flex-col'>
            <h1 className='text-text text-[40px] font-Nunito font-bold text-center'>
                Sponsor Us
            </h1>

            <p className='text-text text-[20px] text-center font-Nunito font-normal '>Proudly  supported by industries leaders </p>

        </div>

       

        <div className='flex flex-col items-center '>
                      
            <h2 className=''>Every $1 goes a long way.</h2>

        <Button className='bg-button-background mt-5 items-start px-7  '>Donate Here</Button>

               
        </div>
    </div>
  )
}
