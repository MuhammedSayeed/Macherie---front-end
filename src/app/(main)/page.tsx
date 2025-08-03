
import CategoriesCarousel from "@/components/CategoriesCarousel/CategoriesCarousel";
import ShortsSection from "@/components/sections/ShortsSection";
import TShirtsSection from "@/components/sections/TShirtsSection";




export default function Home() {

  return (
    <div className="min-h-screen w-full relative">
      <div className="flex flex-col md:flex-row">
        <TShirtsSection value="tshirts" />
        <ShortsSection value="shorts" />
      </div>
      <CategoriesCarousel />
    </div>
  );
}
{/* <div className="relative w-full h-screen overflow-hidden">
  <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline >
    <source src="https://nyerblobstoreprod.blob.core.windows.net/cms-startpage-public/e4dbc644fafe94181fcdf6d209f917b5.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 text-white p-8">
    <h1 className="text-4xl font-bold">مرحباً بك</h1>
    <p className="mt-4">هذا مثال على خلفية فيديو</p>
  </div>
</div> */}