"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default function Resources() {
    const [activeTab, setActiveTab] = useState("ebooks");
    const [resources, setResources] = useState({
        ebooks: [],
        community: [],
        case: [],
    });

    const tabs = [
        { id: "ebooks", label: "E-books & Guides" },
        { id: "community", label: "Community Resources" },
        { id: "case", label: "Case Study" },
    ];

    useEffect(() => {
        const fetchResources = async () => {
            const { data, error } = await supabase
                .from("resources")
                .select("*")
                .order("id", { ascending: true });

            if (error) {
                console.error("Error fetching resources:", error);
            } else {
                // Group by category
                const grouped = {
                    ebooks: data.filter((item) => item.category === "ebooks"),
                    community: data.filter((item) => item.category === "community"),
                    case: data.filter((item) => item.category === "case"),
                };
                setResources(grouped);
            }
        };
        fetchResources();
    }, []);

    return (
        <div className="flex flex-col items-center gap-10 py-20 px-4 sm:px-8 md:px-16 bg-[#FBF6FF] min-h-screen">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 bg-[#F5EBFF] px-4 py-3 rounded-[10px] shadow-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 font-poppin text-[16px] sm:text-[18px] rounded-[8px] transition-all duration-300 ${activeTab === tab.id
                                ? "bg-white text-black font-medium"
                                : "bg-transparent text-black hover:bg-[#E8D5FF]"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Conditional Sections */}
            <div className="w-full max-w-7xl">
                {activeTab === "ebooks" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {resources.ebooks.map((item, index) => (
                            <Card
                                key={index}
                                className="rounded-[20px] border-[1px] border-[#E8D5FF] shadow-md bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col items-start text-center px-6 py-6 gap-4">
                                    <p className="text-[#7700CD] bg-[#F5EBFF] px-4 py-1 rounded-full text-[14px] font-semibold">
                                        Featured Resource
                                    </p>
                                    <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="md:w-[200px] w-full md:h-[200px] md:mt-[-43px]"
                                        />
                                        <div className="flex flex-col items-start text-left">
                                            <h2 className="font-Inter font-semibold text-[20px] text-[#3C0067]">
                                                {item.name}
                                            </h2>
                                            <p className="font-Nunito text-[15px] text-[#555]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <a href={item.download_link} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="bg-[#7700CD] hover:bg-[#5F00A3] text-white font-medium text-[16px] px-8 py-7 mt-2 rounded-xl w-full">
                                            Download
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === "community" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {resources.community.map((item, index) => (
                            <Card
                                key={index}
                                className="flex flex-col items-center px-10 bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#E8D5FF]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full py-5"
                                />
                                <div className="p-6 flex flex-col gap-3 w-full items-start text-start">
                                    <h3 className="text-[#3C0067] text-[20px] font-bold font-Inter">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#555] text-[15px] font-Nunito leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <a href={item.download_link} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="bg-[#7700CD] text-white rounded-xl py-7 mt-3 w-full hover:bg-[#5F00A3]">
                                            Download
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === "case" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {resources.case.map((item, index) => (
                            <Card
                                key={index}
                                className="rounded-[20px] border-[1px] border-[#E8D5FF] shadow-md bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col items-start text-center px-6 py-6 gap-4">
                                    <p className="text-[#7700CD] bg-[#F5EBFF] px-4 py-1 rounded-full text-[14px] font-semibold">
                                        Case Study
                                    </p>
                                    <div className="flex flex-col md:flex-row justify-start items-start gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="md:w-[200px] w-full md:h-[200px] md:mt-[-43px]"
                                        />
                                        <div className="flex flex-col items-start text-left">
                                            <h2 className="font-Inter font-semibold text-[20px] text-[#3C0067]">
                                                {item.title}
                                            </h2>
                                            <p className="font-Nunito text-[15px] text-[#555]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <a href={item.download_link} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button className="bg-[#7700CD] hover:bg-[#5F00A3] text-white font-medium text-[16px] px-8 py-7 mt-2 rounded-xl w-full">
                                            Download
                                        </Button>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
