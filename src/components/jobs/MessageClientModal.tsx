
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface ClientType {
  name: string;
  location: string;
}

interface MessageClientModalProps {
  client: ClientType;
  isOpen: boolean;
  onClose: () => void;
  dCurrencyBalance?: number;
}

const MessageClientModal: React.FC<MessageClientModalProps> = ({ client, isOpen, onClose, dCurrencyBalance = 10 }) => {
  const [message, setMessage] = useState("");
  const dCurrencyRequired = 5;
  const hasSufficientDCurrency = dCurrencyBalance >= dCurrencyRequired;
  
  const handleSubmit = () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please write a message before sending",
        variant: "destructive"
      });
      return;
    }
    
    if (!hasSufficientDCurrency) {
      toast({
        title: "Insufficient D Currency",
        description: "You don't have enough D Currency to send this message.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the message and deduct D Currency
    toast({
      title: "Message Sent",
      description: `You've successfully sent a message to ${client.name} using ${dCurrencyRequired} D Currency.`,
    });
    onClose();
  };
  
  const handleBuyDCurrency = () => {
    // In a real app, this would redirect to the D Currency purchase page
    toast({
      title: "Redirecting",
      description: "Taking you to purchase D Currency",
    });
    onClose();
    // Navigate to D Currency purchase page
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-dwork-purple" />
            Message Client Directly
          </DialogTitle>
          <DialogDescription>
            Direct message the client to discuss the project before applying.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{client.name}</p>
              <p className="text-xs text-muted-foreground">{client.location}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Textarea 
              placeholder="Write your message here..."
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Introduce yourself and ask any questions you have about the job.
              Keep your message professional and specific to the project.
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm">
            <p className="font-medium text-amber-800">
              This message will cost <span className="font-bold">{dCurrencyRequired} D Currency</span>.
            </p>
            <p className="text-amber-700">
              Your current balance: <span className="font-bold">{dCurrencyBalance} D Currency</span>
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-between">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          {hasSufficientDCurrency ? (
            <Button 
              className="bg-dwork-purple hover:bg-dwork-purple-600 w-full sm:w-auto"
              onClick={handleSubmit}
            >
              Send Message using D Currency
            </Button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button 
                variant="outline"
                className="border-dwork-purple text-dwork-purple"
                onClick={handleBuyDCurrency}
              >
                Buy More D Currency
              </Button>
              <Button 
                className="bg-dwork-purple hover:bg-dwork-purple-600 w-full sm:w-auto"
                disabled
              >
                Send Message
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MessageClientModal;
