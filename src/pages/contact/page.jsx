import React from 'react'
import hero1 from "@/assets/contact/hero1.svg";
import hero2 from "@/assets/contact/hero2.svg";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Textarea } from '@/components/ui/textarea';
import bgImage from "@/assets/contact/logo.svg";
import email from '@/assets/icons/email.svg'
import twitter from '@/assets/icons/twitter1.svg'
import instagram from '@/assets/icons/instagram1.svg'
import linkedin from '@/assets/icons/linkedin1.svg'
import led from '@/assets/contact/Group 7.svg'

export default function page() {
    const [phone, setPhone] = useState('');
    return (
        <div>
            <div className="px-10 py-14 bg-linear-to-b to-[#7700CD] from-[#3C0067] flex flex-row justify-between items-center ">
                <div className="flex flex-col items-start gap-6  max-w-[760px] ">
                    <h1 className="text-[48px] font-Nunito font-bold text-white  ">
                        Contact Us Information
                    </h1>
                    <p className="font-normal max-w-[580px] text-white font-Nunito text-[20px]">
                        We ‘d love to hear from you
                    </p>
                    <Button className="bg-button-background rounded-2xl py-6 px-10 ">
                        Contact Us Now
                    </Button>
                </div>

                <div className="flex flex-row gap-0 items-center">
                    <img src={hero1} className="max-w-[215px] h-[404px]" alt="" />
                    <img src={hero2} className="max-w-[316x] h-[404px]" alt="" />
                </div>
            </div>

            <div className='py-10 px-10 flex flex-row justify-center gap-28  '>
                <div className="max-w-[524px] w-full h-[648px] shadow px-5 py-8 flex flex-col justify-between bg-center bg-no-repeat  bg-contain bg-white"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "420px 420px", }}>
                    <div>
                        <h2 className='font-poppin font-medium text-[25px] '>Send Us a Message</h2>
                        <p className='font-poppin font-normal text-gray-text text-[16px]'>Fill up the form and our team will get back to you </p>
                    </div>

                    <form action="" className='flex flex-col gap-8'>
                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Name
                            <Input type="text" placeholder="Full Name" />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1'>Phone No <PhoneInput
                            defaultCountry="ua"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            className='shadow w-full '
                        />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Email Address
                            <Input type="email" placeholder="example@gmail.com" />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Messages
                            <Textarea type="text" placeholder="I Love to be part of your community and want to support in my little way... " />
                        </Label>
                    </form>

                    <Button className='bg-button-background py-6 '>Send Messages</Button>

                </div>



                <div className="max-w-[524px] w-full h-[648px] shadow px-5 py-8 flex flex-col gap-10  bg-center bg-no-repeat bg-contain bg-[#4B0081]"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "420px 420px", }} >





                    <div className='flex flex-col'>
                        <h2 className='font-poppin font-medium text-white text-[25px] '>Send Us a Message</h2>
                        <p className='font-poppin font-normal text-gray-text text-[16px]'>More ways to talk to us. </p>
                    </div>


                    <div className='flex flex-col gap-20 '>
                        <div className='flex flex-row items-center'>
                            <img src={email} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>Email</p>
                                <a href="">awoyemititilayodebo@gmail.com</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={twitter} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>Twitter </p>
                                <a href="">@Techlifts.com</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={instagram} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>instagram </p>
                                <a href="">@Techlifts.com</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={linkedin} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>LinkedIn </p>
                                <a href="">@Techlifts.com</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className="px-10 py-14 bg-linear-to-b to-[#7700CD] from-[#3C0067] flex flex-col justify-between items-center ">

                <h1 className="text-[48px] font-Nunito font-bold text-white max-w-[812px] text-center  ">
                    Looking For the Right Community to join
                    TechLift is here
                </h1>
               <Button className='bg-white text-button-background font-poppin font-normal'>
                    Join the community
               </Button>

            </div>
        </div>
    )
}
