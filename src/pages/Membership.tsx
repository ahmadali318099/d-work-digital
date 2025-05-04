
import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Membership: React.FC = () => {
  // Mock user data
  const currentPlan = "freelancer"; // basic, freelancer, premium
  
  const handleUpgrade = (plan: string) => {
    toast({
      title: "Upgrade initiated",
      description: `You're being redirected to upgrade to ${plan} plan.`
    });
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Membership Plan</h1>
          <p className="text-muted-foreground mt-1">
            Choose the right plan for your freelancing career
          </p>
        </div>
        
        {/* Current Plan Card */}
        <Card className="border-dwork-purple">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Your Current Plan</CardTitle>
                <CardDescription>
                  Billing cycle: Monthly (Next renewal on June 3, 2025)
                </CardDescription>
              </div>
              <Badge className="bg-dwork-purple">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold capitalize">{currentPlan} Plan</h3>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    {currentPlan === "basic" ? "10" : currentPlan === "freelancer" ? "50" : "100"} connects per month
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    {currentPlan === "basic" ? "Standard" : "Priority"} support
                  </li>
                  {currentPlan !== "basic" && (
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Enhanced profile visibility
                    </li>
                  )}
                  {currentPlan === "premium" && (
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Premium badge on your profile
                    </li>
                  )}
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold">
                  ${currentPlan === "basic" ? "0" : currentPlan === "freelancer" ? "9.99" : "29.99"}<span className="text-sm font-normal">/month</span>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => toast({
                    title: "Manage subscription",
                    description: "Redirecting to billing settings."
                  })}
                >
                  Manage Subscription
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Plan Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <Card className={currentPlan === "basic" ? "border-dwork-purple" : ""}>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For casual freelancers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">
                  $0<span className="text-sm font-normal">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    10 connects per month
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Standard job alerts
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Basic profile
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Community support
                  </li>
                  <li className="flex items-center text-sm">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    Enhanced visibility
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={currentPlan === "basic"}
                >
                  {currentPlan === "basic" ? "Current Plan" : "Downgrade"}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Freelancer Plan */}
          <Card className={`${currentPlan === "freelancer" ? "border-dwork-purple" : ""} shadow-md`}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Freelancer</CardTitle>
                <Badge className="bg-dwork-purple">Popular</Badge>
              </div>
              <CardDescription>For active freelancers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">
                  $9.99<span className="text-sm font-normal">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    50 connects per month
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Priority job alerts
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Enhanced profile
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Enhanced visibility
                  </li>
                  <li className="flex items-center text-sm">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    Premium badge
                  </li>
                </ul>
                <Button 
                  variant={currentPlan === "freelancer" ? "outline" : "default"}
                  className={currentPlan !== "freelancer" ? "bg-dwork-purple hover:bg-dwork-purple-600 w-full" : "w-full"}
                  disabled={currentPlan === "freelancer"}
                  onClick={() => handleUpgrade("freelancer")}
                >
                  {currentPlan === "freelancer" ? "Current Plan" : 
                   currentPlan === "premium" ? "Downgrade" : "Upgrade"}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className={currentPlan === "premium" ? "border-dwork-purple" : ""}>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>For power freelancers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">
                  $29.99<span className="text-sm font-normal">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    100 connects per month
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Real-time job alerts
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Premium profile
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Priority support
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Top visibility in search
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Premium badge
                  </li>
                </ul>
                <Button 
                  className={currentPlan !== "premium" ? "bg-dwork-purple hover:bg-dwork-purple-600 w-full" : "w-full"}
                  variant={currentPlan === "premium" ? "outline" : "default"}
                  disabled={currentPlan === "premium"}
                  onClick={() => handleUpgrade("premium")}
                >
                  {currentPlan === "premium" ? "Current Plan" : "Upgrade"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Can I cancel my subscription at any time?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. Your plan will remain active until the end of the current billing period.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">What happens if I run out of connects?</h3>
                <p className="text-sm text-muted-foreground">
                  You can purchase additional connects at any time. Connects are necessary for applying to jobs and contacting clients directly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">How do I upgrade my plan?</h3>
                <p className="text-sm text-muted-foreground">
                  You can upgrade your plan at any time by clicking the "Upgrade" button. Your new plan will be effective immediately, and you will be charged the prorated difference.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </NewDashboardLayout>
  );
};

export default Membership;
