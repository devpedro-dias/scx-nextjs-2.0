"use client";

import { cn } from "@/app/_lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
    codes: string;
    ask: string;
    bid: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "10s"; // Valor padrão para telas grandes

      if (window.matchMedia("(max-width: 768px)").matches) {
        duration = "2s";
      } else if (window.matchMedia("(max-width: 1200px)").matches) {
        duration = "5s";
      }

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const currentDate = getFormattedDate();

  const t = useTranslations("");

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex items-center justify-center min-w-[100%] w-full gap-4 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[50%] sm:max-w-[40%] lg:min-w-[30%] max-w-full relative rounded-2xl border-b border-2 flex-shrink-0 p-4"
            key={item.codes}
          >
            <blockquote className="px-6">
              <div className="z-20">
                <span className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span className=" text-base leading-[1] text-primary font-semibold dark:text-foreground">
                      {item.codes}
                    </span>
                    <span className=" text-base leading-[1] text-primary font-semibold dark:text-foreground">
                      {currentDate}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <span className="text-xl leading-[1] ">
                        <Image
                          src={item.img}
                          alt={item.codes}
                          width={46}
                          height={46}
                        />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className=" relative z-20 text-base text-primary font-semibold text-end">
                        {item.bid}
                      </span>
                    </div>
                  </div>
                </span>
                <div>
                    <small className="text-[10px] m-0 p-0 flex justify-end font-bold text-muted-foreground">
                      {t("header.quotation.warning")}
                    </small>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
