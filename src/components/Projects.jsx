import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: true, amount: 0.05}}
    id='projects'
    className='py-20 bg-dark-200 overflow-visible min-h-[400px]'
    >
        <div className='w-full max-w-full px-4 sm:px-6 md:px-8'>
            <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-gold'>Projects</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent works.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full min-w-0'>
                {/* Project card */}
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
            <div className='text-center mt-12'>
                <a href='#' className='inline-flex items-center px-6 py-3 border border-gold rounded-lg font-medium hover:bg-gold/20 transition duration-300'>
                    <span>View More Projects</span>
                    <FaArrowRight className='ml-2' />
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects