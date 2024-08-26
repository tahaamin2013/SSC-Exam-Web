"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "11.1",
        title: "11.1 Composition Of Atmosphere",
        links: [
            { href: "/chemistry/unit-11/composition-of-atmosphere/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/composition-of-atmosphere/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/composition-of-atmosphere/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/composition-of-atmosphere/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/composition-of-atmosphere/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/composition-of-atmosphere/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.2",
        title: "11.2 Air Pollutants",
        links: [
            { href: "/chemistry/unit-11/air-pollutants/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/air-pollutants/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/air-pollutants/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/air-pollutants/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/air-pollutants/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/air-pollutants/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.3",
        title: "11.3 Sources Of Air Pollution",
        links: [
            { href: "/chemistry/unit-11/sources-of-air-pollution/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/sources-of-air-pollution/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/sources-of-air-pollution/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/sources-of-air-pollution/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/sources-of-air-pollution/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/sources-of-air-pollution/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.4",
        title: "11.4 Global Warming",
        links: [
            { href: "/chemistry/unit-11/global-warming/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/global-warming/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/global-warming/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/global-warming/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/global-warming/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/global-warming/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.5",
        title: "11.5 Acid Rain And Its Effects",
        links: [
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/acid-rain-and-its-effects/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.6",
        title: "11.6 Catalytic Converters",
        links: [
            { href: "/chemistry/unit-11/catalytic-converters/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/catalytic-converters/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/catalytic-converters/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/catalytic-converters/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/catalytic-converters/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/catalytic-converters/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.7",
        title: "11.7 Strategies To Reduce Environmental Problems",
        links: [
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/strategies-to-reduce-environmental-problems/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.8",
        title: "11.8 Photosynthesis",
        links: [
            { href: "/chemistry/unit-11/photosynthesis/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/photosynthesis/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/photosynthesis/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/photosynthesis/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/photosynthesis/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/photosynthesis/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.9",
        title: "11.9 Personal Protective Measures Against Pollution",
        links: [
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/personal-protective-measures-against-pollution/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11.10",
        title: "11.10 Risk Factors",
        links: [
            { href: "/chemistry/unit-11/risk-factors/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-11/risk-factors/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-11/risk-factors/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-11/risk-factors/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-11/risk-factors/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-11/risk-factors/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
        <div className="min-h-screen text-white  px-3 bg-gradient-to-br from-gray-900 to-gray-800" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <h1 className="text-6xl font-extrabold mb-16 text-center text-white">
                Environmental Chemistry-Air
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