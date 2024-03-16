"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { title: "Home", href:"/"},
    { title: "Projects", href:"/"},
    { title: "Events", href:"/"},
    { title: "About Us", href:"/"},
    { title: "Contact", href:"/"},
]

const Navbar = () => {

    const [active, setActive] = useState(navLinks[0].title)
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    }

    const menuVar = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [ 0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [ 0.22, 1, 0.36, 1],
            }
        }
    }

    const containerVar = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        }
    }

    return (
        <header>
            {/* <div className='fixed left-0 top-0 w-full p-10 '> */}
                <div className='p-10'>
                <div className='flex h-full flex-col'>
                    <div className='flex justify-between'>
                        <h1 className='text-lg text-white'>InSigNis.In</h1>
                        <div className='hidden md:block sm:block'>
                            <div className='flex gap-5'>
                                {navLinks.map((link, index) => (
                                    <Link 
                                        key={index} 
                                        onClick={() => setActive(link.title)}
                                        className={`${active === link.title ? "" : "hover: opacity-50"}
                                        relative rounded-full transition px-3 py-1.5 text-md font-medium text-white outline-2 focus-visibility:outline`} 
                                        href={link.href}
                                    >
                                        {active === link.title && (
                                            <motion.div 
                                                layoutId='active-pill' 
                                                style={{ borderRadius: 9999 }}
                                                transition={{ type: "spring", duration: 0.6 }}
                                                className='absolute inset-0 bg-white' 
                                            />
                                        )}
                                        <span className='relative z-10 mix-blend-exclusion'>{link.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='sm:hidden'>
                            <p onClick={toggleMenu} className='cursor-pointer text-md text-white'>Menu</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <AnimatePresence>
                { open && (
                    <motion.div 
                        variants={menuVar}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className='fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10'
                    >
                        <div className='flex h-full flex-col'>
                            <div className='flex justify-between'>
                                <h1 className='text-lg text-black'>Portfolio</h1>
                                <p onClick={toggleMenu} className='cursor-pointer text-md text-black'>Close</p>
                            </div>
                            <motion.div 
                                variants={containerVar}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className='flex flex-col h-full justify-center items-center gap-4'
                            >
                                {
                                    navLinks.map((link, index) => {
                                        return (
                                            <div key={index} className='overflow-hidden'>
                                                <MobileLink 
                                                    title={link.title} 
                                                    href={link.href} 
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar;

const linkVar = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [ 0.37, 0, 0.63, 1]
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1]
        }
    }
}

const MobileLink = ({title, href}) => {
    return (
        <motion.div 
            variants={linkVar}
            className='text-3xl uppercase text-black'
        >
            <Link href={href}>
                {title}
            </Link>
        </motion.div>
    )
}