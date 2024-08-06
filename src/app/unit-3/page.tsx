'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Introduction",
    links: [
      { href: "unit-3/introduction/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/introduction/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/introduction/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/introduction/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/introduction/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "HTML",
    links: [
      { href: "unit-3/html/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/html/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/html/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/html/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/html/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "3",
    title: "Cascading Style Sheets (CSS)",
    links: [
      { href: "unit-3/css/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/css/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/css/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/css/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/css/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "JavaScript",
    links: [
      { href: "unit-3/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "5",
    title: "Debug the Code",
    links: [
      { href: "unit-3/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "6",
    title: "Create a Dynamic Website",
    links: [
      { href: "unit-3/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-3/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-3/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-3/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-3/problems/detailed-questions", text: "Detailed Questions", icon: List },
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
        Prgramming Fundamentals
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