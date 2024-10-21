import BannerBackground from "../assets/BannerBackground.jpg";
import { IconArrowRight } from "@tabler/icons-react";

export const CallToActionBanner = () => {
    return (
        <section id="banner" className="relative h-[500px] w-full mt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={BannerBackground}
                    alt="Background"
                    className="object-cover w-full h-full object-[0%_70%]"
                />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full">
                <h2 className="font-SpaceGrotesk font-bold text-4xl text-white">
                    Are You Ready To Travel?<br/>
                    <span className="text-5xl">
                        Remember Us!
                    </span>
                </h2>
                <p className="mt-4 font-Mulish font-semibold text-sm text-white leading-loose max-md:hidden">
                    Amet nisl purus in mollis nunc. Blandit libero volutpat sed cras ornare. In pellentesque massa<br/>
                    placerat duis ultricies lacus sed. Nisl suscipit adipiscing bibendum est ultricies integer quis
                    auctor.<br/>
                    Id consectetur purus ut faucibus pulvinar elementum integer enim.
                </p>
                <button
                    type="submit"
                    className="flex mt-10 bg-white text-primary-100 gap-2 items-center py-3 px-6 rounded-full
                        font-Mulish font-extrabold hover:brightness-105"
                >
                    Book Now <IconArrowRight/>
                </button>
            </div>
        </section>
    );
};
