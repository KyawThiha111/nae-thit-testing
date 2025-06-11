"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useTranslation from "@/hooks/useTranslation";
import { useFacilities } from "@/hooks/api/facilities";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLangStore } from "@/hooks/useLangStore";
import Image from "next/image";
import React from "react";
import { useServices } from "@/hooks/api/services";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const services = [
  "Consultation",
  "Online Pharmacy",
  "Telehealth",
  "Vaccination",
  "Subscidized Healthcare Programs",
  //   "Laboratory tests",
  //   "ECG and USG",
  //   "Family planning",
  //   "Subsidized healthcare",
  // "Medical check-up",
  // "Dental care",
  // "Eye care",
];

export default function OurServiceSection() {
  const {lang} = useLangStore()
   const { data:ServicesData, isLoading, refetch } = useServices({ lang,showonhomepage:"false" });
   useEffect(()=>{
    refetch()
   },[ServicesData,lang])
   if (isLoading) {
    return (
      <>
        <section className="relative bg-gray-200 text-white py-24 h-[200px]"></section>

        {/* About Description */}
        <section className="py-16 bg-white" id="background">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" min-h-[200px] bg-gray-200"></div>
            <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg"></div>
          </div>
        </section>
      </>
    );
  }

  if (!ServicesData?.services) return <p>Data not found</p>;
  console.log(`${BACKEND_URL}${ServicesData.services[2].logo}`)
   return (
    <section className=" py-16 bg-gray-50">
      <div className=" container">
        {/* <div className="relative py-8 max-w-[200px] mx-auto">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t-2 border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 font-medium tracking-wider">
                    Our Services
                  </span>
                </div>
              </div> */}
        <h3 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Our <span className="text-yellow-400">Services</span>
        </h3>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {.map((service, index) => (
            <div
              key={index}
              className={`group rounded-lg border px-6 py-10 text-center hover:bg-primary hover:text-white`}
            >
              <Image
                src={"/icons/building.png"}
                alt={service}
                width={30}
                height={30}
                className="mx-auto mb-4 filter group-hover:brightness-[5]"
              />
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className=" text-gray-500 group-hover:text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                adipisci.
              </p>
            </div>
          ))}
        </div> */}
   <Swiper
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  className="!pb-10"
>
  {ServicesData.services.map((service, idx) => {
    const imageUrl = service.logo ? `${BACKEND_URL}${service.logo}` : null;

    return (
      <SwiperSlide key={service._id || idx}>
        <div className="rounded overflow-hidden shadow-lg flex flex-col h-full bg-gray-300">
          {imageUrl ? (
            <img
              src={imageUrl}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
              No Image Available
            </div>
          )}

          <div className={`p-4 ${idx === 2 ? "bg-green-300" : "bg-primary"}  text-white flex flex-col justify-center min-h-[100px]`}>
            <h3 className="text-lg font-semibold text-center line-clamp-2">
              {service.title}
            </h3>
            
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>


        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 15px;
            height: 4px;
            border-radius: 3px;
          }

          .swiper-pagination-bullet-active {
            background-color: #ffc63e; /* amber-500 */
          }
        `}</style>
      </div>
    </section>
  );
}
