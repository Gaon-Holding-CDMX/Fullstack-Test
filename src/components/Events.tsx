function Card({
  title,
  date,
  description,
  image,
}: {
  title: string;
  date: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-background shadow-md rounded-lg flex flex-col w-[20rem] h-[25rem] cursor-pointer max-lg:w-[15rem] max-lg:h-[20rem] max-sm:w-[20rem] max-sm:h-[25rem]">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-[10rem] max-lg:h-[7rem] max-sm:h-[10rem] object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-300 text-sm">{date}</p>
        </div>
        <p className="text-slate-100 line-clamp-5 max-lg:line-clamp-4 max-sm:line-clamp-5">{description}</p>
      </div>
    </div>
  );
}

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
