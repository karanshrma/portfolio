import CustomCursor from '@/components/CustomCursor';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <FloatingNav />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
