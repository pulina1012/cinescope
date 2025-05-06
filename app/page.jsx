import HeaderNav from "@/components/header-nav";
import MyFirstComponent from "../components/MyFirstComponent";
import HeroBanner from "@/components/home/hero-banner";
import FeaturedMovies from "@/components/home/featured-movies";

//SSR - Server side rendered - server component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
       <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies/>
        {/* <MyFirstComponent /> */}
      </main>
      <footer className="bg-amber-200 h-72">footer Section</footer>
    </div>
  );
}
