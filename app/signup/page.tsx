"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignupPage() {
  const router = useRouter();

  const [role, setRole] = useState("USER");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    alert("Signup successful");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-health-dark relative flex items-center justify-center">

      {/* Back Arrow */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-health-white hover:text-health-primary transition"
      >
        <ArrowLeft size={26} />
      </button>

      {/* Signup Card */}
      <div className="bg-[#064B45] p-8 rounded-2xl w-80 shadow-lg border border-white">

        <h2 className="text-2xl font-bold mb-6 text-center text-health-white">
          Signup
        </h2>

        {/* Role Select (NO BLUE ISSUE) */}
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full bg-[#0B5A52] border border-white text-health-white rounded-lg mb-4 focus:ring-2 focus:ring-health-primary">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>

          <SelectContent className="bg-[#064B45] border border-white text-health-white">
            <SelectItem value="USER">User</SelectItem>
            <SelectItem value="PROVIDER">Service Provider</SelectItem>
            <SelectItem value="ADMIN">Admin</SelectItem>
          </SelectContent>
        </Select>

        {/* Email (Provider / Admin) */}
        {role !== "USER" && (
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#0B5A52] border border-white p-3 mb-4 rounded-lg
                       text-health-white placeholder:text-health-white
                       focus:outline-none focus:ring-2 focus:ring-health-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        {/* Phone (User) */}
        {role === "USER" && (
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-[#0B5A52] border border-white p-3 mb-4 rounded-lg
                       text-health-white placeholder:text-health-white
                       focus:outline-none focus:ring-2 focus:ring-health-primary"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#0B5A52] border border-white p-3 mb-6 rounded-lg
                     text-health-white placeholder:text-health-white
                     focus:outline-none focus:ring-2 focus:ring-health-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-health-secondary to-health-primary
                     text-health-dark font-semibold py-3 rounded-lg
                     hover:opacity-90 transition"
        >
          Signup
        </button>

        {/* Footer Link */}
        <p className="text-sm text-center mt-6 text-health-white">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-health-primary cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
