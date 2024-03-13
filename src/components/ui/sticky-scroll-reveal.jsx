'use client';
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import '../../app/globals.css';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className='h-[30rem] overflow-y-auto flex md:flex-row bg-transparent justify-center relative space-x-20 rounded-md p-2 md:p-10 custom-scrollbar'
      ref={ref}
    >
      <div className='div relative flex items-start px-4'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='font-mirtha text-7xl md:text-8xl leading-none tracking-wide bg-gradient-purple text-transparent bg-clip-text'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-lg text-gray-400 font-satoshi leading-tight max-w-xl mt-5'
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <motion.div
        className={cn(
          'sticky top-10 bg-transparent hidden md:block',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
