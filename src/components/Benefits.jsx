import React from 'react';

const Programs = () => {
  const programs = [
    { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
    { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
    { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/4">    
        <div className="p-4 h-[420px] ml-[100px] mt-[70px] w-[270px] shadow-md">
          <ul className="space-y-2">
            <li className="hover:bg-gray-200 p-2">PRODUCT MANAGEMENT</li>
            <li className="hover:bg-gray-200 p-2">STRATEGY & LEADERSHIP</li>
            <li className="hover:bg-gray-200 p-2">BUSINESS MANAGEMENT</li>
            <li className="hover:bg-gray-200 p-2">FINTECH</li>
            <li className="hover:bg-gray-200 p-2">SENIOR MANAGEMENT</li>
            <li className="hover:bg-gray-200 p-2">DATA SCIENCE</li>
            <li className="hover:bg-gray-200 p-2">DIGITAL TRANSFORMATION</li>
            <li className="hover:bg-gray-200 p-2">BUSINESS ANALYTICS</li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 p-6">
        <div className="rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <div className="flex ml-[950px]">
              <span className="mr-2">Enrolled</span>
              <input type="checkbox" className="toggle-checkbox"/>
            </div>
          </div>
          <table className="min-w-full bg-white h-[400px] w-[400px] border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-left border-r border-gray-300">Program</th>
                <th className="py-2 px-4 bg-blue-100 text-left border-r border-gray-300">Referrer Bonus</th>
                <th className="py-2 px-4 bg-blue-100 text-left">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-r border-gray-300">{program.name}</td>
                  <td className="px-4 py-2 border-r border-gray-300">{program.referrerBonus}</td>
                  <td className="px-4 py-2">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Refer and earn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
