import MyFirstComponent from "../components/MyFirstComponent";

//SSR - Server side rendered - server component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-1 bg-gray-400">Header Section</header>
      <main className="flex flex-1 bg-primary">
        Main Section
        
        <MyFirstComponent />
      </main>
      <footer className="row-start-3 flex-1 flex gap-[24px] flex-wrap items-center justify-center bg-amber-200">
        footer Section
      </footer>
    </div>
  );
}
