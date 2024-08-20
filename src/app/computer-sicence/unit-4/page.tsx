'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Data and Analysis",
    links: [
      { href: "/computer-sicence/unit-4/data-and-analysis/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-4/data-and-analysis/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-4/data-and-analysis/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-4/data-and-analysis/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-4/data-and-analysis/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "Data types in Data Science",
    links: [
      { href: "/computer-sicence/unit-4/data-types-in-data-science/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-4/data-types-in-data-science/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-4/data-types-in-data-science/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-4/data-types-in-data-science/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-4/data-types-in-data-science/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "Big Data(Volume, Velocity, Variety)",
    links: [
      { href: "/computer-sicence/unit-4/big-data-volume-and-velocity-and-variety/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-4/big-data-volume-and-velocity-and-variety/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-4/big-data-volume-and-velocity-and-variety/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-4/big-data-volume-and-velocity-and-variety/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-4/big-data-volume-and-velocity-and-variety/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-[400px] mb-6 py-6 px-5 rounded-3xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700">
      <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {section.links.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-3 p-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-700 rounded-lg group-hover:bg-purple-600 transition-colors duration-200">
              {React.createElement(link.icon, { size: 20 })}
            </div>
            <span className="text-sm font-medium">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ComputerSystemsDashboard = () => {
  return (
    <div className="min-h-screen p-8" style={{
      backgroundColor: '#1111`', // Dark blue background
      fontFamily: '"Poppins", sans-serif'
    }}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-black">

        Data And Analysis
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;