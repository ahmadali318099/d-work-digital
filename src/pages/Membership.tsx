
import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Define a type for plan names to ensure type safety
type PlanType = "basic" | "freelancer" | "premium";

const Membership: React.FC = () => {
  // Mock user data with proper type annotation
  const currentPlan: PlanType = "freelancer";
  
  const handleUpgrade = (plan: PlanType) => {
    toast({
      title: "Upgrade initiated",
      description: `You're being redirected to upgrade to ${plan} plan.`
    });
  };
  
  // Helper function to get plan-specific values
  const getPlanValue = (plan: PlanType, basicValue: string | number, freelancerValue: string | number, premiumValue: string | number): string | number => {
    switch(plan) {
      case "basic": return basicValue;
      case "freelancer": return freelancerValue;
      case "premium": return premiumValue;
      default: return basicValue; // Fallback, should never reach here
    }
  };
  
  // Helper function to check if two plan types are equal
  const isPlan = (planA: PlanType, planB: PlanType): boolean => {
    return planA === planB;
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
                    {getPlanValue(currentPlan, 10, 50, 100)} connects per month
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    {getPlanValue(currentPlan, "Standard", "Priority", "Priority")} support
                  </li>
                  {!isPlan(currentPlan, "basic") && (
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Enhanced profile visibility
                    </li>
                  )}
                  {isPlan(currentPlan, "premium") && (
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      Premium badge on your profile
                    </li>
                  )}
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold">
                  ${getPlanValue(currentPlan, 0, 9.99, 29.99)}<span className="text-sm font-normal">/month</span>
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
          <Card className={isPlan(currentPlan, "basic") ? "border-dwork-purple" : ""}>
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
                  disabled={isPlan(currentPlan, "basic")}
                >
                  {isPlan(currentPlan, "basic") ? "Current Plan" : "Downgrade"}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Freelancer Plan */}
          <Card className={`${isPlan(currentPlan, "freelancer") ? "border-dwork-purple" : ""} shadow-md`}>
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
                  variant={isPlan(currentPlan, "freelancer") ? "outline" : "default"}
                  className={!isPlan(currentPlan, "freelancer") ? "bg-dwork-purple hover:bg-dwork-purple-600 w-full" : "w-full"}
                  disabled={isPlan(currentPlan, "freelancer")}
                  onClick={() => handleUpgrade("freelancer")}
                >
                  {isPlan(currentPlan, "freelancer") ? "Current Plan" : 
                   isPlan(currentPlan, "premium") ? "Downgrade" : "Upgrade"}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className={isPlan(currentPlan, "premium") ? "border-dwork-purple" : ""}>
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
                  className={!isPlan(currentPlan, "premium") ? "bg-dwork-purple hover:bg-dwork-purple-600 w-full" : "w-full"}
                  variant={isPlan(currentPlan, "premium") ? "outline" : "default"}
                  disabled={isPlan(currentPlan, "premium")}
                  onClick={() => handleUpgrade("premium")}
                >
                  {isPlan(currentPlan, "premium") ? "Current Plan" : "Upgrade"}
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
