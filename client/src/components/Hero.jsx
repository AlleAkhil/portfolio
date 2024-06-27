import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentAttachOutline } from "react-icons/io5";

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Akhil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web solutions that <br className="sm:block hidden" />
            boost engagement and productivity.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/13qc0u6k2dD-le3JLX5Ag9ucNytjPxVfu/view?usp=drive_link" // Replace with actual path to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary py-3 px-6 sm:px-3 rounded-lg text-white text-sm font-semibold shadow-md hover:bg-opacity-90 transition duration-300 flex items-center z-20"
            >
              <IoDocumentAttachOutline className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhilalle" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary py-3 px-6 sm:px-3 rounded-lg text-white text-sm font-semibold shadow-md hover:bg-opacity-90 transition duration-300 flex items-center z-20 mt-4 sm:mt-0"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/AlleAkhil" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary py-3 px-6 sm:px-3 rounded-lg text-white text-sm font-semibold shadow-md hover:bg-opacity-90 transition duration-300 flex items-center z-20 mt-4 sm:mt-0"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
