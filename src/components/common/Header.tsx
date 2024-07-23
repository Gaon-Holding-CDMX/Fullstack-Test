import LinkAsButton from "./LinkAsButton";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="hover:text-slate-300">{children}</a>;
}

export default function Header() {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] px-10 py-5 bg-background-accent h-[6rem]">
      <h1 className="text-2xl font-semibold text-center flex items-center">EVAUTH</h1>
      <div className="flex gap-5 items-center px-10">
        <Link href="/">Inicio</Link>
        <Link href="/#events">Próximos Eventos</Link>
        <Link href="/#about">Acerca de</Link>
        <Link href="/#contact">Contacto</Link>
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <LinkAsButton href="/login">
          Acceder
        </LinkAsButton>
      </div>
    </header>
  );
}
