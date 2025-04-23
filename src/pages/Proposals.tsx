
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, FileText, X } from "lucide-react";

const Proposals = () => {
  const [activeTab, setActiveTab] = useState("active");

  const activeProposals = [
    {
      id: 1,
      jobTitle: "WordPress Website Development",
      client: "TechSolutions Inc",
      submitted: "2 days ago",
      budget: "$1,500",
      status: "Submitted",
    },
    {
      id: 2,
      jobTitle: "React Native Mobile App Development",
      client: "MobileX",
      submitted: "1 day ago",
      budget: "$4,000",
      status: "Client Reviewing",
    },
    {
      id: 3,
      jobTitle: "E-commerce Website Design",
      client: "FashionRetail",
      submitted: "4 hours ago",
      budget: "$1,200",
      status: "Interview Scheduled",
    },
  ];

  const archivedProposals = [
    {
      id: 4,
      jobTitle: "Content Writer for Tech Blog",
      client: "TechInsights",
      submitted: "1 month ago",
      budget: "$350",
      status: "Declined",
    },
    {
      id: 5,
      jobTitle: "Logo and Brand Identity Design",
      client: "StartupLaunch",
      submitted: "2 weeks ago",
      budget: "$750",
      status: "Accepted",
    },
    {
      id: 6,
      jobTitle: "SEO Optimization Project",
      client: "DigitalGrowth",
      submitted: "3 weeks ago",
      budget: "$800",
      status: "Expired",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Submitted":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>;
      case "Client Reviewing":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">{status}</Badge>;
      case "Interview Scheduled":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{status}</Badge>;
      case "Accepted":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>;
      case "Declined":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>;
      case "Expired":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userType="freelancer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Proposals</h1>
          <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
            <FileText className="mr-2 h-4 w-4" /> Create New Proposal
          </Button>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
                <TabsTrigger value="active">Active Proposals ({activeProposals.length})</TabsTrigger>
                <TabsTrigger value="archived">Archived Proposals ({archivedProposals.length})</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="active" className="mt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead className="hidden md:table-cell">Client</TableHead>
                    <TableHead className="hidden md:table-cell">Submitted</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell className="font-medium">{proposal.jobTitle}</TableCell>
                      <TableCell className="hidden md:table-cell">{proposal.client}</TableCell>
                      <TableCell className="hidden md:table-cell">{proposal.submitted}</TableCell>
                      <TableCell>{proposal.budget}</TableCell>
                      <TableCell>{getStatusBadge(proposal.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="archived" className="mt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead className="hidden md:table-cell">Client</TableHead>
                    <TableHead className="hidden md:table-cell">Submitted</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {archivedProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell className="font-medium">{proposal.jobTitle}</TableCell>
                      <TableCell className="hidden md:table-cell">{proposal.client}</TableCell>
                      <TableCell className="hidden md:table-cell">{proposal.submitted}</TableCell>
                      <TableCell>{proposal.budget}</TableCell>
                      <TableCell>{getStatusBadge(proposal.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Proposals;
