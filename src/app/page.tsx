import Preview from './components/Preview';
import type { Metadata } from 'next'

// pages
import Events from './components/Events';
 
export const metadata: Metadata = {
  title: 'EVAUTH - Inicio',
  description: 'EVAUTH es una plataforma de autenticación y autorización.',
}

export default function Home() {
  return (
    <main className="bg-background h-full">
      <Preview />
      <Events />
    </main>
  );
}
