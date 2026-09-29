import CourseDiscovery from "@/components/sections/CourseDiscovery";
import CreatorCTA from "@/components/sections/CreatorCTA";
import GrowthAndManagement from "@/components/sections/GrowthAndManagement";
import Hero from "@/components/sections/Hero";
import LearningPaths from "@/components/sections/LearningPaths";
import Testimonials from "@/components/sections/Testimonials";
import TrustedCompanies from "@/components/sections/TrustedCompanies";



const HomePage = () => {
  return (
    <div className="">
     <Hero/>
     <TrustedCompanies/>
     <CourseDiscovery/>
     <LearningPaths/>
     <GrowthAndManagement/>
     <CreatorCTA/>
     <Testimonials/>
    </div>
  );
};

export default HomePage;