"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [

  {
    id: "6",
    title: "Introduction",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/introduction/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "6",
    title: "2. THE SPECTRUM OF POLITICAL IDEOLOGIES",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/the-spectrum-of-plitical-idelogies/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "6",
    title: "3. IMPACT OF POLITICAL ENVIRONMENT ON BUSINESSES",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/impact-of-political-enviroment-on-businesses/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "6",
    title: "4. INTERACTION BETWEEN BUSINESSES AND THE GOVERNMENT",
    links: [
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/managerial-and-financial-analysis/chapter-1/interaction-between-businesses-and-the-goverment/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
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
    </div>);
};

const ComputerSystemsDashboard = () => {
  return (
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
      Political environment and business              </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
