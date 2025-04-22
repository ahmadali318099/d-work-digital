
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-dwork-purple to-dwork-purple-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-10 right-[20%] w-40 h-40 bg-white/5 rounded-full"></div>
        <div className="absolute top-[40%] right-20 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to elevate your digital marketing?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their online presence with D Work's expert freelancers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-dwork-purple hover:bg-white/90 py-7 px-8 rounded-xl font-medium text-lg"
            >
              Find Your Expert
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 py-7 px-8 rounded-xl font-medium text-lg"
            >
              <span>How It Works</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            No commitment required. 100% satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
