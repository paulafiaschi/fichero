import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Las Otras - Recursero",
  description: "xxxxxxxxxx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>Menu</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
