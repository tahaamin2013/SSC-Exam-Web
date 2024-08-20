'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Introduction",
    links: [
      { href: "/computer-sicence/unit-3/introduction/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/introduction/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/introduction/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/introduction/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/introduction/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "HTML",
    links: [
      { href: "/computer-sicence/unit-3/html/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/html/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/html/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/html/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/html/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "3",
    title: "Cascading Style Sheets (CSS)",
    links: [
      { href: "/computer-sicence/unit-3/css/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/css/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/css/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/css/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/css/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "JavaScript",
    links: [
      { href: "/computer-sicence/unit-3/javascript/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/javascript/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/javascript/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/javascript/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/javascript/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "5",
    title: "Debug the Code",
    links: [
      { href: "/computer-sicence/unit-3/debug-the-code/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/debug-the-code/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/debug-the-code/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/debug-the-code/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/debug-the-code/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "6",
    title: "Create a Dynamic Website",
    links: [
      { href: "/computer-sicence/unit-3/dynamic-website/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-3/dynamic-website/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-3/dynamic-website/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-3/dynamic-website/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-3/dynamic-website/detailed-questions", text: "Detailed Questions", icon: List },
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
    <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">

        Prgramming Fundamentals
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