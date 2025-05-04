
import React, { useState } from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { 
  Camera, 
  Edit, 
  MapPin, 
  Star, 
  ThumbsUp, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  Eye, 
  BookmarkIcon
} from "lucide-react";

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
              
              {/* Stats */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
                  <div className="flex items-center text-amber-600">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <span className="text-lg font-bold ml-1">{user.stats.rating}</span>
                  </div>
                  <p className="text-sm text-amber-700">Rating</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-lg font-bold text-dwork-purple">${user.stats.totalEarned.toLocaleString()}</div>
                  <p className="text-sm text-dwork-purple-600">Total Earned</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-lg font-bold text-blue-700">{user.stats.hoursWorked.toLocaleString()}</div>
                  <p className="text-sm text-blue-600">Hours Worked</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-lg font-bold text-green-700">{user.stats.completionRate}%</div>
                  <p className="text-sm text-green-600">Completion Rate</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  <span>{user.stats.profileViews} profile views</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookmarkIcon className="h-4 w-4" />
                  <span>Saved by {user.stats.savedByClients} clients</span>
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
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Completeness */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completeness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={user.profileCompleteness} className="h-2" />
                  <p className="text-sm text-center font-medium">
                    {user.profileCompleteness}% - {user.profileCompleteness < 100 ? "Almost there!" : "Complete!"}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Profile picture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Skills added</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-muted-foreground">Portfolio (3+ items)</span>
                    </div>
                  </div>
                  <Button className="w-full bg-dwork-purple hover:bg-dwork-purple-600">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Hourly Rate */}
            <Card>
              <CardHeader>
                <CardTitle>Hourly Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-dwork-purple">${user.hourlyRate}</p>
                  <p className="text-sm text-muted-foreground">per hour</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
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
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full border-b rounded-none justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="work">Work History</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="skills">Skills & Education</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{user.bio}</p>
                      
                      <div className="pt-4">
                        <h4 className="font-semibold mb-2">Top Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {user.skills.slice(0, 8).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="py-1.5">
                              {skill}
                            </Badge>
                          ))}
                          {user.skills.length > 8 && (
                            <Badge variant="outline" className="py-1.5">
                              +{user.skills.length - 8} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Work & Feedback</CardTitle>
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
                        <h3 className="font-semibold text-lg mb-1">Showcase your best work</h3>
                        <p className="text-muted-foreground mb-4">Adding portfolio items increases your chances of getting hired by 50%</p>
                        <Button className="bg-dwork-purple hover:bg-dwork-purple-600">
                          Add Your First Project
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills & Education Tab */}
              <TabsContent value="skills" className="mt-6 space-y-6">
                <Card>
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </NewDashboardLayout>
  );
};

export default Profile;
