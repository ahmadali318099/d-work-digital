
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

interface PortfolioProps {
  portfolio: any[]; // Using 'any' for simplicity, but ideally would be typed properly
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Portfolio</CardTitle>
          <CardDescription>Your work samples and projects</CardDescription>
        </div>
        <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
          Add Project
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolio.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <Briefcase className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-1">Showcase your best work</h3>
              <p className="text-muted-foreground mb-4">Adding portfolio items increases your chances of getting hired by 50%</p>
              <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
                Add Your First Project
              </Button>
            </div>
          ) : (
            portfolio.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                {item.title}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
