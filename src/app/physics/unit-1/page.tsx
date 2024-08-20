"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "1.1 INTRODUCTION TO PHYSICS",
    links: [
      {
        href: "/physics/unit-1/intorduction-to-physics/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/intorduction-to-physics/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/intorduction-to-physics/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/intorduction-to-physics/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/intorduction-to-physics/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/intorduction-to-physics/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "2",
    title: "1.2 PHYSICAL AND NON-PHYSICAL QUANTITIES",
    links: [
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/physical-and-non-physical-quantities/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "3",
    title: "1.3 INTERNATIONAL SYSTEM OF UNITS",
    links: [
      {
        href: "/physics/unit-1/international-system-of-units/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/international-system-of-units/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/international-system-of-units/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/international-system-of-units/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/international-system-of-units/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/international-system-of-units/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
      {
        href: "/physics/unit-1/international-system-of-units/numerical",
        text: "Numerical Questions",
        icon: List,
      },
    ],
  },
  {
    id: "4",
    title: "1.4 STANDARD FORM/SCIENTIFIC NOTATION",
    links: [
      {
        href: "/physics/unit-1/standard-from-scientific-notation/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
      {
        href: "/physics/unit-1/standard-from-scientific-notation/numerical-questions",
        text: "Numerical Questions",
        icon: List,
      },
    ],
  },
  {
    id: "5",
    title: "1.5 PREFIXES TO POWER OF TEN",
    links: [
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/prefixes-to-power-of-ten/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
      { href: "/physics/unit-1/prefixes-to-power-of-ten/numerical", text: "Numerical Questions", icon: List },

    ],
  },
  {
    id: "6",
    title: "1.6 SCALARS AND VECTORS",
    links: [
      {
        href: "/physics/unit-1/scalars-and-vectors/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/scalars-and-vectors/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/scalars-and-vectors/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/scalars-and-vectors/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/scalars-and-vectors/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/scalars-and-vectors/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "7",
    title: "1.7 MEASURING INSTRUMENTS",
    links: [
      {
        href: "/physics/unit-1/measuring-instruments/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/measuring-instruments/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/measuring-instruments/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/measuring-instruments/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/measuring-instruments/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/measuring-instruments/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "8",
    title: "1.8 Errors",
    links: [
      {
        href: "/physics/unit-1/errors/original-content",
        text: "Original Content",
        icon: List,
      },
      { href: "/physics/unit-1/errors/notes", text: "Notes", icon: BookOpen },
      {
        href: "/physics/unit-1/errors/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      { href: "/physics/unit-1/errors/quiz", text: "MCQs", icon: HelpCircle },
      {
        href: "/physics/unit-1/errors/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/errors/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "9",
    title: "1.9 PRECISION AND ACCURACY",
    links: [
      {
        href: "/physics/unit-1/precision-and-accuracy/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/precision-and-accuracy/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/precision-and-accuracy/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/precision-and-accuracy/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/precision-and-accuracy/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/precision-and-accuracy/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
    ],
  },
  {
    id: "10",
    title: "1.10 SIGNIFICANT FIGURES",
    links: [
      {
        href: "/physics/unit-1/significant-figures/original-content",
        text: "Original Content",
        icon: List,
      },
      {
        href: "/physics/unit-1/significant-figures/notes",
        text: "Notes",
        icon: BookOpen,
      },
      {
        href: "/physics/unit-1/significant-figures/mind-map",
        text: "Mind Map",
        icon: Brain,
      },
      {
        href: "/physics/unit-1/significant-figures/quiz",
        text: "MCQs",
        icon: HelpCircle,
      },
      {
        href: "/physics/unit-1/significant-figures/brief-questions",
        text: "Brief Questions",
        icon: FileText,
      },
      {
        href: "/physics/unit-1/significant-figures/detailed-questions",
        text: "Detailed Questions",
        icon: List,
      },
      {
        href: "/physics/unit-1/significant-figures/numerical",
        text: "Numerical Questions",
        icon: List,
      },
    ],
  },
  {
    id: "7",
    title: "Chapter Round up",
    links: [
      { href: "/physics/unit-1/quiz", text: "MCQS", icon: HelpCircle },
      { href: "/physics/unit-1/quiz2", text: "MCQS 2", icon: HelpCircle },
      { href: "/physics/unit-1/mini-excersise", text: "Mini Excersise", icon: HelpCircle },
      { href: "/physics/unit-1/problems", text: "Problems", icon: HelpCircle },
      { href: "/physics/unit-1/textbook-excersise-questions", text: "TextBook Excersise Questions", icon: HelpCircle },
      { href: "/physics/unit-1/summary", text: "Summary", icon: BookOpen },
      { href: "/physics/unit-1/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/physics/unit-1/brief-questions2", text: "Brief Questions 2", icon: FileText },
      { href: "/physics/unit-1/detailed-questions", text: "Detailed Questions", icon: List },
      { href: "/physics/unit-1/detailed-questions2", text: "Detailed Questions 2", icon: List },
      { href: "/physics/unit-1/content", text: "Content", icon: List },
      { href: "/physics/unit-1/numeric", text: "Numerical Questions", icon: List },
    ]
  }
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
        Physical Quantities And Measurement
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
