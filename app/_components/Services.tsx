import React from "react";
import { useTranslations } from "next-intl";

import { gridItems } from "../_lib";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Services = () => {
  const t = useTranslations("");

  return (
    <section>
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
