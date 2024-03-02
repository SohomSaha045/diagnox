import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function DeseaseCard() {
  return (
    <>
      <Card className="w-full min-h-[180px] h-auto shadow-sm hover:shadow-md transition-all">
        <CardHeader>
          <CardTitle>Desease Name</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Desease Description</CardDescription>
        </CardContent>
        <CardFooter>
          <p>Desease Cure</p>
        </CardFooter>
        <Button className="mx-5 mb-4" variant="outline">
          Check
        </Button>
      </Card>
    </>
  );
}

export default DeseaseCard;
