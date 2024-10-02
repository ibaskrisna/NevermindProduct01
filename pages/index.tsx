import FifthPage from "@/components/FifthPage";
import FirstPage from "@/components/FirstPage";
import FourthPage from "@/components/FourthPage";
import Hero from "@/components/Hero";
import SecondPage from "@/components/SecondPage";
import SeventhPage from "@/components/SeventhPage";
import SixthPage from "@/components/SixthPage";
import ThirdPage from "@/components/ThirdPage";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Section */}
      <div className="bg-cover-1 bg-fixed bg-center bg-no-repeat h-screen"></div>

      {/* Scrollable Content */}
      <div className="absolute inset-0 overflow-y-auto z-10">
        <Hero />
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <hr className="text-white" />
        <SixthPage />
        <SeventhPage />
      </div>
    </div>
  );
}
