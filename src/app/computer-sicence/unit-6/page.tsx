'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Safe and Responsible Use of Computer",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "2",
    title: "Responsible Use of hardware and software",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "Safe use of digital platform",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "Laws to protect user privacy and intellectual property",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "5",
    title: "Computing Innovation",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "6",
    title: "Malicious Software and Key concept",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "7",
    title: "Information privacy, system security, and usability trade-offs",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "8",
    title: "Disinformation and Fake News",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "9",
    title: "Social Networking",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "10",
    title: "Approaches to computing effects",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "11",
    title: "Intellectual property protection key terms",
    links: [
      { href: "/computer-sicence/unit-2/problems/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-2/problems/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-2/problems/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-2/problems/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-2/problems/detailed-questions", text: "Detailed Questions", icon: List },
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

        Impacts of Computing
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