import HeaderNav from "@/components/header-nav";
import MyFirstComponent from "../components/MyFirstComponent";

//SSR - Server side rendered - server component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-1 bg-gray-400">
        <HeaderNav />
      </header>
      <main className="bg-primary h-screen">
        Main Section
        <MyFirstComponent />
      </main>
      <footer className="bg-amber-200 h-72">footer Section</footer>
    </div>
  );
}
