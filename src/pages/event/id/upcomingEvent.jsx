"use client";
import React, { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';

export default function CardComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      const today = new Date().toISOString().split("T")[0];
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('date', today) // show only future events
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data);
      }
    };
    fetchUpcomingEvents();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-start pt-16 px-5 md:px-10 pb-20">
      <h1 className="font-poppin font-normal text-[28px] md:text-[40px] text-start">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {events.map((member, index) => (
          <Card key={index} className="w-full h-full rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300">
            <div className="flex flex-col items-start h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
              />
              <div className="flex flex-col justify-between items-center pt-3 gap-5 flex-grow">
                <div className="flex flex-col items-start px-4 sm:px-5 gap-2 pb-6 pt-3 w-full">
                  <p className="font-Inter font-medium text-[14px] sm:text-[16px] bg-[#EDE6F2] px-4 py-1 text-text rounded-[30px]">
                    {member.type}
                  </p>
                  <h2 className="font-Inter font-semibold text-[18px] sm:text-[22px] lg:text-[24px]">
                    {member.name}
                  </h2>
                  <p className="font-Inter font-normal text-gray-text text-[14px] sm:text-[16px]">
                    {member.des}
                  </p>
                  <div className="flex flex-row gap-2 items-center text-text">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <p className="font-Inter font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                      {member.location}
                    </p>
                  </div>

                  <Button className="bg-button-background text-[14px] sm:text-[16px] lg:text-[18px] font-poppin font-medium py-3 sm:py-4 mt-4 w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
