
import React from "react";
import { useNavigate } from "react-router-dom";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Settings, FileText, Clock, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const Apps: React.FC = () => {
  const navigate = useNavigate();
  
  const handleInstall = (appName: string) => {
    toast({
      title: "Installing app",
      description: `${appName} is being installed to your account.`
    });
  };
  
  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Apps & Offers</h1>
          <p className="text-muted-foreground mt-1">
            Enhance your freelancing experience with apps and exclusive offers
          </p>
        </div>
        
        <Tabs defaultValue="apps" className="w-full">
          <TabsList>
            <TabsTrigger value="apps">Marketplace Apps</TabsTrigger>
            <TabsTrigger value="installed">Installed Apps</TabsTrigger>
            <TabsTrigger value="offers">Special Offers</TabsTrigger>
          </TabsList>
          
          {/* Apps Marketplace Tab */}
          <TabsContent value="apps" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Time Tracker App */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md mr-3">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Time Tracker</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">Free</Badge>
                  </div>
                  <CardDescription className="mt-1">
                    Track work hours and billable time automatically
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatically track your work hours, take screenshots, and generate detailed reports for your clients.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">5.0</span> ★★★★★ (128 reviews)
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleInstall("Time Tracker")} 
                      className="bg-dwork-purple hover:bg-dwork-purple-600"
                    >
                      Install
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Proposal Generator */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded-md mr-3">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle>Proposal Generator</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">Premium</Badge>
                  </div>
                  <CardDescription className="mt-1">
                    Create winning proposals with AI-powered templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-powered tool that helps you create professional proposals in minutes. Includes templates for different industries.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">4.8</span> ★★★★★ (96 reviews)
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleInstall("Proposal Generator")} 
                      className="bg-dwork-purple hover:bg-dwork-purple-600"
                    >
                      $4.99/month
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Chatbot Assistant */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-md mr-3">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Chatbot Assistant</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">Premium</Badge>
                  </div>
                  <CardDescription className="mt-1">
                    AI assistant for client communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let AI handle routine client queries. Set up automated responses and get suggested replies during conversations.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">4.6</span> ★★★★★ (72 reviews)
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleInstall("Chatbot Assistant")} 
                      className="bg-dwork-purple hover:bg-dwork-purple-600"
                    >
                      $7.99/month
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Installed Apps Tab */}
          <TabsContent value="installed" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Installed Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  <div className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md mr-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Time Tracker</h3>
                        <p className="text-sm text-muted-foreground">Installed on May 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Configure
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Uninstall
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Empty state for when no apps are installed */}
                {false && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">You haven't installed any apps yet.</p>
                    <Button className="mt-4 bg-dwork-purple hover:bg-dwork-purple-600">
                      Browse Marketplace
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Special Offers Tab */}
          <TabsContent value="offers" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Special offer for software */}
              <Card>
                <CardHeader className="bg-gradient-to-r from-dwork-purple to-dwork-purple-600 text-white">
                  <Badge className="bg-white text-dwork-purple w-fit">Limited Time</Badge>
                  <CardTitle className="mt-2">50% Off Adobe Creative Cloud</CardTitle>
                  <CardDescription className="text-white/80">
                    For D Work freelancers only
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Get 50% off your first 6 months of Adobe Creative Cloud. Perfect for designers and creative professionals.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      Expires: June 15, 2025
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => window.open('https://adobe.com', '_blank')}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Claim Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Special offer for courses */}
              <Card>
                <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">
                  <Badge className="bg-white text-amber-600 w-fit">D Work Exclusive</Badge>
                  <CardTitle className="mt-2">Free Access to Frontend Masters</CardTitle>
                  <CardDescription className="text-white/80">
                    For Premium members
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Premium members get 3 months of free access to Frontend Masters courses. Level up your development skills!
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      Premium members only
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-amber-500 text-amber-600 hover:bg-amber-50"
                      onClick={() => navigate('/membership')}
                    >
                      Upgrade to Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
};

export default Apps;
