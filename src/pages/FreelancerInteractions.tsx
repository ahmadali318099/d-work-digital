
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart as BarChartIcon, 
  Star, 
  MessageCircle, 
  ArrowUpRight,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data - in a real app this would come from an API
const messageData = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://github.com/shadcn.png",
    rating: 4.9,
    connectsUsed: 5,
    timeAgo: "2 days ago",
    skills: ["React", "Node.js", "TypeScript"],
    messagePreview: "Hi, I'm interested in your project and have extensive experience in similar work..."
  },
  {
    id: 2,
    name: "Sarah Miller",
    avatar: "",
    rating: 4.7,
    connectsUsed: 5,
    timeAgo: "3 days ago",
    skills: ["UX/UI Design", "Figma", "Web Design"],
    messagePreview: "Hello! I've reviewed your job posting and believe I'm a perfect fit for your project..."
  },
  {
    id: 3,
    name: "Mike Chen",
    avatar: "",
    rating: 5.0,
    connectsUsed: 5,
    timeAgo: "1 week ago",
    skills: ["WordPress", "PHP", "SEO"],
    messagePreview: "I've worked on similar WordPress projects and would love to discuss your requirements..."
  }
];

const chartData = [
  { week: "Week 1", connects: 15 },
  { week: "Week 2", connects: 23 },
  { week: "Week 3", connects: 18 },
  { week: "Week 4", connects: 30 },
];

const FreelancerInteractions = () => {
  const [activeFreelancer, setActiveFreelancer] = useState<number | null>(null);
  
  const handleViewProfile = (id: number) => {
    // In a real app, this would navigate to the freelancer's profile
    console.log(`View profile of freelancer ${id}`);
  };
  
  const handleExpandMessage = (id: number) => {
    setActiveFreelancer(activeFreelancer === id ? null : id);
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-3xl font-bold">Freelancer Interactions</h1>
            <p className="text-muted-foreground">
              Recent freelancers who have contacted you directly
            </p>
          </div>
          <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
            <MessageCircle className="mr-2 h-4 w-4" /> Message a Freelancer
          </Button>
        </div>

        {/* Connects Usage Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5 text-dwork-purple" />
              Connects Usage Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} connects`, 'Usage']}
                    labelStyle={{ color: '#333' }}
                    contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}
                  />
                  <Bar dataKey="connects" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Freelancer Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>
              Freelancers who have used connects to message you directly
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {messageData.map((freelancer) => (
                <div key={freelancer.id} className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Freelancer Info */}
                    <div className="md:w-64 flex flex-row md:flex-col gap-3 items-center md:items-start">
                      <Avatar className="h-16 w-16 border-2 border-dwork-purple/20">
                        <AvatarImage src={freelancer.avatar} />
                        <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">{freelancer.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{freelancer.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Used {freelancer.connectsUsed} connects
                        </p>
                      </div>
                    </div>
                    
                    {/* Message Preview */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div className="flex flex-wrap gap-1">
                          {freelancer.skills.map((skill, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{freelancer.timeAgo}</span>
                      </div>
                      <div className={`relative ${activeFreelancer === freelancer.id ? '' : 'max-h-24 overflow-hidden'}`}>
                        <p className="text-sm">
                          {freelancer.messagePreview}
                          {activeFreelancer !== freelancer.id && (
                            <span className="absolute bottom-0 right-0 left-0 h-12 bg-gradient-to-t from-white to-transparent"></span>
                          )}
                        </p>
                      </div>
                      <div className="flex justify-between mt-3">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleExpandMessage(freelancer.id)}
                        >
                          {activeFreelancer === freelancer.id ? "Show less" : "Read more"}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-dwork-purple border-dwork-purple hover:bg-dwork-purple/10"
                          onClick={() => handleViewProfile(freelancer.id)}
                        >
                          View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </NewDashboardLayout>
  );
};

export default FreelancerInteractions;
