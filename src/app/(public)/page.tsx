import CourseDiscovery from "@/components/sections/CourseDiscovery";
import CourseManagement from "@/components/sections/CourseManagement";
import GrowthAndManagement from "@/components/sections/GrowthAndManagement";
import Hero from "@/components/sections/Hero";
import LearningPaths from "@/components/sections/LearningPaths";
import ProfessionalGrowth from "@/components/sections/ProfessionalGrowth";
import TrustedCompanies from "@/components/sections/TrustedCompanies";



const HomePage = () => {
  return (
    <div className="">
     <Hero/>
     <TrustedCompanies/>
     <CourseDiscovery/>
     <LearningPaths/>
     <GrowthAndManagement/>
    </div>
  );
};

export default HomePage;