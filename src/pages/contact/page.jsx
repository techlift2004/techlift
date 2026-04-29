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
// import led from '@/assets/contact/Group 7.svg'

export default function Page() {
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/jointechlift@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone,
                    message: formData.message,
                    _subject: 'New Contact Message from TechLift',
                }),
            });

            const result = await response.json();

            if (!response.ok || result.success === 'false') {
                throw new Error('Failed to send message');
            }

            setSubmitMessage('Message sent successfully. We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            setPhone('');
        } catch (error) {
            setSubmitMessage('Could not send message right now. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='pt-20'> 
            <div className="px-5 sm:px-8 md:px-10 py-10 md:py-14 bg-gradient-to-b from-[#3C0067] to-[#7700CD] flex flex-col md:flex-row justify-between  items-center gap-10 md:gap-0">
                 <div className="flex flex-col items-center md:items-start gap-5 md:gap-6 max-w-[760px] text-center md:text-left">
                                    <h1 className="text-[48px] sm:text-[46px] md:text-[48px] font-Nunito font-bold text-white leading-tight">
                                         Contact Us Information
                                    </h1>
                                    <p className="font-Nunito font-normal text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-[580px] mx-auto md:mx-0">
                                         We ‘d love to hear from you
                                    </p>
                                    <Button className="bg-button-background rounded-2xl py-4 px-8 sm:py-5 sm:px-10 text-[16px] sm:text-[18px] mt-3">
                                        Contact Us Now
                                    </Button>
                                </div>
                
                
                                <div className="flex flex-row justify-center md:justify-end gap-2 sm:gap-0 items-center">
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

            <div className='py-10 px-2 md:px-10 flex flex-col md:flex-row justify-center gap-10 md:gap-28  '>
                <div className="max-w-[524px] w-full h-[648px] shadow px-5 py-8 flex flex-col justify-start bg-center bg-no-repeat  bg-contain bg-white"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "420px 420px", }}>
                    <div>
                        <h2 className='font-poppin font-medium text-[25px] '>Send Us a Message</h2>
                        <p className='font-poppin font-normal text-gray-text text-[16px]'>Fill up the form and our team will get back to you </p>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Name
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                            />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1'>Phone No <PhoneInput
                            defaultCountry="ng"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            className='shadow w-full '
                        />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Email Address
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                required
                            />
                        </Label>

                        <Label className='text-[15px] font-poppin font-medium flex flex-col gap-1 ' htmlFor="picture">Messages
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="I Love to be part of your community and want to support in my little way... "
                                required
                            />
                        </Label>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className='bg-button-background mt-2 items-start px-7'
                        >
                            {isSubmitting ? 'Sending...' : 'Send Messages'}
                        </Button>

                        {submitMessage && (
                            <p className='text-sm font-Nunito text-gray-text'>{submitMessage}</p>
                        )}
                    </form>

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
                                <a href="mailto:jointechlift@gmail.com">jointechlift@gmail.com</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={twitter} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>Twitter </p>
                                <a href="https://x.com/Techliftteam?t=gldZwtXCbnUzd6K9l_pDHQ&s=09">@Techliftteam</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={instagram} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>instagram </p>
                                <a href="https://www.instagram.com/jointechlift?igsh=MWIyNDMyZDU5YXFkdg==">@techlift_official</a>
                            </div>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src={linkedin} alt="" height={55} width={55} />
                            <div className='flex flex-col text-white font-Inter font-normal text-[14px]'>
                                <p>LinkedIn </p>
                                <a href="https://www.linkedin.com/company/techlift-official/">@techlift-official</a>
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
