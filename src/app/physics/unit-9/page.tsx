'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "9.1 Objectives of Physics",
        links: [
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
            { href: "/physics/unit-9/scince-technology-and-engineering/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-9/scince-technology-and-engineering/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-9/scince-technology-and-engineering/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-9/scince-technology-and-engineering/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-9/scince-technology-and-engineering/detailed-questions", text: "Detailed Questions", icon: List },
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
        <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800" style={{
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