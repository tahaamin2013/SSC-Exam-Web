'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';

const data = [
    {
        id: "1",
        title: "1.1 History of Computer Systems and Computer Generations",
        links: [
            { href: "unit-1/history-of-computer-systems-and-computer-generations/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "1.2 Understanding Systems and Their Types",
        links: [
            { href: "unit-1/understanding-systems-and-their-types/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/understanding-systems-and-their-types/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/understanding-systems-and-their-types/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/understanding-systems-and-their-types/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/understanding-systems-and-their-types/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "1.3 Core Components of a Computer System",
        links: [
            { href: "unit-1/core-components-of-a-computer-system/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/core-components-of-a-computer-system/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/core-components-of-a-computer-system/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/core-components-of-a-computer-system/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/core-components-of-a-computer-system/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "1.4 Von Neumann Architecture",
        links: [
            { href: "unit-1/von-neumann-architecture/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/von-neumann-architecture/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/von-neumann-architecture/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/von-neumann-architecture/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/von-neumann-architecture/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "1.5 Data Transmission within a computer system",
        links: [
            { href: "unit-1/data-transmission-within-a-computer-system/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/data-transmission-within-a-computer-system/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/data-transmission-within-a-computer-system/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/data-transmission-within-a-computer-system/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/data-transmission-within-a-computer-system/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "1.6 Types and Hierarchy of Computer Memory",
        links: [
            { href: "unit-1/types-and-hierarchy-of-computer-memory/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "7",
        title: "1.7 Software and Hardware Engineering",
        links: [
            { href: "unit-1/software-and-hardware-engineering/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/software-and-hardware-engineering/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/software-and-hardware-engineering/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/software-and-hardware-engineering/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/software-and-hardware-engineering/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "8",
        title: "1.8 Computer Software Multiple",
        links: [
            { href: "unit-1/computer-software-multiple/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/computer-software-multiple/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/computer-software-multiple/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/computer-software-multiple/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/computer-software-multiple/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "9",
        title: "1.9 Data Communication",
        links: [
            { href: "unit-1/data-communication/notes", text: "Notes", icon: BookOpen },
            { href: "unit-1/data-communication/mind-map", text: "Mind Map", icon: Brain },
            { href: "unit-1/data-communication/quiz", text: "MCQs", icon: HelpCircle },
            { href: "unit-1/data-communication/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/data-communication/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "10",
        title: "Chapter Round up",
        links: [
            { href: "unit-1/summary", text: "Summary", icon: BookOpen },
            { href: "unit-1/quiz", text: "MCQS", icon: HelpCircle },
            { href: "unit-1/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "unit-1/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "unit-1/content", text: "Content", icon: List },
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
          <a
            key={link.href}
            href={link.href}
            className="flex items-center space-x-2 p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
          >
            {React.createElement(link.icon, { size: 18 })}
            <span className="text-sm">{link.text}</span>
          </a>
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
        Computer Systems
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