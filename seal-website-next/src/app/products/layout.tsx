import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEAL Products - Secure Document Management',
  description: 'Explore SEAL&apos;s products for secure document storage and instant autofilling capabilities.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 