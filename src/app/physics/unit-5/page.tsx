'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "5.1 ELASTICITY",
        links: [
            { href: "/physics/unit-5/elasticity/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/elasticity/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/elasticity/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/elasticity/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/elasticity/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/elasticity/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "5.2 PRESSURE",
        links: [
            { href: "/physics/unit-5/pressure/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/pressure/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/pressure/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/pressure/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/pressure/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/pressure/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "5.3 ATMOSPHERIC PRESSURE",
        links: [
            { href: "/physics/unit-5/atmospheric-pressure/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/atmospheric-pressure/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/atmospheric-pressure/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/atmospheric-pressure/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/atmospheric-pressure/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/atmospheric-pressure/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "5.4 LIQUID PRESSURE",
        links: [
            { href: "/physics/unit-5/liquid-pressure/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/liquid-pressure/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/liquid-pressure/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/liquid-pressure/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/liquid-pressure/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/liquid-pressure/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "5.5 ΜΑΝΟMETER",
        links: [
            { href: "/physics/unit-5/manometer/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/manometer/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/manometer/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/manometer/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/manometer/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/manometer/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "5.6 PASCAL&apos;sPRINCIPLE",
        links: [
            { href: "/physics/unit-5/pascals-principle/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-5/pascals-principle/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-5/pascals-principle/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-5/pascals-principle/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-5/pascals-principle/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/pascals-principle/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "7",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-5/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-5/quiz2", text: "MCQS 2", icon: HelpCircle },
            { href: "/physics/unit-5/problems", text: "Problems", icon: HelpCircle },
            { href: "/physics/unit-5/textbook-excersise-questions", text: "TextBook Excersise Questions", icon: HelpCircle },
            { href: "/physics/unit-5/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-5/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-5/brief-questions2", text: "Brief Questions 2", icon: FileText },
            { href: "/physics/unit-5/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-5/detailed-questions2", text: "Detailed Questions 2", icon: List },
            { href: "/physics/unit-5/content", text: "Content", icon: List },
            { href: "/physics/unit-5/numeric", text: "Numerical Questions", icon: List },
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
                PRESSURE AND DEFORMATION IN SOLIDS            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;