import FacilitiesSlider from "@/components/pages/home/Facilities";
import HeroBanner from "@/components/pages/home/HeroBanner"
import HomeServices from "@/components/pages/home/HomeServices";
import TestimonialsSlider from "@/components/pages/home/Testimonial";
import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "1,200+", label: "Volunteers" },
    { value: "$5M+", label: "Donations" },
    { value: "50+", label: "Events" },
    { value: "25+", label: "Causes" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* <section className="relative h-fit bg-blue-900 text-white">
        <div className="">
          <Image
            src={"/imgs/banner.png"}
            alt="banner"
            width={1920}
            height={600}
            priority={true}
            className=" w-full h-[calc(100vh-100px)] md:h-[600px] lg:h-auto object-cover"
          />
        </div>
        <div className="absolute top-0 inset-0 bg-black opacity-60 h-full"></div>
        <div className=" absolute top-0 w-full">
          <div className="  container mx-auto px-4 py-32 relative z-10">
            <div className=" mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-normal mb-6">
                Making a Difference in People's Lives
              </h1>
              <p className="text-xl mb-8">
                Join us in our mission to create positive change through
                charitable giving and community service.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-accent-orange text-white hover:bg-primary-dark px-6 py-3 rounded-md font-semibold transition-colors">
                  Donate Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <HeroBanner />

      {/* Stats Section */}
      {/* <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <FacilitiesSlider />

      {/* Services Section */}
      <HomeServices />

      <TestimonialsSlider />
    </div>
  );
}
