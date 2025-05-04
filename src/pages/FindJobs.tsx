
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookmarkIcon,
  ChevronRight,
  Search,
  Star,
  Filter as FilterIcon,
  X,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import BuyConnectsModal from "@/components/connects/BuyConnectsModal";

const FindJobs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<number[]>([]);
  const [isConnectsModalOpen, setIsConnectsModalOpen] = useState(false);

  // Sample job listings
  const jobs = [
    {
      id: "1",
      title: "WordPress Website Development",
      company: "TechSolutions Inc",
      description: "We need a developer to build a custom WordPress site with WooCommerce integration...",
      budget: "$1,000 - $2,500",
      posted: "2 days ago",
      proposals: 7,
      skills: ["WordPress", "PHP", "WooCommerce", "CSS"],
      experience: "Intermediate",
      connectsRequired: 3,
      verified: true,
    },
    {
      id: "2",
      title: "React Native Mobile App Development",
      company: "MobileX",
      description: "Looking for an experienced React Native developer to build a cross-platform mobile app...",
      budget: "$3,000 - $5,000",
      posted: "1 day ago",
      proposals: 12,
      skills: ["React Native", "JavaScript", "API Integration", "Redux"],
      experience: "Expert",
      connectsRequired: 5,
      verified: true,
    },
    {
      id: "3",
      title: "E-commerce Website Design",
      company: "FashionRetail",
      description: "We need a web designer to create an appealing e-commerce website for our clothing brand...",
      budget: "$800 - $1,500",
      posted: "4 hours ago",
      proposals: 3,
      skills: ["Web Design", "UI/UX", "Figma", "Shopify"],
      experience: "Entry",
      connectsRequired: 2,
      verified: false,
    },
    {
      id: "4",
      title: "Content Writer for Tech Blog",
      company: "TechInsights",
      description: "Seeking a content writer to create engaging articles and blog posts about the latest technology trends...",
      budget: "$200 - $500",
      posted: "3 days ago",
      proposals: 18,
      skills: ["Content Writing", "SEO", "Tech Knowledge", "Research"],
      experience: "Intermediate",
      connectsRequired: 2,
      verified: true,
    },
    {
      id: "5",
      title: "Logo and Brand Identity Design",
      company: "StartupLaunch",
      description: "Looking for a graphic designer to create a logo and brand identity for our new startup...",
      budget: "$500 - $1,000",
      posted: "1 week ago",
      proposals: 22,
      skills: ["Logo Design", "Branding", "Adobe Illustrator", "Creative"],
      experience: "Expert",
      connectsRequired: 3,
      verified: false,
    },
  ];

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExperience = experienceLevel === "all" || job.experience.toLowerCase() === experienceLevel.toLowerCase();
    
    return matchesSearch && matchesExperience;
  });

  const handleBookmark = (jobId: string) => {
    const numId = parseInt(jobId);
    if (bookmarkedJobs.includes(numId)) {
      setBookmarkedJobs(bookmarkedJobs.filter(id => id !== numId));
      toast({
        title: "Job removed",
        description: "Job has been removed from your bookmarks."
      });
    } else {
      setBookmarkedJobs([...bookmarkedJobs, numId]);
      toast({
        title: "Job bookmarked",
        description: "Job has been added to your bookmarks."
      });
    }
  };

  const handleJobClick = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Find Jobs</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden sm:flex">
              Save Search
            </Button>
            <Button onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
              {isFiltersOpen ? <X className="mr-2 h-4 w-4" /> : <FilterIcon className="mr-2 h-4 w-4" />}
              {isFiltersOpen ? "Hide Filters" : "Filters"}
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className={`flex flex-col gap-6 ${isFiltersOpen ? '' : 'md:flex-row md:items-end'}`}>
              <div className="flex-1 space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for jobs..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {isFiltersOpen && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Experience Level</label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All Levels</SelectItem>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>${priceRange[0] * 100}</span>
                        <span>${priceRange[1] * 100}+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Type</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fixed" />
                        <label htmlFor="fixed" className="text-sm font-medium">Fixed Price</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hourly" />
                        <label htmlFor="hourly" className="text-sm font-medium">Hourly Rate</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {!isFiltersOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Experience Level</label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All Levels</SelectItem>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>${priceRange[0] * 100}</span>
                        <span>${priceRange[1] * 100}+</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Found {filteredJobs.length} jobs</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="p-6 hover:bg-muted/30 transition-colors cursor-pointer"
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold hover:text-dwork-purple">
                          {job.title}
                        </h3>
                        {job.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{job.company}</p>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400" 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">5.0 (15 reviews)</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{job.posted}</span>
                  </div>
                  
                  <p className="text-sm mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium">{job.budget}</span>
                      <span>{job.proposals} proposals</span>
                      <span className="hidden md:inline">{job.experience} level</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmark(job.id);
                        }}
                        className={bookmarkedJobs.includes(parseInt(job.id)) ? "bg-dwork-purple/10 text-dwork-purple" : ""}
                      >
                        <BookmarkIcon className="h-4 w-4 mr-1" />
                        {bookmarkedJobs.includes(parseInt(job.id)) ? "Saved" : "Save"}
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-dwork-purple hover:bg-dwork-purple-600 group"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (parseInt(job.connectsRequired.toString()) > 0) {
                            setIsConnectsModalOpen(true);
                          } else {
                            handleJobClick(job.id);
                          }
                        }}
                      >
                        Apply ({job.connectsRequired} connects)
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Buy Connects Modal */}
      <BuyConnectsModal 
        isOpen={isConnectsModalOpen}
        onClose={() => setIsConnectsModalOpen(false)}
      />
    </NewDashboardLayout>
  );
};

export default FindJobs;
