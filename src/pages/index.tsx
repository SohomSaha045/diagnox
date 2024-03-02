import LandingPage from "@/components/LandingPage/LandingPage";
import Nav from "@/components/Navigation/Nav";
import { SelectSymptoms } from "@/components/Symptoms/SelectSymptoms";
import TypeWritterEffect from "@/components/Symptoms/TypewriterEffect";

export default function Home() {

  return (
    <div>
      {/* <Nav /> */}
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
