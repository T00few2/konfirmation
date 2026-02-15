import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Info from "@/components/Info";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Invitation />
      <Info />
      <Menu />
      <Footer />
    </main>
  );
}
