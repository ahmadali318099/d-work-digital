
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface HourlyRateProps {
  hourlyRate: number;
}

const HourlyRate: React.FC<HourlyRateProps> = ({ hourlyRate }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hourly Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-3xl font-bold text-dwork-purple">${hourlyRate}</p>
          <p className="text-sm text-muted-foreground">per hour</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyRate;
