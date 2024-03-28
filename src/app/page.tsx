import Navbar from "@/components/Navbar";
import React from "react";
import HomeTitle from "./(fragments)/HomeTitle";
import HomePricing from "./(fragments)/HomePricing";
import HomeTalk from "./(fragments)/HomeTalk";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Navbar />
      <HomeTitle />
      <HomePricing />
      <HomeTalk />
      <Footer />
    </main>
  );
};

export default Home;
