import React, { useState } from 'react'
import { brainwave } from "../assets"
import Button from './button';
import { useLocation } from 'react-router-dom';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from '../design/header/humbyrger-menu';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const NAVIGATION = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export default function Header() {
    const pathname = useLocation()
    const [toggleNavigation, setToggleNavigation] = useState(false);

    const handleToggleNavigation = () => {
        if(toggleNavigation) {
            setToggleNavigation(false);
            enablePageScroll()
        } else {
            setToggleNavigation(true)
            disablePageScroll()
        }
    }

    const handleClick = () => {
        if(!toggleNavigation) return

        enablePageScroll()
        setToggleNavigation(false)
    }

    return (
        <div className={`fixed top-0 left-0 z-50 border-b border-n-6 w-full ${toggleNavigation? 'bg-n-8': 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className='flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>

                <a href="#hero" className='block w-[12rem] xl:mr-8'>
                    <img src={brainwave} alt="BrainWave" width={190} height={40} />
                </a>

                <nav className={`${toggleNavigation ? 'flex' : 'hidden'} fixed left-0 right-0 bottom-0 top-[5rem] lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {NAVIGATION.map(item => (
                            <a href={item.url} key={item.id} onClick={handleClick}
                                className={`block relative text-2xl uppercase px-6 py-6 md:py-8 lg:-m-0.5 lg:text-sm lg:font-semibold 
                                    text-n-1 hover:text-color-1 transition-colors 
                                    ${item.onlyMobile ? 'lg:hidden' : ''} ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                                    lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                       
                    </div>
                    <HamburgerMenu />
                </nav>

                <a href="#signup" className='text-sm font-bold hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block uppercase'>
                    new account
                </a>
                <Button className='hidden lg:flex' href='#login'>sign in</Button>
                <Button className='ml-auto lg:hidden relative' px='px-3' onClick={() => setToggleNavigation((prev) => !prev)}>
                    <MenuSvg openNavigation={toggleNavigation} />
                </Button>
            </div>
        </div>
    )
}
