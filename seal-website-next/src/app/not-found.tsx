import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-4">Could not find the requested resource</p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#69D0E5] text-white rounded hover:bg-[#8BA4FF] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 