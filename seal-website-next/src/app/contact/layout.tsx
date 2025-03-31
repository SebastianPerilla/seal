import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SEAL - Get in Touch',
  description: 'Contact us to learn more about SEAL&apos;s document management solutions.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 