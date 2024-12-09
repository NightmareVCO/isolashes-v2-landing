import { Link } from "@nextui-org/react";
import type { FooterNavigationSocial } from "../../_footer.info";

type FooterSocialProps = {
  socials: FooterNavigationSocial;
};

export default function FooterSocialRender({ socials }: FooterSocialProps) {
  return (
    <div className="flex space-x-6">
      {socials.map((item) => (
        <Link key={item.name} className="text-default-400" href={item.href}>
          <span className="sr-only">{item.name}</span>
          <item.icon aria-hidden="true" className="w-6" />
        </Link>
      ))}
    </div>
  );
}
