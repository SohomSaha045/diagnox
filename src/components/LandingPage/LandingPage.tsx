import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeatureCard from "../FeatureCard/FeatureCard";

import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 550 });
  }, []);
  return (
    <>
      <div className="space-y-5 max-w-7xl mx-auto">
        <div className="landing-page-wrapper h-screen md:h-[60vh] grid grid-cols-1 md:grid-cols-2">
          <div className="px-10 landing-page-left h-[400px] pt-14">
            <div className="text-[54px] font-weight-6800 mt-10" data-aos="fade-right">
              Your Health -{" "}
              <span className="text-[54px] font-weight-6800 mt-10 text-primary">
                Is Our Mission
              </span>
            </div>
            <div className="text-[18px] font-weight-6800 mt-6" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              fuga consequatur tempora libero commodi cumque omnis cupiditate
              sunt deleniti amet.
            </div>
            <Button className="mt-5" data-aos="fade-right">Get Started</Button>
          </div>

          <div className="hidden md:block w-full landingpage-right">
            <div className="relative w-full h-full" data-aos="fade-left">
              <Image
                src="/docto.png"
                alt="Doctor"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <FeatureCard />
      </div>
    </>
  );
}

export default LandingPage;
