import "@/styles/globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

export const metadata = {
  title: "mettā muse | Discover Our Products",
  description: "Explore our curated collection of premium products from the best artisans around the world. High-quality fashion, home decor, and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ flex: '1', minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
