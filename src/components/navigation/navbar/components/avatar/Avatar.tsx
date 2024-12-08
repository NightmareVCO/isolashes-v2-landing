import {
  Avatar as NextUIAvatar,
  AvatarIcon,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import avatarMenuItem from "./_avatar.info";

export default function Avatar() {
  return (
    <Dropdown radius="none" placement="bottom-end">
      <DropdownTrigger>
        <NextUIAvatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          size="md"
          icon={<AvatarIcon />}
          classNames={{
            base: "hover:scale-105",
            icon: "text-secondary",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="flat">
        {avatarMenuItem.map((item) => (
          <DropdownItem
            classNames={{
              base: "hover:rounded-none",
            }}
            key={item.key}
            href={item.href}
            className={item.color ? `text-${item.color}` : undefined}
            endContent={item.endContent}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
