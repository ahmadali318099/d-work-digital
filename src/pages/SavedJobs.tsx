
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Trash,
  LayoutList,
  LayoutGrid,
  CreditCard
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SavedJobs: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample data - in a real app, this would come from an API
  const savedJobs = [
    {
      id: 1,
      title: "Senior React Developer for E-commerce Project",
      description: "Looking for an experienced React developer to build a modern e-commerce platform with Next.js, Tailwind CSS, and GraphQL.",
      budget: "$2,000 - $3,000",
      duration: "2-3 months",
      postedDate: "Apr 10, 2025",
      proposals: 15,
      client: {
        name: "TechSolutions Inc.",
        rating: 4.9,
        reviews: 24,
        country: "United States"
      },
      skills: ["React", "Next.js", "Tailwind CSS", "GraphQL", "TypeScript"]
    },
    {
      id: 2,
      title: "Full Stack Developer Needed for SaaS Application",
      description: "We're building a SaaS application for project management and need a full stack developer with experience in React, Node.js, and MongoDB.",
      budget: "$3,000 - $5,000",
      duration: "3-6 months",
      postedDate: "Apr 8, 2025",
      proposals: 23,
      client: {
        name: "ProjectPro LLC",
        rating: 4.7,
        reviews: 18,
        country: "Canada"
      },
      skills: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    },
    {
      id: 3,
      title: "WordPress Website Developer with WooCommerce Experience",
      description: "Need a WordPress developer to create an e-commerce website using WooCommerce with custom product filters and payment gateway integration.",
      budget: "$1,000 - $1,500",
      duration: "1-2 months",
      postedDate: "Apr 6, 2025",
      proposals: 28,
      client: {
        name: "RetailGrowth",
        rating: 4.5,
        reviews: 12,
        country: "Australia"
      },
      skills: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"]
    },
    {
      id: 4,
      title: "Mobile App UI/UX Designer for Health Application",
      description: "Looking for a talented UI/UX designer to create a modern, clean interface for a health tracking mobile application (iOS and Android).",
      budget: "$1,500 - $2,500",
      duration: "1-2 months",
      postedDate: "Apr 5, 2025",
      proposals: 19,
      client: {
        name: "HealthTech Innovations",
        rating: 4.8,
        reviews: 15,
        country: "United Kingdom"
      },
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Mobile Design", "Prototyping"]
    }
  ];

  const handleRemoveJob = (id: number) => {
    // In a real app, you would update this in the database
    toast({
      title: "Job Removed",
      description: "The job has been removed from your saved list"
    });
  };

  // Filter saved jobs based on search term
  const filteredJobs = savedJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Saved Jobs</h1>
            <p className="text-muted-foreground mt-1">
              Jobs you've bookmarked for later
            </p>
          </div>
          <Link to="/find-jobs">
            <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
              Browse More Jobs
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search saved jobs..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="fixed">Fixed-Price</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={16} />
                  Filters
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={viewMode === "grid" ? "bg-gray-100" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={viewMode === "list" ? "bg-gray-100" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* No saved jobs state */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Bookmark className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No saved jobs yet</h2>
            <p className="text-muted-foreground mb-6">
              {searchTerm ? "No jobs match your search criteria" : "Save jobs you're interested in to apply later"}
            </p>
            <Button className="bg-dwork-purple hover:bg-dwork-purple-600" asChild>
              <Link to="/find-jobs">Browse Jobs</Link>
            </Button>
          </div>
        )}
        
        {/* Saved Jobs Grid/List */}
        {filteredJobs.length > 0 && (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
            {filteredJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className={`p-0 ${viewMode === "list" ? "flex" : ""}`}>
                  <div className={`relative p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-dwork-purple hover:text-red-500"
                        onClick={() => handleRemoveJob(job.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-dwork-purple">
                        <BookmarkCheck className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 pr-20">
                      <Link to={`/jobs/${job.id}`} className="hover:text-dwork-purple transition-colors">
                        {job.title}
                      </Link>
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-gray-100">
                        {job.client.country}
                      </Badge>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Posted {job.postedDate}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{job.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">4 connects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{job.proposals} proposals</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 5).map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(job.client.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <span className="ml-1 text-sm">{job.client.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({job.client.reviews} reviews)
                        </span>
                      </div>
                      
                      <Button className="bg-dwork-purple hover:bg-dwork-purple-600" asChild>
                        <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </NewDashboardLayout>
  );
};

export default SavedJobs;
