// NO "use client" here - this is correct!
import "@/app/globals.css";
import { Metadata, Viewport } from 'next';
import ClientWrapper from "./components/ClientWrapper";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'SEAL - Fill Instantly. Store Securely.',
  description: 'SEAL instantly autofills official documents and securely stores your data.',
  icons: {
    icon: '/seal_logo.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-gray-100">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
