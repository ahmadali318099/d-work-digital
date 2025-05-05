
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Calendar, 
  FileText, 
  CheckCircle, 
  MessageSquare, 
  Upload, 
  Download, 
  Paperclip,
  ChevronRight,
  User,
  DollarSign
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const JobProgress: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [deliveryMessage, setDeliveryMessage] = useState("");
  
  // Sample data - in a real app, this would come from an API based on the id
  const job = {
    id: Number(id),
    title: "Mobile App UI Design",
    client: {
      name: "Alex Johnson",
      company: "TechInnovate",
      avatar: "https://github.com/shadcn.png"
    },
    startDate: "Apr 10, 2025",
    deadline: "Apr 25, 2025",
    budget: "$1,200",
    progress: 65,
    status: "In Progress",
    description: "Design a modern and intuitive user interface for a mobile application focused on fitness tracking. The app should include dashboard, workout tracking, nutrition logging, and social sharing features. The design should be clean, minimalist, and follow the latest mobile UI/UX trends.",
    requirements: [
      "Create wireframes for all main screens",
      "Design high-fidelity mockups in Figma",
      "Prepare assets for development in multiple resolutions",
      "Provide design documentation"
    ],
    milestones: [
      { name: "Project Started", completed: true, date: "Apr 10, 2025" },
      { name: "Requirements Review", completed: true, date: "Apr 12, 2025" },
      { name: "Wireframes Delivery", completed: true, date: "Apr 15, 2025" },
      { name: "UI Design First Draft", completed: false, date: "Apr 20, 2025" },
      { name: "Final Delivery", completed: false, date: "Apr 25, 2025" }
    ],
    messages: [
      { 
        sender: "client", 
        text: "Hi there! I'm looking forward to seeing your design concepts for the fitness app.", 
        timestamp: "Apr 10, 2025 10:30 AM"
      },
      { 
        sender: "freelancer", 
        text: "Thanks for hiring me! I've reviewed all requirements and will start working on wireframes today.", 
        timestamp: "Apr 10, 2025 11:45 AM" 
      },
      { 
        sender: "client", 
        text: "Great! Let me know if you need any clarification on the requirements.", 
        timestamp: "Apr 10, 2025 12:15 PM" 
      },
      { 
        sender: "freelancer", 
        text: "I've completed the wireframes and uploaded them for your review. Please let me know your thoughts!", 
        timestamp: "Apr 15, 2025 3:20 PM",
        attachment: "wireframes.pdf"
      },
      { 
        sender: "client", 
        text: "The wireframes look fantastic! I especially like the layout for the dashboard. Could we make the workout tracking screen a bit more intuitive?", 
        timestamp: "Apr 16, 2025 9:30 AM" 
      }
    ],
    deliveries: [
      {
        id: 1,
        title: "Initial Wireframes",
        date: "Apr 15, 2025",
        files: ["wireframes_v1.pdf"],
        message: "Here are the initial wireframes for all main screens as requested. I've focused on creating an intuitive flow between screens.",
        status: "Approved"
      }
    ]
  };

  // Calculate days remaining until deadline
  const calculateDaysRemaining = () => {
    const deadlineDate = new Date(job.deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysRemaining();

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  // Handle file remove
  const handleRemoveFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  // Handle delivery submission
  const handleSubmitDelivery = () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "Error",
        description: "Please upload at least one file for delivery",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Delivery Submitted",
      description: "Your work has been submitted to the client for review"
    });
    
    // In a real app, you would send the files and message to an API
    setUploadedFiles([]);
    setDeliveryMessage("");
  };

  // Handle sending a message
  const [newMessage, setNewMessage] = useState("");
  
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the client"
    });
    
    // In a real app, you would send the message to an API and update the messages list
    setNewMessage("");
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Job Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link to="/my-jobs" className="hover:text-dwork-purple">My Jobs</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Job Details</span>
            </div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge className={`
                ${job.status === "In Progress" ? "bg-blue-500 hover:bg-blue-600" : 
                  job.status === "Completed" ? "bg-green-500 hover:bg-green-600" : 
                  "bg-red-500 hover:bg-red-600"}
              `}>
                {job.status}
              </Badge>
              <Badge variant="outline" className="bg-dwork-purple/10 text-dwork-purple">
                {job.budget}
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link to="/messages">
                <MessageSquare className="h-4 w-4" />
                Message Client
              </Link>
            </Button>
            {job.status === "In Progress" && (
              <Button 
                className="bg-dwork-purple hover:bg-dwork-purple-600 flex items-center gap-2"
                onClick={() => document.getElementById("delivery-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Upload className="h-4 w-4" />
                Submit Delivery
              </Button>
            )}
          </div>
        </div>

        {/* Job Overview Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Job Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Job Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{job.description}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Requirements</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Timeline</h3>
                <div className="space-y-3">
                  {job.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        milestone.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}>
                        {milestone.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{milestone.name}</span>
                          <span className="text-xs text-muted-foreground">{milestone.date}</span>
                        </div>
                        {index < job.milestones.length - 1 && (
                          <div className="ml-3 mt-1 mb-1 w-0.5 h-4 bg-gray-200"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Client Info & Progress */}
            <div className="space-y-6">
              {/* Client Information */}
              <div>
                <h3 className="font-medium mb-3">Client Information</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={job.client.avatar} />
                    <AvatarFallback>
                      {job.client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{job.client.name}</p>
                    <p className="text-xs text-muted-foreground">{job.client.company}</p>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="font-medium">Project Details</h3>
                
                <div className="flex items-center gap-3">
                  <div className="bg-dwork-purple/10 p-2 rounded-md">
                    <Calendar className="h-4 w-4 text-dwork-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Start Date</p>
                    <p className="text-sm font-medium">{job.startDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-dwork-purple/10 p-2 rounded-md">
                    <Clock className="h-4 w-4 text-dwork-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Deadline</p>
                    <p className="text-sm font-medium">{job.deadline}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-dwork-purple/10 p-2 rounded-md">
                    <DollarSign className="h-4 w-4 text-dwork-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p className="text-sm font-medium">{job.budget}</p>
                  </div>
                </div>
              </div>
              
              {/* Progress */}
              {job.status === "In Progress" && (
                <div>
                  <h3 className="font-medium mb-3">Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
                      <span>{job.progress}%</span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mt-3 flex items-center gap-3">
                      <Clock className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">
                          {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
                        </p>
                        <p className="text-xs text-amber-700">
                          Project due on {job.deadline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs for Deliveries and Messages */}
        <Tabs defaultValue="deliveries" className="w-full">
          <TabsList className="mb-6 grid grid-cols-2 w-full md:w-96">
            <TabsTrigger value="deliveries" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Deliveries
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
          </TabsList>
          
          {/* Deliveries Tab */}
          <TabsContent value="deliveries" className="space-y-6">
            {/* Past Deliveries */}
            {job.deliveries.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Past Deliveries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {job.deliveries.map((delivery) => (
                    <div key={delivery.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{delivery.title}</h4>
                          <p className="text-xs text-muted-foreground">Delivered on {delivery.date}</p>
                        </div>
                        <Badge className={`
                          ${delivery.status === "Approved" ? "bg-green-500 hover:bg-green-600" : 
                            delivery.status === "Rejected" ? "bg-red-500 hover:bg-red-600" : 
                            "bg-yellow-500 hover:bg-yellow-600"}
                        `}>
                          {delivery.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{delivery.message}</p>
                      <div className="flex flex-wrap gap-2">
                        {delivery.files.map((file, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-md p-2 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-dwork-purple" />
                            <span className="text-sm">{file}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
            
            {/* Submit New Delivery */}
            {job.status === "In Progress" && (
              <Card id="delivery-section">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Submit New Delivery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="space-y-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-dwork-purple/10 flex items-center justify-center">
                        <Upload className="h-6 w-6 text-dwork-purple" />
                      </div>
                      <h3 className="text-lg font-medium">Upload Files</h3>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here or click to browse
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-2"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        Select Files
                      </Button>
                    </div>
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium">Selected Files</h4>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-dwork-purple" />
                            <span className="text-sm">{file.name}</span>
                            <span className="text-xs text-muted-foreground">
                              ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleRemoveFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Message to Client</h4>
                    <Textarea
                      placeholder="Describe what you're delivering and any specific instructions for the client..."
                      className="min-h-32"
                      value={deliveryMessage}
                      onChange={(e) => setDeliveryMessage(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    className="bg-dwork-purple hover:bg-dwork-purple-600"
                    onClick={handleSubmitDelivery}
                  >
                    Submit Delivery
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
          
          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 max-h-96 overflow-y-auto mb-4">
                  {job.messages.map((message, index) => (
                    <div 
                      key={index}
                      className={`flex ${message.sender === 'freelancer' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'client' && (
                        <Avatar className="h-8 w-8 mr-2 self-end mb-1">
                          <AvatarImage src={job.client.avatar} />
                          <AvatarFallback>{job.client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'freelancer'
                          ? 'bg-dwork-purple text-white'
                          : 'bg-gray-100'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        {message.attachment && (
                          <div className={`flex items-center gap-2 mt-2 p-2 rounded ${
                            message.sender === 'freelancer' ? 'bg-dwork-purple-600/60' : 'bg-white border border-gray-200'
                          }`}>
                            <Paperclip className="h-3 w-3" />
                            <span className="text-xs">{message.attachment}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className={`h-5 w-5 ${message.sender === 'freelancer' ? 'text-white' : 'text-dwork-purple'}`}
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                        <p className={`text-xs mt-1 ${
                          message.sender === 'freelancer' ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                      
                      {message.sender === 'freelancer' && (
                        <Avatar className="h-8 w-8 ml-2 self-end mb-1">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => document.getElementById("message-file-upload")?.click()}
                  >
                    <input
                      type="file"
                      id="message-file-upload"
                      className="hidden"
                    />
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-10 flex-1 resize-none"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    className="bg-dwork-purple hover:bg-dwork-purple-600" 
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ""}
                  >
                    <SendIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
};

// Send icon component
const SendIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

const X = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

export default JobProgress;
