import { useTranslations } from "next-intl";
import React from "react";
import Hero from "../_components/Hero";
import Services from "../_components/Services";
import Contact from "../_components/Contact";

export default function Home() {

  const t = useTranslations("Home");

  return (
    <main className="flex flex-col gap-10 overflow-hidden">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
