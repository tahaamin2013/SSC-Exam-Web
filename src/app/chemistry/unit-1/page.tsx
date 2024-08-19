"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "1.1 DEFINITION OF CHEMISTRY AND ITS INTERACTION WITH OTHER MATTER AND ENERGY",
    links: [
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/definition-of-chemistry-and-its-interaction-with-other-matter-and-energy/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "2",
    title: "1.2 BRANCHES OF CHEMISTRY",
    links: [
      {
        href: "/chemistry/unit-1/branches-of-chemistry/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/branches-of-chemistry/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/branches-of-chemistry/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/branches-of-chemistry/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/branches-of-chemistry/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/branches-of-chemistry/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "3",
    title: "1.3 EXAMPLES OF ESSENTIAL QUESTIONS THAT ARE IMPORTANT FOR THE BRANCHES OF CHEMISTRY",
    links: [
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/examples-of-essential-questions/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "4",
    title: "1.4 DAILY LIFE APPLICATIONS OF CHEMISTRY",
    links: [
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/daily-life-applications-of-chemistry/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "5",
    title: "1.5 'SCIENCE,' 'TECHNOLOGY,' AND 'ENGINEERING'",
    links: [
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/science-technology-and-engineering/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
  {
    id: "6",
    title: "1.6 APPLICATIONS OF SCIENCE, TECHNOLOGY, AND ENGINEERING",
    links: [
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/original-content",
        text: "ORIGINAL CONTENT",
        icon: List,
      },
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/notes",
        text: "NOTES",
        icon: BookOpen,
      },
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/mind-map",
        text: "MIND MAP",
        icon: Brain,
      },
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/quiz",
        text: "MCQS",
        icon: HelpCircle,
      },
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/brief-questions",
        text: "BRIEF QUESTIONS",
        icon: FileText,
      },
      {
        href: "/chemistry/unit-1/applications-of-science-technology-and-engineering/detailed-questions",
        text: "DETAILED QUESTIONS",
        icon: List,
      },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
      style={{
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
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
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        Nature of Science in Chemistry      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
