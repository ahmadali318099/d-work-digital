
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon, Linkedin, Mail } from "lucide-react";

type Props = {
  provider: "google" | "linkedin";
};

const icons: Record<Props["provider"], LucideIcon> = {
  google: Mail,
  linkedin: Linkedin,
};

const labels: Record<Props["provider"], string> = {
  google: "Google",
  linkedin: "LinkedIn",
};

export const SocialLoginButton: React.FC<Props> = ({ provider }) => {
  // Get the correct icon component based on provider
  const IconComponent = icons[provider];
  
  return (
    <Button className="flex-1 justify-center gap-2 bg-white border border-gray-200 text-dwork-purple font-medium rounded-xl py-3 shadow hover:bg-dwork-purple/10 hover:shadow-md transition hover-scale" variant="outline" type="button">
      <span>
        <IconComponent size={18} className="text-dwork-purple" />
      </span>
      Continue with {labels[provider]}
    </Button>
  );
};
