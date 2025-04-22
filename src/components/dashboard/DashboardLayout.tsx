
import React, { useState } from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationSidebar } from "./NavigationSidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

type DashboardLayoutProps = {
  children: React.ReactNode;
  userType: "freelancer" | "client";
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate("/");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white py-3 px-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Logo */}
          <div className="text-xl font-bold text-dwork-purple flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
            <span className="text-dwork-purple">D</span>
            <span className="text-dwork-purple-600">Work</span>
          </div>
          
          {/* Desktop search */}
          <div className="hidden md:flex relative ml-8">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-md w-64 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dwork-purple/20"
            />
          </div>
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                <DropdownMenuItem className="flex flex-col items-start cursor-pointer py-3">
                  <span className="font-medium">New proposal received</span>
                  <span className="text-sm text-muted-foreground">Alex Johnson submitted a proposal for your project</span>
                  <span className="text-xs text-muted-foreground mt-1">5 minutes ago</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start cursor-pointer py-3">
                  <span className="font-medium">Message from client</span>
                  <span className="text-sm text-muted-foreground">Sarah replied to your message about the project timeline</span>
                  <span className="text-xs text-muted-foreground mt-1">2 hours ago</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-center text-dwork-purple">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-1">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <NavigationSidebar userType={userType} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Main content */}
        <main className={`flex-1 transition-all duration-300 px-4 md:px-6 py-6 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
