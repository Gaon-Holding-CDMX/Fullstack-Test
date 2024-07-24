import { useEffect } from "react";
import { LayoutHome } from "@/components/common/Layout";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="min-h-[calc(100vh-6rem)] p-10">
      <h1 className="text-3xl font-semibold text-center">Todos los Eventos</h1>
    </main>
  );
}

Home.Layout = LayoutHome;
