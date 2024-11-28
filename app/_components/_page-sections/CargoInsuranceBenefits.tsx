import { useTranslations } from "next-intl";
import { HoverEffect } from "../ui/card-hover-effect";

export default function CargoInsuranceLogistics() {
  const t = useTranslations("cargo-insurance");

  const benefitsKeys = [
    "comprehensive-coverage",
    "financial-security",
    "customized-policies",
    "global-support",
    "compliance-assurance",
    "peace-of-mind",
  ];

  const benefitsItems = benefitsKeys.map((key) => ({
    title: t(`benefits.${key}.title`), 
    description: t(`benefits.${key}.description`), 
  }));

  return (
    <HoverEffect
      items={benefitsItems}
      className="custom-class-for-hover-effect"
    />
  );
}
