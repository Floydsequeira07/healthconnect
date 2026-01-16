"use client";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu,MapPin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";

// Specialties Section Component

function SpecialtiesSection({ id }: { id?: string }) {
  const initialSpecs = [
    { name: "General", icon: "/icons/general.svg" },
    { name: "Dermatology", icon: "/icons/dermatology.svg" },
    { name: "Gynecology", icon: "/icons/gynecology.svg" },
    { name: "Pediatrics", icon: "/icons/pediatrics.svg" },
    { name: "Orthopedic", icon: "/icons/orthopedics.svg" },
    { name: "Cardiology", icon: "/icons/cardiology.svg" },
  ];

  const [specialties, setSpecialties] = useState(initialSpecs);
  const [loading, setLoading] = useState(false);

  const handleViewAll = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/specialties"); // your API endpoint
      const data = await res.json();
      setSpecialties(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching specialties");
    } finally {
      setLoading(false);
    }
  };
  return (
  <section id={id} className="bg-[#064B45]  py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <h3 className="text-3xl font-semibold text-center mb-12 text-health-white">
        Consult by Specialty
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
        {specialties.map((spec) => (
          <div
            key={spec.name}
            id={spec.name.toLowerCase()}
            className="bg-[#0B5A52] hover:bg-[#0F6D63] p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <Image
              src={spec.icon}
              alt={spec.name}
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <p className="text-sm font-medium text-health-white">
              {spec.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleViewAll}
          disabled={loading}
          className="bg-gradient-to-r from-health-secondary to-health-primary text-health-dark px-6 py-2 rounded-lg"
        >
          {loading ? "Loading..." : "View All"}
        </button>
      </div>

    </div>
  </section>
);

  
}


// Home Page Component

export default function Home() {
  const router = useRouter();

  return (
      <main className="min-h-screen bg-health-dark text-health-white">

      {/* Navbar */}
      <header className="bg-health-dark backdrop-blur shadow-sm sticky top-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-health-secondary max-w-7xl mx-auto px-6 py-1 text-center text-base text-health-white">
          The health and well-being of our patients and healthcare team will always be our priority.
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="HealthConnect" width={32} height={32} />
               <span className="font-bold text-2xl bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  HealthConnect
                </span>

            </div>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 text-health-white">
            <Link href="#" className="hover:text-health-primary">Find Doctors</Link>
            <Link href="/hospitals" className="hover:text-health-primary">Hospitals</Link>
            <Link href="#" className="hover:text-health-primary">Medicines</Link>
            <Link href="#" className="hover:text-health-primary">Surgeries</Link>
            <Link href="#" className="hover:text-health-primary">Facilities</Link>

            <div className="inline-flex justify-center bg-gradient-to-r from-health-secondary to-health-primary text-health-dark px-6 py-2 rounded-lg text-sm cursor-pointer">
              <span className="hover:underline" onClick={() => router.push("/login")}>Login</span>
              <span>/</span>
              <span className="hover:underline" onClick={() => router.push("/signup")}>Signup</span>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64 bg-white">
                <SheetTitle className="sr-only">Main Navigation</SheetTitle>

                <div className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="HealthConnect Logo" width={28} height={28} />
                  <span className="font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent text-lg sm:text-xl">HealthConnect</span>
                </div>

                <nav className="flex flex-col gap-6 mt-8 text-gray-700">
                  <Link href="#" className="hover:text-health-primary">Find Doctors</Link>
                  <Link href="/hospitals" className="hover:text-health-primary">Hospitals</Link>
                  <Link href="#" className="hover:text-health-primary">Medicines</Link>
                  <Link href="#" className="hover:text-health-primary">Surgeries</Link>
                  <Link href="#" className="hover:text-health-primary">Facilities</Link>
                </nav>

                <div className="inline-flex justify-center bg-gradient-to-r from-health-secondary to-health-primary text-health-dark px-6 py-2 rounded-lg text-sm cursor-pointer mt-6">
                  <span className="hover:underline" onClick={() => router.push("/login")}>Login</span>
                  <span>/</span>
                  <span className="hover:underline" onClick={() => router.push("/signup")}>Signup</span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-health-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-health-white mb-4">
              Consult Top Doctors Online
            </h2>
            <p className="text-health-white mb-6">
              Video & in-clinic consultations with verified specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-health-secondary to-health-primary text-health-dark font-semibold hover:opacity-90 px-6 py-3 rounded-xl">Consult Now</button>
               <button
                  className="border border-health-primary text-health-primary hover:bg-health-primary hover:text-health-dark px-6 py-3 rounded-xl"
                  onClick={() => {
                    const section = document.getElementById("specialties-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Specialties
            </button>

            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-0">
            <Image src="/doctor.png" alt="Doctor consultation" width={400} height={300} className="w-64 sm:w-80 h-auto" />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <SpecialtiesSection id="specialties-section" />
      <footer className="bg-health-dark text-white">
  <div className="max-w-7xl mx-auto px-6 py-14 space-y-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

      {/* Logo + Address Column */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="HealthConnect Logo"
            width={36}
            height={36}
          />
          <span className="font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent text-xl">
            HealthConnect
          </span>
        </div>

        <div className="flex items-start gap-4 text-sm">
           <MapPin size={16}className="mt-1 text-white-500 shrink-0"/>
          <p>
            WeWork Salarpuria Magnificia,<br />
            78 Old Madras Road,<br />
            Mahadevapura,<br />
            Bengaluru, Karnataka – 560016
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Mail size={16} className="text-white-500" />

          <a
            href="mailto:info@healthconnect.com"
            className="hover:text-white"
          >
            info@healthconnect.com
          </a>
        </div>
      </div>

      {/* About */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-lg">About</h4>
        <ul className="space-y-2 text-sm ">
          <li className="hover:text-health-primary cursor-pointer">About Us</li>
          <li className="hover:text-health-primary cursor-pointer">Our Pricing</li>
          <li className="hover:text-health-primary cursor-pointer">Gallery</li>
          <li className="hover:text-health-primary cursor-pointer">Appointment</li>
          <li className="hover:text-health-primary cursor-pointer">Privacy Policy</li>
        </ul>
      </div>

      {/* Specialties */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-lg">Specialties</h4>
        <ul className="space-y-2 text-sm">
         <li className="hover:text-health-primary cursor-pointer">Orthopedics</li>
         <li className="hover:text-health-primary cursor-pointer">Neurology</li>
          <li className="hover:text-health-primary cursor-pointer">Dental Care</li>
          <li className="hover:text-health-primary cursor-pointer">Ophthalmology</li>
          <li className="hover:text-health-primary cursor-pointer">Cardiology</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-health-primary cursor-pointer">Find Doctors</li>
          <li className="hover:text-health-primary cursor-pointer">Hospitals</li>
          <li className="hover:text-health-primary cursor-pointer">Medicines</li>
          <li className="hover:text-health-primary cursor-pointer">Surgeries</li>
          <li className="hover:text-health-primary cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="text-white font-semibold mb-4 text-lg">Follow Us</h4>
        <div className="flex gap-4 text-lg ">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 pt-4 h-1">
      <p className="text-sm text-center text-gray-400">
        © 2026 HealthConnect. All rights reserved.
      </p>
    </div>

  </div>
</footer>
 </main>
  );
}
