import type { Metadata } from 'next';
import { locales } from '@/i18n';

export const metadata: Metadata = {
  title: 'Drive-E | Electric Vehicle Comparison & Reviews',
  description: 'Compare and review all electric vehicles. Find the perfect EV with comprehensive specs, real reviews, and the latest models.',
  keywords: 'electric vehicles, EV, electric cars, EV comparison, EV reviews',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

