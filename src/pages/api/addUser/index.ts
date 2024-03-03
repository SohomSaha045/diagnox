import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db/client";

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const existingPatient = await prisma.patient.findFirst({
        where: {
          email: req.body["email"]
        }
      });

      if (!existingPatient) {
        await prisma.patient.create({
          data: {
            "name": req.body["name"] as string,
            "email": req.body["email"] as string,
            "diseases": req.body["diseases"] as string[],
            "doctors": req.body["doctors"] as string[],
          }
        });
      }
      res.status(200).json({ message: "Success" });
    } catch (err) {
      res.status(500).json({ message: "error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
