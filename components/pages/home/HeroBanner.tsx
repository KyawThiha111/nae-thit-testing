"use client";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useHomeBanner } from "@/hooks/api/homebanner";
import { useAboutUsBanner } from "@/hooks/api/about";
import { useLangStore } from "@/hooks/useLangStore";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function HeroBanner() {
  const { t } = useTranslation();
  const { lang } = useLangStore();
  const {
    data: HomeBannerData,
    isLoading: HomeBannerLoading,
    refetch: HomeFetch,
  } = useHomeBanner({ lang });
  const {
    data: AboutBannerData,
    isLoading: AboutBannerLoading,
    refetch: AboutFetch,
  } = useAboutUsBanner({ lang });
  const navigate = useRouter();

  useEffect(() => {
    HomeFetch();
  }, [lang]);
  useEffect(() => {
    AboutFetch();
  }, [lang]);
  if (!HomeBannerData?.data) return <p>No data to show!</p>;
  return (
    <div>
      {/* Home Page */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={`${BACKEND_URL}${HomeBannerData.data.homepage_banner_bg}`}
            alt="Healthcare background"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-md"
              style={{ lineHeight: "1.2" }}
            >
              Providing{" "}
              <span className=" text-primary">Quality Healthcare</span> with
              Affordable Solutions
            </h1>
            <p className="mt-6 mx-auto text-xl text-white drop-shadow-md">
              {HomeBannerData.data.description}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={() => navigate.push("/about-us")}
                className="bg-primary-dark text-white hover:bg-accent-orange px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
              >
                {t("explore_more")}
              </button>
              {/* <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-secondary md:py-4 md:text-lg md:px-10 transition duration-300">
                    Explore More
                  </button> */}
            </div>
          </div>
        </div>
      </section>{" "}
      {/* About Us Section */}
      <section className=" container pb-16 pt-8">
        <div className="relative py-8 max-w-[200px] mx-auto">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 font-medium tracking-wider">
              {t("about_us")}
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 rounded-lg">
            <Image
              src={"/imgs/hands.jpg"}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className=" text-lg md:text-3xl mb-3 font-bold text-accent-orange">
              {AboutBannerData?.data.about}
            </h2>
            <p className=" text-gray-600">
              {AboutBannerData?.data?.blog?.content.slice(0, 400) + " " + "..."}
            </p>
            <Link
              href={"/about-us#background"}
              className="text-primary-dark mt-4 text-sm inline-block font-medium"
            >
              {t("read_more")}
            </Link>
          </div>
        </div>
      </section>
      {/* Social Enterprise Section */}
      <section className=" container pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className=" order-2 md:order-1">
            <h3 className="text-lg md:text-3xl mb-3 font-bold text-accent-orange">
              {HomeBannerData.data.homepageblog_title}
            </h3>
            <p className=" md:text-2xl mb-3 italic text-accent-orange">
              {HomeBannerData.data.homepageblog_subtitle}
            </p>
            <p className=" text-gray-700">{HomeBannerData.data.homepageblog}</p>
            {/* <button className="text-primary-dark mt-4 text-sm">
                  {t("read_more")}
                </button> */}
          </div>
          <div className="bg-gray-300 rounded-lg order-1 md:order-2">
            <Image
              src={`${BACKEND_URL}${HomeBannerData.data.homepage_blog_img}`}
              alt="About Us"
              width={800}
              height={600}
              priority={true}
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* IMg */}
      <section className=" bg-primary py-6 md:py-10">
        <div className="container">
          <Image
            src={"/source/logo_white.png"}
            alt="Logo"
            width={300}
            height={300}
            priority={true}
            className="mx-auto w-[200px] h-auto md:w-[300px]"
          />
        </div>
      </section>

      {/* Aboutus Intro */}
      <section className=" py-16">
        <div className=" container mx-auto">
          <h2 className=" text-xl lg:text-2xl font-bold text-center mb-3">
            {AboutBannerData?.data.homepageBlog.title}:{" "}
            <span className=" text-primary">
             {AboutBannerData?.data.homepageBlog.content}
            </span>
          </h2>
          <p>
            {AboutBannerData?.data.introduction.slice(0,500)}
          </p>
          <div className="container mx-auto text-center mt-7">
            <Link
              href={"/about-us#intro"}
              className=" text-secondary font-medium underline"
            >
              {t("see_more")}
            </Link>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="bg-primary py-6 ">
        <div className=" container flex flex-col md:flex-row justify-between text-white text-center gap-5">
          <div>
            <p className="text-2xl font-bold">{HomeBannerData.data.yos}</p>
            <p className="text-sm">Years of Service</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{HomeBannerData.data.nop}</p>
            <p className="text-sm">Total Number of Patients Treated</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{HomeBannerData.data.nom}</p>
            <p className="text-sm">Team Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{HomeBannerData.data.tps}</p>
            <p className="text-sm">Total Population Served</p>
          </div>
        </div>
      </section>
    </div>
  );
}
