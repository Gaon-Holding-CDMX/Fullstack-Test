import Preview from './components/Preview';
import type { Metadata } from 'next'

// pages
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
 
export const metadata: Metadata = {
  title: 'EVAUTH - Inicio',
  description: 'EVAUTH es una plataforma de autenticación y autorización.',
}

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
