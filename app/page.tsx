import { Hero } from "@/components/sections/Hero";
import { Idea } from "@/components/sections/Idea";
import { Services } from "@/components/sections/Services";
import { AI } from "@/components/sections/AI";
import { Automation } from "@/components/sections/Automation";
import { Engineering } from "@/components/sections/Engineering";
import { Technology } from "@/components/sections/Technology";
import { Experiments } from "@/components/sections/Experiments";
import { About } from "@/components/sections/About";
import { ScrollStory } from "@/components/sections/ScrollStory";

export default function HomePage() {
  return (
    <ScrollStory>
      <Hero />
      <Idea />
      <Services />
      <AI />
      <Automation />
      <Engineering />
      <Technology />
      <Experiments />
      <About />
    </ScrollStory>
  );
}
