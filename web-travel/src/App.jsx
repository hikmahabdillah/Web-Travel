import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PackagesSection from "./components/PackagesSection";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <PackagesSection />
      <ReviewSection />
    </>
  );
}

export default App;
