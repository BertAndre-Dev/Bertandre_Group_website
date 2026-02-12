import Navbar from "@/components/molecules/navbar/page";
import HeroSection from "@/components/molecules/heroSection/page";
import HeroBanner from "@/components/molecules/heroBanner/page";
import AboutSection from "@/components/molecules/aboutSection/page";
import StatisticsSection from "@/components/molecules/statisticsSection/page";
import SubsidiariesSection from "@/components/molecules/subsidiariesSection/page";
import CallToActionSection from "@/components/molecules/callToActionSection/page";
import Footer from "@/components/molecules/footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <HeroSection />
        <HeroBanner />
        <AboutSection />
      </main>
      <main >
        <StatisticsSection />
        <SubsidiariesSection />
      </main>
      <main>
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
