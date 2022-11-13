import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import Card from './Card.jsx'

function ParallaxText({ start, side }) {

  const [x, setX] = useState(0);
  const { scrollY } = useScroll();

  useAnimationFrame(() => {
    if (side > 0) setX(Math.min(side * scrollY.get() - start, 400));
    if (side < 0) setX(Math.max(start + side * scrollY.get(), 400));
  });

   return (
    <div className="text-primary text-8xl m-10">
      <motion.div animate={{ x }} transition={{ type: "spring" }}>
        <Card>Hello</Card>
      </motion.div>
    </div>
  );
}

export function Main() {
  return (
    <div className='h-screen bg-highlight'>
      {/* <!-- Scroll wrapper --> */}
      <div className='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
          <section>
            <ParallaxText start={250} side={2}>Frame One</ParallaxText>
            <ParallaxText start={1750} side={-2}>Frame Two</ParallaxText>
            <ParallaxText start={1600} side={2}>Frame Three</ParallaxText>
          </section>
        </div>
      </div>
      {/* <!-- Fixed sidebar --> */}
      <div className='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
