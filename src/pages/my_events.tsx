"use client";

import { useState, useRef, useEffect } from "react";
import { LayoutHome } from "@/components/common/Layout";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import Popover from "@/components/common/Popover";
import Textarea from "@/components/common/Textarea";
import Card from "@/components/Card";
import axios from "axios";
import moment from "moment";
import { Trash2 } from "lucide-react";

interface Event {
  title: string;
  description: string;
  date: string;
  file: string;
  _id: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  const [open, setOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    axios.get("/api/private/my_events").then((response) => {
      setEvents(response.data);
    });
  }, []);

  async function createEvent() {
    if (!fileRef.current?.files?.[0]) {
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("file", fileRef.current.files[0]);

    try {
      const response = await axios.post("/api/private/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const file = response.data.file.filename;
        const eventId = response.data.eventId;

        setEvents([
          ...events,
          {
            title,
            description,
            date,
            file,
            _id: eventId,
          },
        ]);

        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function deleteEvent(eventId: string) {
    axios.delete(`/api/private/my_events/?id=${eventId}`).then((response) => {
      if (response.status === 200) {
        setEvents(events.filter((event) => event._id !== eventId));
      }
    });
  }

  return (
    <main className="min-h-[calc(100vh-6rem)] p-10 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold text-center">Mis Eventos</h1>
      <div className="flex flex-col gap-10">
        <div className="flex justify-end">
          <div>
            <Button onClick={() => setOpen(true)}>Nuevo Evento</Button>
            <Popover open={open} setOpen={setOpen}>
              <div className="flex flex-col gap-10">
                <h2 className="text-2xl font-semibold text-center">
                  Detalles del Evento
                </h2>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Label>Titulo</Label>
                    <Input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Título del evento"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Descripción</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descripción del evento"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Imagen</Label>
                    <Input
                      id="file"
                      ref={fileRef}
                      type="file"
                      className="p-[9px] h-12 w-full rounded-md outline-none text-gray-200 bg-background-accent border text-base border-slate-500 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Fecha del Evento</Label>
                    <Input
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="datetime-local"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button onClick={createEvent}>Guardar</Button>
                </div>
              </div>
            </Popover>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {events.map((event, index) => (
            <div key={index} className="relative group/card cursor-pointer">
              <div className="hidden absolute h-full w-full top-0 left-0 group-hover/card:flex">
                <div className="flex w-full h-full justify-end items-start">
                  <span
                    onClick={() => deleteEvent(event._id)}
                    className="m-3 bg-white p-3 rounded-lg text-black cursor-pointer shadow"
                  >
                    <Trash2 className="hover:text-red-400" />
                  </span>
                </div>
              </div>
              <Card
                title={event.title}
                date={moment(event.date).format("DD/MM/YYYY HH:mm")}
                description={event.description}
                image={`/uploads/${event.file}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

Home.Layout = LayoutHome;
