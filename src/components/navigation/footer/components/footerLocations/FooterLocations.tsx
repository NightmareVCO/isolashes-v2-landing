import type { FooterNavigationLocation } from "../../_footer.info";
import useFooter from "../../_useFooter";

type FooterLocationsRenderProps = {
  title: string;
  items: FooterNavigationLocation;
};

export default function FooterLocationsRender({
  title,
  items,
}: FooterLocationsRenderProps) {
  const { renderList } = useFooter();

  return (
    <div className="md:grid md:grid-cols-1 md:gap-8">
      <div>
        {renderList({
          title: title,
          items: items,
        })}
      </div>
    </div>
  );
}
