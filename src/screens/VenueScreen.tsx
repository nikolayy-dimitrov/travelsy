import React, { useState } from 'react';
import WeddingEventImage from "../assets/WeddingEventImage.jpg";
import BirthdayEventImage from "../assets/BirthdayEventImage.jpg";
import CorporateEventImage from "../assets/CorporateEventImage.jpg";
import BabyShowerEventImage from "../assets/BabyShowerEventImage.jpg";
import TravellerReviewImageMain from "../assets/TravellerReviewImageMain.jpg";
import TravellerReviewImageSecondary from "../assets/TravellerReviewImageSecondary.jpg";
import TravellerReviewImageTertiary from "../assets/TravellerReviewImageTertiary.jpg";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface EventData {
    image: string;
    title: string;
}

const eventData: EventData[] = [
    {
        image: WeddingEventImage,
        title: "Wedding",
    },
    {
        image: BirthdayEventImage,
        title: "Birthday",
    },
    {
        image: CorporateEventImage,
        title: "Corporate",
    },
    {
        image: BabyShowerEventImage,
        title: "Baby Shower"
    }
];

interface EventCardProps {
    event: EventData;
}


const EventCard: React.FC<EventCardProps> = ({ event }) => (
    <div className="relative overflow-hidden rounded-lg">
        <img
            src={event.image}
            alt={event.title}
            className="max-w-[280px] h-[280px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-4 left-4 right-4">
            <h4 className="font-SpaceGrotesk text-2xl text-white">
                {event.title}
            </h4>
        </div>
    </div>
);

export const VenueScreen: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= eventData.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? eventData.length - 1 : prevIndex - 1
        );
    };

    const visibleEvents = [
        eventData[currentIndex],
        eventData[(currentIndex + 1) % eventData.length],
        eventData[(currentIndex + 2) % eventData.length],
    ];

    return (
        <section id="booking" className="bg-gradient-to-b from-primary-100/15 to-white w-full z-10">
            {/* Events */}
            <div className="w-[80%] max-md:w-[50%] mx-auto">
                <div className="flex flex-col items-center justify-center pt-24">
                    <h3 className="font-Grypen text-2xl text-primary-100">
                        Best Places For Your Party
                    </h3>
                    <h2 className="max-lg:text-center font-SpaceGrotesk font-bold text-4xl leading-tight">
                        A Place That Accommodates Your Guests
                    </h2>
                </div>
                <div className="max-md:space-y-4 md:flex items-center justify-center mt-12 gap-6">
                    {visibleEvents.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
                <div className="flex items-center justify-center mt-12 pb-12 text-primary-100">
                    <div className="bg-white rounded-full py-2 items-center flex px-4 space-x-4 shadow-lg shadow-gray-300">
                        <button onClick={prevSlide}>
                            <IconArrowLeft />
                        </button>
                        <button onClick={nextSlide}>
                            <IconArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div
                className="absolute left-0 -z-10
                bg-gradient-to-b from-primary-100 to-white w-[203px] h-[500px] -rotate-45"></div>
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col items-center justify-center pt-24">
                    <h3 className="font-Grypen text-2xl text-primary-100">
                        Testimonials
                    </h3>
                    <h2 className="max-md:text-center font-SpaceGrotesk font-bold text-4xl leading-tight">
                        What Our Travellers Say
                    </h2>
                </div>
                <div className="md:flex items-start justify-center mt-16 gap-6">
                    <div className="flex items-end justify-center gap-6">
                        <img src={TravellerReviewImageTertiary} className="max-lg:hidden w-[180px] h-[260px] rounded-lg"/>
                        <img src={TravellerReviewImageSecondary} className="max-lg:hidden w-[180px] h-[260px] rounded-lg"/>
                        <img src={TravellerReviewImageMain} className="w-[280px] h-[453px] rounded-lg"/>
                    </div>
                    <div className="md:flex flex-col justify-between h-[453px] max-md:mt-12">
                        <div>
                            <h4 className="font-SpaceGrotesk text-lg text-gray-100 mb-1">Tommy Murphy</h4>
                            <h5 className="font-Mulish font-semibold text-gray-400 text-sm">Global Directives
                                Architect</h5>
                            <p className="font-Mulish font-semibold text-sm text-gray-300 mt-8">
                                Donec adipiscing tristique risus nec feugiat in.<br/>
                                Ullamcorper morbi tincidunt ornare massa eget<br/>
                                egestas purus viverra. Pharetra sit amet aliquam<br/>
                                id diam maecenas ultricies mi eget. Aenean<br/>
                                euismod elementum nisi quis eleifend. Sit amet<br/>
                                facilisis magna etiam tempor orci. Vitae et leo duis<br/>
                                ut. Arcu cursus vitae congue mauris.<br/>
                            </p>
                        </div>
                        <button
                            className="bg-primary-100 text-white px-3 py-3 rounded-full hover:brightness-105 self-start mt-4">
                            <IconArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};