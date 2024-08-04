'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "2.1 Problems",
        links: [
            { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "2.2 Identifying a Computing Problem",
        links: [
            { href: "unit-2/identifying-computing-problem/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/identifying-computing-problem/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/identifying-computing-problem/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/identifying-computing-problem/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/identifying-computing-problem/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "2.3 Problem Solving",
        links: [
            { href: "unit-2/problem-solving/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/problem-solving/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/problem-solving/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/problem-solving/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/problem-solving/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "2.4 Input-Processing-Output (I-P-O) Model",
        links: [
            { href: "unit-2/i-p-o-model/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/i-p-o-model/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/i-p-o-model/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/i-p-o-model/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/i-p-o-model/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "2.5 Input-Processing-Output (I-P-O) Chart",
        links: [
            { href: "unit-2/i-p-o-chart/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/i-p-o-chart/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/i-p-o-chart/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/i-p-o-chart/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/i-p-o-chart/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "2.6 Computational Thinking",
        links: [
            { href: "unit-2/computational-thinking/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/computational-thinking/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/computational-thinking/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/computational-thinking/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/computational-thinking/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "7",
        title: "2.7 Principles of Computational Thinking",
        links: [
            { href: "unit-2/principles-of-computational-thinking/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/principles-of-computational-thinking/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/principles-of-computational-thinking/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/principles-of-computational-thinking/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/principles-of-computational-thinking/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "8",
        title: "2.8 Methods to design a solution",
        links: [
            { href: "unit-2/methods-to-design-solution/notes", text: "Notes", icon: BookOpen },
            { href: "unit-2/methods-to-design-solution/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-2/methods-to-design-solution/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-2/methods-to-design-solution/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/methods-to-design-solution/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
   
    {
        id: "10",
        title: "Chapter Round up",
        links: [
            { href: "unit-2/summary", text: "Summary", icon: BookOpen },
            { href: "unit-2/quiz", text: "MCQS", icon: HelpCircle },
            { href: "unit-2/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-2/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "unit-2/content", text: "Content", icon: List },
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
      <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
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
    <div className="min-h-screen p-8" style={{
      backgroundColor: '#1a1a2e', // Dark blue background
      fontFamily: '"Poppins", sans-serif'
    }}>
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
      Computational Thinking & Algorithms
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