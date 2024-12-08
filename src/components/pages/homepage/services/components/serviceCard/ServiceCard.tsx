import { Link } from "@nextui-org/react";
import type { ServiceInfo } from "../../_services.info";

type ServiceCardProps = {
  service: ServiceInfo;
  activeItem: number;
  setImageSource: (src: string) => void;
  setActiveItem: (position: number) => void;
};

export default function ServiceCard({
  service,
  activeItem,
  setActiveItem,
  setImageSource,
}: ServiceCardProps) {
  return (
    <li
      key={service.position}
      className="flex flex-row items-center justify-center lg:justify-start w-44 gap-x-3"
      onMouseEnter={() => {
        setImageSource(service.imageSrc);
        setActiveItem(service.position);
      }}
    >
      <p className="text-lg lg:text-xl">{`0${service.position}. `}</p>
      <Link
        href="/servicios"
        className={`transition ${
          activeItem === service.position ? "shadow-inner-link" : ""
        }`}
      >
        <h3 className="inline text-3xl font-semibold text-black tracking-tight lg:text-4xl">
          {service.title}
        </h3>
      </Link>
    </li>
  );
}
