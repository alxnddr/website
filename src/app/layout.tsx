import "./globals.css";
import cn from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleksandr Lesnenko — Software engineer",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-50 via-slate-200 to-1ndigo-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
