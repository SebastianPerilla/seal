import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SEAL - Our Mission and Team',
  description: 'Learn about SEAL&apos;s mission to eliminate repetitive paperwork through secure data storage and instant document autofilling.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 