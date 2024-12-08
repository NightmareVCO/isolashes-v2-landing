export type ServicesInfo = typeof servicesInfo;
export type ServiceInfo = ServicesInfo[number];
import { homePageImages } from "@config/images";

export const servicesInfo = [
  {
    title: "Extensiones de Pestañas",
    imageSrc: "/pestana.webp",
    position: 1,
  },
  {
    title: "Depilación de Cejas",
    imageSrc: "/cejas.webp",
    position: 2,
  },
  {
    title: "Micropigmentación",
    imageSrc: "/labios.webp",
    position: 3,
  },
  {
    title: "Academia Isolashes",
    imageSrc: "/academia.webp",
    position: 4,
  },
];
