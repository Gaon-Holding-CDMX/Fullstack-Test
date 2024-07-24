import Layout from "@/components/common/Layout";
import Preview from "@/components/Preview";
import type { Metadata } from "next";

// internal pages
import Events from "@/components/Events";
import About from "@/components/About";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "EVAUTH - Inicio",
  description: "EVAUTH es una plataforma de autorización para eventos.",
};

export default function Home() {
  return (
    <main className="bg-background-accent h-full">
      <Preview />
      <Events />
      <About />
      <Contact />
    </main>
  );
}

Home.Layout = Layout;