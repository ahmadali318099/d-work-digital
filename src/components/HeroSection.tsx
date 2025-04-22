
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Briefcase } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-dwork-blue-light via-white to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-dwork-purple-700">Digital talent</span> that powers
              <span className="text-dwork-purple"> your brand</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-lg">
              Connect with top digital marketing professionals for SEO, content marketing, 
              social media management, and PPC expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-dwork-purple hover:bg-dwork-purple-600 text-white py-6 px-8 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Search size={20} />
                Find Talent
              </Button>
              <Button 
                variant="outline"
                className="border-dwork-purple text-dwork-purple hover:bg-dwork-purple/10 py-6 px-8 rounded-xl flex items-center gap-2"
              >
                <Briefcase size={20} />
                Post a Job
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 pt-4">
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                15,000+ active freelancers
              </span>
              <span className="mx-4">•</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                8,500+ completed projects
              </span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-scale-in">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Digital Marketing Professionals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm opacity-90">Premium talent pool</p>
                  <p className="text-lg font-semibold">Top 3% of digital marketing specialists</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 md:-left-10 bg-white p-4 rounded-lg shadow-lg animate-slide-in-right">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dwork-blue rounded-full flex items-center justify-center text-white font-bold">
                  99%
                </div>
                <div className="text-sm">
                  <p className="font-medium">Client satisfaction</p>
                  <p className="text-gray-500">Across all projects</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 md:-right-10 bg-white p-4 rounded-lg shadow-lg animate-slide-in-right delay-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dwork-purple rounded-full flex items-center justify-center text-white font-bold">
                  48h
                </div>
                <div className="text-sm">
                  <p className="font-medium">Average turnaround</p>
                  <p className="text-gray-500">For project matching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
