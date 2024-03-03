import LandingPage from "@/components/LandingPage/LandingPage";
import { SelectSymptoms } from "@/components/Symptoms/SelectSymptoms";
import TypeWritterEffect from "@/components/Symptoms/TypewriterEffect";

export default function Home() {
  
  return (
    <div className="">
      <div className="h-full md:h-screen">
        <LandingPage />
      </div>

      <div id="symptoms" className="h-screen pt-10">
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full text-primary text-xl font-bold md:w-[500px] rounded-md h-[150px] flex flex-col justify-center items-center">
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
