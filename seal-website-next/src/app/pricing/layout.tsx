import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEAL Pricing - Plans and Features',
  description: 'Choose the perfect SEAL plan for your document management needs.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 