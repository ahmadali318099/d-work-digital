
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AboutMe from "./AboutMe";
import RecentWork from "./RecentWork";
import WorkHistory from "./WorkHistory";
import Portfolio from "./Portfolio";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  user: {
    bio: string;
    skills: string[];
    workHistory: Array<{
      id: number;
      title: string;
      client: string;
      completion: string;
      rating: number;
      review: string;
    }>;
    portfolio: any[];
    education: Array<{
      degree: string;
      school: string;
      year: string;
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
  };
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, setActiveTab, user }) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full border-b rounded-none justify-start">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="work">Work History</TabsTrigger>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="skills">Skills & Education</TabsTrigger>
      </TabsList>
      
      {/* Overview Tab */}
      <TabsContent value="overview" className="mt-6 space-y-6">
        <AboutMe bio={user.bio} skills={user.skills} />
        <RecentWork workHistory={user.workHistory} />
      </TabsContent>

      {/* Work History Tab */}
      <TabsContent value="work" className="mt-6">
        <WorkHistory workHistory={user.workHistory} />
      </TabsContent>

      {/* Portfolio Tab */}
      <TabsContent value="portfolio" className="mt-6">
        <Portfolio portfolio={user.portfolio} />
      </TabsContent>

      {/* Skills & Education Tab */}
      <TabsContent value="skills" className="mt-6 space-y-6">
        <SkillsSection skills={user.skills} />
        <EducationSection education={user.education} />
        <CertificationsSection certifications={user.certifications} />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
