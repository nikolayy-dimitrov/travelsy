import React, { useState } from 'react';
import BookingImage1 from "../assets/BookingImage1.png";
import BookingImage2 from "../assets/BookingImage2.png";
import BookingImage3 from "../assets/BookingImage3.png";
import HotelVector from "../assets/HotelVector.png";
import BedVector from "../assets/BedVector.png";
import BeachVector from "../assets/BeachVector.png";
import CommunityVector from "../assets/CommunityVector.png";
import MapBG from "../assets/MapBG.png";
import { IconArrowLeft, IconArrowRight, IconMapPinFilled, IconUserFilled } from "@tabler/icons-react";

interface HotelData {
    image: string;
    title: string;
    description: string;
    location: string;
    capacity: string;
    price: number;
}

interface BonusData {
    image: string;
    count: number;
    category: string;
}

const hotelData: HotelData[] = [
    {
        image: BookingImage1,
        title: "Some Amazing Title Here",
        description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
        location: "Museums",
        capacity: "12 Person Capacity",
        price: 150
    },
    {
        image: BookingImage2,
        title: "Some Amazing Title Here",
        description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
        location: "Museums",
        capacity: "18 Person Capacity",
        price: 250
    },
    {
        image: BookingImage3,
        title: "Some Amazing Title Here",
        description: "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
        location: "Museums",
        capacity: "24 Person Capacity",
        price: 280
    },
];

const bonusData: BonusData[] = [
    {
        image: HotelVector,
        count: 1000,
        category: "Hotel"
    },
    {
        image: BedVector,
        count: 4500,
        category: "Rooms Available"
    },
    {
        image: BeachVector,
        count: 30,
        category: "Beach Views"
    },
    {
        image: CommunityVector,
        count: 8000,
        category: "Guests"
    },
]

interface HotelCardProps {
    hotel: HotelData;
}

interface BonusInfoCardProps {
    bonusInfo: BonusData;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => (
    <div className="bg-white shadow-xl rounded-xl flex flex-col p-3 space-y-4">
        <img src={hotel.image} alt={hotel.title} />
        <h4 className="font-SpaceGrotesk text-xl text-gray-100">
            {hotel.title}
        </h4>
        <p className="text-sm text-gray-300 font-Mulish font-semibold">
            {hotel.description}
        </p>
        <div className="flex items-center justify-start gap-2">
            <div className="flex gap-2 items-center">
                <IconMapPinFilled className="fill-primary-100" />
                <span className="font-semibold font-Mulish text-sm">
          {hotel.location}
        </span>
            </div>
            <div className="flex gap-2 items-center">
                <IconUserFilled className="fill-primary-100" />
                <span className="font-Mulish font-semibold text-sm">
          {hotel.capacity}
        </span>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <h5 className="font-SpaceGrotesk text-4xl">
                ${hotel.price}/<span className="font-Mulish text-sm font-semibold">Per Night</span>
            </h5>
            <button className="bg-primary-100 text-white items-center px-3 py-3 rounded-full hover:brightness-105">
                <IconArrowRight/>
            </button>
        </div>
    </div>
);

const BonusInfoCard: React.FC<BonusInfoCardProps> = ({ bonusInfo }) => (
    <div className="flex flex-col items-center bg-white shadow shadow-gray-300 rounded-lg py-10 px-20">
        <div className="bg-primary-100 flex flex-col items-center border-8 border-opacity-80 border-white py-6 px-6 rounded-full">
            <img src={bonusInfo.image} alt={bonusInfo.category} className="h-8 w-8" />
        </div>
        <h4 className="font-SpaceGrotesk font-bold text-3xl mt-6">{bonusInfo.count}+</h4>
        <span className="text-sm mt-2 font-Mulish font-semibold text-gray-300">{bonusInfo.category}</span>
    </div>
);

export const BookingScreen: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= hotelData.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? hotelData.length - 1 : prevIndex - 1
        );
    };

    const visibleHotels = [
        hotelData[currentIndex],
        hotelData[(currentIndex + 1) % hotelData.length],
        hotelData[(currentIndex + 2) % hotelData.length],
    ];

    return (
        <section id="booking" className="relative bg-gradient-to-b from-primary-100/15 to-white w-full z-10 overflow-hidden">
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col items-center justify-center pt-24">
                    <h3 className="font-Grypen text-2xl text-primary-100">
                        Top Destinations
                    </h3>
                    <h2 className="max-md:text-center font-SpaceGrotesk font-bold text-4xl leading-tight">
                        Popular Hotels For Booking
                    </h2>
                </div>
                <div className="lg:flex max-lg:space-y-4 items-center justify-center mt-12 gap-6">
                    {visibleHotels.map((hotel, index) => (
                        <HotelCard key={index} hotel={hotel}/>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-12 pb-12 text-primary-100">
                    <div
                        className="bg-white rounded-full py-2 items-center flex px-4 space-x-4 shadow-lg shadow-gray-300">
                        <button onClick={prevSlide}>
                            <IconArrowLeft/>
                        </button>
                        <button onClick={nextSlide}>
                            <IconArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="absolute right-0 -z-10
                    bg-gradient-to-b from-primary-100 to-white w-[203px] h-[545px] rotate-45"></div>
            <div className="flex items-center justify-center mt-24 mx-auto relative pb-20">
                {/* Background Image */}
                <div className="z-0 absolute inset-0 max-lg:hidden">
                    <img src={MapBG} className="object-cover w-full h-full"/>
                </div>

                {/* Content */}
                <div className="z-10 lg:flex gap-8 max-lg:space-y-8 mt-32">
                    {bonusData.map((info, index) => (
                        <BonusInfoCard key={index} bonusInfo={info}/>
                    ))}
                </div>
            </div>
        </section>
    );
};