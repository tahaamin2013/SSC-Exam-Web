'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "4.1 FORCES ON BODIES",
        links: [
            { href: "/physics/unit-4/forces-on-bodies/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/forces-on-bodies/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/forces-on-bodies/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/forces-on-bodies/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/forces-on-bodies/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/forces-on-bodies/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "4.2 MOMENT OF A FORCE",
        links: [
            { href: "/physics/unit-4/moment-of-a-force/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/moment-of-a-force/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/moment-of-a-force/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/moment-of-a-force/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/moment-of-a-force/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/moment-of-a-force/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },

    {
        id: "3",
        title: "4.3 CENTER OF MASS",
        links: [
            { href: "/physics/unit-4/center-of-mass/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/center-of-mass/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/center-of-mass/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/center-of-mass/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/center-of-mass/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/center-of-mass/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "4.4 EQUILIBRIUM",
        links: [
            { href: "/physics/unit-4/equilibrium/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/equilibrium/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/equilibrium/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/equilibrium/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/equilibrium/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/equilibrium/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-4/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-4/quiz2", text: "MCQS 2", icon: HelpCircle },
            { href: "/physics/unit-4/mini-excersise", text: "Mini Excersise", icon: HelpCircle },
            { href: "/physics/unit-4/problems", text: "Problems", icon: HelpCircle },
            { href: "/physics/unit-4/textbook-excersise-questions", text: "TextBook Excersise Questions", icon: HelpCircle },
            { href: "/physics/unit-4/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-4/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/brief-questions2", text: "Brief Questions 2", icon: FileText },
            { href: "/physics/unit-4/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-4/detailed-questions2", text: "Detailed Questions 2", icon: List },
            { href: "/physics/unit-4/content", text: "Content", icon: List },
            { href: "/physics/unit-4/numeric", text: "Numerical Questions", icon: List },
        ],
    },
];

const Section = ({ section }: any) => {
    return (
        <div className="w-full h-fit md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
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
                Dynamics - 2            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;