
import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Edit, ThumbsUp, Eye, BookmarkIcon } from "lucide-react";

interface ProfileActionsProps {
  isProfilePublic: boolean;
  setIsProfilePublic: (value: boolean) => void;
  stats: {
    profileViews: number;
    savedByClients: number;
  };
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ 
  isProfilePublic, 
  setIsProfilePublic,
  stats 
}) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span>{stats.profileViews} profile views</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <BookmarkIcon className="h-4 w-4" />
          <span>Saved by {stats.savedByClients} clients</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-muted-foreground">Profile visibility:</span>
          <div className="flex items-center gap-1">
            <Switch 
              checked={isProfilePublic} 
              onCheckedChange={setIsProfilePublic} 
              id="public-profile"
            />
            <span className={isProfilePublic ? "font-medium text-green-600" : "font-medium text-gray-500"}>
              {isProfilePublic ? "Public" : "Private"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Recommend
        </Button>
        <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileActions;
