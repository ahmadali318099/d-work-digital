
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthInput } from "@/components/auth/AuthInput";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";
import { UserTypeTabs } from "@/components/auth/UserTypeTabs";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const SignUp: React.FC = () => {
  const [tab, setTab] = useState<"freelancer" | "client">("freelancer");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just a simple simulation - in a real app you'd validate with a backend
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Redirect based on the selected user type
    if (tab === "freelancer") {
      navigate("/freelancer-dashboard");
    } else {
      navigate("/client-dashboard");
    }
    
    toast({
      title: "Account created!",
      description: "Welcome to D Work, your account has been created successfully."
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-dwork-purple via-dwork-blue/20 to-white">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Illustration (large screens only) */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-dwork-purple via-dwork-blue to-dwork-purple-600 items-center justify-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=cover&w=600&q=80" alt="Welcome" className="object-cover h-full w-full"/>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center animate-fade-in">
          <h2 className="font-bold text-2xl md:text-3xl text-dwork-purple mb-2 tracking-tight">Get Started on D Work</h2>
          <p className="mb-6 text-muted-foreground">Join the marketplace for digital marketing pros.</p>

          {/* User type Tabs */}
          <UserTypeTabs tab={tab} setTab={setTab} />

          <form className="space-y-4 mt-6" onSubmit={handleSignUp}>
            <AuthInput 
              label="Full Name"
              type="text"
              icon={User}
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <AuthInput 
              label="Email"
              type="email"
              icon={Mail}
              name="email"
              placeholder="you@email.com"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInput 
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={Lock}
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              afterIcon={showPassword ? EyeOff : Eye}
              onAfterIconClick={() => setShowPassword((v) => !v)}
            />

            {tab === "freelancer" && (
              <>
                <AuthInput
                  label="Skills (comma separated)"
                  type="text"
                  icon={User}
                  name="skills"
                  placeholder="SEO, Content, Social Media…"
                />
                <div>
                  <label className="mb-1 block text-sm font-medium text-dwork-purple">Services <span className="text-xs text-gray-400">(optional)</span></label>
                  <Textarea name="services" placeholder="Describe your services…" className="rounded-xl border-gray-200 shadow focus:shadow-lg transition"/>
                </div>
              </>
            )}

            <Button type="submit" className="w-full mt-2 bg-dwork-purple font-semibold text-base rounded-xl py-3 shadow-md shadow-dwork-purple/10 hover-scale transition">Sign Up</Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <span className="flex-1 h-px bg-gray-200"></span>
            <span className="text-xs text-gray-400">or sign up with</span>
            <span className="flex-1 h-px bg-gray-200"></span>
          </div>
          
          <div className="flex gap-4 mb-6">
            <SocialLoginButton provider="google" />
            <SocialLoginButton provider="linkedin" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-dwork-purple font-semibold hover:underline transition">Sign In</Link>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link to="#" className="hover:underline">Terms of Service</Link>
            <span className="opacity-40">|</span>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
