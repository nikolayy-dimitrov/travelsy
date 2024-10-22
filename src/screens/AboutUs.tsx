import { IconArrowRight, IconSend2 } from "@tabler/icons-react";
import AboutImageMap from "../assets/AltAboutImage.jpg";
import AboutImageLuggage from "../assets/AboutImage2.png";
import AboutImageTraveller from "../assets/AboutImage3.jpg";

export const AboutUs = () => {
    return (
        <section id="aboutus" className="relative overflow-hidden flex flex-col items-center justify-center mb-20">
            <div className="bg-white shadow-2xl shadow-gray-300 max-lg:rounded-2xl lg:rounded-full px-8 py-6 w-[80%] max-md:w-[80%] max-lg:w-[40%]">
                <form className="lg:flex max-lg:space-y-4 gap-4 justify-between">
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
                        className="flex bg-primary-100 text-white gap-2 items-center px-6 max-lg:py-2 rounded-full
                        font-Mulish font-extrabold hover:brightness-105"
                    >
                        Search <IconArrowRight />
                    </button>
                </form>
            </div>
            <div className="pb-10 w-[80%] mt-20 lg:flex">
                <div
                    className="absolute left-0 -z-10
                    bg-gradient-to-b from-primary-100 to-white w-[203px] h-[545px] -rotate-45"></div>
                <div className="grid grid-cols-2 -mr-20">
                    <div className="row-span-2">
                        <img src={AboutImageMap}
                             className="border-4 border-white shadow-xl rounded-full w-[350px] h-[514px]"/>
                    </div>
                    <img src={AboutImageLuggage} className="w-[160px] h-[207px]"/>
                    <img src={AboutImageTraveller}
                         className="border-4 border-white shadow-xl rounded-full w-[160px] h-[255px]"/>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="font-Grypen text-3xl text-primary-100">
                        Get About Us
                    </h3>
                    <h2 className="font-SpaceGrotesk font-bold text-4xl leading-tight mt-2">
                        More About Travelsy
                    </h2>
                    <p className="text-sm text-gray-300 mt-6">
                        Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo.<br/>
                        Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In<br/>
                        arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler<br/>
                        felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae<br/>
                        nunc sed velit.
                    </p>
                    <p className="text-sm mt-2 text-gray-300">
                        Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc<br/>
                        eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas<br/>
                        maecenas pharetra convallis posuere morbi.
                    </p>
                    <div className="space-y-2 mt-6">
                        <div className="flex items-center justify-start gap-2">
                            <IconSend2 className="text-primary-100"/>
                            <span className="font-semibold">
                                Donec adipiscing tristique risus nec feugiat in
                            </span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <IconSend2 className="text-primary-100"/>
                            <span className="font-semibold">
                                Donec adipiscing tristique risus nec feugiat in
                            </span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <IconSend2 className="text-primary-100"/>
                            <span className="font-semibold">
                                Donec adipiscing tristique risus nec feugiat in
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-10 flex bg-primary-100 text-white gap-2 items-center px-6 py-3 rounded-full
                        font-Mulish font-extrabold hover:brightness-105"
                    >
                        Read More <IconArrowRight/>
                    </button>
                </div>
            </div>
        </section>
    );
};
