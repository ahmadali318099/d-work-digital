
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookmarkIcon, Star, ExternalLink, Trash, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const SavedJobs: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock saved jobs data
  const savedJobs = [
    { 
      id: "1", 
      title: "WordPress Website Development", 
      company: "TechSolutions Inc", 
      budget: "$1,000 - $2,500", 
      posted: "2 days ago",
      skills: ["WordPress", "PHP", "JavaScript"],
      saved: "Yesterday"
    },
    { 
      id: "3", 
      title: "E-commerce Website Design", 
      company: "FashionRetail", 
      budget: "$800 - $1,500", 
      posted: "4 days ago",
      skills: ["Web Design", "UI/UX", "Shopify"],
      saved: "3 days ago"
    },
    { 
      id: "5", 
      title: "Logo and Brand Identity Design", 
      company: "StartupLaunch", 
      budget: "$500 - $1,000", 
      posted: "1 week ago",
      skills: ["Logo Design", "Branding", "Illustrator"],
      saved: "5 days ago"
    }
  ];
  
  // Filter saved jobs based on search term
  const filteredJobs = savedJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleRemoveSaved = (jobId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click
    toast({
      title: "Job removed",
      description: "Job has been removed from your saved jobs."
    });
  };
  
  const handleViewJob = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Saved Jobs</h1>
            <p className="text-muted-foreground mt-1">
              Jobs you've bookmarked for later
            </p>
          </div>
          <Button 
            className="bg-dwork-purple hover:bg-dwork-purple-600"
            onClick={() => navigate('/find-jobs')}
          >
            Browse More Jobs
          </Button>
        </div>
        
        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Search saved jobs..." 
                  className="pl-10" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Saved Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Your Saved Jobs ({filteredJobs.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredJobs.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead className="hidden md:table-cell">Budget</TableHead>
                      <TableHead className="hidden md:table-cell">Skills</TableHead>
                      <TableHead>Saved</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredJobs.map((job) => (
                      <TableRow 
                        key={job.id} 
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => handleViewJob(job.id)}
                      >
                        <TableCell className="font-medium">{job.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {job.company}
                            <div className="flex ml-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400" 
                                />
                              ))}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{job.budget}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {job.skills.map((skill, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="bg-muted/50 text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{job.saved}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={(e) => handleViewJob(job.id)}
                              className="h-8 w-8"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">View Job</span>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={(e) => handleRemoveSaved(job.id, e)}
                              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Remove Job</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookmarkIcon className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium">No saved jobs found</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 
                    "No saved jobs match your search criteria. Try a different search term." : 
                    "You haven't saved any jobs yet. Browse jobs and bookmark the ones you're interested in."}
                </p>
                <Button 
                  className="mt-4 bg-dwork-purple hover:bg-dwork-purple-600"
                  onClick={() => navigate('/find-jobs')}
                >
                  Browse Jobs
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </NewDashboardLayout>
  );
};

export default SavedJobs;
