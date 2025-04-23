
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Search } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "I've reviewed your project requirements...",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      name: "Michael Brown",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "The latest version has been uploaded...",
      time: "1h ago",
      unread: false,
    },
    {
      id: 3,
      name: "Sarah Parker",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Thank you for your feedback on the design...",
      time: "3h ago",
      unread: false,
    },
  ];

  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Messages</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-10 w-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-accent ${
                    conversation.unread ? "bg-accent" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{conversation.name}</p>
                      <span className="text-xs text-muted-foreground">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Message View */}
          <Card className="md:col-span-2">
            <CardContent className="p-6 min-h-[600px] flex flex-col items-center justify-center text-muted-foreground">
              <MessageSquare className="h-12 w-12 mb-4" />
              <p>Select a conversation to view messages</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
