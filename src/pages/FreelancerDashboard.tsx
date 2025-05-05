
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart,
  BarChart,
  Wallet, 
  BookmarkCheck, 
  MessageSquare, 
  CreditCard,
  Activity,
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  FileText,
  Star
} from "lucide-react";
import EarningsChart from "@/components/dashboard/EarningsChart";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const FreelancerDashboard: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const userData = {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    avatar: "https://github.com/shadcn.png", // Placeholder avatar
  };

  // Overview card data
  const overviewCards = [
    { 
      title: "Connects Available", 
      value: "30", 
      icon: <Wallet className="h-8 w-8 text-dwork-purple" />,
      link: "/connects-history",
      change: "+5 this week",
      trend: "up" 
    },
    { 
      title: "Active Jobs", 
      value: "3", 
      icon: <Briefcase className="h-8 w-8 text-blue-500" />,
      link: "/my-jobs",
      change: "2 in progress",
      trend: "up" 
    },
    { 
      title: "Jobs Applied", 
      value: "12", 
      icon: <FileText className="h-8 w-8 text-amber-500" />,
      link: "/proposals",
      change: "3 new",
      trend: "up" 
    },
    { 
      title: "Total Earnings", 
      value: "$15,750", 
      icon: <CreditCard className="h-8 w-8 text-green-500" />,
      link: "/earnings",
      change: "+15% vs last month",
      trend: "up" 
    },
  ];

  // Active jobs data
  const activeJobs = [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "RetailTech Inc",
      deadline: "Apr 25, 2025",
      progress: 65,
      budget: "$2,500"
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      client: "AppSolutions LLC",
      deadline: "Apr 30, 2025",
      progress: 40,
      budget: "$1,800"
    }
  ];

  // Latest proposals data
  const latestProposals = [
    {
      id: 1,
      jobTitle: "React Native Developer for Fitness App",
      date: "Apr 12, 2025",
      status: "Pending",
      connects: 4
    },
    {
      id: 2,
      jobTitle: "Frontend Developer with TypeScript Experience",
      date: "Apr 10, 2025",
      status: "Viewed",
      connects: 2
    },
    {
      id: 3,
      jobTitle: "Fullstack Web Application Development",
      date: "Apr 8, 2025",
      status: "Shortlisted",
      connects: 6
    }
  ];

  // Activity summary
  const activityItems = [
    { 
      title: "Job Application Viewed", 
      description: "Your proposal for 'React Native Developer' was viewed",
      time: "2 hours ago"
    },
    { 
      title: "New Message",
      description: "You received a message from Sarah about the UI project",
      time: "5 hours ago"
    },
    { 
      title: "Payment Received",
      description: "Payment of $750 received for the landing page project",
      time: "Yesterday"
    },
    { 
      title: "Job Saved",
      description: "You saved 'WordPress Developer for E-commerce Site'",
      time: "2 days ago"
    },
  ];

  // Shortcuts
  const shortcuts = [
    { 
      title: "Membership Plan", 
      description: "View and upgrade your current plan",
      icon: <Badge className="h-10 w-10 text-dwork-purple p-2 bg-dwork-purple/10 rounded-full" />,
      link: "/membership" 
    },
    { 
      title: "Connects Wallet", 
      description: "Buy and manage your connects",
      icon: <Wallet className="h-10 w-10 text-blue-500 p-2 bg-blue-500/10 rounded-full" />,
      link: "/connects-history" 
    },
    { 
      title: "Saved Jobs", 
      description: "Review jobs you've bookmarked",
      icon: <BookmarkCheck className="h-10 w-10 text-green-500 p-2 bg-green-500/10 rounded-full" />,
      link: "/saved-jobs" 
    },
    { 
      title: "Client Messages", 
      description: "Respond to client communications",
      icon: <MessageSquare className="h-10 w-10 text-amber-500 p-2 bg-amber-500/10 rounded-full" />,
      link: "/messages" 
    },
  ];

  // Profile completion
  const profileCompletion = 85;

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16 border-4 border-dwork-purple/20">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {userData.name}!</h1>
              <p className="text-muted-foreground">{userData.title}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/profile">View Profile</Link>
            </Button>
            <Button className="bg-dwork-purple hover:bg-dwork-purple-600" asChild>
              <Link to="/find-jobs">Find Jobs</Link>
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewCards.map((card, index) => (
            <Link to={card.link} key={index} className="block">
              <Card className="hover:shadow-md transition-all border-t-4 border-t-transparent hover:border-t-dwork-purple hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{card.title}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold">{card.value}</p>
                        <Badge variant="outline" className={`text-xs ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {card.change}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-2 rounded-full bg-gray-100">
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Content - 3 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left column - Activity */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completion</span>
                  <span className="text-sm font-medium">{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/profile">Complete Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          
            {/* Shortcuts */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Shortcuts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {shortcuts.map((shortcut, index) => (
                  <Link to={shortcut.link} key={index}>
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-md transition-colors">
                      {shortcut.icon}
                      <div>
                        <h4 className="font-medium">{shortcut.title}</h4>
                        <p className="text-sm text-muted-foreground">{shortcut.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Middle column - Jobs & Proposals */}
          <div className="lg:col-span-1 space-y-6">
            {/* Activity Summary */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-dwork-purple" />
                  Activity
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {activityItems.map((item, index) => (
                  <div key={index} className={`flex gap-4 pb-4 ${index < activityItems.length - 1 ? 'border-b' : ''}`}>
                    <div className="mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-dwork-purple"></div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right columns - Active Jobs & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Jobs */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-dwork-purple" />
                  Active Jobs
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm" asChild>
                  <Link to="/my-jobs">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeJobs.map((job, index) => (
                  <div key={job.id} className={`${index < activeJobs.length - 1 ? 'border-b pb-4 mb-4' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                      </div>
                      <Badge variant="outline" className="w-fit bg-dwork-purple/10 text-dwork-purple">
                        {job.budget}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>Deadline: {job.deadline}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{job.progress}%</span>
                      </div>
                      <Progress value={job.progress} className="h-2" />
                    </div>
                    <div className="flex justify-end mt-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/job-progress/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                ))}
                
                {activeJobs.length === 0 && (
                  <div className="text-center py-6">
                    <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <h3 className="text-lg font-medium">No active jobs</h3>
                    <p className="text-sm text-muted-foreground">When you get hired, your jobs will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Latest Proposals */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-dwork-purple" />
                  Latest Proposals
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm" asChild>
                  <Link to="/proposals">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestProposals.map((proposal, index) => (
                  <div key={proposal.id} className={`${index < latestProposals.length - 1 ? 'border-b pb-4 mb-4' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-medium">{proposal.jobTitle}</h3>
                      <Badge 
                        variant="outline" 
                        className={`w-fit ${
                          proposal.status === 'Pending' ? 'bg-blue-100 text-blue-800' : 
                          proposal.status === 'Viewed' ? 'bg-amber-100 text-amber-800' : 
                          proposal.status === 'Shortlisted' ? 'bg-green-100 text-green-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {proposal.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Applied: {proposal.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        <span>{proposal.connects} connects used</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {latestProposals.length === 0 && (
                  <div className="text-center py-6">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <h3 className="text-lg font-medium">No proposals yet</h3>
                    <p className="text-sm text-muted-foreground">When you apply to jobs, your proposals will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stats & Trends */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-dwork-purple" />
                  Earnings Overview
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm" asChild>
                  <Link to="/stats">View Details</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <EarningsChart />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </NewDashboardLayout>
  );
};

export default FreelancerDashboard;
