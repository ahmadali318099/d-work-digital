
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Stats: React.FC = () => {
  const [period, setPeriod] = useState("last30");

  // Mock data for earnings chart
  const earningsData = [
    { name: "Jan", earnings: 1500 },
    { name: "Feb", earnings: 2200 },
    { name: "Mar", earnings: 1800 },
    { name: "Apr", earnings: 2400 },
    { name: "May", earnings: 2800 }
  ];
  
  // Mock data for job success chart
  const jobSuccessData = [
    { name: "Jan", rate: 92 },
    { name: "Feb", rate: 96 },
    { name: "Mar", rate: 94 },
    { name: "Apr", rate: 97 },
    { name: "May", rate: 98 }
  ];
  
  // Mock data for project types
  const projectTypesData = [
    { name: "Web Development", value: 45 },
    { name: "UI/UX Design", value: 30 },
    { name: "Mobile Apps", value: 15 },
    { name: "Content Writing", value: 10 }
  ];
  
  // Colors for pie chart
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
  
  // Mock data for client acquisition
  const clientAcquisitionData = [
    { name: "Jan", new: 2, returning: 1 },
    { name: "Feb", new: 3, returning: 2 },
    { name: "Mar", new: 1, returning: 3 },
    { name: "Apr", new: 4, returning: 2 },
    { name: "May", new: 3, returning: 4 }
  ];

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Stats & Trends</h1>
            <p className="text-muted-foreground mt-1">
              Track your performance metrics and freelancing career growth
            </p>
          </div>
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
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Total Earnings</span>
                <span className="text-3xl font-bold text-dwork-purple">$10,700</span>
                <span className="text-xs text-green-600 mt-1">↑ 15% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Job Success</span>
                <span className="text-3xl font-bold text-green-600">98%</span>
                <span className="text-xs text-green-600 mt-1">↑ 2% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Completed Projects</span>
                <span className="text-3xl font-bold">28</span>
                <span className="text-xs text-amber-600 mt-1">+ 3 this month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Profile Views</span>
                <span className="text-3xl font-bold">356</span>
                <span className="text-xs text-green-600 mt-1">↑ 24% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Earnings Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Earnings Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={earningsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Earnings']}
                      labelStyle={{ color: '#333' }}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0' 
                      }}
                    />
                    <Legend />
                    <Bar dataKey="earnings" fill="#9b87f5" name="Earnings ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Job Success Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Job Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={jobSuccessData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Success Rate']}
                      labelStyle={{ color: '#333' }}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0' 
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#4ade80" 
                      name="Success Rate (%)" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Project Types */}
          <Card>
            <CardHeader>
              <CardTitle>Project Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {projectTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      labelStyle={{ color: '#333' }}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0' 
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Client Acquisition */}
          <Card>
            <CardHeader>
              <CardTitle>Client Acquisition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={clientAcquisitionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      labelStyle={{ color: '#333' }}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0' 
                      }}
                    />
                    <Legend />
                    <Bar dataKey="new" fill="#9b87f5" name="New Clients" />
                    <Bar dataKey="returning" fill="#4ade80" name="Returning Clients" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </NewDashboardLayout>
  );
};

export default Stats;
