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

      <div id="symptoms" className="h-screen">
        <TypeWritterEffect />
        <SelectSymptoms />
      </div>

    </div>
  );
}
