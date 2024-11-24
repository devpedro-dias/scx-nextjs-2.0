"use client";
import Contact from "@/app/_components/Contact";
import LogisticsSection from "@/app/_components/LogisticsSection";
<<<<<<< HEAD
=======
import { HoverEffect } from "@/app/_components/ui/card-hover-effect";
>>>>>>> 312b74bc3b719822e1d493c52df253e392f4735b
import { TextGenerateEffect } from "@/app/_components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const AirFreight = () => {
  const t = useTranslations("air-freight");

  return (
    <section>
      <div className="py-20">
        <TextGenerateEffect words={t("hero.title")} />
      </div>

      <motion.div
        className="text-primary text-justify leading-relaxed font-medium max-w-[80%] mx-auto py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <p key={`about-paragraph-${i}`}>{t(`about.paragraph${i}`)}</p>
          ))}
        </div>
      </motion.div>

      <section className="bg-primary dark:bg-[#31859B] mt-10">
        <div className="max-w-[80%] mx-auto py-10">
          <h2 className="text-center dark:text-[#EEEEEE] text-background text-2xl md:text-3xl font-semibold leading-snug tracking-wide">
            {t("logistics.title")}
          </h2>

          <div>
            <LogisticsSection />
          </div>
        </div>
      </section>

      <div className="pt-12">
        <Contact />
      </div>
    </section>
  );
};

export default AirFreight;
