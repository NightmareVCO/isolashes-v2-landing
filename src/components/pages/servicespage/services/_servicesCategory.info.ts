export type ServicesCategory = typeof servicesInfo;
export type ServiceCategory = (typeof servicesInfo)[number];
export type Service = ServiceCategory["services"][number];

const servicesInfo = [
  {
    index: 1,
    category: "Aplicación de Pestañas",
    description: "Servicios que ofrecemos en IsoLashes para la aplicación de pestañas. Contamos con una amplia variedad de servicios para la aplicación de pestañas. ",
    services: [
      { name: "Volumen Natural", price: 1800 },
      { name: "Volumen Ruso", price: 2500 },
      { name: "Volumen Brasileño", price: 1800 },
      { name: "Mega Clásicas", price: 2000 },
      { name: "Mega Volumen", price: 3000 },
    ],
  },
  {
    index: 2,
    category: "Servicios de Labios",
    description: "Servicios que ofrecemos en IsoLashes para los labios. Contamos con una amplia variedad de servicios para los labios. ",
    services: [
      { name: "Depilación bigote", price: 300 },
      { name: "Hidratación labios", price: 3500 },
      { name: "Labios Acuarela", price: 6500 },
      { name: "Micropigmentación", price: 12500 },
    ],
  },
   {
    index: 3,
    category: "Servicios de Cejas",
    description: "Servicios que ofrecemos en IsoLashes para las cejas. Contamos con una amplia variedad de servicios para las cejas. ",
    services: [
      { name: "Cejas pelo a pelo", price: 7500 },
      { name: "Depilación en cera", price: 250 },
      { name: "Depilación en hilo", price: 450 },
      { name: "Estilo brasileña", price: 2800 },
      { name: "Ombre brows", price: 12500 },
      { name: "Tintado + dep. cera", price: 650 },
      { name: "Tintado + dep. hilo", price: 850 },
    ],
  },
];

export default servicesInfo;