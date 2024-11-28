import { useTranslations } from "next-intl";
import { HoverEffect } from "../ui/card-hover-effect";

export default function SeaFreightLogistics() {
  const t = useTranslations("sea-freight");

  const logisticsKeys = [
    "less-than-container-loads",
    "full-container-loads",
    "door-to-door-service",
    "project-cargo",
    "ro-ro",
    "break-bulk",
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
