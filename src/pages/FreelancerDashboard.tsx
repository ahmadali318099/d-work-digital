
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart,
  BarChart3,
  Wallet, 
  BookmarkCheck, 
  MessageSquare, 
  CreditCard,
  Activity,
  Briefcase,
  Users,
  TrendingUp,
} from "lucide-react";
import EarningsChart from "@/components/dashboard/EarningsChart";
import { Link } from "react-router-dom";

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
      title: "Jobs Applied", 
      value: "12", 
      icon: <Briefcase className="h-8 w-8 text-blue-500" />,
      link: "/proposals",
      change: "3 new",
      trend: "up" 
    },
    { 
      title: "Earnings This Month", 
      value: "$2,750", 
      icon: <CreditCard className="h-8 w-8 text-green-500" />,
      link: "/earnings",
      change: "+15% vs last month",
      trend: "up" 
    },
    { 
      title: "Profile Views", 
      value: "156", 
      icon: <Users className="h-8 w-8 text-amber-500" />,
      link: "/profile",
      change: "+24% vs last week",
      trend: "up" 
    },
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
            <Button variant="outline">
              View Profile
            </Button>
            <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
              Find Jobs
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

        {/* Main Content - 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Activity & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity Summary */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Activity className="h-5 w-5 text-dwork-purple" />
                  Activity Summary
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

            {/* Stats & Trends */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-dwork-purple" />
                  Stats & Trends
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm" asChild>
                  <Link to="/stats">Full Analytics</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <EarningsChart />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Shortcuts */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Shortcuts</CardTitle>
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

            {/* Latest Jobs card */}
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-dwork-purple" />
                  Latest Jobs
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-dwork-purple hover:text-dwork-purple-600 text-sm" asChild>
                  <Link to="/find-jobs">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Full Stack Developer", "React Native Expert", "API Integration Specialist"].map((job, index) => (
                    <Link to="/find-jobs" key={index}>
                      <div className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                        <h4 className="font-medium">{job}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-sm text-muted-foreground">Posted 2h ago</p>
                          <Badge variant="outline" className="text-xs">$50-70/hr</Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
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
