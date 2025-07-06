import FooterArea from "@/components/footer";
import HeaderNav from "@/components/header-nav";
import HeroBanner from "@/components/home/hero-banner";
import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner  title="About CineScope"
            description="Learn more about our journey, values, and mission to bring movies closer to you."
         />
     
         {/* About Section */}
          <section className="py-12 px-4 md:px-16 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                CineScope was founded with a passion for storytelling and visual experiences. Our goal is to bring
                compelling cinema closer to audiences through innovative platforms and immersive engagement.
              </p>
            </div>
          </section>
      </main>
      <FooterArea />
    </div>
  );
}
