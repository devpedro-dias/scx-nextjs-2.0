import { ContactForm } from "@/app/_components/ContactForm";
import { socialLinks } from "@/app/_lib";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("");
  return (
    <section className="bg-primary py-10 flex">
      <div className="max-w-[80%] mx-auto flex flex-col gap-20 lg:flex-row items-center">
        <div className="text-background flex flex-col gap-6 items-center pt-8 lg:w-1/3 lg:items-end lg:gap-10">
          <div className="text-center space-y-8 lg:text-end">
            <h1 className="text-3xl lg:text-3xl font-semibold">{t("ContactForm.title")}</h1>
            <p className="text-lg lg:text-base">
              {t("ContactForm.desc")}
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <div className="flex gap-4 text-base" style={{ filter: "invert(90%)" }}>
              {socialLinks.map((link, index) => (
                <Link key={index} target="_blank" href={link.href}>
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={18}
                    height={18}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="flex gap-4 text-base" style={{ filter: "invert(90%)" }}>
            {socialLinks.map((link, index) => (
              <Link key={index} target="_blank" href={link.href}>
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-background rounded-3xl p-6 lg:w-2/3">
          <h1 className="text-primary text-3xl text-center mb-10">{t("ContactForm.form-title")}</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
