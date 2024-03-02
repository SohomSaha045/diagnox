import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartPulse } from "lucide-react";
import { data } from "../../CardData/CardData";

import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { staggerVariants } from "@/framer/staggerVariants";

const FeatureCard = () => {
  useEffect(() => {
    Aos.init({ duration: 550 });
  }, []);
  return (
    <>
      <div className=" cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            custom={index}
          >
            <Card className="w-full h-[180px] shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="card-icon-wrapper bg-primary text-secondary w-10 h-10 flex items-center justify-center rounded-full">
                  <HeartPulse />
                </div>
                <CardTitle className="border-b border-primary w-1/2 pb-2">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
