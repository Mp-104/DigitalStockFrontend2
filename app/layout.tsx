import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digital Stock",
  description: "Buy our stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-slate-500 ">
          <ul className="text-4xl p-4 flex justify-evenly
          
          "
          >
            
            <Link className="transition hover:text-blue-200 " href={"/"} >Home </Link>
            <Link className="transition hover:text-blue-200 " href={"/about"} >About </Link>
            <Link className="transition hover:text-blue-200 " href={"/store"} >Store </Link>
          </ul>


        </nav>

        <h1>Is this TEST above all other pages. layout.tsx</h1>

        {children}

        <footer>Test footer in layout.tsx</footer>
        
      </body>
    </html>
  );
}