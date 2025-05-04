
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookmarkIcon, 
  Star, 
  MessageCircle, 
  Flag, 
  Clock, 
  Calendar, 
  Globe, 
  Briefcase
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplyJobModal from "@/components/jobs/ApplyJobModal";
import MessageClientModal from "@/components/jobs/MessageClientModal";

// Mock job data - in a real app this would come from an API
const mockJobs = [
  {
    id: "1",
    title: "WordPress Website Development",
    category: "Web Development",
    description: `
      <p>We need an experienced WordPress developer to create a custom WordPress site with WooCommerce integration for our online store. The website should have:</p>
      <ul>
        <li>Custom theme development based on our brand guidelines</li>
        <li>WooCommerce setup with payment gateway integration (Stripe and PayPal)</li>
        <li>Mobile-responsive design</li>
        <li>Performance optimization</li>
        <li>SEO fundamentals implementation</li>
      </ul>
      <p>The ideal candidate will have extensive WordPress experience and be able to implement custom solutions while ensuring the site is easy for our team to manage.</p>
    `,
    budget: {
      type: "Fixed",
      amount: "$1,000 - $2,500"
    },
    skills: ["WordPress", "PHP", "WooCommerce", "JavaScript", "HTML/CSS"],
    duration: "1-3 months",
    experience: "Intermediate",
    stats: {
      proposals: 12,
      invites: 5,
      interviews: 3,
      lastViewed: "2 hours ago"
    },
    client: {
      name: "TechSolutions Inc",
      location: "United States",
      spent: "$25,000+",
      jobsPosted: 15,
      rating: 4.8,
      responseRate: "90%",
      feedbackCount: 18
    },
    connectsToApply: 3
  }
];

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Find job data based on ID
  const job = mockJobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <NewDashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Job not found</h2>
          <p className="text-muted-foreground mt-2">The job you're looking for doesn't exist or has been removed.</p>
          <Button 
            className="mt-4 bg-dwork-purple hover:bg-dwork-purple-600"
            onClick={() => navigate('/find-jobs')}
          >
            Browse Jobs
          </Button>
        </div>
      </NewDashboardLayout>
    );
  }
  
  const handleApply = () => {
    setIsApplyModalOpen(true);
  };
  
  const handleMessage = () => {
    setIsMessageModalOpen(true);
  };
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Job removed from bookmarks" : "Job bookmarked",
      description: isBookmarked ? "You've removed this job from your bookmarks." : "You can access this job later from your bookmarks.",
    });
  };
  
  const handleReport = () => {
    toast({
      title: "Job reported",
      description: "Thank you for your report. Our team will review this job."
    });
  };
  
  return (
    <NewDashboardLayout>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Job Content */}
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-muted-foreground"
                    onClick={() => navigate('/find-jobs')}
                  >
                    Jobs
                  </Button>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground">{job.category}</span>
                </div>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="outline" className="bg-dwork-purple/5 text-dwork-purple">
                    {job.budget.type}
                  </Badge>
                  <span className="text-sm font-medium">{job.budget.amount}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {job.duration}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {job.experience} Level
                  </span>
                </div>
              </div>
              <div className="flex gap-2 self-end md:self-start">
                <Button
                  variant="outline"
                  size="sm"
                  className={isBookmarked ? "bg-dwork-purple/10 text-dwork-purple" : ""}
                  onClick={handleBookmark}
                >
                  <BookmarkIcon className="h-4 w-4 mr-1" />
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReport}
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Report
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Job Description</h3>
                <div 
                  className="prose max-w-none text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Activity on this job</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">Proposals</p>
                    <p className="font-semibold">{job.stats.proposals}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">Invites</p>
                    <p className="font-semibold">{job.stats.invites}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">Interviews</p>
                    <p className="font-semibold">{job.stats.interviews}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-muted-foreground">Last Viewed</p>
                    <p className="font-semibold">{job.stats.lastViewed}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <Button 
                  className="bg-dwork-purple hover:bg-dwork-purple-600"
                  onClick={handleApply}
                >
                  Apply Now ({job.connectsToApply} connects)
                </Button>
                <Button 
                  variant="outline" 
                  className="text-dwork-purple border-dwork-purple hover:bg-dwork-purple/10"
                  onClick={handleMessage}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Client (5 connects)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Client Info Sidebar */}
        <div className="w-full lg:w-80">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About the Client</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{job.client.name}</h3>
                <div className="flex items-center">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{job.client.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{job.client.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{job.client.jobsPosted} jobs posted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Member since 2020</span>
                </div>
              </div>
              
              <div className="py-3 border-t border-b">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total spent:</span>
                  <span className="font-medium">{job.client.spent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Response rate:</span>
                  <span className="font-medium">{job.client.responseRate}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Client reviews</h4>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>FD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-xs text-muted-foreground">"Great client to work with, clear requirements and fair payment."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Apply Job Modal */}
      <ApplyJobModal 
        job={job}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
      
      {/* Message Client Modal */}
      <MessageClientModal
        client={job.client}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </NewDashboardLayout>
  );
};

export default JobDetail;
