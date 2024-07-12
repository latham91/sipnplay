import Footer from "@/components/storefront/Footer";
import Navbar from "@/components/storefront/Navbar";

export default function StoreFrontLayout({ children }) {
  return (
    <div>
      <main className="bg-grid">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
