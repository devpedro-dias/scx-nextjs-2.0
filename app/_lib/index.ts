import { Home, Plane, Ship, FileText, Truck, Shield, Phone } from "lucide-react";

export const navbarItems = [
  { id: 1, nameKey: "Home", href: "/", icon: Home },
  { id: 2, nameKey: "Frete Aéreo", href: "/air-freight", icon: Plane },
  { id: 3, nameKey: "Frete Marítimo", href: "/sea-freight", icon: Ship },
  { id: 4, nameKey: "Desembaraço Aduaneiro", href: "/customs-clearance", icon: FileText },
  { id: 5, nameKey: "Transporte Rodoviário", href: "/road-transport", icon: Truck },
  { id: 6, nameKey: "Seguro de Carga", href: "/cargo-insurance", icon: Shield },
  { id: 7, nameKey: "Contato", href: "/contact", icon: Phone },
];

export const images = [
  "https://utfs.io/f/nCEOjDoPT8rpsf3rDaMcJSpnbwkEv6xIyeqMQ2r1fHCjZDU4",
  "https://utfs.io/f/nCEOjDoPT8rpUhWAEa1143OLI7va9XwBVn8AJPdSYsCuWMj5",
  "https://utfs.io/f/nCEOjDoPT8rpUA9cDf1143OLI7va9XwBVn8AJPdSYsCuWMj5",
];

export const gridItems = [
  {
    id: 1,
    titleKey: "Home.services.freight_title",
    descriptionKey: "Home.services.freight_description",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 pb-8 text-background dark:text-foreground",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    titleKey: "Home.services.insurance_title",
    descriptionKey: "Home.services.insurance_description",
    className: "md:col-span-2 lg:col-span-2 md:row-span-1 md:max-w-full max-w-full text-background dark:text-foreground",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    titleKey: "Home.services.customer_focus_title",
    descriptionKey: "Home.services.customer_focus_description",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1 text-background dark:text-foreground",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    titleKey: "Home.services.specialized_team_title",
    descriptionKey: "Home.services.specialized_team_description",
    className: "lg:col-span-2 md:col-span-3 lg:col-span-3 md:row-span-1 text-background dark:text-foreground",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 6,
    titleKey: "Home.services.international_logistics_title",
    descriptionKey: "Home.services.international_logistics_description",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1 text-background dark:text-foreground",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const socialLinks = [
  { href: "https://www.linkedin.com/in/scxagenciamentos-5a060b109/", icon: "/linkedin.svg", alt: "LinkedIn" },
  { href: "https://www.facebook.com/SCXAGENCIAMENTOS/", icon: "/facebook.svg", alt: "Facebook" },
  { href: "https://x.com/SCXAGENCIAMENTO", icon: "/twitterX.svg", alt: "Twitter X" },
];

export const additionalLinks = [
  { href: "https://portalunico.siscomex.gov.br/portal/", labelKey: "Home.footer.add-infos.siscomex" },
  { href: "https://www.bcb.gov.br/", labelKey: "Home.footer.add-infos.central-bank" },
  { href: "https://www.gov.br/mdic/", labelKey: "Home.footer.add-infos.mdic" },
  { href: "https://www.gov.br/receitafederal/", labelKey: "Home.footer.add-infos.federal-revenue" },
  { href: "https://www.gov.br/anvisa/", labelKey: "Home.footer.add-infos.anvisa" },
  { href: "https://www.gov.br/agricultura/pt-br/assuntos/vigilancia-agropecuaria", labelKey: "Home.footer.add-infos.vigiagro" },
  { href: "https://www.gov.br/pt-br/orgaos/instituto-nacional-de-metrologia-qualidade-e-tecnologia", labelKey: "Home.footer.add-infos.inmetro" },
];
