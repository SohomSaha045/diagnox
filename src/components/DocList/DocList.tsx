import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { Link } from "lucide-react";

export default function DocList(): JSX.Element {
  const [doctorsData, setDoctorsData] = React.useState<any[]>([]); // You might want to replace `any[]` with a more specific type

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("/data.json");
        setDoctorsData(response.data); // Assuming your data is directly an array
        let firstDoctorAddress = response.data[0].address;
        console.log(firstDoctorAddress);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctorsData();
  }, []); // Empty dependency array means it runs only once after component mount

  return (
    <div className="flex flex-col w-full min-h-screen gap-4 mt-5 mb-5">
      {doctorsData.map((item, index) => (
        <Card
          key={index} // Ensure to provide a unique key for each item in the list
          className="w-full min-h-[180px] h-auto shadow-sm hover:shadow-md transition-all"
        >
          <CardHeader>
            <CardTitle>{item.doctorName}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.category}</CardDescription>
            <p>{item.address}</p>
            <span>{item.ratingText}</span>
          </CardContent>
          <CardFooter>
              <Button>View On Google Maps</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}