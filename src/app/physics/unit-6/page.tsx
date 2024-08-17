'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "6.1 Work",
        links: [
            { href: "/physics/unit-6/work/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-6/work/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-6/work/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-6/work/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-6/work/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/work/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "6.2 Energy and its Forms",
        links: [
            { href: "/physics/unit-6/energy-and-its-forms/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-6/energy-and-its-forms/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-6/energy-and-its-forms/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-6/energy-and-its-forms/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-6/energy-and-its-forms/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/energy-and-its-forms/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "6.3 Major Energy Resources",
        links: [
            { href: "/physics/unit-6/major-energy-resources/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-6/major-energy-resources/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-6/major-energy-resources/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-6/major-energy-resources/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-6/major-energy-resources/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/major-energy-resources/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "6.4 POWER",
        links: [
            { href: "/physics/unit-6/power/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-6/power/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-6/power/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-6/power/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-6/power/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/power/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "6.5 Efficiency",
        links: [
            { href: "/physics/unit-6/efficiency/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-6/efficiency/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-6/efficiency/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-6/efficiency/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-6/efficiency/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/efficiency/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-6/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-6/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-6/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-6/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-6/content", text: "Content", icon: List },
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
                Work And Energy            </h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;