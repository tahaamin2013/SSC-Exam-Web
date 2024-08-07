'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Safe and Responsible Use of Computer",
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
    title: "Responsible Use of hardware and software",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "Safe use of digital platform",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "Laws to protect user privacy and intellectual property",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "5",
    title: "Computing Innovation",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "6",
    title: "Malicious Software and Key concept",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "7",
    title: "Information privacy, system security, and usability trade-offs",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "8",
    title: "Disinformation and Fake News",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "9",
    title: "Social Networking",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "10",
    title: "Approaches to computing effects",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "11",
    title: "Intellectual property protection key terms",
    links: [
      { href: "unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-black">

        Impacts of Computing
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