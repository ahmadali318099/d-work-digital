
import React from "react";
import { Search, FileText, Star } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-dwork-purple/10 rounded-full flex items-center justify-center group-hover:bg-dwork-purple/20 transition-colors duration-300">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-dwork-purple">
            {icon}
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-dwork-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Discover Talent",
      description: "Browse our curated pool of pre-vetted digital marketing professionals",
      stepNumber: 1,
    },
    {
      icon: <FileText size={28} />,
      title: "Define Your Project",
      description: "Share your requirements and receive custom proposals from experts",
      stepNumber: 2,
    },
    {
      icon: <Star size={28} />,
      title: "Deliver Excellence",
      description: "Collaborate seamlessly and get outstanding results for your brand",
      stepNumber: 3,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dwork-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-dwork-purple">How</span> D Work Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process connects you with world-class digital marketing talent in just a few steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
          {/* Connection Lines (Only on desktop) */}
          <div className="hidden md:block absolute top-24 left-[30%] right-[30%] h-0.5 bg-gradient-to-r from-dwork-purple-light via-dwork-purple to-dwork-purple-light"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className={`animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
              <Step {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
