import { LayoutHome } from "@/components/common/Layout";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-6rem)] p-10">
      <h1 className="text-3xl font-semibold text-center">Mis Eventos</h1>
    </main>
  );
}

Home.Layout = LayoutHome;
