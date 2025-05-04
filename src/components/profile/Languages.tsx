
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Language {
  name: string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {languages.map((language, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">{language.name}</span>
                <span className="text-sm text-muted-foreground">{language.level}</span>
              </div>
              <Progress value={language.level.includes("Native") ? 100 : 65} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Languages;
