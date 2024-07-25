import { useEffect, useState } from "react";
import { LayoutHome } from "@/components/common/Layout";
import { type Event } from "./my_events";
import Card from "@/components/Card";
import axios from "axios";
import moment from "moment";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get("/api/private/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="min-h-[calc(100vh-6rem)] p-10 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold text-center">Todos los Eventos</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            date={moment(event.date).format("DD/MM/YYYY HH:mm")}
            description={event.description}
            image={`/uploads/${event.file}`}
          />
        ))}
      </div>
    </main>
  );
}

Home.Layout = LayoutHome;
