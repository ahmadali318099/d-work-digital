
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutMeProps {
  bio: string;
  skills: string[];
}

const AboutMe: React.FC<AboutMeProps> = ({ bio, skills }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>{bio}</p>
          
          <div className="pt-4">
            <h4 className="font-semibold mb-2">Top Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 8).map((skill, index) => (
                <Badge key={index} variant="secondary" className="py-1.5">
                  {skill}
                </Badge>
              ))}
              {skills.length > 8 && (
                <Badge variant="outline" className="py-1.5">
                  +{skills.length - 8} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
