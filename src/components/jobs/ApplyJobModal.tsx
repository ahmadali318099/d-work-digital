
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface JobType {
  id: string;
  title: string;
  dCurrencyToApply: number;
  budget: {
    type: string;
    amount: string;
  };
}

interface ApplyJobModalProps {
  job: JobType;
  isOpen: boolean;
  onClose: () => void;
}

const ApplyJobModal: React.FC<ApplyJobModalProps> = ({ job, isOpen, onClose }) => {
  const [bid, setBid] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  
  const handleSubmit = () => {
    // In a real app, this would submit the application to the backend
    toast({
      title: "Proposal Submitted",
      description: `You've successfully applied to "${job.title}" using ${job.dCurrencyToApply} D Currency.`,
    });
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Submit a Proposal</DialogTitle>
          <DialogDescription>
            You're applying to: {job.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          {job.budget.type === "Fixed" ? (
            <div className="space-y-2">
              <Label htmlFor="bid">Your bid (Client's budget: {job.budget.amount})</Label>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="absolute left-3 top-2.5">$</span>
                  <Input 
                    id="bid" 
                    type="number" 
                    placeholder="500"
                    className="pl-7" 
                    value={bid}
                    onChange={(e) => setBid(e.target.value)}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                This is the amount you'll receive after service fees.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Your hourly rate (Client's budget: {job.budget.amount})</Label>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="absolute left-3 top-2.5">$</span>
                  <Input 
                    id="hourlyRate" 
                    type="number" 
                    placeholder="25"
                    className="pl-7" 
                    value={bid}
                    onChange={(e) => setBid(e.target.value)}
                  />
                </div>
                <span className="flex items-center text-sm font-medium">/hr</span>
              </div>
              <p className="text-xs text-muted-foreground">
                This is the hourly rate you'll receive after service fees.
              </p>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="delivery">Estimated delivery time</Label>
            <div className="flex gap-2">
              <Input 
                id="delivery" 
                placeholder="14" 
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
              <span className="flex items-center text-sm font-medium">days</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cover-letter">Cover Letter</Label>
            <Textarea 
              id="cover-letter" 
              placeholder="Introduce yourself and explain why you're a good fit for this project..."
              rows={5}
              className="resize-none"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Explain why you're the best candidate for this job. Be specific and highlight relevant experience.
            </p>
          </div>
          
          <div className="space-y-2">
            <Label>Attachments (Optional)</Label>
            <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition">
              <p className="text-sm font-medium">Drag files here or click to upload</p>
              <p className="text-xs text-muted-foreground">Attach relevant samples or documents (max 5 files)</p>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row sm:justify-between">
          <div className="text-sm mb-4 sm:mb-0">
            <span className="font-medium">D Currency required: </span>
            <span className="text-dwork-purple font-bold">{job.dCurrencyToApply}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button 
              className="bg-dwork-purple hover:bg-dwork-purple-600"
              onClick={handleSubmit}
            >
              Submit Proposal
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobModal;
