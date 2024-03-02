import DeseaseCard from "@/components/DeseaseCard/DeseaseCard";
import LandingPage from "@/components/LandingPage/LandingPage";
import Nav from "@/components/Navigation/Nav";
import { SelectSymptoms } from "@/components/Symptoms/SelectSymptoms";
import TypeWritterEffect from "@/components/Symptoms/TypewriterEffect";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  
  const { user } = useUser();
  console.log(user);

  return (
    <div className="">
      <Nav />
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


      <DeseaseCard />
    </div>
  );
}
