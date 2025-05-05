
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bookmark, 
  BookmarkCheck, 
  Calendar, 
  ChevronLeft, 
  Clock, 
  CreditCard, 
  Flag,
  Globe,
  MapPin,
  Star,
  ThumbsUp,
  User,
  Users,
  Tag,
  Share2,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [proposal, setProposal] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  
  // Sample job data - in a real app, this would come from an API based on the id
  const job = {
    id: Number(id),
    title: "Expert React Developer Needed for E-commerce Project",
    budget: "$2,000 - $3,000",
    duration: "2-3 months",
    expertiseLevel: "Intermediate to Expert",
    postedDate: "Apr 10, 2025",
    connectsRequired: 4,
    proposals: 12,
    location: "Remote",
    projectType: "Fixed-price",
    category: "Web Development",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
    description: `
      We are looking for an experienced React developer to help us build a modern e-commerce platform. The developer should have experience with React, Next.js, and integrating with backend APIs.
      
      The project involves:
      - Building a responsive e-commerce frontend with React and Next.js
      - Implementing user authentication and account management
      - Creating product listings, search functionality, and filtering
      - Building a shopping cart and checkout process
      - Integrating with our existing payment gateway
      
      The ideal candidate will have:
      - At least 3 years of experience with React
      - Strong knowledge of state management solutions
      - Experience with e-commerce projects
      - Ability to write clean, maintainable code
      - Good communication skills and availability for regular meetings
    `,
    client: {
      name: "TechSolutions Inc.",
      country: "United States",
      joinedDate: "January 2020",
      totalSpent: "$45,000+",
      hires: 24,
      rating: 4.9,
      reviews: 18,
      verificationStatus: "Payment Verified",
      avatar: "https://github.com/shadcn.png"
    }
  };

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job Removed" : "Job Saved",
      description: isSaved ? "Job removed from your saved list" : "Job added to your saved list"
    });
  };

  const handleSubmitProposal = () => {
    if (!proposal.trim()) {
      toast({
        title: "Error",
        description: "Please write a proposal message",
        variant: "destructive"
      });
      return;
    }

    if (!bidAmount) {
      toast({
        title: "Error",
        description: "Please enter your bid amount",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Proposal Submitted",
      description: "Your proposal has been sent to the client"
    });
    
    // In a real app, you would submit the proposal to an API
    navigate("/proposals");
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Back button and Save job */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 w-fit"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`hover:bg-gray-100 ${isSaved ? 'text-dwork-purple' : ''}`}
                    onClick={handleSaveJob}
                  >
                    {isSaved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isSaved ? 'Remove from saved jobs' : 'Save this job'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Flag className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Flag this job
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Share this job
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        {/* Job Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {job.category}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Posted {job.postedDate}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {job.location}
            </Badge>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                    <div className="space-y-4 text-muted-foreground">
                      {job.description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold mb-3">Skills and Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Apply Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Submit a Proposal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-sm">
                  <p className="font-medium text-amber-800 mb-1">
                    Applying to this job will use {job.connectsRequired} connects
                  </p>
                  <p className="text-amber-700">
                    You currently have 30 connects available
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="bid-amount" className="block text-sm font-medium mb-1">
                      Your Bid Amount
                    </label>
                    <div className="flex relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        $
                      </span>
                      <Input 
                        id="bid-amount"
                        type="number"
                        placeholder="Enter your bid amount"
                        className="pl-7"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="proposal" className="block text-sm font-medium mb-1">
                      Cover Letter
                    </label>
                    <Textarea
                      id="proposal"
                      placeholder="Write a compelling cover letter explaining why you're the best fit for this project..."
                      className="min-h-40"
                      value={proposal}
                      onChange={(e) => setProposal(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Include relevant experience, availability, and any questions you have.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-dwork-purple hover:bg-dwork-purple-600"
                      onClick={handleSubmitProposal}
                    >
                      Submit Proposal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Client Info & Job Meta */}
          <div className="space-y-6">
            {/* Job Details Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{job.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{job.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience Level</p>
                    <p className="font-medium">{job.expertiseLevel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Project Type</p>
                    <p className="font-medium">{job.projectType}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Proposals</p>
                  <p className="font-medium flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{job.proposals} proposals so far</span>
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Connects Required</p>
                  <p className="font-medium flex items-center gap-1">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span>{job.connectsRequired} connects</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Client Info Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">About the Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.client.avatar} />
                    <AvatarFallback>{job.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{job.client.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {job.client.country}
                    </p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center gap-1 mb-1">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">{job.client.verificationStatus}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Member Since</p>
                      <p>{job.client.joinedDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Spent</p>
                      <p>{job.client.totalSpent}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Hires</p>
                      <p>{job.client.hires} freelancers</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rating</p>
                      <p className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {job.client.rating} ({job.client.reviews} reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col md:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex-1 flex items-center gap-2"
                onClick={() => navigate('/find-jobs')}
              >
                <ChevronLeft className="h-4 w-4" />
                Similar Jobs
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 flex items-center gap-2 justify-center"
                onClick={() => {
                  window.open('mailto:?subject=' + encodeURIComponent(job.title) + '&body=' + encodeURIComponent('Check out this job: ' + window.location.href), '_blank');
                }}
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </NewDashboardLayout>
  );
};

export default JobDetail;
