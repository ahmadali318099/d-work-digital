
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Camera, Edit, MapPin, Star, ThumbsUp, Briefcase, CheckCircle, Clock } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample user data
  const user = {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    location: "New York, USA",
    avatar: "https://github.com/shadcn.png",
    hourlyRate: 45,
    joinedDate: "January 2021",
    bio: "Experienced full stack developer specializing in React, Node.js, and cloud solutions. I've worked with clients ranging from startups to enterprise companies, delivering scalable and robust applications.",
    rating: 4.9,
    completionRate: 98,
    totalEarned: 54250,
    hoursWorked: 1240,
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
    ]
  };

  return (
    <DashboardLayout userType="freelancer">
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar and basic info */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="relative">
                  <Avatar className="h-32 w-32 border-4 border-dwork-purple/20">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-dwork-purple hover:bg-dwork-purple-600">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.title}</p>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground justify-center md:justify-start">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col justify-center items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-5 w-5 fill-amber-500" />
                    <span className="text-lg font-bold ml-1">{user.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold text-dwork-purple">${user.totalEarned.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Total Earned</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold">{user.hoursWorked.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Hours Worked</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{user.completionRate}%</div>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-end">
              <Button variant="outline">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Recommend
              </Button>
              <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" onValueChange={setActiveTab}>
          <TabsList className="w-full border-b rounded-none justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="work">Work History</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="skills">Skills & Education</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* About */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{user.bio}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Top Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.slice(0, 6).map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Hourly Rate</span>
                    <span className="font-semibold">${user.hourlyRate}/hr</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-semibold">{user.joinedDate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Last Active</span>
                    <span className="font-semibold">Online Now</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Languages</span>
                    <div className="text-right">
                      {user.languages.map((lang, index) => (
                        <div key={index} className="font-semibold">
                          {lang.name} <span className="text-xs text-muted-foreground">({lang.level})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reviews */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {user.workHistory.slice(0, 2).map((work) => (
                      <div key={work.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{work.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                            <span className="ml-1 font-medium">{work.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{work.client} | {work.completion}</p>
                        <p className="text-sm italic">"{work.review}"</p>
                      </div>
                    ))}
                    
                    <div className="text-center">
                      <Button variant="outline">View All Reviews</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Work History Tab */}
          <TabsContent value="work" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Work History</CardTitle>
                <CardDescription>Completed projects and client feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {user.workHistory.map((work) => (
                    <div key={work.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{work.title}</h3>
                          <p className="text-sm text-muted-foreground">{work.client}</p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Completed {work.completion}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center bg-amber-50 text-amber-800 px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                          <span className="font-medium">{work.rating}</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="italic">{work.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>Your work samples and projects</CardDescription>
                </div>
                <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Empty state since we don't have actual portfolio items */}
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <Briefcase className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="font-semibold text-lg mb-1">No portfolio items yet</h3>
                    <p className="text-muted-foreground mb-4">Add your best work to showcase your skills to potential clients</p>
                    <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
                      Add Your First Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills & Education Tab */}
          <TabsContent value="skills" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Skills */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Skills</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="py-1.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Language */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Languages</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.languages.map((language, index) => (
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

              {/* Education */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Education</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.education.map((edu, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-dwork-purple" />
                        </div>
                        <div>
                          <p className="font-medium">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">{edu.school}, {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
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
                    {user.certifications.map((cert, index) => (
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
