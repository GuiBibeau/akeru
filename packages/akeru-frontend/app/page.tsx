import { Metadata } from "next";
import HeroSection from "./components/section/hero-section/hero-section";
import HomeCard from "./components/ui/home-card/home-card";

export const metadata = {
  title: "AkeruAI - HOME",
  description: "The best API to setup your AI Project",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center mt-40 air:mt-20 sm:mt-10 ">
        <HeroSection />
      </div>

      <div className="flex w-full gap-12 mx-auto pt-52 md:pt-12 md:flex-col sm:flex-col md:gap-3.5 ">
        <HomeCard
          title="Fast and secure"
          description="Lorem ipsum dolor sit amet consectetur. Ac commodo proin montes mattis."
        />
        <HomeCard
          title="Fast and secure"
          description="Lorem ipsum dolor sit amet consectetur. Ac commodo proin montes mattis."
        />
        <HomeCard
          title="Fast and secure"
          description="Lorem ipsum dolor sit amet consectetur. Ac commodo proin montes mattis."
        />
      </div>
    </main>
  );
}
