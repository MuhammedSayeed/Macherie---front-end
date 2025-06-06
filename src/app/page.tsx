import CategoriesCarousel from "@/components/CategoriesCarousel/CategoriesCarousel";
import BermudaShortsSection from "@/components/sections/BermudaShortsSection";
import FrameSection from "@/components/sections/FrameSection";
import NewInSection from "@/components/sections/NewInSection";
import TShirtsSection from "@/components/sections/TShirtsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <NewInSection />
      <div className="flex flex-col md:flex-row">
        <TShirtsSection />
        <BermudaShortsSection />
      </div>
      <FrameSection/>
      <CategoriesCarousel/>
    </div>
  );
}
