'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "8.1 DOMAIN THEORY OF MAGNETISM",
        links: [
            { href: "/physics/unit-8/domain-theory-of-magentism/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-8/domain-theory-of-magentism/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-8/domain-theory-of-magentism/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-8/domain-theory-of-magentism/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-8/domain-theory-of-magentism/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/domain-theory-of-magentism/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "8.2 MAGNETIC FIELD",
        links: [
            { href: "/physics/unit-8/magnetic-field/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-8/magnetic-field/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-8/magnetic-field/mind-map", text: "Mind Map", icon: Brain },
          
            { href: "/physics/unit-8/magnetic-field/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-8/magnetic-field/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/magnetic-field/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "8.3 INDUCED MAGNETISM",
        links: [
            { href: "/physics/unit-8/induced-magnetism/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-8/induced-magnetism/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-8/induced-magnetism/mind-map", text: "Mind Map", icon: Brain },
          
            { href: "/physics/unit-8/induced-magnetism/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-8/induced-magnetism/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/induced-magnetism/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "8.4 TYPES OF MAGNETIC MATERIALS",
        links: [
            { href: "/physics/unit-8/types-of-magnetic-materials/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-8/types-of-magnetic-materials/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-8/types-of-magnetic-materials/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-8/types-of-magnetic-materials/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-8/types-of-magnetic-materials/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/types-of-magnetic-materials/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "8.5 EARTH&apos;sMAGNETIC FIELD",
        links: [
            { href: "/physics/unit-8/earths-magnetic-field/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-8/earths-magnetic-field/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-8/earths-magnetic-field/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-8/earths-magnetic-field/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-8/earths-magnetic-field/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/earths-magnetic-field/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "6",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-8/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-8/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-8/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-8/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-8/content", text: "Content", icon: List },
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
                MAGNETISM            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;