import { HeroSection } from "@/components/sections/hero";
import { WorkforceSolutionsSection } from "@/components/sections/workforce-solutions-section";
import  {FeaturedJobsSection} from "@/components/sections/featured-job-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkforceSolutionsSection />
      <FeaturedJobsSection/>
    </main>
  );
}
