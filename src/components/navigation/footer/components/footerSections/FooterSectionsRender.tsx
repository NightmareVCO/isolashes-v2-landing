import type { FooterSections } from "../../_footer.info";
import useFooter from "../../_useFooter";

type FooterSectionsRenderProps = {
  sections: FooterSections;
};

export default function FooterSectionsRender({
  sections,
}: FooterSectionsRenderProps) {
  const { renderList } = useFooter();

  return (
    <div className="md:grid md:grid-cols-3 md:gap-8">
      <>
        {sections.map((section, index) => (
          <div key={index} className={index === 0 ? "" : "mt-10 md:mt-0"}>
            {renderList(section)}
          </div>
        ))}
      </>
    </div>
  );
}
