
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface WorkItem {
  id: number;
  title: string;
  client: string;
  completion: string;
  rating: number;
  review: string;
}

interface RecentWorkProps {
  workHistory: WorkItem[];
}

const RecentWork: React.FC<RecentWorkProps> = ({ workHistory }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Work & Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workHistory.slice(0, 2).map((work) => (
            <div key={work.id} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{work.title}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="ml-1 font-medium">{work.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{work.client} | {work.completion}</p>
              <p className="text-sm italic">"{work.review}"</p>
            </div>
          ))}
          
          <div className="text-center">
            <Button variant="outline">View All Reviews</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWork;
