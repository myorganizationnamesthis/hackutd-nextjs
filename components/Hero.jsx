import React from 'react';
import { useRouter } from "next/router"

export function Hero({ heading, message }) {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='p-5 text-highlight mt-[-10rem] z-10'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='text-background bg-highlight px-8 py-2 border border-accent rounded hover:bg-primary duration-300' onClick={() => router.push("/auth")}>Book</button>
      </div>
    </div>
  );
};