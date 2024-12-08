import FacebookIcon from "@icons/socialIcons/FacebookIcon";
import InstagramIcon from "@icons/socialIcons/InstagramIcon";
import TwitterIcon from "@icons/socialIcons/TwitterIcon";
import type { FC, SVGProps } from "react";

export type FooterNavigation = typeof footerNavigation;
export type FooterNavigationSocial = typeof footerNavigation.social;
export type FooterNavigationLocation = typeof footerNavigation.locations;
export type FooterSections = typeof footerSections;

export type FooterInfo = typeof footerInfo;
export type Section = (typeof footerSections)[number];

const currentYear = new Date().getFullYear();

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const footerInfo = {
  title:
    "Somos una empresa dedicada al servicio de las extensiones de pestañas.",
  rights: `© ${currentYear} Isolashes. Todos los derechos reservados. Diseñado y desarrollado por`,
  author: "Vladimir Curiel.",
  sectionsTitles: {
    locations: "Encuéntranos en",
    account: "Cuenta",
    navigation: "Navegación",
    services: "Servicios",
    social: "Redes Sociales",
  },
};

export const footerNavigation = {
  locations: [
    {
      name: "Dirección:  C. E. León Jimenez, Santiago de los Caballeros",
      href: "#",
    },
    { name: "Teléfono: 809-601-2440", href: "" },
    { name: "Correo: isolashes@isolashes.com", href: "" },
    { name: "Horario: 9:00am - 6:00pm ", href: "" },
  ],
  account: [
    { name: "Citas", href: "/usuario" },
    { name: "Ordenes", href: "/usuario" },
    { name: "Carrito", href: "/carrito" },
    { name: "Cursos", href: "https://academia.isolasesh.com/usuario/cursos" },
  ],
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Tienda", href: "/tienda" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],
  services: [
    { name: "Pestañas", href: "/servicios" },
    { name: "Cejas", href: "/servicios" },
    { name: "Labios", href: "/servicios" },
    { name: "Academia", href: "/servicios" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/isolashes",
      icon: (() => <FacebookIcon />) as FC<IconProps>,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/isolashes",
      icon: (() => <InstagramIcon />) as FC<IconProps>,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/isolashes",
      icon: (() => <TwitterIcon />) as FC<IconProps>,
    },
  ],
};

export const footerSections = [
  {
    title: footerInfo.sectionsTitles.navigation,
    items: footerNavigation.navigation,
  },
  {
    title: footerInfo.sectionsTitles.services,
    items: footerNavigation.services,
  },
  {
    title: footerInfo.sectionsTitles.account,
    items: footerNavigation.account,
  },
];
