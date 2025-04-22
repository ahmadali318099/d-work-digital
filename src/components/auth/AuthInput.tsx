
import React from "react";
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: LucideIcon;
  afterIcon?: LucideIcon;
  onAfterIconClick?: () => void;
};

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  icon: Icon,
  afterIcon: AfterIcon,
  onAfterIconClick,
  className,
  ...inputProps
}) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-dwork-purple">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dwork-purple pointer-events-none">
          <Icon size={20} strokeWidth={1.7}/>
        </span>
        <Input 
          {...inputProps}
          className={`rounded-xl pl-10 pr-10 py-3 shadow focus:shadow-lg transition-all text-base placeholder:text-gray-400 bg-dwork-white border-gray-200 focus:ring-dwork-purple focus:ring-2 ${className || ""}`} 
        />
        {AfterIcon && (
          <button
            type="button"
            tabIndex={-1}
            onClick={onAfterIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dwork-purple/80 transition"
          >
            <AfterIcon size={20}/>
          </button>
        )}
      </div>
    </div>
  );
}
