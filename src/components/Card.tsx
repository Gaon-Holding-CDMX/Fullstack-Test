export default function Card({
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
    <div className="bg-background shadow-md rounded-lg flex flex-col w-[20rem] cursor-pointer max-lg:w-[15rem] max-sm:w-[20rem] h-fit">
      <div>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-[10rem] max-lg:h-[7rem] max-sm:h-[10rem] object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-300 text-sm">{date}</p>
        </div>
        <p className="text-slate-100 line-clamp-5 max-lg:line-clamp-4 max-sm:line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
}
