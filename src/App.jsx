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

  return (
    <div className='h-screen w-full  relative flex flex-col antialiased '>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 z-10'>
        <div className='lg:flex lg:justify-between lg:gap-4 select-none'>
          <Header section={section} />
          <Content section={section} />
        </div>
      </div>
      <BackgroundBeams className='fixed z-0' />
      <Analytics />
    </div>
  );
}

export default App;
