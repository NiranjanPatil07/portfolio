import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScreenReveal = () => {
  const [expanded, setExpanded] = useState(true);

  const leftDiv = {
    show: { opacity: 1, translateX: 0 },
    hidden: {
      duration: 2,
      opacity: 1,
      translateX: "-100%",
      transition: {
        delay: 0.5,
        type: "linear",
      },
    },
  };
  const rightDiv = {
    show: { opacity: 1, translateX: 0 },
    hidden: {
      duration: 2,
      opacity: 1,
      translateX: "100%",
      transition: {
        delay: 0.5,
        type: "linear",
      },
    },
  };
  return (
    <div className='flex absolute items-center justify-center h-screen w-full top-0 z-50'>
      <motion.div className='bg-slate-950 h-screen w-1/2' variants={leftDiv} initial='show' animate='hidden' />
      <AnimatePresence>
        {expanded ? (
          <motion.div
            initial={{ scaleY: 0, translateY: "-50%" }}
            animate={{ scaleY: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0 }}
            onAnimationComplete={() => setExpanded(false)}
            className='bg-slate-200/80 h-3/4 w-[1px] before:content=[""] after:content-[]'
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <motion.div className='bg-slate-950 h-screen w-1/2' variants={rightDiv} initial='show' animate='hidden' />
      {/* <div className='bg-zinc-950 w-1/2'></div> */}
    </div>
  );
};

export default ScreenReveal;
