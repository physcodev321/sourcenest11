import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCategories from "../sections/ProductCategories";
import ManufacturingCapabilities from "../sections/ManufacturingCapabilities";
import ProcessSection from "../sections/ProcessSection";
import Hero from "../sections/Hero";
import TrustSection from "../sections/TrustSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import PortfolioSection from "../sections/PortfolioSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import PrivateLabelSection from "../sections/PrivateLabelSection";
import IndustriesSection from "../sections/IndustriesSection";
import FAQSection from "../sections/FAQSection";
import QuoteSection from "../sections/QuoteSection";
import TopBar from "../components/TopBar";
import SEO from "../components/SEO";


export default function Home() {
  return ( 
    <>
       <SEO
         title="SourceNest | Clothing Manufacturing & Private Label Agency"
         description="SourceNest helps brands build clothing lines with full manufacturing, private label, cut & sew, screen printing, and embroidery services."
         keywords="clothing manufacturer, private label, apparel production, cut and sew, screen printing, embroidery"
       />

         <script type="application/ld+json">
              {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "Organization",
             name: "SourceNest",
             url: "https://www.sourcenest.com",
             description:
             "Clothing manufacturing and private label production company.",})}
         </script>
         
      <TopBar />

      <Navbar />

      <Hero />

      <TrustSection />

      <WhyChooseUs />

      <ProductCategories />

      <ManufacturingCapabilities />

      <ProcessSection />

      <PrivateLabelSection />

      <PortfolioSection />

      <TestimonialsSection />

      <IndustriesSection />

      <FAQSection />

      <QuoteSection />

       <Footer />
    </>
    
  );
}