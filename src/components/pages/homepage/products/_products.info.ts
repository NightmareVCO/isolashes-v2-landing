import { productImages } from "@config/images";

export type ProductsInfo = typeof productsInfo;
export type Products = typeof products;
export type Product = (typeof products)[number];

export const products = [
  {
    name: "Blister de Pestañas",
    price: "1380",
    description: "Grosor de 0.05 12 filas",
    images: [
      {
        src: productImages.blister1,
        alt: "Pestañas",
      },
      {
        src: productImages.blister2,
        alt: "Pestañas",
      },
    ],
  },
  {
    name: "Blister de Pestañas",
    price: "1270",
    description: "Grosor de 0.05 12 filas",
    images: [
      {
        src: productImages.blister2,
        alt: "Pestañas",
      },
      {
        src: productImages.blister1,
        alt: "Pestañas",
      },
    ],
  },
  {
    name: "Adhesivo",
    price: "1800",
    description: "Secado Lento de 1 a 2 segundos",
    images: [
      {
        src: productImages.adhesivo1,
        alt: "Pestañas",
      },
      {
        src: productImages.adhesivo2,
        alt: "Pestañas",
      },
    ],
  },
  {
    name: "Adhesivo",
    price: "1800",
    description: "Secado Lento de 0.05 segundos",
    images: [
      {
        src: productImages.adhesivo2,
        alt: "Pestañas",
      },
      {
        src: productImages.adhesivo1,
        alt: "Pestañas",
      },
    ],
  },
];

export const productsInfo = {
  normalText: "Productos",
  styledText: "De Belleza",
  buttonText: "Ver todos los productos",
  buttonHref: "/tienda",
};

export default productsInfo;
