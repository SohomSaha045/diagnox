import DocList from "@/components/DocList/DocList";
import dynamic from "next/dynamic";

// import Map from "@/components/Map/Map";
const Map = dynamic(() => import('@/components/Map/Map'), {
    ssr: false,
  });
export default function doctors() {
    



    
    return (
    <div className="flex justify-center">
        <Map className=" w-1/2"></Map>
        <DocList className="w-1/2 "></DocList>
        
    </div>);
}


