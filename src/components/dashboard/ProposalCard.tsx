
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProposalProps {
  proposal: {
    id: number;
    jobTitle: string;
    freelancer: {
      name: string;
      avatar: string;
      rating: number;
      title: string;
    };
    preview: string;
    date: string;
  };
}

const ProposalCard: React.FC<ProposalProps> = ({ proposal }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-500">{proposal.freelancer.rating}</span>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-2">
          For: <span className="font-medium text-gray-700">{proposal.jobTitle}</span>
        </div>
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={proposal.freelancer.avatar} />
            <AvatarFallback>{proposal.freelancer.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{proposal.freelancer.name}</div>
            <div className="text-xs text-muted-foreground">{proposal.freelancer.title}</div>
            {renderStars(proposal.freelancer.rating)}
          </div>
        </div>
        <div className="text-sm text-gray-700 mb-3 line-clamp-2">
          {proposal.preview}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{proposal.date}</span>
          <Button size="sm" variant="outline" className="text-dwork-purple border-dwork-purple hover:bg-dwork-purple/10">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalCard;
