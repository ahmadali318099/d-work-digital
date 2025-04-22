
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company, imageSrc, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 lg:p-8 flex flex-col h-full">
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 text-sm">{title}, {company}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-gray-700 flex-grow">
        <span className="text-4xl text-dwork-purple-600 leading-none">"</span>
        {quote}
        <span className="text-4xl text-dwork-purple-600 leading-none">"</span>
      </blockquote>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      quote: "D Work helped us find a content specialist who transformed our blog into a lead generation machine. Within 3 months, organic traffic increased by 187%.",
      name: "Alex Thompson",
      title: "Marketing Director",
      company: "GreenTech Solutions",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      rating: 5,
    },
    {
      quote: "The PPC expert we hired through D Work revamped our entire Google Ads strategy. Our cost per acquisition dropped by 42% while conversions increased.",
      name: "Jessica Williams",
      title: "E-commerce Manager",
      company: "Urban Styles",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      rating: 5,
    },
    {
      quote: "Working with D Work's social media specialist quadrupled our engagement rates. They brought a level of expertise we couldn't have found elsewhere.",
      name: "David Chen",
      title: "Founder & CEO",
      company: "NutriBlend",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      rating: 4,
    },
    {
      quote: "The SEO consultant we found on D Work completely transformed our online presence. We're now ranking for keywords we never thought possible.",
      name: "Michelle Rodriguez",
      title: "Digital Director",
      company: "InvestSmart",
      imageSrc: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400",
      rating: 5,
    },
  ];

  const slideCount = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / slideCount);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * slideCount;
    const end = start + slideCount;
    return testimonials.slice(start, end);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-dwork-purple">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses who found their perfect digital marketing match
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/3 animate-fade-in flex-shrink-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            
            <div className="flex gap-2 items-center">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? "bg-dwork-purple w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
