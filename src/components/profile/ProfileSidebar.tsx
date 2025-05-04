
import React from "react";
import ProfileCompleteness from "./ProfileCompleteness";
import HourlyRate from "./HourlyRate";
import Languages from "./Languages";

interface ProfileSidebarProps {
  user: {
    profileCompleteness: number;
    hourlyRate: number;
    languages: Array<{
      name: string;
      level: string;
    }>;
  };
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ user }) => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <ProfileCompleteness profileCompleteness={user.profileCompleteness} />
      <HourlyRate hourlyRate={user.hourlyRate} />
      <Languages languages={user.languages} />
    </div>
  );
};

export default ProfileSidebar;
