
import React from "react";
import { PostJobForm } from "@/components/jobs/PostJobForm";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Separator } from "@/components/ui/separator";

const PostJob = () => {
  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Post a Job</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create a job listing to find the perfect digital marketing professional for your project.
          </p>
        </div>
        <Separator />
        <PostJobForm />
      </div>
    </DashboardLayout>
  );
};

export default PostJob;
