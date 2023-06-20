import "./globals.css";
import Buildings from "@/components/Buildings";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leon - Web Developer",
  description:
    "Leon's portfolio website showcasing his expertise in React.JS, TailwindCSS, and UX/UI design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
