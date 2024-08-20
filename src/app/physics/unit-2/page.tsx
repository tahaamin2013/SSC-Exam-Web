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
    id: "6",
    title: "2.7 EQUATIONS OF MOTION",
    links: [
      { href: "/physics/unit-2/equation-of-motion/original-content", text: "Original Content", icon: List },
      { href: "/physics/unit-2/equation-of-motion/notes", text: "Notes", icon: BookOpen },
      { href: "/physics/unit-2/equation-of-motion/mind-map", text: "Mind Map", icon: Brain },
      { href: "/physics/unit-2/equation-of-motion/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/physics/unit-2/equation-of-motion/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-2/equation-of-motion/detailed-questions", text: "Detailed Questions", icon: List },
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
    <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800" style={{
      fontFamily: '"Poppins", sans-serif'
    }}>
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        KINEMATICS
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