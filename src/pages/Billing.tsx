
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Users, Wallet } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Billing = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-04-23",
      description: "Premium Plan - Monthly",
      amount: "-$49.99",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-04-20",
      description: "Credits Purchase - 100 Credits",
      amount: "-$100.00",
      status: "Completed",
    },
    {
      id: 3,
      date: "2024-04-15",
      description: "Job Post - Senior PPC Expert",
      amount: "-$29.99",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Billing & Payments</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Available Credits
                  </p>
                  <p className="text-2xl font-bold">150</p>
                </div>
                <Wallet className="h-8 w-8 text-dwork-purple" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Active Subscriptions
                  </p>
                  <p className="text-2xl font-bold">Premium</p>
                </div>
                <CreditCard className="h-8 w-8 text-dwork-purple" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Active Contracts
                  </p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Users className="h-8 w-8 text-dwork-purple" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
              <div className="flex items-center gap-4">
                <CreditCard className="h-6 w-6" />
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">
                    Expires 12/2025
                  </p>
                </div>
              </div>
              <Button variant="outline">Remove</Button>
            </div>
            <Button>Add Payment Method</Button>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
