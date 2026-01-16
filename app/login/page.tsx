"use client";

import {ArrowLeft} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex relative  items-center justify-center bg-health-dark">
      {/* Back Button */}
                <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 text-health-white hover:text-health-primary transition"
                >
                <ArrowLeft size={28} />
              
                </button>
      <div className="bg-[#064B45] p-8 rounded-2xl w-80 shadow-lg border border-white">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-health-white">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#0B5A52] border border-white p-3 mb-4 rounded-lg text-health-white placeholder:text-health-white focus:outline-none focus:ring-2 focus:ring-health-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#0B5A52] border border-white p-3 mb-6 rounded-lg text-health-white placeholder:text-health-white focus:outline-none focus:ring-2 focus:ring-health-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-health-secondary to-health-primary text-health-dark font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-6 text-health-white">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-health-primary cursor-pointer hover:underline"
          >
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}
