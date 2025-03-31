// NO "use client" here - this is correct!
import "@/app/globals.css";
import { Metadata } from 'next';
import ClientWrapper from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: 'SEAL - Fill Instantly. Store Securely.',
  description: 'SEAL instantly autofills official documents and securely stores your data.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
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
