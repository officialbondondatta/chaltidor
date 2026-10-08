import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/navbar/Navbar";
import NavLinks from "./components/shared/navbar/NavLinks";
import Marquee from "./components/shared/navbar/MarqueeText";
import MarqueeText from "./components/shared/navbar/MarqueeText";

const notoBengali = Noto_Sans_Bengali({
  subsets: ["latin", "bengali"],
});



export const metadata: Metadata = {
  title: "চলতি দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoBengali.className}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar>
          <Suspense
            fallback={
              <div className="border-t border-separator" role="status">
                <h2 className="text-center">তথ্য লোড হচ্ছে...</h2>
              </div>
            }
          >
            <NavLinks></NavLinks>
          </Suspense>
          <Suspense
            fallback={
              <div className="border-t border-separator" role="status">
                <h2 className="text-center">তথ্য লোড হচ্ছে...</h2>
              </div>
            }
          >
            <MarqueeText></MarqueeText>
          </Suspense>
        </Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
