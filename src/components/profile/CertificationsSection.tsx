
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, CheckCircle } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Certifications</CardTitle>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-dwork-purple" />
              </div>
              <div>
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer}, {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
