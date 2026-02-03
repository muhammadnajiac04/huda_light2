import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { CategoriesSection } from '@/sections/CategoriesSection';
import { DownlightProSection } from '@/sections/DownlightProSection';
import { SustainabilitySection } from '@/sections/SustainabilitySection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { AwardsSocialSection } from '@/sections/AwardsSocialSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <CategoriesSection />
        <DownlightProSection />
        <SustainabilitySection />
        <ProjectsSection />
        <AwardsSocialSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
