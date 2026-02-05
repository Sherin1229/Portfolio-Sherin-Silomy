import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import CV from '../assets/Sherin_Silomy_CV.pdf'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
        <div className='w-full max-w-full px-6 md:px-8 flex flex-col md:flex-row items-center justify-between'>
            {/* Left side content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                    Hi, I'm <span className='text-gold'>Sherin Silomy</span>
                </h1>
                <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>IT Undergraduate</h2>
                <p className='text-lg text-gray-300 mb-8'>Information Technology undergraduate with a passion for technology and innovation.
                Skilled in adapting to new tools and concepts.
                Aspires to contribute to meaningful and impactful projects.</p>
                <div className='flex space-x-4'>
                    <a href={CV} download className='px-6 py-3 bg-gold rounded-lg font-medium hover:bg-gold-700 transition duration-300'>
                        <button className='flex'> <FaDownload className='w-5 h-5 mr-2'/> Download CV </button>
                    </a>
                    <a href='#contact' className='px-6 py-3 border border-gold rounded-lg font-medium hover:bg-gold/20 transition decoration-gold'>Contact Me</a>
                </div>
            </div>

            {/* Right side image */}
            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-gold to-amber-400 opacity-70'>
                        <motion.img
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                        src={assets.profileImg} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Hero