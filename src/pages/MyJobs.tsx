
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, FileText, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const MyJobs: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const activeJobs = [
    { 
      id: 1, 
      title: "Mobile App UI Design",
      client: "TechInnovate",
      startDate: "Apr 10, 2025",
      deadline: "Apr 25, 2025",
      budget: "$1,200",
      progress: 65,
      status: "In Progress"
    },
    { 
      id: 2, 
      title: "WordPress Website Development",
      client: "Green Solutions LLC",
      startDate: "Apr 5, 2025",
      deadline: "Apr 22, 2025",
      budget: "$2,500",
      progress: 40,
      status: "In Progress"
    }
  ];
  
  const completedJobs = [
    { 
      id: 3, 
      title: "E-commerce Product Page Redesign",
      client: "Fashion World",
      completedDate: "Apr 2, 2025",
      budget: "$800",
      rating: 5,
      status: "Completed"
    },
    { 
      id: 4, 
      title: "SEO Optimization for Blog",
      client: "Content Writers Inc",
      completedDate: "Mar 25, 2025",
      budget: "$500",
      rating: 4.5,
      status: "Completed"
    }
  ];
  
  const cancelledJobs = [
    { 
      id: 5, 
      title: "Logo Design Project",
      client: "StartUp Vision",
      cancelledDate: "Mar 15, 2025",
      budget: "$350",
      reason: "Client changed requirements",
      status: "Cancelled"
    }
  ];

  // Helper function to get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>;
      case "Completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      case "Cancelled":
        return <Badge className="bg-red-500 hover:bg-red-600">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Jobs</h1>
            <p className="text-muted-foreground mt-1">Manage and track all your current and past jobs</p>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Active Jobs
              <Badge className="ml-1 bg-blue-500">{activeJobs.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Completed
              <Badge className="ml-1 bg-green-500">{completedJobs.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="cancelled" className="flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Cancelled
              <Badge className="ml-1 bg-red-500">{cancelledJobs.length}</Badge>
            </TabsTrigger>
          </TabsList>

          {/* Active Jobs */}
          <TabsContent value="active" className="space-y-6">
            {activeJobs.length > 0 ? (
              activeJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                        <div 
                          className="h-full bg-dwork-purple" 
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center gap-2">
                            {getStatusBadge(job.status)}
                            <Badge variant="outline" className="bg-dwork-purple/10 text-dwork-purple">
                              {job.budget}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>Started: {job.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>Deadline: {job.deadline}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-4">
                          <div className="w-full md:w-auto flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{job.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-dwork-purple h-2 rounded-full" 
                                style={{ width: `${job.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="w-full md:w-auto flex gap-2 mt-4 md:mt-0">
                            <Button variant="outline" className="flex-1 md:flex-initial" asChild>
                              <Link to={`/messages`}>Message Client</Link>
                            </Button>
                            <Button className="flex-1 md:flex-initial bg-dwork-purple hover:bg-dwork-purple-600" asChild>
                              <Link to={`/job-progress/${job.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No active jobs</h3>
                <p className="text-muted-foreground">When you get hired, your jobs will appear here</p>
                <Button className="mt-4 bg-dwork-purple hover:bg-dwork-purple-600" asChild>
                  <Link to="/find-jobs">Find Jobs</Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Completed Jobs */}
          <TabsContent value="completed" className="space-y-6">
            {completedJobs.length > 0 ? (
              completedJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-2">
                        {getStatusBadge(job.status)}
                        <Badge variant="outline" className="bg-dwork-purple/10 text-dwork-purple">
                          {job.budget}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Completed: {job.completedDate}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(job.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <span className="ml-1 text-sm font-medium">{job.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" asChild>
                        <Link to={`/job-progress/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <CheckCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No completed jobs yet</h3>
                <p className="text-muted-foreground">Your completed jobs will appear here</p>
              </div>
            )}
          </TabsContent>

          {/* Cancelled Jobs */}
          <TabsContent value="cancelled" className="space-y-6">
            {cancelledJobs.length > 0 ? (
              cancelledJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-2">
                        {getStatusBadge(job.status)}
                        <Badge variant="outline" className="bg-dwork-purple/10 text-dwork-purple">
                          {job.budget}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Cancelled on: {job.cancelledDate}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-muted-foreground">Reason for cancellation:</p>
                      <p className="text-sm">{job.reason}</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" asChild>
                        <Link to={`/job-progress/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No cancelled jobs</h3>
                <p className="text-muted-foreground">Cancelled jobs will appear here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
};

export default MyJobs;
