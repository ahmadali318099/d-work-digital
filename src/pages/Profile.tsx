
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

// Import refactored components
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileTabs from "@/components/profile/ProfileTabs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isProfilePublic, setIsProfilePublic] = useState(true);

  // Sample user data
  const user = {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    location: "New York, USA",
    avatar: "https://github.com/shadcn.png",
    hourlyRate: 45,
    joinedDate: "January 2021",
    profileCompleteness: 85,
    bio: "Experienced full stack developer specializing in React, Node.js, and cloud solutions. I've worked with clients ranging from startups to enterprise companies, delivering scalable and robust applications.",
    stats: {
      rating: 4.9,
      completionRate: 98,
      totalEarned: 54250,
      hoursWorked: 1240,
      profileViews: 356,
      savedByClients: 27
    },
    available: true,
    verified: true,
    skills: [
      "JavaScript", "React", "Node.js", "TypeScript", "AWS", "MongoDB", "Express", "GraphQL", "Next.js", 
      "SQL", "Docker", "UI/UX Design", "Redux", "React Native"
    ],
    languages: [
      { name: "English", level: "Native or Bilingual" },
      { name: "Spanish", level: "Conversational" }
    ],
    education: [
      { degree: "Bachelor of Science in Computer Science", school: "NYU", year: "2015-2019" }
    ],
    certifications: [
      { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2021" },
      { name: "MongoDB Certified Developer", issuer: "MongoDB", year: "2020" }
    ],
    workHistory: [
      { 
        id: 1,
        title: "E-commerce Platform Development", 
        client: "RetailTech Inc", 
        completion: "Mar 2023", 
        rating: 5.0, 
        review: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. Communication was excellent throughout the project."
      },
      { 
        id: 2,
        title: "CRM System Integration", 
        client: "ServiceHub", 
        completion: "Dec 2022", 
        rating: 4.8, 
        review: "Great work integrating our CRM with other business systems. Alex's expertise saved us a lot of time and effort."
      },
      { 
        id: 3,
        title: "Mobile App Development", 
        client: "HealthTrack", 
        completion: "Aug 2022", 
        rating: 5.0, 
        review: "Excellent work on our health tracking app. Alex delivered a polished product on time and was very responsive to feedback."
      }
    ],
    portfolio: []
  };

  return (
    <NewDashboardLayout>
      <div className="space-y-6">
        {/* Profile Header Card */}
        <Card>
          <CardContent className="p-6">
            <ProfileHeader 
              user={user} 
              isProfilePublic={isProfilePublic}
              setIsProfilePublic={setIsProfilePublic}
            />
            
            <ProfileStats stats={user.stats} />
            
            <ProfileActions
              isProfilePublic={isProfilePublic}
              setIsProfilePublic={setIsProfilePublic}
              stats={{
                profileViews: user.stats.profileViews,
                savedByClients: user.stats.savedByClients
              }}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <ProfileSidebar user={user} />
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProfileTabs 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              user={user}
            />
          </div>
        </div>
      </div>
    </NewDashboardLayout>
  );
};

export default Profile;
