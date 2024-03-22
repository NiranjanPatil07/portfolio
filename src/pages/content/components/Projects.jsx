import React, { useRef } from "react";
import PROJECT_DATA from "../../../assets/data/project.json";
import { MoveUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};
const Projects = ({ section }) => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });
  return (
    <section id='projects' ref={section[2].ref} className='mt-32 pb-12 lg:pb-0 relative'>
      <div className='sticky lg:hidden top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 '>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
      </div>
      <motion.ul className='group/list' variants={container} initial='hidden' animate={isInView ? "show" : ""} ref={projectsRef}>
        {PROJECT_DATA?.map(
          (project) =>
            project?.display && (
              <motion.li variants={item} className='mb-12' key={project?.name}>
                <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                  <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                  <div className='z-10 sm:order-2 sm:col-span-6'>
                    <h3>
                      <a
                        className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-400 focus-visible:text-sky-400  group/link text-base'
                        href={project?.link}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label={project?.name}
                      >
                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                        <span>
                          {project?.name}
                          <MoveUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                        </span>
                      </a>
                    </h3>
                    <p className='mt-2 text-sm leading-normal'>{project?.description}</p>
                  </div>
                  <img
                    alt={`${project?.name} image`}
                    loading='lazy'
                    width='200'
                    height='48'
                    decoding='async'
                    data-nimg='1'
                    className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                    // style='color:transparent'
                    src={project?.image}
                  />
                </div>
              </motion.li>
            )
        )}
      </motion.ul>
    </section>
  );
};

export default Projects;
