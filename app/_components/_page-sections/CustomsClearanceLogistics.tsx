import { useTranslations } from "next-intl";
import { HoverEffect } from "../ui/card-hover-effect";

export default function CustomsClearanceLogistics() {
  const t = useTranslations("customs-clearance");

  const logisticsKeys = [
    "foreign-trade-consulting",
    "tariff-classification",
    "special-customs-regime",
    "document-preparation",
    "lpco",
    "duimp-and-due",
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
