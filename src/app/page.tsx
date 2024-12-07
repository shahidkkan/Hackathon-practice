import Banner from "@/components/Banner";
import BestSellingProducts from "@/components/BestSellingProducts";
import BrowseCategory from "@/components/BrowseCategory";
import FlashSales from "@/components/FlashSales";
import MusicExperience from "@/components/MusicExperience";
import ExploreOurProducts from "../components/ExploreOurProducts";
import NewArrival from "@/components/NewArrival";
import Customer from "@/components/Customer";

export default function Home() {
  return (
    <main>
      <Banner />
      <FlashSales />
      <BrowseCategory />
      <BestSellingProducts />
      <MusicExperience />
      <ExploreOurProducts />
      <NewArrival />
      <Customer />
    </main>
  );
}
