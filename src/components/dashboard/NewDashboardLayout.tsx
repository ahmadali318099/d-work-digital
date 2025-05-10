
import React from "react";
import TopNavbar from "./TopNavbar";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

type NewDashboardLayoutProps = {
  children: React.ReactNode;
};

const NewDashboardLayout: React.FC<NewDashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const dCurrencyBalance = 30; // In a real app, this would come from an API
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <TopNavbar />
      
      {/* D Currency balance banner */}
      <div className="bg-dwork-purple text-white py-2 px-4 fixed w-full z-10 top-[57px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="text-sm font-medium">D Currency Balance: <strong>{dCurrencyBalance}</strong></span>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-dwork-purple"
            onClick={() => navigate("/dcurrency-history")}
          >
            Buy More
          </Button>
        </div>
      </div>
      
      {/* Main content - adjusted for the D Currency banner */}
      <main className="flex-1 px-4 md:px-6 py-6 mt-[95px]">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default NewDashboardLayout;
