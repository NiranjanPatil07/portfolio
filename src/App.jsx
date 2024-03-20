import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import "./App.css";
import { BackgroundBeams } from "./components/background-beams";
import Content from "./pages/content";
import Header from "./pages/header";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const section = [
    { id: "about", label: "About", ref: useRef(null) },
    { id: "experience", label: "Experience", ref: useRef(null) },
    { id: "projects", label: "Projects", ref: useRef(null) },
  ];

  const Cursor = (props) => {
    const cursorX = useMotionValue(-20);
    const cursorY = useMotionValue(-20);

    const springConfig = {
      damping: 30,
      stiffness: 800,
      mass: 0.1,
    };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    React.useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }, []);
    return (
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className='fixed z-[99999] w-0 h-0 bg-sky-400'
      >
        {window.innerWidth > 768 ? (
          <motion.div
            layoutId='cursor'
            className='absolute w-3 h-3 -top-2 -left-2 bg-sky-400 pointer-events-none rounded-full'
          ></motion.div>
        ) : null}
      </motion.div>
    );
  };
  return (
    <div className='h-screen w-full  relative flex flex-col antialiased '>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 z-10'>
        <div className='lg:flex lg:justify-between lg:gap-4 select-none'>
          <Header section={section} />
          <Content section={section} />
        </div>
      </div>
      <BackgroundBeams className='fixed z-0' />
      <Cursor />
      <Analytics />
    </div>
  );
}

export default App;
