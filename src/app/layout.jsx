import localFont from "next/font/local";
import "./globals.css";
import { AppLayout } from "@/components/layouts/AppLayout/AppLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body className="bg-[#F9F6F4]">
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
