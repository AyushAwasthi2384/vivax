import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vivax | Redefine the Impossible!",
  description: "We provide comprehensive packages which include everything from captivating social media reels and interesting blogs to professional SEO strategies and clean, user-friendly websites. You may get the ideal balance of strategy and creativity in one location with Vivax.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
