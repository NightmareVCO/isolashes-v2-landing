import { servicesInfo } from "../../_services.info";
import useServicesRender from "./_useServicesRender";
import ServiceCard from "../serviceCard/ServiceCard";

export default function ServicesRender() {
  const { imageSource, setImageSource, activeItem, setActiveItem } =
    useServicesRender();

  return (
    <>
      <nav className="relative z-10 flex-1 w-full py-20">
        <ul className="flex flex-col items-center justify-center w-full text-nowrap gap-y-10">
          {servicesInfo.map((service) => (
            <ServiceCard
              key={service.position}
              service={service}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setImageSource={setImageSource}
            />
          ))}
        </ul>
      </nav>

      <div className="relative z-20 flex items-center justify-center w-full flex-2">
        <img
          src={imageSource}
          alt="Imagen de los servicios de Isolashes"
          width={540}
          height={540}
          decoding="async"
          loading="lazy"
          className="lg:absolute"
        />
      </div>
    </>
  );
}
