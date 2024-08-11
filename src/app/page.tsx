import Header from "@/layouts/header";
import HomeData from "@/components/homeData";
import Footer from "@/layouts/footer";
import Hero from "@/components/hero";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="flex flex-col">
  
      <Hero />
      <HomeData />
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}
