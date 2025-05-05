
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, Download, CreditCard, DollarSign, Check, PlusCircle, ChevronDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

const ConnectsHistory: React.FC = () => {
  const [connects, setConnects] = useState(30);
  
  // Sample data - in a real app, this would come from an API
  const purchaseHistory = [
    { id: 1, date: "Apr 10, 2025", type: "Purchase", amount: 20, cost: "$3.00" },
    { id: 2, date: "Mar 25, 2025", type: "Purchase", amount: 40, cost: "$5.60" },
    { id: 3, date: "Mar 05, 2025", type: "Bonus", amount: 10, cost: "Free" },
    { id: 4, date: "Feb 15, 2025", type: "Purchase", amount: 60, cost: "$8.40" },
  ];

  const usageHistory = [
    { 
      id: 1, 
      date: "Apr 12, 2025", 
      jobTitle: "React Developer for E-commerce Project", 
      amount: 4,
      type: "Job Application",
      status: "Applied"
    },
    { 
      id: 2, 
      date: "Apr 08, 2025", 
      jobTitle: "Node.js Backend Developer", 
      amount: 2,
      type: "Job Application",
      status: "Applied"
    },
    { 
      id: 3, 
      date: "Apr 01, 2025", 
      jobTitle: "UI/UX Designer for Mobile App", 
      amount: 6,
      type: "Featured Application",
      status: "Applied"
    },
    { 
      id: 4, 
      date: "Mar 28, 2025", 
      jobTitle: "Full Stack Developer", 
      amount: 4,
      type: "Job Application",
      status: "Hired"
    },
  ];

  // Connect purchase options
  const connectOptions = [
    { id: "option1", amount: 10, price: "$1.50", savings: null },
    { id: "option2", amount: 20, price: "$3.00", savings: null },
    { id: "option3", amount: 40, price: "$5.60", savings: "Save 6%" },
    { id: "option4", amount: 60, price: "$8.40", savings: "Save 12%" },
    { id: "option5", amount: 80, price: "$10.80", savings: "Save 15%" },
  ];

  const [selectedOption, setSelectedOption] = useState("option3");

  const handlePurchaseConnects = () => {
    const selectedPack = connectOptions.find(option => option.id === selectedOption);
    if (selectedPack) {
      toast({
        title: "Connects Purchased",
        description: `You've successfully purchased ${selectedPack.amount} connects for ${selectedPack.price}`
      });
      setConnects(connects + selectedPack.amount);
    }
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Connects</h1>
            <p className="text-muted-foreground mt-1">
              Manage your connects balance and usage
            </p>
          </div>
        </div>

        {/* Connects Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your Connects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-dwork-purple/10 p-4 rounded-full">
                    <Wallet className="h-10 w-10 text-dwork-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available Connects</p>
                    <p className="text-3xl font-bold">{connects}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Usage</span>
                    <span>16 of 70</span>
                  </div>
                  <Progress value={23} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    You've used 23% of your average monthly connects
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Cost per Connect</p>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <p className="font-medium">$0.15</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Free Monthly</p>
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" />
                      <p className="font-medium">10 Connects</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">Expiration</p>
                    <div className="flex items-center gap-1">
                      <PlusCircle className="h-4 w-4 text-amber-500" />
                      <p className="font-medium">12 Months</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Buy Connects</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={selectedOption} 
                onValueChange={setSelectedOption}
                className="space-y-3"
              >
                {connectOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id} 
                      className="data-[state=checked]:border-dwork-purple data-[state=checked]:text-dwork-purple" 
                    />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between">
                        <span>{option.amount} Connects</span>
                        <span className="font-medium">{option.price}</span>
                      </div>
                      {option.savings && (
                        <span className="text-xs text-green-600">{option.savings}</span>
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <Button 
                className="w-full mt-6 bg-dwork-purple hover:bg-dwork-purple-600"
                onClick={handlePurchaseConnects}
              >
                Buy Connects
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                Purchased connects expire after 12 months
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* History Tabs */}
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="usage">
              Usage History
            </TabsTrigger>
            <TabsTrigger value="purchases">
              Purchase History
            </TabsTrigger>
          </TabsList>
          
          {/* Usage History Tab */}
          <TabsContent value="usage">
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle>Connects Usage</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Connects</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usageHistory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.date}</TableCell>
                        <TableCell className="max-w-[300px] truncate">{item.jobTitle}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={`
                              ${item.status === "Applied" ? "bg-blue-100 text-blue-800" : 
                                item.status === "Hired" ? "bg-green-100 text-green-800" : 
                                "bg-gray-100 text-gray-800"}
                            `}
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Purchase History Tab */}
          <TabsContent value="purchases">
            <Card>
              <CardHeader className="pb-3 flex flex-row items-center justify-between">
                <CardTitle>Purchase History</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Connects</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {purchaseHistory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.date}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
};

export default ConnectsHistory;
