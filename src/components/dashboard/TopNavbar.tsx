
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  HelpCircle,
  Settings,
  User,
  TrendingUp,
  Briefcase,
  MessageSquare,
  CreditCard,
  FileText,
  LogOut,
  Moon,
  Sun,
  ChevronDown,
  LayoutDashboard,
  DollarSign,
  Search,
  Bookmark,
  Wallet,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

const TopNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [connects, setConnects] = useState(30); // Mock user connects data
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOnline, setIsOnline] = useState(true);
  
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `You've switched to ${newTheme} mode.`
    });
  };
  
  return (
    <header className="bg-white py-3 px-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      {/* Logo */}
      <Link to="/find-jobs" className="text-xl font-bold text-dwork-purple flex items-center gap-1">
        <span className="text-dwork-purple">D</span>
        <span className="text-dwork-purple-600">Work</span>
      </Link>
      
      {/* Center Navigation */}
      <nav className="hidden md:flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 mr-1" />
              Jobs
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate('/find-jobs')}>Find Jobs</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/saved-jobs')}>Saved Jobs</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/proposals')}>Proposals</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          variant="ghost" 
          onClick={() => navigate('/messages')}
          className={location.pathname === "/messages" ? "bg-gray-100" : ""}
        >
          <MessageSquare className="h-4 w-4 mr-1" />
          Messages
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 mr-1" />
              Finance
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate('/earnings')}>Earnings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/billing')}>Billing</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          variant="ghost" 
          onClick={() => navigate('/freelancer-dashboard')}
          className={location.pathname === "/freelancer-dashboard" ? "bg-gray-100" : ""}
        >
          <LayoutDashboard className="h-4 w-4 mr-1" />
          Dashboard
        </Button>
      </nav>
      
      {/* Right side actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Icon */}
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Search className="h-5 w-5" />
        </Button>
        
        {/* Connects Wallet */}
        <div className="hidden md:flex items-center gap-2">
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
        
        {/* Help Icon */}
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <HelpCircle className="h-5 w-5" />
        </Button>
        
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
                <span className="font-medium">New job matches</span>
                <span className="text-sm text-muted-foreground">5 new jobs match your profile</span>
                <span className="text-xs text-muted-foreground mt-1">5 minutes ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start cursor-pointer py-3">
                <span className="font-medium">Message from client</span>
                <span className="text-sm text-muted-foreground">Sarah replied to your message about the project timeline</span>
                <span className="text-xs text-muted-foreground mt-1">2 hours ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start cursor-pointer py-3">
                <span className="font-medium">Proposal viewed</span>
                <span className="text-sm text-muted-foreground">A client viewed your proposal for the React Developer position</span>
                <span className="text-xs text-muted-foreground mt-1">1 day ago</span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-center text-dwork-purple">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => navigate('/settings')}>
          <Settings className="h-5 w-5" />
        </Button>

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
          <DropdownMenuContent align="end" className="w-64">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <span className="font-semibold">Alex Johnson</span>
                  <span className="text-sm text-muted-foreground">Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground mr-1">Online</span>
                  <Switch 
                    checked={isOnline} 
                    onCheckedChange={setIsOnline} 
                    className="data-[state=checked]:bg-green-500" 
                  />
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Available for work: {isOnline ? "Yes" : "No"}
              </div>
            </div>
            
            <DropdownMenuItem onClick={() => navigate('/profile')} className="py-2.5">
              <User className="h-4 w-4 mr-3" /> Your Profile
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/stats')} className="py-2.5">
              <TrendingUp className="h-4 w-4 mr-3" /> Stats & Trends
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/membership')} className="py-2.5">
              <Badge className="h-4 w-4 mr-3" /> Membership Plan
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/connects-history')} className="py-2.5">
              <Wallet className="h-4 w-4 mr-3" /> Connects
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/saved-jobs')} className="py-2.5">
              <Bookmark className="h-4 w-4 mr-3" /> Saved Jobs
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={toggleTheme} className="py-2.5">
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4 mr-3" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4 mr-3" /> Light Mode
                </>
              )}
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/settings')} className="py-2.5">
              <Settings className="h-4 w-4 mr-3" /> Account Settings
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 py-2.5">
              <LogOut className="h-4 w-4 mr-3" /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopNavbar;
