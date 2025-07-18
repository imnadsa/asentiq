// src/app/page.tsx
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
    </main>
  );
}
