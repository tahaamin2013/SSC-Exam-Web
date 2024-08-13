'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "Force",
        links: [
            { href: "/physics/unit-3/force/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-3/force/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-3/force/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-3/force/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-3/force/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/force/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "Newton's Laws of motion",
        links: [
            { href: "/physics/unit-3/newtons-laws-of-motion/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-3/newtons-laws-of-motion/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-3/newtons-laws-of-motion/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-3/newtons-laws-of-motion/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-3/newtons-laws-of-motion/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/newtons-laws-of-motion/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },

    {
        id: "3",
        title: "Mass and Weight",
        links: [
            { href: "/physics/unit-3/mass-and-weight/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-3/mass-and-weight/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-3/mass-and-weight/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-3/mass-and-weight/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-3/mass-and-weight/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/mass-and-weight/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "Gravitational Field",
        links: [
            { href: "/physics/unit-3/gravitaitonal-field/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-3/gravitaitonal-field/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-3/gravitaitonal-field/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-3/gravitaitonal-field/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-3/gravitaitonal-field/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/gravitaitonal-field/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "Momentum",
        links: [
            { href: "/physics/unit-3/momentum/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-3/momentum/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-3/momentum/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-3/momentum/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-3/momentum/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/momentum/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },



    {
        id: "6",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-3/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-3/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-3/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-3/brief-questions2", text: "Brief Questions 2", icon: FileText },
            { href: "/physics/unit-3/detailed-questions", text: "Detailed Questions", icon: List },
            {
                href: "/physics/unit-3/numerical",
                text: "Numerical Questions",
                icon: List,
            },],
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
                Dynamics - 1            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;