'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "9.1 Objectives of Physics",
        links: [
            { href: "/physics/unit-9/objectives-of-physics/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/objectives-of-physics/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/objectives-of-physics/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/objectives-of-physics/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/objectives-of-physics/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/objectives-of-physics/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "9.2 Fields of Physics",
        links: [
            { href: "/physics/unit-9/fields-of-physics/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/fields-of-physics/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/fields-of-physics/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/fields-of-physics/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/fields-of-physics/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/fields-of-physics/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "9.3 Hypothesis Theory And Law",
        links: [
            { href: "/physics/unit-9/hypothesis-thoery-and-law/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/hypothesis-thoery-and-law/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/hypothesis-thoery-and-law/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/hypothesis-thoery-and-law/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/hypothesis-thoery-and-law/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/hypothesis-thoery-and-law/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "9.4 Science, Technology And Engineering",
        links: [
            { href: "/physics/unit-9/scince-technology-and-engineering/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-9/scince-technology-and-engineering/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/scince-technology-and-engineering/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/scince-technology-and-engineering/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/scince-technology-and-engineering/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/scince-technology-and-engineering/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-9/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-9/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-9/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-9/content", text: "Content", icon: List },
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
                Nature and Science of Physics
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