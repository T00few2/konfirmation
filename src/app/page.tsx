import Navbar from "@/components/Navbar";
import Invitation from "@/components/Invitation";
import Info from "@/components/Info";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Invitation />
      <ScrollIndicator targetId="info" />
      <Info />
      <ScrollIndicator targetId="menu" />
      <Menu />
      <ScrollIndicator targetId="rsvp" />
      <Footer />
    </main>
  );
}
