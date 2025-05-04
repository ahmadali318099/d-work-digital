
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import Freelancers from "./pages/Freelancers";
import Messages from "./pages/Messages";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import FindJobs from "./pages/FindJobs";
import Proposals from "./pages/Proposals";
import Earnings from "./pages/Earnings";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import FreelancerInteractions from "./pages/FreelancerInteractions";
import ConnectsHistory from "./pages/ConnectsHistory";
import Stats from "./pages/Stats";
import Membership from "./pages/Membership";
import Apps from "./pages/Apps";
import SavedJobs from "./pages/SavedJobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/freelancer-interactions" element={<FreelancerInteractions />} />
          <Route path="/connects-history" element={<ConnectsHistory />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          {/* Redirect to find jobs page by default for logged in users */}
          <Route path="/dashboard" element={<Navigate to="/find-jobs" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
