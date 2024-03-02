import FeatureCard from "@/components/FeatureCard/FeatureCard";
import LandingPage from "@/components/LandingPage/LandingPage";
import Nav from "@/components/Navigation/Nav";
import TypeWritter from "@/components/TypeWritter/TypeWritter";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-4">
      
      {/* <Nav /> */}
      <LandingPage />
      <TypeWritter />
    </div>
  );
}
