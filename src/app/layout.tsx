import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajkowo - Dog Profile Management",
  description: "Manage and find dog profiles easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-indigo-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                Rajkowo
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link href="/" className="hover:text-indigo-200">
                  Home
                </Link>
                <Link href="/dogs/list" className="hover:text-indigo-200">
                  Dog List
                </Link>
                <Link href="/scan" className="hover:text-indigo-200">
                  Scan QR
                </Link>
                <Link href="/missing" className="hover:text-indigo-200">
                  Missing Dogs
                </Link>
                <Link href="/faq" className="hover:text-indigo-200">
                  FAQ
                </Link>
                <Link href="/login" className="hover:text-indigo-200">
                  Login
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-white hover:text-indigo-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
