import { NextResponse } from "next/server";

const allSpecialties = [
  { name: "General", icon: "icons/general.svg" },
  { name: "Dermatology", icon: "/icons/dermatology.svg" },
  { name: "Gynecology", icon: "/icons/gynecology.svg" },
  { name: "Pediatrics", icon: "/icons/pediatrics.svg" },
  { name: "Orthopedic", icon: "/icons/orthopedics.svg" },
  { name: "Cardiology", icon: "/icons/cardiology.svg" },
  { name: "Neurology", icon: "/icons/neurology.png" },
  { name: "Ophthalmology", icon: "/icons/ophthalmology.png" },
  { name: "ENT", icon: "/icons/ent.png" },
  { name: "Urology", icon: "/icons/urology.png" },
  { name: "Psychiatry", icon: "/icons/psychiatry.png" },
  { name: "Pulmonology", icon: "/icons/pulmonology.png" },
  { name: "Oncology", icon: "/icons/oncology.png" },
  { name: "Radiology", icon: "/icons/radiology.png" },
  { name: "Geriatrics", icon: "/icons/geriatrics.png" },

];

export async function GET() {
  return NextResponse.json(allSpecialties);
}
