
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight,
  Filter,
  Download,
  PlusCircle
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ConnectsHistory: React.FC = () => {
  const [period, setPeriod] = useState("last30");
  const [page, setPage] = useState(1);
  
  // Mock connect usage data
  const connectUsageHistory = [
    {
      id: 1,
      date: "2025-05-03",
      time: "14:23",
      activity: "Applied to job",
      jobTitle: "WordPress Website Development",
      connectsUsed: 3,
      balance: 27
    },
    {
      id: 2,
      date: "2025-05-02",
      time: "10:15",
      activity: "Messaged client",
      jobTitle: "React Native Mobile App",
      connectsUsed: 5,
      balance: 30
    },
    {
      id: 3,
      date: "2025-04-29",
      time: "16:40",
      activity: "Applied to job",
      jobTitle: "E-commerce Website Design",
      connectsUsed: 3,
      balance: 35
    },
    {
      id: 4,
      date: "2025-04-27",
      time: "09:05",
      activity: "Applied to job",
      jobTitle: "Content Writer for Tech Blog",
      connectsUsed: 2,
      balance: 38
    },
    {
      id: 5,
      date: "2025-04-25",
      time: "11:30",
      activity: "Purchased connects",
      jobTitle: "",
      connectsUsed: -20, // Negative for purchases (adding connects)
      balance: 40
    }
  ];
  
  const handleDownloadReport = () => {
    toast({
      title: "Report download started",
      description: "Your connects usage report is being downloaded."
    });
  };
  
  const handleBuyConnects = () => {
    toast({
      title: "Buy connects",
      description: "Redirecting to connects purchase page."
    });
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Connects History</h1>
            <p className="text-muted-foreground mt-1">
              Track your connects usage and purchases
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleDownloadReport}
            >
              <Download className="h-4 w-4" /> 
              Download Report
            </Button>
            <Button 
              className="bg-dwork-purple hover:bg-dwork-purple-600 flex items-center gap-2"
              onClick={handleBuyConnects}
            >
              <PlusCircle className="h-4 w-4" /> 
              Buy Connects
            </Button>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Current Balance</span>
                <span className="text-3xl font-bold text-dwork-purple">27</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Used This Month</span>
                <span className="text-3xl font-bold text-amber-600">13</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Purchased This Month</span>
                <span className="text-3xl font-bold text-green-600">20</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Monthly Free Connects</span>
                <span className="text-3xl font-bold">20</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Connects History Table */}
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Connects Usage Log</CardTitle>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <Select 
                value={period} 
                onValueChange={setPeriod}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7">Last 7 Days</SelectItem>
                  <SelectItem value="last30">Last 30 Days</SelectItem>
                  <SelectItem value="last90">Last 90 Days</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Job (if applicable)</TableHead>
                    <TableHead className="text-right">Connects</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {connectUsageHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>
                        {item.activity === "Purchased connects" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            {item.activity}
                          </Badge>
                        ) : (
                          item.activity
                        )}
                      </TableCell>
                      <TableCell>
                        {item.jobTitle ? item.jobTitle : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.connectsUsed < 0 ? (
                          <span className="text-green-600 font-medium">+{Math.abs(item.connectsUsed)}</span>
                        ) : (
                          <span className="text-amber-600 font-medium">-{item.connectsUsed}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right font-medium">{item.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 1-5 of 12 entries
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => page > 1 && setPage(page - 1)}
                  disabled={page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous Page</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(page + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next Page</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </NewDashboardLayout>
  );
};

export default ConnectsHistory;
