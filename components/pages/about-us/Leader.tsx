"use client";

import {useTeamLeader} from "@/hooks/api/teamleader"
import { useLangStore } from "@/hooks/useLangStore";
import { useEffect } from "react";
import Image from "next/image";

export default function TeamLeader() {
  const { lang } = useLangStore();
  const {
    data: TeamMemberData,
    isLoading: memberLoading,
    refetch: refetchMember,
  } = useTeamLeader({ lang });

  useEffect(() => {
    refetchMember();
  }, [lang]);

  if (memberLoading) {
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

  if (!TeamMemberData?.members) {
    return <p>Data not found</p>;
  }

  return (
    <section className="py-16 bg-gray-50" id="our-team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet <span className="text-primary">Our Leader</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TeamMemberData.members.map((member, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[1/1] bg-blue-400">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-white font-semibold text-lg">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium my-1">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
