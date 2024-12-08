import { useEffect, useState } from "react";
import { servicesInfo } from "../../_services.info";

export default function useServicesRender() {
  const [imageSource, setImageSource] = useState(servicesInfo[0].imageSrc);
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((currentActiveItem: any) => {
        const nextActiveItem =
          currentActiveItem >= servicesInfo.length ? 1 : currentActiveItem + 1;
        setImageSource(servicesInfo[nextActiveItem - 1].imageSrc);
        return nextActiveItem;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return { imageSource, setImageSource, activeItem, setActiveItem };
}
