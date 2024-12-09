import { useEffect } from "react";
import Decoration1 from "./decorations/Decoration1";
import Decoration2 from "./decorations/Decoration2";
import Parallax from "parallax-js";

export default function ParallaxBackground() {
  useEffect(() => {
    const scene = document.querySelector(".scene") as HTMLElement;
    new Parallax(scene, {
      relativeInput: true,
      limitX: 50,
      limitY: 100,
      scalarX: 2,
      scalarY: 6,
    });
  }, []);

  return (
    <div className="relative hidden scene lg:block">
      <div data-depth="0.4">
        <Decoration1 />
      </div>
      <div data-depth="0.4">
        <Decoration2 />
      </div>
    </div>
  );
}
