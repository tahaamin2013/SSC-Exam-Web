'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Data and Analysis",
    links: [
      { href: "unit-3/data-and-analysis/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/data-and-analysis/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/data-and-analysis/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/data-and-analysis/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/data-and-analysis/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "Data types in Data Science",
    links: [
      { href: "unit-3/data-types-in-data-science/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/data-types-in-data-science/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/data-types-in-data-science/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/data-types-in-data-science/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/data-types-in-data-science/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "Big Data(Volume, Velocity, Variety)",
    links: [
      { href: "unit-3/big-data-volume-and-velocity-and-variety/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/big-data-volume-and-velocity-and-variety/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/big-data-volume-and-velocity-and-variety/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/big-data-volume-and-velocity-and-variety/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/big-data-volume-and-velocity-and-variety/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "Big Data Challenges",
    links: [
      { href: "unit-3/big-data-challenges/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/big-data-challenges/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/big-data-challenges/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/big-data-challenges/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/big-data-challenges/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "5",
    title: "Application of big data in business ",
    links: [
      { href: "unit-3/application-of-big-data-in-business/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/application-of-big-data-in-business/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/application-of-big-data-in-business/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/application-of-big-data-in-business/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/application-of-big-data-in-business/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}>
      <h2 className="text-xl font-bold text-black mb-4">{section.title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {section.links.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-2 p-2 rounded-lg text-black hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
          >
            {React.createElement(link.icon, { size: 18 })}
            <span className="text-sm">{link.text}</span>
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
      <h1 className="text-5xl font-extrabold mb-12 text-center text-black">
        Data And Analysis
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;