import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="p-10 min-h-screen text-slate-50 md:p-14"
      style={
        { background: "linear-gradient(-45deg, #000d22 0%, #000b1c 8%, #00060F 50%, #000b1c 92%, #000d22 100%)", backgroundRepeat: 'no-repeat'}
      }
      >
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
