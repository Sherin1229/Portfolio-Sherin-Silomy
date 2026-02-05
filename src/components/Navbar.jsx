import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleHashOnLoad = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sections.includes(hash)) {
        setActiveSection(hash)
      }
    }

    handleHashOnLoad()

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(
          (entry) => entry.isIntersecting && sections.includes(entry.target.id)
        )
        if (!visible.length) return

        // Pick the section that is most visible in the viewport
        const mostVisible = visible.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        )

        const id = mostVisible.target.id
        if (sections.includes(id)) {
          setActiveSection(id)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const linkBaseClasses =
    'relative transition duration-300 group cursor-pointer'

  const getDesktopLinkClasses = (sectionId) =>
    `${linkBaseClasses} ${
      activeSection === sectionId ? 'text-gold' : 'text-white/80 hover:text-gold'
    }`

  const getUnderlineClasses = (sectionId) =>
    `absolute left-0 -bottom-1 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
      activeSection === sectionId ? 'w-full' : 'w-0'
    }`

  const getMobileLinkClasses = (sectionId) =>
    `${linkBaseClasses} ${
      activeSection === sectionId ? 'text-gold' : 'text-white/80 hover:text-gold'
    }`

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='w-full max-w-full px-6 md:px-8 flex justify-between items-center'>
            <div>
                <a href='#home' className='text-3xl font-bold text-white'>
                    Sherin
                    <span className='text-gold'>Silomy</span>
                    <div className='w-4 h-4 bg-gold rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href='#home' className={getDesktopLinkClasses('home')}>
                    <span>Home</span>
                    <span className={getUnderlineClasses('home')}></span>
                </a>
                <a href='#about' className={getDesktopLinkClasses('about')}>
                    <span>About</span>
                    <span className={getUnderlineClasses('about')}></span>
                </a>
                <a href='#skills' className={getDesktopLinkClasses('skills')}>
                    <span>Skills</span>
                    <span className={getUnderlineClasses('skills')}></span>
                </a>
                <a href='#projects' className={getDesktopLinkClasses('projects')}>
                    <span>Projects</span>
                    <span className={getUnderlineClasses('projects')}></span>
                </a>
                <a href='#experience' className={getDesktopLinkClasses('experience')}>
                    <span>Experience</span>
                    <span className={getUnderlineClasses('experience')}></span>
                </a>
                <a href='#contact' className={getDesktopLinkClasses('contact')}>
                    <span>Contact</span>
                    <span className={getUnderlineClasses('contact')}></span>
                </a>
            </div>

            {/* Mobile buttons */}
            <div className='md:hidden'>
                {
                    showMenu ?
                        <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />:
                        <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                }
            </div>
        </div>

        {/* Mobile Menus */}

        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#home'
                      className={getMobileLinkClasses('home')}
                    >
                        <span>Home</span>
                    </a>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#about'
                      className={getMobileLinkClasses('about')}
                    >
                        <span>About</span>
                    </a>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#skills'
                      className={getMobileLinkClasses('skills')}
                    >
                        <span>Skills</span>
                    </a>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#projects'
                      className={getMobileLinkClasses('projects')}
                    >
                        <span>Projects</span>
                    </a>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#experience'
                      className={getMobileLinkClasses('experience')}
                    >
                        <span>Experience</span>
                    </a>
                    <a
                      onClick={()=>setShowMenu(!showMenu)}
                      href='#contact'
                      className={getMobileLinkClasses('contact')}
                    >
                        <span>Contact</span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar