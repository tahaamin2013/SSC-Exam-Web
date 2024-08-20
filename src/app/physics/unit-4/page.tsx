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
        id: "4",
        title: "4.5 STABILITY",
        links: [
            { href: "/physics/unit-4/stability/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/stability/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/stability/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/stability/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/stability/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/stability/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "4.6 FRICTION",
        links: [
            { href: "/physics/unit-4/friction/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/friction/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/friction/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/friction/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/friction/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/friction/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "4.7 CENTRIPETAL FORCE",
        links: [
            { href: "/physics/unit-4/centripetal-force/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/centripetal-force/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/centripetal-force/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/centripetal-force/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/centripetal-force/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/centripetal-force/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "7",
        title: "4.8 ORBITAL MOTION",
        links: [
            { href: "/physics/unit-4/orbital-motion/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/orbital-motion/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/orbital-motion/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/orbital-motion/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/orbital-motion/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/orbital-motion/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "7",
        title: "4.9 PLANETARY DATA",
        links: [
            { href: "/physics/unit-4/planetary-data/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-4/planetary-data/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-4/planetary-data/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-4/planetary-data/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-4/planetary-data/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-4/planetary-data/detailed-questions", text: "Detailed Questions", icon: List },
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
                Dynamics - 2            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;