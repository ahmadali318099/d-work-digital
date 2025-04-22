
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Calendar, 
  FileText, 
  User, 
  Mail, 
  Settings,
  PlusCircle,
  Bell
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EarningsChart from "@/components/dashboard/EarningsChart";

const FreelancerDashboard: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const userData = {
    name: "Alex Johnson",
    avatar: "https://github.com/shadcn.png", // Placeholder avatar
    profileCompletion: 85,
  };

  const stats = [
    { title: "Active Proposals", value: "12", icon: <FileText className="text-dwork-purple" /> },
    { title: "Ongoing Projects", value: "4", icon: <Calendar className="text-dwork-blue" /> },
    { title: "Earnings", value: "$4,750", icon: <BarChart className="text-green-500" /> },
    { title: "Profile Views", value: "156", icon: <User className="text-amber-500" /> },
  ];

  const recentJobs = [
    { id: 1, title: "SEO Campaign for E-commerce", company: "TechRetail", status: "Pending", date: "2 days ago" },
    { id: 2, title: "Social Media Management", company: "FitnessBrand", status: "Viewed", date: "5 days ago" },
    { id: 3, title: "Content Marketing Strategy", company: "EdTech Inc", status: "Accepted", date: "1 week ago" },
    { id: 4, title: "Email Marketing Automation", company: "SaaS Solutions", status: "Pending", date: "2 weeks ago" },
  ];

  const quickLinks = [
    { title: "Edit Profile", icon: <User size={16} />, href: "#" },
    { title: "Browse Jobs", icon: <FileText size={16} />, href: "#" },
    { title: "Messages", icon: <Mail size={16} />, href: "#", badge: 3 },
    { title: "Settings", icon: <Settings size={16} />, href: "#" },
  ];

  // Helper function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-amber-100 text-amber-800";
      case "Viewed": return "bg-blue-100 text-blue-800";
      case "Accepted": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout userType="freelancer">
      {/* Welcome section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-dwork-purple/20">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {userData.name}!</h1>
            <p className="text-muted-foreground">Here's what's happening with your profile today</p>
          </div>
        </div>
        <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Proposal
        </Button>
      </div>

      {/* Profile completion alert - shown if profile is incomplete */}
      {userData.profileCompletion < 100 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bell className="text-amber-500" />
            <p>Your profile is {userData.profileCompletion}% complete. Complete your profile to increase visibility to clients.</p>
          </div>
          <Button variant="outline" size="sm" className="text-amber-600 border-amber-300 hover:bg-amber-100">
            Complete Profile
          </Button>
        </div>
      )}

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

      {/* Main content area - split into two columns on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Recent jobs */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Job Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentJobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{job.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-center mt-4">
              <Button variant="ghost" className="text-dwork-purple hover:text-dwork-purple-600 hover:bg-dwork-purple/10">
                View All Applications
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right column - Quick links and earnings chart */}
        <div className="flex flex-col gap-6">
          {/* Quick links card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="flex items-center justify-between p-3 hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {link.icon}
                      <span>{link.title}</span>
                    </div>
                    {link.badge && (
                      <Badge className="bg-dwork-purple">{link.badge}</Badge>
                    )}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Earnings chart card */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <EarningsChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FreelancerDashboard;
