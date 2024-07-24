function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-background shadow-md rounded-lg flex flex-col w-[25rem] max-lg:w-[20rem] max-md:w-[17rem]">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-slate-100 line-clamp-5">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="p-10 flex flex-col gap-10 max-sm:px-5">
      <h2 className="text-3xl font-semibold text-center">Acerca de Nosotros</h2>
      <div className="flex flex-wrap gap-5 justify-center text-lg px-56 max-lg:px-10 max-sm:px-5">
        EVAUTH es una innovadora plataforma de autenticación y autorización
        diseñada para asegurar la integridad y seguridad de los eventos que
        organizan los usuarios, los organizadores de eventos pueden gestionar de
        manera eficiente y segura la participación de los asistentes, evitando
        el acceso no autorizado y garantizando que solo las personas invitadas o
        aprobadas puedan asistir.
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <Card
          title="Misión"
          description="Nuestra misión es proporcionar una plataforma segura y confiable para la autenticación y autorización de eventos, garantizando la integridad y seguridad de los mismos."
        />
        <Card
          title="Visión"
          description="Nuestra visión es ser la plataforma líder en autenticación y autorización de eventos a nivel mundial, proporcionando una solución innovadora y segura para la gestión de eventos."
        />
      </div>
    </section>
  );
}
