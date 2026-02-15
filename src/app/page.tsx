import Navbar from "@/components/Navbar";
import Invitation from "@/components/Invitation";
import Info from "@/components/Info";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Invitation />
      <Info />
      <Menu />
      <Footer />
    </main>
  );
}
