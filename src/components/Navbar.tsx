import {
    IconPhoneCall,
    IconMailFilled,
    IconSearch,
    IconUserFilled,
    IconBrandFacebookFilled,
    IconBrandYoutubeFilled, IconBrandInstagram, IconBrandXFilled
} from '@tabler/icons-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-30">
            {/* Top bar */}
            <div className="bg-primary-100 text-white">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <IconPhoneCall size={20} fill="white" />
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
                        Travel<span className="text-secondary-100">sy</span>
                    </div>
                    <div className="flex items-center space-x-6 font-Mulish font-bold">
                        <a href="#" className="text-gray-300 hover:text-primary-100">Home</a>
                        <a href="#" className="text-gray-300 hover:text-primary-100">About Us</a>
                        <a href="#" className="text-gray-300 hover:text-primary-100">Host A Venue</a>
                        <a href="#" className="text-gray-300 hover:text-primary-100">Hotels</a>
                        <a href="#" className="text-gray-300 hover:text-primary-100">Blog</a>
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
                </div>
            </div>
        </nav>
    );
};