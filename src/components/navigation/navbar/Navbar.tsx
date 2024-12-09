import { AnimatePresence, motion } from "framer-motion";
import {
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
} from "@nextui-org/react";

import { useNavbar } from "./_useNavbar";
import { navbarElements } from "./_navbar.config";

import BagIcon from "@src/components/icons/uiIcons/BagIcon";
import SearchIcon from "@src/components/icons/uiIcons/SearchIcon";
import IsolashesLogo from "@src/components/icons/brandIcons/IsolashesIcon";
import Avatar from "./components/avatar/Avatar";

export default function Navbar() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    handleSearchVisibility,
    searchReference,
    currentPath,
  } = useNavbar();

  return (
    <NextUINavbar
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      height={"6.5rem"}
      className="border-b-2 shadow-xl lg:px-10 border-primary"
    >
      {/* Botón de abrir y cerrar */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Logo de la empresa*/}
      <NavbarContent justify="start" className="hidden lg:flex">
        <NavbarBrand>
          <Link href="/">
            <IsolashesLogo className="w-40 h-auto mb-4 lg:w-48 xl:w-60" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Logo de la empresa teléfono*/}
      <NavbarContent justify="center" className="lg:hidden">
        <NavbarBrand>
          <Link href="/">
            <IsolashesLogo className="w-40 h-auto mb-4 lg:w-48 xl:w-60" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar de Desktop */}
      <NavbarContent className="hidden gap-10 lg:flex" justify="center">
        {navbarElements.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href={item.href}
              className={`${currentPath === item.href && "shadow-inner-link"} h-5 px-1 font-medium transition lg:text-lg xl:text-xl hover:shadow-inner-link`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón de búsqueda, usuario, carrito */}
      <NavbarContent justify="end">
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchReference}
              className="absolute z-30 shadow-md right-3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <NavbarItem>
                <form>
                  <Input
                    name="search"
                    classNames={{
                      base: "max-w-full w-[500px] h-12",
                      mainWrapper: "h-full",
                      input: "text-md",
                      inputWrapper:
                        "h-full font-normal text-default-500 bg-default-100",
                    }}
                    className="hidden lg:block"
                    placeholder="Buscar un producto..."
                    radius="none"
                    size="sm"
                    endContent={<SearchIcon />}
                    type="search"
                    aria-label="Buscar un producto..."
                  />
                </form>
              </NavbarItem>
            </motion.div>
          )}
        </AnimatePresence>

        <NavbarItem className="hidden lg:flex">
          <button onClick={handleSearchVisibility}>
            <SearchIcon />
          </button>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <BagIcon />
        </NavbarItem>

        <NavbarItem>
          <Avatar />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar de Teléfono */}
      <NavbarMenu>
        {navbarElements.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : // eslint-disable-next-line unicorn/no-nested-ternary
                    index === navbarElements.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
