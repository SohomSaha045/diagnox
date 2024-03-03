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

function _index() {
  const [postData, setPostData] = React.useState({});
  const [responseData, setResponseData] = React.useState(null);

  const handlePostRequest = async () => {
    try {
      const response = await fetch("https://diagnox-model-api.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Additional headers if needed
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    handlePostRequest()
  }, []);
  return (
    <>
      <Card className="w-full mb-4 min-h-[180px] h-auto shadow-sm hover:shadow-md transition-all">
        <CardHeader>
          <CardTitle className="text-xl text-primary font-bold">
            Diseases Name
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-md foont-light">
            Docrors Name
          </CardDescription>
        </CardContent>
        <CardFooter className="text-lg font-regular">
          Diets Prescribed
        </CardFooter>
        <Button className="mx-5 mb-4" variant="outline">
          Check
        </Button>
      </Card>
    </>
  );
}

export default _index;
