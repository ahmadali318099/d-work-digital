
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

interface ClientType {
  name: string;
  location: string;
}

interface MessageClientModalProps {
  client: ClientType;
  isOpen: boolean;
  onClose: () => void;
}

const MessageClientModal: React.FC<MessageClientModalProps> = ({ client, isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const connectsRequired = 5;
  
  const handleSubmit = () => {
    // In a real app, this would send the message and deduct connects
    toast({
      title: "Message Sent",
      description: `You've successfully sent a message to ${client.name} using ${connectsRequired} connects.`,
    });
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Message Client</DialogTitle>
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
        </div>
        
        <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-between">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 sm:mb-0">
            <span className="text-sm text-muted-foreground">
              This will use <span className="font-bold text-dwork-purple">{connectsRequired} connects</span>
            </span>
            <Button 
              className="bg-dwork-purple hover:bg-dwork-purple-600 w-full sm:w-auto"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MessageClientModal;
