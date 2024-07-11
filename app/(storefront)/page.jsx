import Hero from "@/components/storefront/Homepage/Hero";
import About from "@/components/storefront/Homepage/About";
import Events from "@/components/storefront/Homepage/Events";
import Menu from "@/components/storefront/Homepage/Menu";
import Reservations from "@/components/storefront/Homepage/Reservations";

export default function StorefrontHomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Events />
      <Menu />
      <Reservations />
    </div>
  );
}
