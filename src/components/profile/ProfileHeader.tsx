
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Camera, 
  Edit, 
  MapPin, 
  ThumbsUp,
  Eye, 
  BookmarkIcon
} from "lucide-react";

interface ProfileHeaderProps {
  user: {
    name: string;
    title: string;
    location: string;
    avatar: string;
    verified: boolean;
    stats: {
      profileViews: number;
      savedByClients: number;
    }
  };
  isProfilePublic: boolean;
  setIsProfilePublic: (value: boolean) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ 
  user, 
  isProfilePublic, 
  setIsProfilePublic 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Avatar and basic info */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-dwork-purple/20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-white"></div>
          <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-dwork-purple hover:bg-dwork-purple-600">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            {user.verified && (
              <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
            )}
          </div>
          <p className="text-xl text-dwork-purple font-medium">{user.title}</p>
          <div className="flex items-center mt-1 text-sm text-muted-foreground justify-center md:justify-start">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{user.location}</span>
          </div>
        </div>
      </div>
      
      {/* This div intentionally left empty to maintain layout structure */}
      <div className="flex-1"></div>
    </div>
  );
};

export default ProfileHeader;
