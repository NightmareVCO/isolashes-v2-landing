import { Button, Link } from "@nextui-org/react";

type StyledButtonProperties = {
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  href: string;
};

export default function StyledButton({
  className,
  isDisabled,
  children,
  href,
}: StyledButtonProperties) {
  return (
    <Button
      radius="none"
      color="primary"
      size="lg"
      className=" min-w-52 min-h-12"
      isDisabled={isDisabled}
    >
      <Link href={href} target="_blank" rel="noopener">
        <span className={`text-xl ${className}`}>{children}</span>
      </Link>
    </Button>
  );
}
