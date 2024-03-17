import { Github, Home, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { Fragment, useEffect, useState } from "react";

// const NAV_ITEMS = ["about", "experience", "projects"];
const SOCIAL_ITEMS = [
  { to: "https://github.com/NiranjanPatil07", icon: <Github />, label: "Home" },
  { to: "https://twitter.com/heyniranjanp", icon: <Twitter />, label: "Search" },
  { to: "https://www.linkedin.com/in/heyniranjanpatil/", icon: <Linkedin />, label: "Playlist" },
  { to: "https://www.linkedin.com/in/heyniranjanpatil/", icon: <Instagram />, label: "Playlist" },
];

const Header = ({ section }) => {
  const [activeLink, setActiveLink] = useState(0);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const sections = document.querySelectorAll("section");
  //       sections.forEach((section, index) => {
  //         const top = section.offsetTop; // Adjust this value as needed
  //         const bottom = top + section.clientHeight;
  //         const scrollPosition = window.scrollY;
  //         console.log(top, bottom, scrollPosition);
  //         if (scrollPosition >= top && scrollPosition < bottom) {
  //           setActiveLink(index);
  //         }
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionInView = section.find(({ ref }) => {
        const { offsetTop, offsetHeight } = ref.current;
        return scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop - 100 + offsetHeight;
      });
      if (sectionInView) {
        setActiveLink(sectionInView.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section]);

  const scrollToSection = (id) => {
    const SELECTED_SECTION = section.find((section) => section.id === id);
    if (SELECTED_SECTION && SELECTED_SECTION.ref.current) {
      SELECTED_SECTION.ref.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    }
  };
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 select-none'>
      <div>
        <h1 class='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>Niranjan Patil</h1>
        <h2 class='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Frontend Developer</h2>
        <p class='mt-4 max-w-xs leading-normal text-slate-400'>An experienced web developer skilled in React JS and React Native</p>
        <nav class='nav hidden lg:block' aria-label='In-page jump links'>
          <ul class='mt-16 w-max'>
            {section?.map(({ id, label }) => (
              <li key={id}>
                <p
                  onClick={() => scrollToSection(id)}
                  class={`group flex items-center py-3 ${activeLink === id ? "active" : ""}`}
                  key={id}
                  href={`#${id}`}
                >
                  <span class='nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                  <span class='nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                    {label}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex space-x-6 mt-8'>
        {SOCIAL_ITEMS?.map(({ icon }) => (
          <Fragment key={icon}>
            {React.cloneElement(icon, {
              strokeWidth: 1.5,
              className: "text-slate-500 hover:text-teal-300 cursor-pointer",
            })}
          </Fragment>
        ))}
      </div>
    </header>
  );
};

export default Header;
