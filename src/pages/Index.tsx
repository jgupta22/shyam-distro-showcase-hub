
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import ClientsSection from "@/components/ClientsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <ContactForm />
      </div>
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialSection />
      <ClientsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
