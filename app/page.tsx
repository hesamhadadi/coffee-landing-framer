import LoadingScreen from "./components/LoadingScreen";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import {
  GhostHeadlines,
  Philosophy,
  Gallery,
  Process,
  Experience,
  CTA,
  Footer,
} from "./components/Sections";

export default function Page() {
  return (
    <main>
      <LoadingScreen />
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <GhostHeadlines />
      <About />
      <MenuSection />
      <Philosophy />
      <Gallery />
      <Process />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}
