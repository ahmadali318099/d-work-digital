
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

interface ProfileCompletenessProps {
  profileCompleteness: number;
}

const ProfileCompleteness: React.FC<ProfileCompletenessProps> = ({ 
  profileCompleteness 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Completeness</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={profileCompleteness} className="h-2" />
          <p className="text-sm text-center font-medium">
            {profileCompleteness}% - {profileCompleteness < 100 ? "Almost there!" : "Complete!"}
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Profile picture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Skills added</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gray-300" />
              <span className="text-sm text-muted-foreground">Portfolio (3+ items)</span>
            </div>
          </div>
          <Button className="w-full bg-dwork-purple hover:bg-dwork-purple-600">
            Complete Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCompleteness;
