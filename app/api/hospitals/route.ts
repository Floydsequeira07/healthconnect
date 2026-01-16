import { NextResponse } from "next/server";

export async function GET() {
  const hospitals = [
    {
      id: 1,
      name: "KMC Hospital",
      location: "Attavar, Mangaluru",
      rating: 4.6,
      image: "/hospitals/kmc_attavar.png",
    },
    {
      id: 2,
      name: "AJ Hospital",
      location: "Kuntikan, Mangaluru",
      rating: 4.3,
      image: "/hospitals/aj.png",
    },
    {
      id: 3,
      name: "Father Muller Hospital",
      location: "Kankanady, Mangaluru",
      rating: 4.5,
      image: "/hospitals/mullers.png",
    },
    {
      id: 4,
      name: "Yenepoya Hospital",
      location: "Deralakatte, Mangaluru",
      rating: 4.1,
      image: "/hospitals/yenopoya.png",
    },
  ];

  return NextResponse.json(hospitals);
}
