import React from "react";
import { useTranslations } from "next-intl";

import { gridItems } from "../_lib";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Services = () => {
  const t = useTranslations("");

  return (
    <section className="max-w-[80%] mx-auto flex flex-col gap-10">
      <div>
        <h1 className="text-primary text-4xl text-center">{t("Home.services.title")}</h1>
      </div>

      <div className="flex flex-col gap-6 text-primary text-justify text-lg">
        <p>{t("Home.services.desc-1")}</p>
        <p>{t("Home.services.desc-2")}</p>
      </div>

      <BentoGrid className="max-w-[80%] p-4">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={t(`${item.titleKey}`)}
            description={t(`${item.descriptionKey}`)}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;
