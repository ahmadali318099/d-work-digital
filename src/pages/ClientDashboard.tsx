
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Search, 
  FileText, 
  Users, 
  CreditCard, 
  BarChart, 
  PlusCircle,
  Filter,
  MessageSquare
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ProposalCard from "@/components/dashboard/ProposalCard";

const ClientDashboard: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const userData = {
    name: "Sarah Mitchell",
    company: "InnovateTech",
    avatar: "https://github.com/shadcn.png", // Placeholder avatar
  };

  const stats = [
    { title: "Active Jobs", value: "5", icon: <FileText className="text-dwork-purple" /> },
    { title: "Proposals Received", value: "23", icon: <MessageSquare className="text-dwork-blue" /> },
    { title: "Hired Freelancers", value: "7", icon: <Users className="text-green-500" /> },
    { title: "Remaining Balance", value: "$1,250", icon: <CreditCard className="text-amber-500" /> },
  ];

  const jobs = [
    { id: 1, title: "Facebook Ads Specialist Needed", proposals: 8, status: "Open", budget: "$500-1000", date: "2 days ago" },
    { id: 2, title: "Blog Content Writer for Tech Website", proposals: 15, status: "Open", budget: "$300-600", date: "5 days ago" },
    { id: 3, title: "Email Marketing Campaign Design", proposals: 6, status: "In Progress", budget: "$800-1200", date: "1 week ago" },
    { id: 4, title: "SEO Audit and Strategy", proposals: 12, status: "Closed", budget: "$1500-2000", date: "2 weeks ago" },
  ];

  const proposals = [
    { 
      id: 1, 
      jobTitle: "Facebook Ads Specialist Needed",
      freelancer: {
        name: "Michael Brown",
        avatar: "https://github.com/shadcn.png",
        rating: 4.8,
        title: "Digital Marketing Specialist"
      },
      preview: "I have 5+ years of experience managing Facebook ad campaigns with proven ROI improvements...",
      date: "12 hours ago"
    },
    { 
      id: 2, 
      jobTitle: "Facebook Ads Specialist Needed",
      freelancer: {
        name: "Emma Wilson",
        avatar: "https://github.com/shadcn.png",
        rating: 4.9,
        title: "Facebook Ads Expert"
      },
      preview: "Having managed over $500k in ad spend for e-commerce businesses, I can help optimize your...",
      date: "1 day ago"
    },
  ];

  // Helper function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DashboardLayout userType="client">
      {/* Welcome section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-dwork-purple/20">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>
            <p className="text-muted-foreground">
              {userData.company} • Client Dashboard
            </p>
          </div>
        </div>
        <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
          <PlusCircle className="mr-2 h-4 w-4" /> Post a New Job
        </Button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.title}</span>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main content area - split into columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search jobs or freelancers..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dwork-purple/20"
                  />
                </div>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={16} />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Jobs table */}
          <Card>
            <CardHeader>
              <CardTitle>Your Job Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Proposals</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Posted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id} className="hover:bg-muted/50 cursor-pointer">
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.proposals}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.budget}</TableCell>
                      <TableCell className="text-muted-foreground">{job.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-4">
                <Button variant="ghost" className="text-dwork-purple hover:text-dwork-purple-600 hover:bg-dwork-purple/10">
                  View All Jobs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card - Premium */}
          <Card className="bg-gradient-to-r from-dwork-purple to-dwork-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Upgrade to D Work Premium</h3>
                  <p className="text-white/90 mb-0">Get featured listings, premium support, and access to top-tier talent.</p>
                </div>
                <Button className="bg-white text-dwork-purple hover:bg-white/90 whitespace-nowrap">
                  Upgrade Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - 1/3 width */}
        <div className="space-y-6">
          {/* Recent proposals */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Proposals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {proposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
              <Button variant="ghost" className="w-full text-dwork-purple hover:text-dwork-purple-600 hover:bg-dwork-purple/10">
                View All Proposals
              </Button>
            </CardContent>
          </Card>
          
          {/* Buy credits */}
          <Card>
            <CardHeader>
              <CardTitle>Add Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Purchase credits to hire freelancers and post featured jobs.</p>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="flex flex-col h-auto py-4">
                    <span className="text-lg font-bold">$50</span>
                    <span className="text-xs text-muted-foreground">50 Credits</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-4 border-dwork-purple text-dwork-purple">
                    <span className="text-lg font-bold">$100</span>
                    <span className="text-xs">110 Credits</span>
                    <span className="text-xs bg-dwork-purple text-white px-1 rounded-sm mt-1">+10%</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-4">
                    <span className="text-lg font-bold">$200</span>
                    <span className="text-xs text-muted-foreground">240 Credits</span>
                    <span className="text-xs bg-dwork-purple text-white px-1 rounded-sm mt-1">+20%</span>
                  </Button>
                </div>
                <Button className="w-full bg-dwork-purple hover:bg-dwork-purple-600">Add Credits</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;
