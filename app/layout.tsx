import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What is Science?',
  description:
    'Concise explainer describing the nature of science, its method, and how it shapes our understanding of the universe.',
  metadataBase: new URL('https://agentic-0935d436.vercel.app'),
  openGraph: {
    title: 'What is Science?',
    description:
      'Explore the core meaning of science, the scientific method, and why it remains our most reliable way to understand reality.',
    url: 'https://agentic-0935d436.vercel.app',
    siteName: 'Science Explainer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Science?',
    description:
      'Explore the core meaning of science, the scientific method, and why it remains our most reliable way to understand reality.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

