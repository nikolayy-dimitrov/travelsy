import { IconArrowRight } from "@tabler/icons-react";
import AboutImageMap from "../assets/AltAboutImage.jpg";
import AboutImageLuggage from "../assets/AboutImage2.png";
import AboutImageTraveller from "../assets/AboutImage3.jpg";

export const AboutUs = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center">
            <div className="bg-white shadow-2xl shadow-gray-300 rounded-full px-8 py-6 w-[80%]">
                <form className="md:flex gap-4 justify-between">
                    <input
                        placeholder="Type Of Venue*"
                        className="rounded-full border border-primary-100 border-opacity-30 py-2 pl-4 pr-12 placeholder-secondary-100"
                    />
                    <input
                        placeholder="Pick A Date*"
                        className="rounded-full border border-primary-100 border-opacity-30 py-2 pl-4 pr-12 placeholder-secondary-100"
                    />
                    <input
                        placeholder="Zip Code*"
                        className="rounded-full border border-primary-100 border-opacity-30 py-2 pl-4 pr-12 placeholder-secondary-100"
                    />
                    <button
                        type="submit"
                        className="flex bg-primary-100 text-white gap-2 items-center px-6 rounded-full
                        font-Mulish font-extrabold hover:brightness-105"
                    >
                        Search <IconArrowRight />
                    </button>
                </form>
            </div>
            <div className="bg-white w-[80%] mt-20 flex">
                <div className="grid grid-cols-2">
                    <div className="row-span-2">
                        <img src={AboutImageMap} className="border-4 border-white shadow-xl rounded-full w-[350px] h-[514px]" />
                    </div>
                    <img src={AboutImageLuggage} className="w-[160px] h-[207px]" />
                    <img src={AboutImageTraveller} className="border-4 border-white shadow-xl rounded-full w-[160px] h-[255px]" />
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};
