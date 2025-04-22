
import React from "react";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FreelancerProps {
  name: string;
  title: string;
  rating: number;
  projects: number;
  imageSrc: string;
  skills: string[];
  verified: boolean;
  featured?: boolean;
}

const FreelancerCard: React.FC<FreelancerProps> = ({
  name,
  title,
  rating,
  projects,
  imageSrc,
  skills,
  verified,
  featured = false,
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${featured ? 'border-2 border-dwork-purple' : ''}`}>
      {featured && (
        <div className="bg-dwork-purple text-white text-xs py-1 px-3 text-center">
          Featured Expert
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">{name}</h3>
              {verified && (
                <span className="bg-green-100 text-green-700 p-1 rounded-full">
                  <Check size={14} />
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 text-sm">({projects}+ projects)</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <Button variant="outline" className="w-full border-dwork-purple text-dwork-purple hover:bg-dwork-purple/10">
          View Profile
        </Button>
      </div>
    </div>
  );
};

const FeaturedFreelancers: React.FC = () => {
  const freelancers = [
    {
      name: "Sarah Johnson",
      title: "SEO Specialist & Content Strategist",
      rating: 4.9,
      projects: 127,
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      skills: ["Technical SEO", "Content Strategy", "Keyword Research"],
      verified: true,
      featured: true,
    },
    {
      name: "Michael Rodriguez",
      title: "Paid Media & PPC Expert",
      rating: 4.8,
      projects: 98,
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      skills: ["Google Ads", "Facebook Ads", "Campaign Management"],
      verified: true,
    },
    {
      name: "Emily Chen",
      title: "Social Media Strategist",
      rating: 4.9,
      projects: 112,
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      skills: ["Community Management", "Content Creation", "Analytics"],
      verified: true,
    },
  ];

  return (
    <section id="freelancers" className="py-20 bg-dwork-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-dwork-purple">Top Talent</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Work with the finest digital marketing specialists selected from thousands of applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {freelancers.map((freelancer, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FreelancerCard {...freelancer} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-dwork-purple hover:bg-dwork-purple-600 text-white py-6 px-8 rounded-xl">
            Browse All Freelancers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
