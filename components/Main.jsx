import { useState } from "react";
import { motion, useScroll, useAnimationFrame } from "framer-motion";
import Longcard from './Longcard.jsx'

function ParallaxText({ description, start, side, url, width, height }) {

  const [x, setX] = useState(0);
  const { scrollY } = useScroll();

  useAnimationFrame(() => {
    if (side > 0) setX(Math.min(side * scrollY.get() - start, window.innerWidth / 6)); // Add Offset of Card
    if (side < 0) setX(Math.max(start + side * scrollY.get(), -window.innerWidth / 6));
  });

   return (
    <div className="text-primary text-8xl m-10">
      <motion.div animate={{ x }} transition={{ type: "spring" }}>
        <Longcard description={description} side={side} logoUrl={url} width={width} height={height}></Longcard>
      </motion.div>
    </div>
  );
}

export function Main() {
  return (
    <div className='h-full bg-gray-100'>
      {/* <!-- Scroll wrapper --> */}
      <div className='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
          <section className="overflow-clip">
            <ParallaxText description={'Tell an Engaging Story'} start={600} side={2} url={'/conneqt_card_1.png'} width={800} height={100}></ParallaxText>
            <ParallaxText description={'Turn Encounters Into Opportunities'} start={600} side={-2} url={'/conneqt_card_2.png'} width={290} height={100}></ParallaxText>
            <ParallaxText description={'Make Every Interaction Count'} start={600} side={2} url={'/conneqt_card.png'} width={800} height={100}></ParallaxText>
          </section>
        </div>
      </div>
      {/* <!-- Fixed sidebar --> */}
      <div className='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
