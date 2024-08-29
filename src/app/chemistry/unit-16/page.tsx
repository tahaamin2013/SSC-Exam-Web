"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "16.1",
        title: "16.1 STANDARD UNITS",
        links: [
            { href: "/science/unit-16/standard-units/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/standard-units/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/standard-units/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/standard-units/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/standard-units/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/standard-units/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "16.2",
        title: "16.2 CONVERSION AND THE IMPORTANCE OF UNITS",
        links: [
            { href: "/science/unit-16/conversion-and-importance-of-units/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/conversion-and-importance-of-units/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/conversion-and-importance-of-units/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/conversion-and-importance-of-units/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/conversion-and-importance-of-units/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/conversion-and-importance-of-units/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "16.3",
        title: "16.3 SCIENTIFIC NOTATION",
        links: [
            { href: "/science/unit-16/scientific-notation/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/scientific-notation/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/scientific-notation/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/scientific-notation/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/scientific-notation/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/scientific-notation/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "16.4",
        title: "16.4 TOOLS AND TECHNIQUES USED IN EXPERIMENTAL METHODS FOR ACCURACY AND PRECISION OF RESULTS",
        links: [
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/tools-and-techniques-for-accuracy-and-precision/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "16.5",
        title: "16.5 TECHNIQUE AND TOOLS FOR ACCURATE MEASUREMENT IN LABORATORY",
        links: [
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/techniques-and-tools-for-lab-measurement/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "16.6",
        title: "16.6 ADVANTAGES AND DISADVANTAGES OF EXPERIMENTAL METHODS",
        links: [
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/notes", text: "NOTES", icon: BookOpen },
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/science/unit-16/advantages-and-disadvantages-of-experimental-methods/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Empirical Data Collection and Analysis
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