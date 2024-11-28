import { useTranslations } from "next-intl";
import { HoverEffect } from "../ui/card-hover-effect";

export default function RoadTransportLogistics() {
  const t = useTranslations("road-transport");

  const logisticsKeys = [
    "receiving",
    "storage",
    "handling",
    "picking-and-packing",
    "shipping",
    "inventory-management",
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
