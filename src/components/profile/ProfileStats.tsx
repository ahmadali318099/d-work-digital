
import React from "react";
import { Star } from "lucide-react";

interface ProfileStatsProps {
  stats: {
    rating: number;
    totalEarned: number;
    hoursWorked: number;
    completionRate: number;
  };
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
        <div className="flex items-center text-amber-600">
          <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
          <span className="text-lg font-bold ml-1">{stats.rating}</span>
        </div>
        <p className="text-sm text-amber-700">Rating</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
        <div className="text-lg font-bold text-dwork-purple">${stats.totalEarned.toLocaleString()}</div>
        <p className="text-sm text-dwork-purple-600">Total Earned</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
        <div className="text-lg font-bold text-blue-700">{stats.hoursWorked.toLocaleString()}</div>
        <p className="text-sm text-blue-600">Hours Worked</p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
        <div className="text-lg font-bold text-green-700">{stats.completionRate}%</div>
        <p className="text-sm text-green-600">Completion Rate</p>
      </div>
    </div>
  );
};

export default ProfileStats;
