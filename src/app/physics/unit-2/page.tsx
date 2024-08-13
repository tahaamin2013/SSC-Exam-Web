'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "2.1 REST AND MOTION",
    links: [
      { href: "/physics/unit-2/rest-and-motion/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/rest-and-motion/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/rest-and-motion/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/rest-and-motion/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/rest-and-motion/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/rest-and-motion/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "2.2 DISTANCE AND DISPLACEMENT",
    links: [
      { href: "/physics/unit-2/distance-and-displacement/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/distance-and-displacement/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/distance-and-displacement/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/distance-and-displacement/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/distance-and-displacement/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/distance-and-displacement/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "2.3 SPEED AND VELOCITY",
    links: [
      { href: "/physics/unit-2/speed-and-velocity/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/speed-and-velocity/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/speed-and-velocity/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/speed-and-velocity/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/speed-and-velocity/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/speed-and-velocity/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "2.4 ACCELERATION",
    links: [
      { href: "/physics/unit-2/acceleration/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/acceleration/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/acceleration/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/acceleration/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/acceleration/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/acceleration/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "5",
    title: "2.5 MOTION DUE TO GRAVITY",
    links: [
      { href: "/physics/unit-2/motion-due-to-gravity/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/motion-due-to-gravity/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/motion-due-to-gravity/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/motion-due-to-gravity/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/motion-due-to-gravity/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/motion-due-to-gravity/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "6",
    title: "2.6 GRAPHICAL ANALYSIS OF MOTION",
    links: [
      { href: "/physics/unit-2/graphical-analysis-of-motion/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/graphical-analysis-of-motion/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/graphical-analysis-of-motion/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/graphical-analysis-of-motion/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/graphical-analysis-of-motion/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/graphical-analysis-of-motion/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "7",
    title: "Chapter Round up",
    links: [
      { href: "/physics/unit-2/quiz", text: "MCQS", icon: HelpCircle },
      { href: "/physics/unit-2/quiz2", text: "MCQS 2", icon: HelpCircle },
      { href: "/physics/unit-2/mini-excersise", text: "Mini Excersise", icon: HelpCircle },
      { href: "/physics/unit-2/problems", text: "Problems", icon: HelpCircle },
      { href: "/physics/unit-2/textbook-excersise-questions", text: "TextBook Excersise Questions", icon: HelpCircle },
      { href: "/physics/unit-2/summary", text: "Summary", icon: BookOpen },
      { href: "/physics/unit-2/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/brief-questions2", text: "Brief Questions 2", icon: FileText },
      { href: "/physics/unit-2/detailed-questions", text: "Detailed Questions", icon: List },
      { href: "/physics/unit-2/detailed-questions2", text: "Detailed Questions 2", icon: List },
      { href: "/physics/unit-2/content", text: "Content", icon: List },
      { href: "/physics/unit-2/numeric", text: "Numerical Questions", icon: List },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
      style={{
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}>
      <h2 className="text-xl font-bold text-white mb-4 capitalize">{section.title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {section.links.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-2 p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
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
    <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800" style={{
      fontFamily: '"Poppins", sans-serif'
    }}>
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        KINEMATICS
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