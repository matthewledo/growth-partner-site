import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}