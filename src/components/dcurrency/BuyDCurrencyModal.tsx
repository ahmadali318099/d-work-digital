
import React, { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Card,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, BadgePercent } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BuyDCurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBalance?: number;
}

interface DCurrencyPlan {
  id: number;
  amount: number;
  price: number;
  popular: boolean;
  bonus?: number;
}

const BuyDCurrencyModal: React.FC<BuyDCurrencyModalProps> = ({
  isOpen, 
  onClose,
  currentBalance = 10,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(2); // Default to the popular plan
  
  const plans: DCurrencyPlan[] = [
    { id: 1, amount: 10, price: 9.99, popular: false },
    { id: 2, amount: 50, price: 39.99, popular: true, bonus: 5 },
    { id: 3, amount: 100, price: 69.99, popular: false, bonus: 15 },
    { id: 4, amount: 200, price: 119.99, popular: false, bonus: 50 },
  ];

  const handlePurchase = () => {
    if (selectedPlan === null) {
      toast({
        title: "Error",
        description: "Please select a D Currency package",
        variant: "destructive",
      });
      return;
    }
    
    const plan = plans.find(p => p.id === selectedPlan);
    if (!plan) return;
    
    // In a real app, this would process payment and update the user's balance
    toast({
      title: "Purchase Successful",
      description: `You've purchased ${plan.amount} D Currency${plan.bonus ? ` (+ ${plan.bonus} bonus)` : ''}.`,
    });
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buy D Currency</DialogTitle>
          <DialogDescription>
            Purchase D Currency to apply for jobs and message clients directly.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-dwork-purple/10 p-2 rounded-full">
                <CreditCard className="h-5 w-5 text-dwork-purple" />
              </div>
              <div>
                <p className="text-sm font-medium">Current Balance</p>
                <p className="text-2xl font-bold">{currentBalance} D Currency</p>
              </div>
            </div>
          </div>
          
          <RadioGroup value={selectedPlan?.toString()} onValueChange={(value) => setSelectedPlan(parseInt(value))}>
            <div className="grid gap-4">
              {plans.map((plan) => (
                <div key={plan.id}>
                  <RadioGroupItem
                    value={plan.id.toString()}
                    id={`plan-${plan.id}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`plan-${plan.id}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-md cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-dwork-purple peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-dwork-purple peer-data-[state=checked]:bg-dwork-purple/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dwork-purple/10">
                        <DollarSign className="h-5 w-5 text-dwork-purple" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-base font-medium">{plan.amount} D Currency</p>
                        {plan.bonus && (
                          <div className="flex items-center text-sm text-green-600">
                            <BadgePercent className="h-3.5 w-3.5 mr-1" />
                            <span>+ {plan.bonus} bonus</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                      <span className="text-lg font-bold">${plan.price}</span>
                      {plan.popular && (
                        <Badge className="bg-dwork-purple text-white border-none">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        
        <DialogFooter>
          <Button
            onClick={handlePurchase}
            className="w-full bg-dwork-purple hover:bg-dwork-purple-600"
          >
            Buy D Currency
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Import Badge component from shadcn/ui
const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className || ''}`}
    >
      {children}
    </span>
  );
};

export default BuyDCurrencyModal;
