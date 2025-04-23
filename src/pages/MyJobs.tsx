
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Edit, Trash, Eye } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Link } from "react-router-dom";

const MyJobs: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const jobs = [
    { 
      id: 1, 
      title: "Facebook Ads Expert Needed",
      type: "One-time project",
      status: "Open",
      proposals: 8,
      budget: "$500-1000",
      posted: "2 days ago",
      views: 156
    },
    { 
      id: 2, 
      title: "SEO Specialist for E-commerce",
      type: "Monthly Retainer",
      status: "In Progress",
      proposals: 15,
      budget: "$1000-2000",
      posted: "5 days ago",
      views: 234
    },
    { 
      id: 3, 
      title: "Content Writer for Blog Posts",
      type: "Ongoing",
      status: "Closed",
      proposals: 12,
      budget: "$300-500",
      posted: "1 week ago",
      views: 198
    }
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

  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Jobs</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage and track all your job postings
            </p>
          </div>
          <Button className="bg-dwork-purple hover:bg-dwork-purple-600" asChild>
            <Link to="/post-job">Post a New Job</Link>
          </Button>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search jobs..." 
                  className="pl-10 pr-4 py-2 rounded-md w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dwork-purple/20"
                />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Filter size={16} />
                Filter Jobs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Jobs Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Job Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Proposals</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Posted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.type}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.proposals}</TableCell>
                      <TableCell>{job.budget}</TableCell>
                      <TableCell className="text-muted-foreground">{job.posted}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" title="View Details">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Edit Job">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Delete Job" 
                            className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyJobs;
