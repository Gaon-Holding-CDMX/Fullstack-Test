import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import moment from "moment";
import { type Event } from "@/pages/my_events";

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="events" className="p-10 flex flex-col gap-10 max-sm:px-5">
      <h2 className="text-3xl font-semibold text-center">Próximos Eventos</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {events.length > 0 ? (
          <>
            {events.map((event, index) => (
              <Card
                key={index}
                title={event.title}
                date={moment(event.date).format("DD/MM/YYYY HH:mm")}
                description={event.description}
                image={`/uploads/${event.file}`}
              />
            ))}
          </>
        ) : (
          <div>
            <p className="text-center text-xl text-slate-400">Aun no hay eventos próximos</p>
          </div>
        )}
      </div>
    </section>
  );
}
