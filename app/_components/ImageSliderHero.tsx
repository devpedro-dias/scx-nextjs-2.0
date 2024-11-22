"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import { useTranslations } from "next-intl";
import { images } from "../_lib";

export function ImagesSliderhero() {

  const t = useTranslations("Home");
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
          {t("hero.title")}
        </motion.p>
        <motion.p className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-white/80 pt-2 pb-1">
          {t("hero.subtitle")}
        </motion.p>
        <motion.p className="w-[80%] font-base text-lg md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-white/80 pt-2 pb-1">
          {t("hero.desc")}
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
