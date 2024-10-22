import {
    IconBrandFacebookFilled,
    IconBrandInstagram,
    IconBrandXFilled,
    IconBrandYoutubeFilled, IconMailFilled, IconMapPinFilled, IconPhoneCall,
} from "@tabler/icons-react";

import InstaImage1 from "../assets/FooterInstagramImage1.jpg";
import InstaImage2 from "../assets/FooterInstagramImage2.jpg";
import InstaImage3 from "../assets/FooterInstagramImage3.jpg";
import InstaImage4 from "../assets/FooterInstagramImage4.jpg";
import InstaImage5 from "../assets/FooterInstagramImage5.jpg";
import InstaImage6 from "../assets/FooterInstagramImage6.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Footer = () => {
    return (
        <footer id="footer" className="w-full mx-auto lg:mt-48 bg-gradient-to-r from-primary-100/10 to-primary-100/10 relative">
            <div className="w-[80%] mx-auto relative">
                {/* Top div with background image */}
                <div
                    className="max-lg:hidden mx-auto bg-primary-100 rounded-3xl p-10 flex justify-between items-center absolute top-0 left-0 right-0 -mt-20 z-10">
                    <h2 className="text-white font-SpaceGrotesk text-3xl leading-[1.3]">
                        Subscribe for<br/>
                        Latest Newsletter
                    </h2>
                    <form className="flex gap-6">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="pr-32 pl-6 rounded-full placeholder-primary-100 text-primary-100 text-content font-Mulish font-semibold"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-primary-100 px-9 py-3 rounded-full font-Mulish font-extrabold"
                        >Subscribe
                        </button>
                    </form>
                </div>

                {/* Gradient background div */}
                <div
                    className="grid lg:grid-cols-4 md:grid-cols-2 max-lg:grid-cols-1 max-md:space-y-16 gap-8 md:pt-40 pt-24 relative z-0">
                    <div className="space-y-6">
                        <AnchorLink href="/home">
                            <h3 className="mb-4 font-SpaceGrotesk text-primary-100 text-5xl">Travel<span className="text-secondary-100">sy</span></h3>
                        </AnchorLink>
                        <p className="text-content font-Mulish font-semibold text-gray-300 text-sm mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" className="rounded-full bg-primary-100 p-2"><IconBrandFacebookFilled className="fill-white" /></a>
                            <a href="https://X.com" target="_blank" className="rounded-full bg-primary-100 p-2"><IconBrandXFilled className="fill-white" /></a>
                            <a href="https://youtube.com" target="_blank" className="rounded-full bg-primary-100 p-2"><IconBrandYoutubeFilled className="fill-white" /></a>
                            <a href="https://instagram.com" target="_blank" className="rounded-full bg-primary-100 p-2"><IconBrandInstagram className="fill-white text-primary-100" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-primary font-medium font-SpaceGrotesk text-gray-100 text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-content font-Mulish font-semibold text-gray-300">
                            <li><AnchorLink href="/home" className="text-gray-300 hover:text-primary-100">Home</AnchorLink></li>
                            <li><AnchorLink href="/aboutus" className="text-gray-300 hover:text-primary-100">About Us</AnchorLink></li>
                            <li><AnchorLink href="/booking" className="text-gray-300 hover:text-primary-100">Hotels</AnchorLink></li>
                            <li><AnchorLink href="/venue" className="text-gray-300 hover:text-primary-100">Host A Venue</AnchorLink></li>
                            <li><AnchorLink href="/news" className="text-gray-300 hover:text-primary-100">Blog</AnchorLink></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-primary font-medium font-SpaceGrotesk text-gray-100 text-lg mb-4">Get In Touch</h3>
                        <ul className="space-y-4 text-content font-Mulish font-semibold text-gray-300">
                            <li className="flex items-center gap-4">
                                <div className="rounded-full bg-primary-100 p-2">
                                    <IconPhoneCall className="text-transparent fill-white"/>
                                </div>
                                <span className="font-Mulish font-semibold text-gray-300">
                                    +1 12345 67890
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="rounded-full bg-primary-100 p-2">
                                    <IconMailFilled className="text-white"/>
                                </div>
                                <span className="font-Mulish font-semibold text-gray-300">
                                    example@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="rounded-full bg-primary-100 p-2">
                                    <IconMapPinFilled className="text-transparent fill-white"/>
                                </div>
                                <span className="font-Mulish font-semibold text-gray-300">
                                    1014 N Main St, Miami, Oklahoma, 74354, United States
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-primary font-medium font-SpaceGrotesk text-gray-100 text-lg mb-4">Follow Us On @instagram</h3>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage1 } className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage2 } className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage3 } className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage4 } className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage5 } className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="container w-[80px] h-[80px] relative">
                                <img src={ InstaImage6 } className="w-full h-full object-cover rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-6 bg-primary-100 mt-12">
                <p className="text-white font-Mulish font-semibold">© 2023 All rights reserved</p>
            </div>
        </footer>
    );
};
