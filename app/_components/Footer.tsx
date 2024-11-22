import React from "react";
import { navbarItems, socialLinks, additionalLinks } from "../_lib";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("");
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-br from-primary to-primary-foreground dark:bg-gradient-to-tl dark:to-[#31859B] dark:from-[#0D333D]">
      <div className="flex flex-col lg:flex-row p-10 items-center justify-center lg:justify-between text-background lg:max-w-[90%] xl:max-w-[80%] mx-auto gap-10 lg:gap-6">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-10 dark:text-[#EEEEEE]">
          <div>
            <h1 className="text-2xl lg:text-xl">
              {t("Home.footer.navigation")}
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-lg lg:text-base">
            {navbarItems.map((item) => (
              <Link key={item.id} href={item.href} locale={locale}>
                {t(`header.${item.nameKey}`)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-start text-center lg:mb-auto lg:text-start gap-10 dark:text-[#EEEEEE]">
          <div>
            <h1 className="text-2xl lg:text-xl">{t("Home.footer.contact")}</h1>
          </div>
          <div className="flex flex-col gap-2 text-lg lg:text-base">
            <p>+55 (13) 3321-5574</p>
            <Link href="mailto:scx@scxagenciamentos.com">
              scx@scxagenciamentos.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start lg:mb-auto text-center lg:text-start gap-10 dark:text-[#EEEEEE]">
          <div>
            <h1 className="text-2xl lg:text-xl">
              {t("Home.footer.social-medias")}
            </h1>
          </div>
          <div
            className="flex flex-col gap-6 lg:flex-row lg:text-base"
            style={{ filter: "invert(90%)" }}
          >
            {socialLinks.map((link, index) => (
              <Link key={index} target="_blank" href={link.href}>
                <Image src={link.icon} alt={link.alt} width={26} height={26} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-10 dark:text-[#EEEEEE]">
          <div>
            <h1 className="text-2xl lg:text-xl">
              {t("Home.footer.add-infos.title")}
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-lg lg:text-base">
            {additionalLinks.map((link, index) => (
              <Link key={index} target="_blank" href={link.href}>
                {t(`${link.labelKey}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center lg:text-start gap-1 font-extralight text-background py-4 dark:text-[#EEEEEE]">
        <p>Copyright &copy; 2024</p>
        <Link href="https://pedrodiasdev.com" target="_blank">
            <span className="underline">
                {t("Home.footer.developed-by")}{" "}pedrodiasdev
            </span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
