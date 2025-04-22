import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import FeaturedFreelancers from "@/components/FeaturedFreelancers";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Categories />
      <FeaturedFreelancers />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
