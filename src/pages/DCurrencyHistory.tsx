
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  ChevronDown,
  Calendar,
  Mail,
  Send,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import BuyDCurrencyModal from "@/components/dcurrency/BuyDCurrencyModal";

const DCurrencyHistory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sample data
  const dCurrencyBalance = 30;
  const lifetimeSpent = 120;
  
  const transactions = [
    {
      id: 1,
      type: "purchase",
      amount: 50,
      date: "May 8, 2025",
      details: "D Currency Purchase",
      bonus: 5,
      cost: "$39.99"
    },
    {
      id: 2,
      type: "used",
      amount: -4,
      date: "May 7, 2025",
      details: "Applied to: React Developer for E-commerce Project",
      jobId: 123
    },
    {
      id: 3,
      type: "used",
      amount: -5,
      date: "May 6, 2025",
      details: "Direct Message: WordPress Expert Needed",
      messageType: "client_outreach",
      jobId: 120
    },
    {
      id: 4,
      type: "purchase",
      amount: 10,
      date: "May 5, 2025",
      details: "D Currency Purchase",
      cost: "$9.99"
    },
    {
      id: 5,
      type: "used",
      amount: -3,
      date: "May 3, 2025",
      details: "Applied to: Full Stack Developer for SaaS Project",
      jobId: 115
    },
    {
      id: 6,
      type: "used",
      amount: -5,
      date: "May 1, 2025",
      details: "Direct Message: Mobile App Development Project",
      messageType: "client_outreach",
      jobId: 112
    },
    {
      id: 7,
      type: "purchase",
      amount: 100,
      date: "Apr 25, 2025",
      details: "D Currency Purchase",
      bonus: 15,
      cost: "$69.99"
    }
  ];
  
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case "used":
        return transactions.find(t => t.id === parseInt(type))?.messageType === "client_outreach" 
          ? <Mail className="h-4 w-4 text-amber-500" />
          : <Send className="h-4 w-4 text-blue-500" />;
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">D Currency History</h1>
            <p className="text-muted-foreground mt-1">
              Manage and track your D Currency usage
            </p>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-dwork-purple hover:bg-dwork-purple-600 w-full sm:w-auto"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Buy D Currency
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">Current Balance</p>
              </div>
              <p className="text-2xl font-bold">{dCurrencyBalance} D Currency</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpRight className="h-5 w-5 text-green-500" />
                <p className="text-sm font-medium text-muted-foreground">Purchased (This Month)</p>
              </div>
              <p className="text-2xl font-bold">60 D Currency</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDownRight className="h-5 w-5 text-red-500" />
                <p className="text-sm font-medium text-muted-foreground">Used (This Month)</p>
              </div>
              <p className="text-2xl font-bold">17 D Currency</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">Lifetime Used</p>
              </div>
              <p className="text-2xl font-bold">{lifetimeSpent} D Currency</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>
                  Your D Currency purchases and usage
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Calendar className="h-4 w-4 mr-1" />
                  Date Range
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <div className="flex justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="purchases">Purchases</TabsTrigger>
                  <TabsTrigger value="used">Used</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {transaction.type === "used" && transaction.messageType ? (
                                <Mail className="h-4 w-4 text-amber-500" />
                              ) : transaction.type === "used" ? (
                                <Send className="h-4 w-4 text-blue-500" />
                              ) : (
                                <DollarSign className="h-4 w-4 text-green-500" />
                              )}
                              <div>
                                <p className="font-medium">{transaction.details}</p>
                                {transaction.type === "purchase" && transaction.bonus && (
                                  <p className="text-xs text-green-600">Includes {transaction.bonus} bonus</p>
                                )}
                                {transaction.type === "purchase" && transaction.cost && (
                                  <p className="text-xs text-muted-foreground">{transaction.cost}</p>
                                )}
                                {transaction.jobId && (
                                  <Button variant="link" size="sm" className="h-auto p-0 text-xs underline text-dwork-purple">
                                    View Job
                                  </Button>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge className={transaction.type === "purchase" 
                              ? "bg-green-100 text-green-800 border-green-200" 
                              : "bg-amber-100 text-amber-800 border-amber-200"
                            }>
                              {transaction.type === "purchase" ? "+" : ""}{transaction.amount} D Currency
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="purchases" className="mt-0">
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions
                        .filter((transaction) => transaction.type === "purchase")
                        .map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-green-500" />
                                <div>
                                  <p className="font-medium">{transaction.details}</p>
                                  {transaction.bonus && (
                                    <p className="text-xs text-green-600">Includes {transaction.bonus} bonus</p>
                                  )}
                                  {transaction.cost && (
                                    <p className="text-xs text-muted-foreground">{transaction.cost}</p>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                +{transaction.amount} D Currency
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="used" className="mt-0">
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions
                        .filter((transaction) => transaction.type === "used")
                        .map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {transaction.messageType ? (
                                  <Mail className="h-4 w-4 text-amber-500" />
                                ) : (
                                  <Send className="h-4 w-4 text-blue-500" />
                                )}
                                <div>
                                  <p className="font-medium">{transaction.details}</p>
                                  {transaction.jobId && (
                                    <Button variant="link" size="sm" className="h-auto p-0 text-xs underline text-dwork-purple">
                                      View Job
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                {transaction.amount} D Currency
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {/* Buy D Currency Modal */}
      <BuyDCurrencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentBalance={dCurrencyBalance}
      />
    </NewDashboardLayout>
  );
};

export default DCurrencyHistory;
