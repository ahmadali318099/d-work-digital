
import React from "react";
import Navbar from "./Navbar";

type NewDashboardLayoutProps = {
  children: React.ReactNode;
};

const NewDashboardLayout: React.FC<NewDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1 px-4 md:px-6 py-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default NewDashboardLayout;
