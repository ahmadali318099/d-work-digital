
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthInput } from "@/components/auth/AuthInput";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-dwork-purple via-dwork-blue/20 to-white">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Illustration (large screens only) */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-dwork-purple via-dwork-blue to-dwork-purple-600 items-center justify-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=600&q=80" alt="Welcome" className="object-cover h-full w-full"/>
        </div>

        {/* Auth form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center animate-fade-in">
          <h2 className="font-bold text-2xl md:text-3xl text-dwork-purple mb-2 tracking-tight">Sign In to D Work</h2>
          <p className="mb-6 text-muted-foreground">Digital Marketing. Elevated.</p>

          <form className="space-y-4">
            <AuthInput 
              label="Email" 
              icon={Mail}
              type="email"
              autoComplete="email"
              name="email"
              placeholder="you@email.com"
              required
            />

            <AuthInput 
              label="Password" 
              icon={Lock}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              name="password"
              placeholder="Enter your password"
              required
              afterIcon={showPassword ? EyeOff : Eye}
              onAfterIconClick={() => setShowPassword((v) => !v)}
            />

            <div className="flex items-center justify-between mt-2">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm text-muted-foreground">
                <Checkbox checked={rememberMe} onCheckedChange={() => setRememberMe((v) => !v)} />
                Remember me
              </label>
              <Link to="#" className="text-dwork-purple hover:underline text-sm transition">Forgot password?</Link>
            </div>

            <Button type="submit" className="w-full mt-4 bg-dwork-purple font-semibold text-base rounded-xl py-3 shadow-md shadow-dwork-purple/10 hover-scale transition">Sign In</Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <span className="flex-1 h-px bg-gray-200"></span>
            <span className="text-xs text-gray-400">or sign in with</span>
            <span className="flex-1 h-px bg-gray-200"></span>
          </div>

          <div className="flex gap-4 mb-6">
            <SocialLoginButton provider="google" />
            <SocialLoginButton provider="linkedin" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-dwork-purple font-semibold hover:underline transition">Sign Up</Link>
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

export default Login;
