import type { Metadata } from 'next';
import Quiz from '@/components/Quiz';

export const metadata: Metadata = {
  title: 'Are we a fit? · 60-second quiz — Joolomee',
  description: 'Five questions and I tell you exactly how I can help — no sales pitch. Quick client-fit quiz by Joana Lopes Mesquita (Joolomee).',
  alternates: { canonical: 'https://joolomee.com/quiz' },
  openGraph: {
    title: 'Are we a fit? · 60-second quiz — Joolomee',
    description: 'Five questions. Then I tell you exactly how I can help.',
    url: 'https://joolomee.com/quiz',
    type: 'website',
  },
};

export default function QuizPage() {
  return <Quiz />;
}
