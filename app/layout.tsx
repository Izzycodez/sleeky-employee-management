import type { Metadata } from "next";
import "./globals.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Sleeky programmers",
  description: "Employee data management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-120">
        <Nav />
        <div className="m-2 min-h-screen w-3/4 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
