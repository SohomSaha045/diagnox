import LandingPage from "@/components/LandingPage/LandingPage";
import Nav from "@/components/Navigation/Nav";
import { SelectSymptoms } from "@/components/Symptoms/SelectSymptoms";
import TypeWritterEffect from "@/components/Symptoms/TypewriterEffect";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Home() {

  const {user} = useUser()
  console.log(user)

  return (
    <div className="">

      <Nav />
      <div className="h-full md:h-screen">
        <LandingPage />
      </div>

      <div className="h-screen pt-10">
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-[400px] rounded-md h-[150px] border-2 flex flex-col justify-center items-center">
            <TypeWritterEffect />
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center mb-4">
            <SelectSymptoms />
          </div>
        </div>
      </div>
    </div>
  );
}
