import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/common";
import Provider from "@/redux/provider";
import{ Setup }from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nomad Vision',
  description: 'nomadvision.net: Gateway to AI and Data-Driven Business Innovation. Explore the latest in AI trends, data analytics, and industry insights with networking community. Empower your business with cutting-edge technologies and expert analysis. Visit us.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <div className="text-gray-800 bg-[url('/ai2.jpg')] bg-center sm:bg-cover bg-fixed">
            <Navbar props="z-10 bg-opacity-0" />
            <div className="">
              {children}
            </div>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
