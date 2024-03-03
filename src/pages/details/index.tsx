import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const DetailsPage = () => {


  const { user } = useUser()
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Image src={user?.picture as string} alt="dp" width={100} height={100} className="rounded-full" />
        <p className="font-bold text-3xl">Welcome, {user?.name}</p>
      </div>
      <div className="w-full mt-5">
        <Tabs defaultValue="diseases">
          <TabsList className="w-full">
            <TabsTrigger value="diseases" className="w-full">Diseases</TabsTrigger>
            <TabsTrigger value="doctors" className="w-full">Doctors</TabsTrigger>
          </TabsList>
          <TabsContent value="diseases">DIS</TabsContent>
          <TabsContent value="doctors">Doc
          </TabsContent>
        </Tabs>

      </div>
    </>
  );
};

export default DetailsPage;
