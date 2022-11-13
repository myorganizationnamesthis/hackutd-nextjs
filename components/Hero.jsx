import React from 'react';

export function Hero ({heading, message}) {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute left-0 right-0 bottom-0 z-[2]' />
      <div className='p-5 text-highlight z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='text-background bg-highlight px-8 py-2 border border-accent rounded hover:bg-primary duration-300'>Book</button>
      </div>
    </div>
  );
};