
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Clock, Star } from "lucide-react";

interface WorkItem {
  id: number;
  title: string;
  client: string;
  completion: string;
  rating: number;
  review: string;
}

interface WorkHistoryProps {
  workHistory: WorkItem[];
}

const WorkHistory: React.FC<WorkHistoryProps> = ({ workHistory }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work History</CardTitle>
        <CardDescription>Completed projects and client feedback</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {workHistory.map((work) => (
            <div key={work.id} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">{work.client}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Completed {work.completion}</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="flex items-center bg-amber-50 text-amber-800 px-2 py-1 rounded">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                  <span className="font-medium">{work.rating}</span>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="italic">{work.review}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkHistory;
