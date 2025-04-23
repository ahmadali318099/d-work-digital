
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star,
  MessageSquare,
  Bookmark,
  UserPlus 
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Sample freelancer data - in a real app, this would come from an API
const freelancers = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://github.com/shadcn.png",
    title: "Social Media Specialist",
    rating: 4.9,
    hourlyRate: "$45",
    tags: ["Facebook Ads", "Instagram", "TikTok"],
    description: "Expert in creating and managing social media campaigns with proven ROI across multiple platforms.",
    projects: 32,
    location: "New York, USA",
    isBookmarked: false
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "https://github.com/shadcn.png",
    title: "SEO Consultant",
    rating: 4.8,
    hourlyRate: "$60",
    tags: ["Technical SEO", "Content Strategy", "Analytics"],
    description: "Specialized in boosting organic traffic through comprehensive SEO strategies and content optimization.",
    projects: 45,
    location: "London, UK",
    isBookmarked: true
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://github.com/shadcn.png",
    title: "PPC Specialist",
    rating: 4.7,
    hourlyRate: "$55",
    tags: ["Google Ads", "Facebook Ads", "Analytics"],
    description: "Results-driven PPC expert with experience managing $500K+ ad spend across multiple platforms.",
    projects: 28,
    location: "Toronto, Canada",
    isBookmarked: false
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    avatar: "https://github.com/shadcn.png",
    title: "Content Marketing Strategist",
    rating: 4.9,
    hourlyRate: "$50",
    tags: ["Blog Writing", "Email Marketing", "Content Strategy"],
    description: "Creating engaging content strategies that drive traffic, leads and conversions for B2B and B2C businesses.",
    projects: 36,
    location: "Austin, USA",
    isBookmarked: false
  }
];

const Freelancers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [freelancersList, setFreelancersList] = useState(freelancers);
  const { toast } = useToast();

  // Filter freelancers based on search term
  const filteredFreelancers = freelancersList.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    freelancer.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter based on active tab
  const displayedFreelancers = activeTab === "bookmarked" 
    ? filteredFreelancers.filter(f => f.isBookmarked) 
    : filteredFreelancers;

  // Toggle bookmark status
  const toggleBookmark = (id: number) => {
    setFreelancersList(prev => 
      prev.map(freelancer => 
        freelancer.id === id 
          ? { ...freelancer, isBookmarked: !freelancer.isBookmarked } 
          : freelancer
      )
    );
    
    const freelancer = freelancersList.find(f => f.id === id);
    if (freelancer) {
      toast({
        title: freelancer.isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
        description: `${freelancer.name} has been ${freelancer.isBookmarked ? "removed from" : "added to"} your bookmarks.`
      });
    }
  };

  // Invite to job
  const inviteFreelancer = (id: number) => {
    const freelancer = freelancersList.find(f => f.id === id);
    if (freelancer) {
      toast({
        title: "Invitation sent",
        description: `You've invited ${freelancer.name} to apply for your job.`
      });
    }
  };

  // Start conversation
  const startConversation = (id: number) => {
    const freelancer = freelancersList.find(f => f.id === id);
    if (freelancer) {
      toast({
        title: "Conversation started",
        description: `You can now chat with ${freelancer.name} in your messages.`
      });
    }
  };

  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find Freelancers</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse our top digital marketing professionals and find the perfect match for your project
          </p>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, skill, or specialization..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="ppc">Paid Advertising</SelectItem>
                    <SelectItem value="content">Content Marketing</SelectItem>
                    <SelectItem value="email">Email Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={16} />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Freelancers</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedFreelancers.map((freelancer) => (
                <FreelancerCard 
                  key={freelancer.id} 
                  freelancer={freelancer} 
                  onBookmark={toggleBookmark}
                  onInvite={inviteFreelancer}
                  onMessage={startConversation}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="bookmarked" className="mt-4">
            {displayedFreelancers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedFreelancers.map((freelancer) => (
                  <FreelancerCard 
                    key={freelancer.id} 
                    freelancer={freelancer} 
                    onBookmark={toggleBookmark}
                    onInvite={inviteFreelancer}
                    onMessage={startConversation}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">You haven't bookmarked any freelancers yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

interface FreelancerCardProps {
  freelancer: {
    id: number;
    name: string;
    avatar: string;
    title: string;
    rating: number;
    hourlyRate: string;
    tags: string[];
    description: string;
    projects: number;
    location: string;
    isBookmarked: boolean;
  };
  onBookmark: (id: number) => void;
  onInvite: (id: number) => void;
  onMessage: (id: number) => void;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer, onBookmark, onInvite, onMessage }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-4 flex flex-col h-full">
        {/* Header with avatar and rate */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
              <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{freelancer.name}</h3>
              <p className="text-sm text-muted-foreground">{freelancer.title}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-dwork-purple">{freelancer.hourlyRate}</div>
            <div className="text-xs text-muted-foreground">hourly rate</div>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm">{freelancer.rating}/5</span>
          <span className="text-xs text-muted-foreground ml-1">({freelancer.projects} projects)</span>
        </div>
        
        {/* Description */}
        <p className="text-sm mb-3 flex-grow">{freelancer.description}</p>
        
        {/* Skills/Tags */}
        <div className="mb-4 flex flex-wrap gap-1">
          {freelancer.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-gray-50">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Location */}
        <div className="text-xs text-muted-foreground mb-4">
          {freelancer.location}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onMessage(freelancer.id)}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Message
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onInvite(freelancer.id)}
          >
            <UserPlus className="h-4 w-4 mr-1" />
            Invite
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`w-9 px-0 ${freelancer.isBookmarked ? 'text-dwork-purple' : ''}`}
            onClick={() => onBookmark(freelancer.id)}
          >
            <Bookmark className={`h-4 w-4 ${freelancer.isBookmarked ? 'fill-dwork-purple' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Freelancers;
