"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import Slide01 from "../../assets/images/hero/slide-01.jpg"; // Ensure this is a local path or URL
import image from "../../assets/images/box.jpg";
import { Autoplay } from "swiper/modules"; // Import Swiper modules, without Pagination and Navigation
import Header from "@/layouts/header";

export const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden w-full h-screen flex flex-col justify-center items-center font-sans">
        <Swiper
          modules={[Autoplay]} // Only use Autoplay module
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={false} // Disable navigation
          pagination={false} // Disable pagination
          className="w-full h-full"
        >
          <SwiperSlide className="w-full h-full">
            <div className="w-full h-full">
              <Image
                src={Slide01}
                alt="From our Farms to your hands"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <Header />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 z-30 ml-10">
                <p className="font-normal text-[16px] text-white leading-[150%] mb-[18px]">
                  Welcome To TenTwenty Farms
                </p>
                <h1 className="text-white font-normal leading-none text-[64px] capitalize mb-10">
                  From our Farms <br /> to your hands
                </h1>
                <div className="w-1/2 ">
                  <div className="flex items-center">
                    <div className="border">
                      <div className="border-8 border-transparent">
                        <div
                          className="relative w-[75px] h-[75px] border border-transparent bg-cover bg-center"
                          style={{ backgroundImage: `url(${image.src})` }}
                        >
                          <div
                            className="relative top-0 right-0 h-[65px] w-[65px]"
                            style={{
                              borderTop: "6px solid white",
                              borderRight: "6px solid white",
                              transform: "translate(31%, -18%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center mt-2 text-white ml-10 h-10">
                      <span>01</span>
                      <div className="border-t border-white w-20 mx-2"></div>
                      <span>04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
