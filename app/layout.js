import { Tiro_Bangla } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/navbar";

const tiro = Tiro_Bangla({ subsets: ["bengali"], weight: "400" });

export const metadata = {
  title: "দারুল ইফতা - জামিয়াতুল লতিফ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${tiro.className} bg-gray-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
