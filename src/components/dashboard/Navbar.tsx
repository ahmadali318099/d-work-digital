
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Badge } from "@/components/ui/badge";
import { Bell, User, Settings, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [connects, setConnects] = useState(30); // Mock user connects data
  
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate("/");
  };

  const openBuyConnectsModal = () => {
    // This would open the connects modal in a real app
    toast({
      title: "Buy Connects",
      description: "This feature is coming soon."
    });
  };
  
  return (
    <header className="bg-white py-3 px-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      {/* Logo */}
      <Link to="/find-jobs" className="text-xl font-bold text-dwork-purple flex items-center gap-1">
        <span className="text-dwork-purple">D</span>
        <span className="text-dwork-purple-600">Work</span>
      </Link>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-2">
        <Link to="/find-jobs">
          <Button 
            variant={location.pathname === "/find-jobs" ? "default" : "ghost"}
            className={location.pathname === "/find-jobs" ? "bg-dwork-purple hover:bg-dwork-purple-600" : ""}
          >
            Find Jobs
          </Button>
        </Link>
        <Link to="/proposals">
          <Button 
            variant={location.pathname === "/proposals" ? "default" : "ghost"}
            className={location.pathname === "/proposals" ? "bg-dwork-purple hover:bg-dwork-purple-600" : ""}
          >
            Proposals
          </Button>
        </Link>
        <Link to="/messages">
          <Button 
            variant={location.pathname === "/messages" ? "default" : "ghost"}
            className={location.pathname === "/messages" ? "bg-dwork-purple hover:bg-dwork-purple-600" : ""}
          >
            Messages
          </Button>
        </Link>
      </nav>
      
      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* Connects Wallet */}
        <div className="hidden md:flex items-center gap-2 mr-2">
          <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium text-gray-700 mr-1">Connects:</span>
            <span className="text-sm font-bold text-dwork-purple">{connects}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={openBuyConnectsModal}
            className="text-sm border-dwork-purple text-dwork-purple hover:bg-dwork-purple/10"
          >
            Buy More
          </Button>
        </div>
        
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
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
            <Button variant="ghost" className="flex items-center gap-2 rounded-full h-10 w-10 p-0">
              <Avatar className="h-10 w-10 border-2 border-dwork-purple/20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center p-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-xs text-muted-foreground">alex@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              <User className="h-4 w-4 mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="h-4 w-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
