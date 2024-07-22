export default function Contact() {
  return (
    <section id="contact" className="p-10 flex flex-col gap-10 pb-24">
      <h2 className="text-3xl font-semibold text-center">Contacto</h2>
      <p className="text-lg text-center text-p-secondary-text px-52">
        ¿Tienes alguna pregunta o comentario sobre EVAUTH? ¡Contáctanos! Estamos
        a tu disposición para resolver tus dudas y brindarte la información que
        necesitas para crear un evento, solo manda un correo a{" "}
        <a href="mailto:hello@evauth.com" className="text-p-accent font-semibold">
          hello@evauth.com
        </a>
      </p>
    </section>
  );
}
