import { useTranslations } from "next-intl";
import { HoverEffect } from "./ui/card-hover-effect";

export default function LogisticsSection() {
  const t = useTranslations("air-freight");

  const logisticsKeys = [
    "door-to-door-service",
    "direct-and-consolidated-transport",
    "hazardous-goods-transport",
    "perishable-goods-transport",
    "pharmaceutical-transport",
    "packaging-services",
  ];

  const logisticsItems = logisticsKeys.map((key) => ({
    title: t(`logistics.${key}.title`), 
    description: t(`logistics.${key}.description`), 
  }));

  return (
    <HoverEffect
      items={logisticsItems}
      className="custom-class-for-hover-effect"
    />
  );
}
