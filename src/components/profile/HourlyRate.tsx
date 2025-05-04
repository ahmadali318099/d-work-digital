
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, X, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface HourlyRateProps {
  hourlyRate: number;
}

const HourlyRate: React.FC<HourlyRateProps> = ({ hourlyRate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [rate, setRate] = useState(hourlyRate);
  const [tempRate, setTempRate] = useState(hourlyRate);

  const handleEdit = () => {
    setIsEditing(true);
    setTempRate(rate);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempRate(rate);
  };

  const handleSave = () => {
    // Validate the input
    const newRate = Number(tempRate);
    if (isNaN(newRate) || newRate <= 0) {
      toast({
        title: "Invalid rate",
        description: "Please enter a valid hourly rate greater than 0",
        variant: "destructive",
      });
      return;
    }
    
    setRate(newRate);
    setIsEditing(false);
    toast({
      title: "Hourly rate updated",
      description: `Your hourly rate has been updated to $${newRate}`,
    });
    
    // In a real app, you would make an API call here to update the rate in the database
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Hourly Rate</CardTitle>
        {!isEditing && (
          <Button variant="ghost" size="icon" onClick={handleEdit} className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-medium mr-2">$</span>
              <Input
                type="number"
                value={tempRate}
                onChange={(e) => setTempRate(Number(e.target.value))}
                className="w-24 text-xl"
                min="0"
                step="0.01"
                autoFocus
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave} className="bg-dwork-purple hover:bg-dwork-purple-600">
                <Check className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-3xl font-bold text-dwork-purple">${rate}</p>
            <p className="text-sm text-muted-foreground">per hour</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HourlyRate;
