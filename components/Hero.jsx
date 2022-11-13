import React from 'react';
import { useRouter } from "next/router"

export function Hero({ heading, message }) {
  const router = useRouter();
  return (
    <div className='z-[-5] flex items-center justify-center h-screen bg-center bg-cover custom-img'>
      <div className='block absolute top-[4.5rem] h-screen left-0 right-0 bottom-0 bg-black opacity-60' />
      {/* Overlay */}
      <div className='p-5 text-highlight mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='z-[100] text-background bg-highlight px-8 py-2 border border-accent rounded hover:bg-primary duration-300' onClick={() => router.push("/auth")}>Get Started</button>
      </div>
    </div>
  );
};