
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface BuyConnectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const connectPackages = [
  { amount: 10, price: 15 },
  { amount: 20, price: 25 },
  { amount: 50, price: 50 },
  { amount: 100, price: 90 },
];

const BuyConnectsModal: React.FC<BuyConnectsModalProps> = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(connectPackages[1]);
  const [activeTab, setActiveTab] = useState("buy");

  const handlePurchase = () => {
    toast({
      title: "Purchase Successful",
      description: `You've purchased ${selectedPackage.amount} connects.`,
    });
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connects</DialogTitle>
          <DialogDescription>
            Connects are used to apply to jobs and message clients directly.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="buy" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy Connects</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-3">
              {connectPackages.map((pkg) => (
                <div
                  key={pkg.amount}
                  className={`border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedPackage.amount === pkg.amount
                      ? "border-dwork-purple bg-dwork-purple/5"
                      : "hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <div className="text-lg font-bold">{pkg.amount}</div>
                  <div className="text-sm text-muted-foreground">Connects</div>
                  <div className="text-dwork-purple font-medium mt-2">${pkg.price}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 pt-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiration</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="pt-4">
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Purchase</p>
                    <p className="text-sm text-muted-foreground">20 Connects</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$25.00</p>
                    <p className="text-sm text-muted-foreground">Apr 25, 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Job Application</p>
                    <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-500">-3 Connects</p>
                    <p className="text-sm text-muted-foreground">Apr 20, 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Direct Message</p>
                    <p className="text-sm text-muted-foreground">Client: TechSolutions</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-500">-5 Connects</p>
                    <p className="text-sm text-muted-foreground">Apr 18, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="sm:justify-start">
          {activeTab === "buy" ? (
            <div className="flex w-full justify-between items-center">
              <div className="text-sm font-medium">
                Total: <span className="text-dwork-purple">${selectedPackage.price}</span>
              </div>
              <Button
                type="button"
                className="bg-dwork-purple hover:bg-dwork-purple-600"
                onClick={handlePurchase}
              >
                Purchase
              </Button>
            </div>
          ) : (
            <Button variant="outline" onClick={onClose}>Close</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyConnectsModal;
