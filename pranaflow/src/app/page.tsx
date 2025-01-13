import AboutSection from "@/components/AboutSection";
import DailyPlanner from "@/components/DailyPlaner";
import DailyPlanerContent from "@/components/DailyPlanerContent";
import DailyPlanerConetnt from "@/components/DailyPlanerContent";
import HabitRecommendations from "@/components/HabitRecommendations";
import Herosection from "@/components/Herosection";
import Testimonials from "@/components/Testimonials";
import TimeLineContent from "@/components/TimeLineContent";

export default function Home() {
  return <>
  <Herosection/>
  <AboutSection/>
  <DailyPlanerConetnt/>
  <DailyPlanner/>
  <HabitRecommendations/>
  <TimeLineContent/>
  <Testimonials/>
  </>;
}
