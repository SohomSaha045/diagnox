import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from '@prisma/client'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()

  await prisma.doctor.create({
    data: {
      placeId: 'ChIJ9cRTSU0YDTkRTfw9WATuozU',
      address: 'Mehrauli-Gurgaon Rd',
      category: 'Vascular surgeon',
      phone: undefined,
      googleUrl: 'https://www.google.com/maps/place/Dr+Akhil+Govil/data=!4m7!3m6!1s0x390d184d4953c4f5:0x35a3ee04583dfc4d!8m2!3d28.4687477!4d77.0438724!16s%2Fg%2F11hd5f7tqf!19sChIJ9cRTSU0YDTkRTfw9WATuozU?authuser=0&hl=en&rclk=1',
      bizWebsite: 'http://www.gnhhospitals.com/',
      storeName: 'Dr Akhil Govil',
      ratingText: '3.5 stars 8 Reviews',
      stars: 3.5,
      numberOfReviews: 8
    }
  })
  res.status(200).json({ "message": "Hello" })
}
