import { HeroSection } from "@/components/sections/hero";
import { WorkforceSolutionsSection } from "@/components/sections/workforce-solutions-section";
import  {FeaturedJobsSection} from "@/components/sections/featured-job-section"
import { TestimonialsSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkforceSolutionsSection />
      <FeaturedJobsSection/>
      <TestimonialsSection/>
    </main>
  );
}
