import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import Card from './Card.jsx'

function ParallaxText({ children, baseVelocity = 10 }) {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 100, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

   return (
    <div className="parallax text-primary text-9xl">
      <motion.div className="scroller" style={{ x }}>
        <Card>{children}</Card>
      </motion.div>
    </div>
  );
}

export function Main() {
  return (
    <div className='h-screen bg-white'>
      {/* <!-- Scroll wrapper --> */}
      <div className='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
          <section>
            <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
            <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
          </section>
        </div>
      </div>
      {/* <!-- Fixed sidebar --> */}
      <div className='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
