
import React from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Users, 
  MessageSquare, 
  CreditCard, 
  User, 
  Home, 
  X,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationSidebarProps {
  userType: "freelancer" | "client";
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ 
  userType, 
  isOpen, 
  setIsOpen 
}) => {
  // Define different menu items based on user type
  const freelancerMenuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/freelancer-dashboard" },
    { icon: <FileText size={18} />, label: "Find Jobs", href: "#" },
    { icon: <MessageSquare size={18} />, label: "Messages", href: "#", badge: 3 },
    { icon: <FileText size={18} />, label: "Proposals", href: "#" },
    { icon: <CreditCard size={18} />, label: "Earnings", href: "#" },
    { icon: <User size={18} />, label: "Profile", href: "#" },
    { icon: <Settings size={18} />, label: "Settings", href: "#" },
  ];

  const clientMenuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/client-dashboard" },
    { icon: <PlusCircle size={18} />, label: "Post a Job", href: "#" },
    { icon: <FileText size={18} />, label: "My Jobs", href: "#" },
    { icon: <Users size={18} />, label: "Freelancers", href: "#" },
    { icon: <MessageSquare size={18} />, label: "Messages", href: "#", badge: 5 },
    { icon: <CreditCard size={18} />, label: "Billing", href: "#" },
    { icon: <Settings size={18} />, label: "Settings", href: "#" },
  ];

  const menuItems = userType === "freelancer" ? freelancerMenuItems : clientMenuItems;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 md:z-0 h-full w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-0"}
          md:mt-[57px] md:h-[calc(100vh-57px)]
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 md:hidden">
          <div className="text-xl font-bold text-dwork-purple">D<span className="text-dwork-purple-600">Work</span></div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <Button className="w-full bg-dwork-purple hover:bg-dwork-purple-600">
            {userType === "freelancer" ? "Create Proposal" : "Post a Job"}
          </Button>
        </div>
        
        <nav className="p-2 space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium 
                hover:bg-gray-100 transition-colors group
                ${item.href === (userType === "freelancer" ? "/freelancer-dashboard" : "/client-dashboard") 
                  ? "bg-dwork-purple/10 text-dwork-purple" 
                  : "text-gray-700"}
              `}
            >
              <span className="text-gray-500 group-hover:text-dwork-purple">
                {item.icon}
              </span>
              {item.label}
              {item.badge && (
                <span className="ml-auto bg-dwork-purple text-white text-xs py-0.5 px-1.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
            <Home size={18} className="text-gray-500" />
            Back to Home
          </a>
        </div>
      </aside>
    </>
  );
};
