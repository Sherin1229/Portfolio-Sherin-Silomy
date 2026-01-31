import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='w-full max-w-full px-6 md:px-8'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-gold'>Me</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

            {/* Image & about */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* Image */}
                <div className='md:w-1/2 rounded-2xl ml-20 over'>
                    <motion.img
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}}
                    className='w-200 h-full object-cover'
                    src={assets.profileImg} alt="Profile" />
                </div>

                {/* Content */}
                <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, ease:'easeOut'}}
                viewport={{once: true}}
                className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        <p className='text-gray-300 mb-6'>My journey into Information Technology began with a strong curiosity about how applications and websites are built. Currently, I am a 3rd year undergraduate studying Information Technology at SLIIT, where I have gained a solid foundation in programming, software development, and problem-solving.</p>
                        <p className='text-gray-300 mb-6'>As I progressed, I started applying my knowledge through hands-on projects, both individually and as part of a team. I have worked on web applications using HTML, CSS, JavaScript, Java, PHP, and the MERN stack, focusing mainly on CRUD-based functionalities. These projects helped me understand real-world development workflows, teamwork, and the importance of writing clean, maintainable code while contributing specific modules to group projects.</p>
                        <p className='text-gray-300 mb-12'>Alongside web development, I developed a strong interest in mobile application development and UI/UX design. I have built mobile applications using Kotlin and Flutter, designed application interfaces using Figma, and developed complete applications from UI design to functionality. I am now seeking an internship opportunity where I can further enhance my skills, gain industry exposure, and contribute as a motivated and fast-learning IT undergraduate.</p>

                        {/* Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index)=>(
                                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                        <div className='text-gold text-4xl mb-4'>
                                            <data.icon />
                                        </div>
                                        <h3 className='text-xl font-semibold'>{data.title}</h3>
                                        <p className='text-gray-400     '>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default About