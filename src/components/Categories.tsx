
import React from "react";

interface CategoryProps {
  icon: string;
  title: string;
  skills: string[];
  bgColor: string;
  iconBgColor: string;
}

const Category: React.FC<CategoryProps> = ({ icon, title, skills, bgColor, iconBgColor }) => {
  return (
    <div className={`rounded-xl p-6 ${bgColor} hover:shadow-lg transition-all duration-300 group`}>
      <div className={`w-14 h-14 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-block bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      icon: "🔍",
      title: "SEO",
      skills: ["Technical SEO", "Local SEO", "Link Building", "Keyword Research"],
      bgColor: "bg-gradient-to-br from-dwork-purple-light/60 to-dwork-purple-light",
      iconBgColor: "bg-white/50"
    },
    {
      icon: "✍️",
      title: "Content",
      skills: ["Blog Writing", "Copywriting", "Content Strategy", "Editing"],
      bgColor: "bg-gradient-to-br from-dwork-blue-light/60 to-dwork-blue-light",
      iconBgColor: "bg-white/50"
    },
    {
      icon: "📱",
      title: "Social Media",
      skills: ["Strategy", "Management", "Creation", "Analytics"],
      bgColor: "bg-gradient-to-br from-blue-100/60 to-blue-100",
      iconBgColor: "bg-white/50"
    },
    {
      icon: "💰",
      title: "Paid Ads",
      skills: ["Google Ads", "Facebook Ads", "Display", "Retargeting"],
      bgColor: "bg-gradient-to-br from-purple-100/60 to-purple-100",
      iconBgColor: "bg-white/50"
    },
    {
      icon: "📊",
      title: "Analytics",
      skills: ["Google Analytics", "Data Visualization", "Reporting", "Attribution"],
      bgColor: "bg-gradient-to-br from-green-100/60 to-green-100",
      iconBgColor: "bg-white/50"
    },
    {
      icon: "🚀",
      title: "Strategy",
      skills: ["Digital Strategy", "Brand Development", "Market Research", "Competition Analysis"],
      bgColor: "bg-gradient-to-br from-yellow-100/60 to-yellow-100",
      iconBgColor: "bg-white/50"
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert <span className="text-dwork-purple">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover specialized professionals across every digital marketing discipline
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Category {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
