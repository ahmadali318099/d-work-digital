
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Search, Send, Paperclip, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "I've reviewed your project requirements...",
      time: "2m ago",
      unread: true,
      messages: [
        { id: 1, sender: "them", text: "Hi there! I'm looking for a developer for my WordPress website project.", time: "2 days ago" },
        { id: 2, sender: "me", text: "Hello! I'd be happy to help with your WordPress website. Can you tell me more about the project?", time: "2 days ago" },
        { id: 3, sender: "them", text: "Sure! I need a custom e-commerce site with specific product filters and user registration features.", time: "1 day ago" },
        { id: 4, sender: "me", text: "I have extensive experience with WooCommerce and custom WordPress development. I've built similar sites before.", time: "1 day ago" },
        { id: 5, sender: "them", text: "That sounds great! I've reviewed your project requirements and I think you'd be a good fit. Can we schedule a call this week?", time: "2m ago" },
      ]
    },
    {
      id: 2,
      name: "Michael Brown",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "The latest version has been uploaded...",
      time: "1h ago",
      unread: false,
      messages: [
        { id: 1, sender: "them", text: "Hey, I need help with a React Native app.", time: "3 days ago" },
        { id: 2, sender: "me", text: "I'd be happy to help! What kind of app are you building?", time: "3 days ago" },
        { id: 3, sender: "them", text: "It's a fitness tracking app with social features.", time: "2 days ago" },
        { id: 4, sender: "me", text: "I've worked on similar projects. I've just uploaded the latest version with the changes you requested.", time: "1h ago" },
      ]
    },
    {
      id: 3,
      name: "Sarah Parker",
      avatar: "https://github.com/shadcn.png",
      lastMessage: "Thank you for your feedback on the design...",
      time: "3h ago",
      unread: false,
      messages: [
        { id: 1, sender: "them", text: "Hi there! What do you think of the initial design mockups?", time: "1 week ago" },
        { id: 2, sender: "me", text: "The designs look great! I particularly like the color scheme and layout.", time: "6 days ago" },
        { id: 3, sender: "them", text: "Thank you for your feedback on the design! I'll make the adjustments you suggested.", time: "3h ago" },
      ]
    },
  ];

  const selectedChat = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageText.trim() !== "" && selectedConversation !== null) {
      // In a real app, you would send this to an API
      // For now, we'll just clear the input
      setMessageText("");
    }
  };

  return (
    <DashboardLayout userType="freelancer">
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
                  } ${selectedConversation === conversation.id ? "border border-dwork-purple" : ""}`}
                  onClick={() => setSelectedConversation(conversation.id)}
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
            {selectedChat ? (
              <div className="flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={selectedChat.avatar} />
                      <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{selectedChat.name}</h3>
                      <p className="text-xs text-muted-foreground">Active now</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Unread</DropdownMenuItem>
                      <DropdownMenuItem>Archive Conversation</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Block User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedChat.messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'me'
                            ? 'bg-dwork-purple text-white'
                            : 'bg-muted'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="p-4 border-t flex gap-2">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button 
                    className="bg-dwork-purple hover:bg-dwork-purple-600" 
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={messageText.trim() === ''}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <CardContent className="p-6 min-h-[600px] flex flex-col items-center justify-center text-muted-foreground">
                <MessageSquare className="h-12 w-12 mb-4" />
                <p>Select a conversation to view messages</p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
