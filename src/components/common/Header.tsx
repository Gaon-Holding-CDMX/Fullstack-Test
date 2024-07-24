"use client";

import { useRef } from "react";
import LinkAsButton from "./LinkAsButton";
import { Menu } from "lucide-react";

function Link({
  href,
  children,
  close,
}: {
  href: string;
  children: React.ReactNode;
  close?: () => void;
}) {
  return (
    <a
      href={href}
      className="hover:text-white font-semibold text-slate-200"
      onClick={close}
    >
      {children}
    </a>
  );
}

export default function Header() {
  const backRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    backRef.current?.classList.toggle("max-lg:hidden");
    menuRef.current?.classList.toggle("max-lg:hidden");
  }

  function closeMenu() {
    backRef.current?.classList.add("max-lg:hidden");
    menuRef.current?.classList.add("max-lg:hidden");
  }

  return (
    <header className="grid grid-cols-[auto_1fr] px-10 py-5 bg-background h-[6rem] sticky top-0 z-50">
      <a href="/" className="flex items-center">
        <h1 className="text-2xl font-semibold text-center flex items-center">
          EVAUTH
        </h1>
      </a>
      <div className="flex items-center justify-end">
        <div>
          <span
            ref={backRef}
            onClick={toggleMenu}
            className="max-lg:fixed max-lg:hidden max-lg:bg-[#00000085] top-0 left-0 h-full w-full cursor-pointer z-10"
          ></span>
        </div>
        <span
          className="hidden max-lg:flex cursor-pointer"
          onClick={toggleMenu}
        >
          <Menu />
        </span>
        <div
          ref={menuRef}
          className="w-full max-lg:fixed max-lg:hidden max-lg:right-0 max-lg:top-0 max-lg:h-full max-lg:w-auto max-lg:bg-background-accent max-lg:pr-14 max-lg:z-20"
        >
          <div className="grid grid-cols-[1fr_auto] max-lg:flex max-lg:flex-col max-lg:gap-7 max-lg:pt-10">
            <div className="flex gap-5 items-center px-10 max-lg:flex-col max-lg:items-start">
              <Link href="/" close={closeMenu}>
                Inicio
              </Link>
              <Link href="/#events" close={closeMenu}>
                Próximos Eventos
              </Link>
              <Link href="/#about" close={closeMenu}>
                Acerca de
              </Link>
              <Link href="/#contact" close={closeMenu}>
                Contacto
              </Link>
            </div>
            <div className="flex justify-center items-center cursor-pointer max-lg:justify-start max-lg:pl-10">
              <LinkAsButton href="/login">Acceder</LinkAsButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
