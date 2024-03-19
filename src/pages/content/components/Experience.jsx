import React, { useRef } from "react";
import EXPERIENCE_JSON from "../../../assets/data/experience.json";
import { Dot, MoveUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

const Experience = ({ section }) => {
  const width = window.innerWidth;
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: width < 768 ? 0.5 : 2,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section id='experience' ref={section[1].ref} className='mt-24 relative'>
      <div className='sticky lg:hidden top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 '>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
      </div>
      <motion.ol className='group/list' variants={container} initial='hidden' animate={isInView ? "show" : ""} ref={experienceRef}>
        {EXPERIENCE_JSON?.map((experience) => (
          <motion.li className='mb-12 ' key={experience?.year} variants={item}>
            <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
              <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                {experience?.year}
              </header>
              <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug '>
                  <div>
                    <p
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400  group/link text-base'
                      aria-label={`${experience?.role} label`}
                      draggable={false}
                    >
                      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                      <span className='flex'>
                        {experience?.role} <Dot /> {experience?.company}
                      </span>
                    </p>
                  </div>
                </h3>
                <p className='mt-2 text-sm leading-normal'>{experience?.description}</p>
                <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                  {experience?.techStack?.map((tech) => (
                    <li className='mr-1.5 mt-2' key={tech}>
                      <div className='flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400 '>
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
      <div className='mt-12'>
        <a
          className='inline-flex items-baseline leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 font-semibold group/link text-base'
          href='/NiranjanPatil.pdf'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='View Full Resume (opens in a new tab)'
          download='NiranjanPatil'
        >
          <span>
            View Full Resume
            <MoveUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
