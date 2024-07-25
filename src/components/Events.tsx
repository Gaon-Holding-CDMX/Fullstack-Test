import Card from "./Card";

export default function Events() {
  return (
    <section id="events" className="p-10 flex flex-col gap-10 max-sm:px-5">
      <h2 className="text-3xl font-semibold text-center">Próximos Eventos</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        <Card
          title="Evento 3"
          date="03/03/2022"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          image="https://upload.wikimedia.org/wikipedia/commons/7/73/Night_party_on_the_beach%2C_lights%2C_Koh_Chang%2C_Thailand.jpg"
        />
        <Card
          title="Evento 2"
          date="02/02/2022"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY4ODQ3OS13aWtpbWVkaWEtaW1hZ2Uta293YjE4bjEuanBn.jpg"
        />
        <Card
          title="Evento 1"
          date="01/01/2022"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          image="https://c1.peakpx.com/wallpaper/917/861/97/concert-show-stage-lights-wallpaper-preview.jpg"
        />
      </div>
    </section>
  );
}
