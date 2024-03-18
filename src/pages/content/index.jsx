import React from "react";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
const Content = ({ section }) => {
  return (
    <>
      <div className='pt-24 lg:w-1/2 lg:py-24'>
        <motion.section
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 0.3,
          }}
          id='about'
          className='space-y-4 relative'
          ref={section[0].ref}
        >
          <div className='sticky lg:hidden top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 '>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
          </div>
          <p>
            I'm an experienced software developer with over two years of experience, specializing in working within fast-paced startup
            environments. With a solid foundation in computer science and a track record of success in dynamic settings, I bring a unique
            blend of technical expertise, adaptability, and a knack for quickly grasping and learning new concepts to every project I
            undertake.
          </p>
          <p>
            My journey in software development has been marked by a commitment to pushing boundaries and embracing emerging technologies. I
            constantly seek to redefine industry standards. With expertise in TypeScript, Redux, Material UI, and Next.js, I thrive in
            collaborative environments where creativity meets functionality.
          </p>
          <p>
            Beyond coding, I love playing football and traveling, which inspire me both on and off the field. With a collaborative mindset
            and a focus on continuous learning, I strive to deliver exceptional solutions.
          </p>
        </motion.section>
        <Experience section={section} />
        <Projects section={section} />
      </div>
    </>
  );
};

export default Content;
