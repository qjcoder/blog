import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/themecontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog QJ",
  description: "QJ BLOG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
