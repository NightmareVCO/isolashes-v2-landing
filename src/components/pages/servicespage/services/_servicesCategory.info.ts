export type ServicesCategory = typeof servicesInfo;
export type ServiceCategory = (typeof servicesInfo)[number];


const servicesInfo = [
  {
    index: 1,
    category: "Categoría 1",
    description: "Descripción para la categoría 1",
    services: [
      { name: "Servicio 1", price: 100 },
      { name: "Servicio 2", price: 150 },
    ],
  },
  {
    index: 2,
    category: "Categoría 2",
    description: "Descripción para la categoría 2",
    services: [
      { name: "Servicio A", price: 200 },
      { name: "Servicio B", price: 250 },
    ],
  },
   {
    index: 3,
    category: "Categoría 3",
    description: "Descripción para la categoría 3",
    services: [
      { name: "Servicio A", price: 200 },
      { name: "Servicio B", price: 250 },
    ],
  },
];

export default servicesInfo;