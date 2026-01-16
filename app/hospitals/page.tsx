"use client";
import { Star,ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import Image from "next/image";
type Hospital={
    id:number;
    name:string;
    location:string;
    rating:number;
    image:string;
};
export default function HospitalsPage(){
    const router = useRouter();
    return(
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Back Button */}
                <button
                onClick={() => router.back()}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition"
                >
                <ArrowLeft size={16} />
                Back
                </button>
                <h2 className="text-3xl font-semibold mb-10 text-gray-900">Hospitals in Mangalore</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hospitals.map((hospital)=> (
                        <div 
                        key={hospital.id} 
                        className="bg-white rounded-xl shadow hover:shadow-lg transition"
                        >
                            <Image
                                src={hospital.image}
                                alt={hospital.name}
                                width={400}
                                height={220}
                                className="rounded-t-xl object-cover h-48 w-full"
                            />
                            <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800">
                            {hospital.name}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                            {hospital.location}
                            </p>
                             <div className="flex justify-between items-center mt-4 text-sm">
                             <span className="flex items-center gap-1 text-yellow-500 font-medium">
                                 <Star size={16} fill="currentColor" />
                                 {hospital.rating}
                            </span>
                            <button className="text-blue-600 hover:underline">
                                View Details
                            </button>
                            </div>
                            </div>
                            </div>
                            ))}
                </div>
            </div>
        </main>
);
};