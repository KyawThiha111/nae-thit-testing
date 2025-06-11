import { social_links } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
import { useContactData } from "@/hooks/api/contactdata";
import { useLangStore } from "@/hooks/useLangStore";
import { useEffect } from "react";

 const contactMethods = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      details: ["+95 9 771 876 404", "+95 9 775 919 699"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      details: ["info@naethit.org"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      details: [
        "Head Office 1 - No. 661, Innwa 19th Street (A), Ward 6, South Okkalapa Township, Yangon.",
        "Head Office 2 - No. 527, Level - 8, Unit 08 - 03, Ward 7, M-Tower, Pyay Road, Kamaryut Township, Yangon.",
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Office Hours",
      details: [
        "Monday-Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 12:00 PM",
        "Sunday: Closed",
      ],
    },
  ];
export default function ContactUsPageData() {
  const { lang } = useLangStore();
  const { data: ContactData, isLoading, refetch } = useContactData({ lang });

  useEffect(() => {
    refetch();
  }, [lang]); // Refetch when language changes

  if (isLoading) {
    return (
      <>
        <section className="relative bg-gray-200 text-white py-24 h-[200px]"></section>
        <section className="py-16 bg-white" id="background">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="min-h-[200px] bg-gray-200"></div>
            <div className="min-h-[200px] lg:h-auto bg-gray-200 rounded-lg"></div>
          </div>
        </section>
      </>
    );
  }

  if (!ContactData?.data) return <p>Data not found</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Phone Numbers */}
        {ContactData.data.primary_phone_number && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="text-xl font-semibold ml-4">Phone</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-600 font-medium">
                {ContactData.data.primary_phone_number}
              </li>
              {ContactData.data.secondary_phone_number && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.secondary_phone_number}
                </li>
              )}
              {ContactData.data.tertiary_phone_number && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.tertiary_phone_number}
                </li>
              )}
            </ul>
          </div>
        )}
        {/* Emails */}
        {ContactData.data.primary_email && (
          <div className="bg-gray-50 p-6 rounded-lg">
             <div className="flex items-center mb-4">
                      <div className="mr-4">{contactMethods[1].icon}</div>
                      <h3 className="text-xl text-blue-600 font-semibold">{contactMethods[1].title}</h3>
                    </div>
            <ul className="space-y-2">
              <li className="text-gray-600 font-medium">
                {ContactData.data.primary_email}
              </li>
              {ContactData.data.secondary_email && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.secondary_email}
                </li>
              )}
              {ContactData.data.tertiary_email && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.tertiary_email}
                </li>
              )}
            </ul>
          </div>
        )}
        {/* Address */}
        {ContactData.data.head_office_1 && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                      <div className="mr-4">{contactMethods[2].icon}</div>
                      <h3 className="text-xl text-blue-600 font-semibold">{contactMethods[2].title}</h3>
                    </div>
            <ul className="space-y-2">
              <li className="text-gray-600 font-medium">
                {ContactData.data.head_office_1}
              </li>
              {ContactData.data.head_office_2 && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.head_office_2}
                </li>
              )}
              {ContactData.data.head_office_3 && (
                <li className="text-gray-600 font-medium">
                  {ContactData.data.head_office_3}
                </li>
              )}
            </ul>
          </div>
        )}
        {/* Office Hour */}
        {ContactData.data.weekdays_office_hr && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                      <div className="mr-4">{contactMethods[3].icon}</div>
                      <h3 className="text-xl text-blue-600 font-semibold">{contactMethods[3].title}</h3>
                    </div>
            <ul className="space-y-2">
              <li className="text-gray-600 font-medium">
               Monday-Friday : {ContactData.data.weekdays_office_hr}
              </li>
              {ContactData.data.sat_office_hr && (
                <li className="text-gray-600 font-medium">
                 Saturday : {ContactData.data.sat_office_hr}
                </li>
              )}
              {ContactData.data.sun_office_hr && (
                <li className="text-gray-600 font-medium">
                 Sunday : {ContactData.data.sun_office_hr}
                </li>
              )}
            </ul>
          </div>
        )}

      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {social_links.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label={social.name}
              target="_blank"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}