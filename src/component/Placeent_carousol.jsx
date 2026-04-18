import React from 'react'

function Placeent_carousol() {
  const placements = [
    {
        name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?u=1",
      companyLogo: "https://files.codingninjas.in/google-1771335520.webp",
      companyName: "Google"
    },
    {
      name: "Sarah Smith",
      image: "https://i.pravatar.cc/150?u=2",
      companyLogo: "https://files.codingninjas.in/microsoft-1771335520.webp",
      companyName: "Microsoft"
    },
    {
      name: "Michael Chen",
      image: "https://i.pravatar.cc/150?u=3",
      companyLogo: "https://files.codingninjas.in/amazon-1771335520.webp",
      companyName: "Amazon"
    },
    {
      name: "Emily Davis", 
      image: "https://i.pravatar.cc/150?u=4",
      companyLogo: "https://files.codingninjas.in/google-1771335520.webp",
      companyName: "Google"
    },
    {
      name: "David Wilson",
      image: "https://i.pravatar.cc/150?u=5",
      companyLogo: "https://files.codingninjas.in/microsoft-1771335520.webp",
      companyName: "Microsoft"
    },
    {
      name: "Jessica Lee",
      image: "https://i.pravatar.cc/150?u=6",
      companyLogo: "https://files.codingninjas.in/amazon-1771335520.webp",
      companyName: "Amazon"
    },
    {
      name: "Ryan Garcia",
      image: "https://i.pravatar.cc/150?u=7",
      companyLogo: "https://files.codingninjas.in/google-1771335520.webp",
      companyName: "Google"
    },
    {
      name: "Chloe Taylor",
      image: "https://i.pravatar.cc/150?u=8",
      companyLogo: "https://files.codingninjas.in/microsoft-1771335520.webp",
      companyName: "Microsoft"
    },
    {
      name: "Kevin Martinez",
      image: "https://i.pravatar.cc/150?u=9",
      companyLogo: "https://files.codingninjas.in/amazon-1771335520.webp",
      companyName: "Amazon"
    },
    {
      name: "Sophia Brown",
      image: "https://i.pravatar.cc/150?u=10",
      companyLogo: "https://files.codingninjas.in/google-1771335520.webp",
      companyName: "Google"
    },
    {
      name: "Daniel Miller",
      image: "https://i.pravatar.cc/150?u=11",
      companyLogo: "https://files.codingninjas.in/microsoft-1771335520.webp",
      companyName: "Microsoft"
    },
    {
      name: "Olivia White",
      image: "https://i.pravatar.cc/150?u=12",
      companyLogo: "https://files.codingninjas.in/amazon-1771335520.webp",
      companyName: "Amazon"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white py-10 overflow-hidden">
        <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
      <h1 className="text-2xl font-bold text-black text-center mb-8">Our Ninjas at top companies</h1>
      
      {/* 
          Explanation: 
          1. The outer div has 'overflow-hidden' to hide the cards outside the viewport.
          2. The inner div (animate-marquee) uses a CSS keyframe animation to translate X from 0 to -50%.
          3. We double the array [...placements, ...placements] to create a seamless infinite loop effect.
      */}
      <div className="flex w-max animate-marquee hover:pause-animation">
        {[...placements, ...placements].map((person, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-8 p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 min-w-[200px]">
            <div className="relative mb-4">
              <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full border-2 border-orange-500 p-1" />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                <img src={person.companyLogo} alt={person.companyName} className="w-8 h-8 object-contain" />
              </div>
            </div>
            <p className="text-black font-bold text-sm">{person.name}</p>
            <p className="text-gray-500 text-xs">{person.companyName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Placeent_carousol