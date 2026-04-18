import React from 'react'

function FeaturesTable() {
  const rows = [
    { feature: "1:1 Doubt Support", codingNinjas: "Fastest (under 10 mins)", others: "24-48 hours" },
    { feature: "Curriculum", codingNinjas: "Industry Aligned", others: "Outdated" },
    { feature: "Placement Cell", codingNinjas: "Dedicated Support", others: "Limited" },
    { feature: "Projects", codingNinjas: "Real-world Capstones", others: "Basic Exercises" },
    { feature: "Alumni Network", codingNinjas: "150,000+", others: "Small" },
  ];

  return (
    <div className='flex flex-col justify-center items-center text-center py-10 bg-black'>
      <h1 className='text-2xl text-[rgb(0,130,255)] font-bold mb-8'>Advantages of Coding Ninjas</h1>
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-3 border-b border-gray-700 pb-4 mb-4 text-white font-bold">
          <div className="text-left">Feature</div>
          <div>Coding Ninjas</div>
          <div>Others</div>
        </div>
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-3 border-b border-gray-800 py-4 text-gray-300 text-sm items-center">
            <div className="text-left font-medium text-white">{row.feature}</div>
            <div className="bg-gray-900/50 rounded-lg py-2 mx-2 border border-blue-500/30">{row.codingNinjas}</div>
            <div className="py-2">{row.others}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesTable