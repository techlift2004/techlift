"use client";

import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "@/assets/contact/logo.svg";
import comm from "@/assets/comm.svg";


// Small reusable animated floating shapes
function FloatingShape({ children, size = 80, top, left, delay }) {
  return (
    <motion.div
      className="absolute opacity-20"
      style={{ top, left, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {


      const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000); // 30 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col gap-10 px-10 items-center justify-center">
      {/* Web3 Gradient Background Layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #5e00ff55, transparent),
            radial-gradient(circle at 80% 30%, #ff00ff44, transparent),
            radial-gradient(circle at 50% 80%, #4b008166, transparent),
            linear-gradient(135deg, #000000, #180029, #2a0052, #4b0081)
          `,
        }}
      />

      {/* Moving glowing blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 blur-[150px] rounded-full"
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-fuchsia-600 opacity-20 blur-[150px] rounded-full"
        animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background logo image (low opacity) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "420px 420px",
        }}
      />

      <FloatingShape top="15%" left="10%" delay={0}>
        <img
          src="/shapes/laptop.svg"
          alt="Laptop Shape"
          className="w-full h-full opacity-30"
        />
      </FloatingShape>

      {/* Square */}
      <FloatingShape size={60} top="30%" left="75%" delay={1.5}>
        <div className="w-full h-full border-2 border-purple-400 rounded-md" />
      </FloatingShape>

      {/* Circle */}
      <FloatingShape size={50} top="65%" left="20%" delay={2.5}>
        <div className="w-full h-full border-2 border-fuchsia-400 rounded-full" />
      </FloatingShape>

      {/* Code brackets */}
      <FloatingShape size={90} top="70%" left="60%" delay={0.8}>
        <div className="text-purple-300 text-6xl font-bold">{`</>`}</div>
      </FloatingShape>

      {/* 3D cube outline */}
      <FloatingShape size={70} top="40%" left="50%" delay={3}>
        <div className="w-full h-full border border-purple-300 rotate-12" />
      </FloatingShape>

      {/* Rising Logo Animation */}
      <motion.img
        src={comm}
        alt="TechLift Logo"
        width={480}
        height={480}
        initial={{ y: 300, opacity: 0, rotate: -20, scale: 0.6 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="relative drop-shadow-2xl"
      />

      {/* Floating Logo */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="-mt-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 2 }}
          className="text-white font-bold text-4xl md:text-6xl tracking-wide text-center"
        >
          Welcome to TechLift
        </motion.h1>
      </motion.div>

       {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="z-20 "
        >
          <Link
           href="./home"
            className="px-8 py-3 bg-white hover:shadow-2xl text-text rounded-xl text-lg shadow-lg cursor-pointer"
           
          >
            Let's Explore →
          </Link>
        </motion.div>
      )}


      {/* Cinematic fade-in overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-black"
      />
    </div>
  );
}
