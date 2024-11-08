import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { PrimeReactProvider } from "primereact/api";
import { ToastProvider } from "@/components/hooks/toast";

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

export const metadata = {
  title: "Todo App",
  description: "Generated by Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReactProvider>
          <ToastProvider>
            <Navbar />
            {children}
          </ToastProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
