
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, CheckCircle } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Education</CardTitle>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-dwork-purple" />
              </div>
              <div>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.school}, {edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
