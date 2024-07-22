import Header from "./components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background-accent text-white h-full">
      <body
        className={`${inter.className} bg-background grid grid-rows-[auto_1fr] h-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
