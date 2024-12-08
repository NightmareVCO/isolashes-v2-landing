import ArrowRightUpIcon from "@src/components/icons/uiIcons/ArrowRightUpIcon";
export type AvatarMenuItems = typeof avatarMenuItems;
export type AvatarMenuItem = (typeof avatarMenuItems)[number];

export const avatarMenuItems = [
  {
    key: "usuario",
    href: "https://tienda.isolashes.com/auth/usuario",
    label: "Usuario",
  },
  {
    key: "citas",
    href: "/usuario?tab=citas&pagina=1",
    label: "Citas",
  },
  {
    key: "carrito",
    href: "/usuario?tab=favoritos",
    label: "Carrito",
  },
  {
    key: "ordenes",
    href: "/usuario?tab=ordenes",
    label: "Ordenes",
  },
  {
    key: "cursos",
    href: "https://academia.isolashes.com/usuario/cursos",
    label: "Cursos",
    color: "warning",
    endContent: <ArrowRightUpIcon />,
  },
];

export default avatarMenuItems;
