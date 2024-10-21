import HeroBGImg from "../assets/MapBG.png";
import HeroImgTop from "../assets/Hero Image 1.png";
import HeroImgBot from "../assets/Hero Image 2.png";
import HeroImgRight from "../assets/Hero Image 3.png";
import { IconCalendarEvent, IconSend } from "@tabler/icons-react";

export const Home = () => {
    return (
        <section id="home" className="relative flex justify-center items-center w-full h-screen md:mt-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroBGImg}
                    alt="Background"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex justify-between items-center w-[80%]">

                {/* Text Section */}
                <div className="flex flex-col items-start justify-between space-y-4 max-w-lg">
                    <h3 className="font-Grypen text-3xl">
                        Relax & Enjoy the Vacation
                    </h3>
                    <h1 className="font-SpaceGrotesk font-bold text-5xl leading-tight">
                        Choose <span className="text-primary-100">Travelsy</span> To<br />
                        Book Your Hotel
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed.<br />
                        Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames<br />
                        quam fusce convallis eget pulvinar.
                    </p>
                    <button
                        className="bg-primary-100 font-Mulish font-extrabold text-white md:px-6 max-md:px-2 py-3 rounded-full flex space-x-2 items-center hover:brightness-105"
                    >
                        <span>Make Reservation</span>
                        <IconCalendarEvent size={24} />
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative flex flex-col items-center space-y-4 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 max-md:hidden">
                        <img src={HeroImgTop} alt="Top Image" className="object-cover rounded-lg" />
                        <img src={HeroImgRight} alt="Right Image" className="object-cover rounded-lg row-span-2 mt-20" />
                        <img src={HeroImgBot} alt="Bottom Image" className="object-cover rounded-lg" />
                    </div>

                    {/* Circular Element */}
                    <div className="absolute md:z-20 transform translate-x-[50%] translate-y-[-50%] top-1/2 right-1/2">
                        <div
                            className="relative w-[150px] h-[150px] bg-primary-100 text-white rounded-full flex items-center justify-center">

                            {/* Inner Icon */}
                            <div className="absolute bg-white rounded-full p-7">
                                <IconSend className="text-primary-100" size={28} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
