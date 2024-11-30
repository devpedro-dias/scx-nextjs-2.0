"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/app/_lib/utils";
import GridGlobe from "./grid-globe";
import { useTranslations } from "next-intl";
import MagicButton from "./magic-button";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 gap-4 mx-auto p-0 md:max-w-[70vw]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "scx@scxagenciamentos.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const t = useTranslations("Home");

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none py-6 md:py-8",
        className
      )}
      style={{
        background: "rgb(13,51,61)",
        backgroundColor:
          "linear-gradient(90deg, rgba(13,51,61,1) 30%, rgba(49,133,155,1) 100%)",
      }}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className={`${id === 6 && "flex justify-start"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col px-5 lg:px-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-5xl md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-3xl font-bold z-10">
            {title}
          </div>

          {id === 1 && <GridGlobe />}

          {id === 5 && (
            <div className="relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
              />
              <MagicButton
                title={copied ? t("services.email_copied") : t("services.copy_email")}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#0D333D]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
