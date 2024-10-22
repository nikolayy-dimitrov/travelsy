import AnchorLink from "react-anchor-link-smooth-scroll";
import {
    IconPhoneCall,
    IconMailFilled,
    IconSearch,
    IconUserFilled,
    IconBrandFacebookFilled,
    IconBrandYoutubeFilled, IconBrandInstagram, IconBrandXFilled,
    IconMenu2, IconMenuDeep
} from '@tabler/icons-react';
import useMediaQuery from "../useMediaQuery.ts";
import { useState } from "react";

export const Navbar = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-30">
            {/* Top bar */}
            <div className="bg-primary-100 text-white max-md:hidden">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <IconPhoneCall size={20} fill="white" className="text-transparent" />
                            <span className="text-sm">+1 1234567890</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IconMailFilled size={20} />
                            <span className="text-sm">example@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-sm flex items-center justify-between gap-2">
                            <IconUserFilled className="bg-white rounded-full fill-primary-100 p-1" size={26} />
                            Login / Register
                        </button>
                        <div className="flex items-center space-x-2">
                            <a href="https://facebook.com" target="_blank"><IconBrandFacebookFilled className="bg-white rounded-full fill-primary-100 p-1" size={26} /></a>
                            <a href="https://x.com" target="_blank"><IconBrandXFilled className="bg-white rounded-full fill-primary-100 p-1" size={26} /></a>
                            <a href="https://youtube.com" target="_blank"><IconBrandYoutubeFilled className="bg-white rounded-full fill-primary-100 p-1" size={26} /></a>
                            <a href="https://instagram.com" target="_blank"><IconBrandInstagram className="bg-white rounded-full fill-primary-100 p-1" size={26} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold font-SpaceGrotesk text-primary-100">
                        <AnchorLink href="/home">
                            Travel<span className="text-secondary-100">sy</span>
                        </AnchorLink>
                    </div>
                    {isAboveMediumScreens ? (
                        <>
                            <div className="flex items-center space-x-6 font-Mulish font-bold">
                                <AnchorLink href="/home" className="text-gray-300 hover:text-primary-100">Home</AnchorLink>
                                <AnchorLink href="/aboutus" className="text-gray-300 hover:text-primary-100">About Us</AnchorLink>
                                <AnchorLink href="/booking" className="text-gray-300 hover:text-primary-100">Hotels</AnchorLink>
                                <AnchorLink href="/venue" className="text-gray-300 hover:text-primary-100">Host A Venue</AnchorLink>
                                <AnchorLink href="/news" className="text-gray-300 hover:text-primary-100">Blog</AnchorLink>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button>
                                    <IconSearch size={42} className="border-2 rounded-full p-2 border-primary-100 text-primary-100 hover:brightness-90" />
                                </button>
                                <button className="bg-primary-100 font-Mulish font-extrabold text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:brightness-105">
                                    <span>Contact Us</span>
                                    <IconPhoneCall size={20} fill="white" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <button
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            <IconMenu2 className="text-primary-100"/>
                        </button>
                        )}
                </div>
            </div>

            {/* Mobile menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 top-0 z-30 h-full w-full bg-gray-500 bg-gradient-to-r from-primary-100/70 to-primary-100/70">
                    {/* Close menu button */}
                    <div className="flex justify-end py-5 px-6">
                        <button onClick={toggleMenu}>
                            <IconMenuDeep className="text-gray-500" />
                        </button>
                    </div>
                    {/* Menu list */}
                    <div className="flex flex-col items-center mt-20 gap-10 text-gray-500 text-2xl font-bold font-Mulish">
                        <AnchorLink href="/home" onClick={toggleMenu}>Home</AnchorLink>
                        <AnchorLink href="/aboutus" onClick={toggleMenu}>About Us</AnchorLink>
                        <AnchorLink href="/booking" onClick={toggleMenu}>Hotels</AnchorLink>
                        <AnchorLink href="/venue" onClick={toggleMenu}>Host A Venue</AnchorLink>
                        <AnchorLink href="/news" onClick={toggleMenu}>Blog</AnchorLink>
                    </div>
                </div>
            )}
        </nav>
    );
};