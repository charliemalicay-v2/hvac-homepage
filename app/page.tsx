import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import WhyChooseUs from "./components/why-choose-us";
import ServiceArea from "./components/service-area";
import Emergency from "./components/emergency";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Emergency />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
