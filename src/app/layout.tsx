import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'La petite Boutique de Lo | L’art du parfum', description: 'Découvrez une sélection de parfums floraux, fruités, orientaux et boisés. Commandez facilement via WhatsApp.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
