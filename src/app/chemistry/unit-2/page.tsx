"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";
const data = [
    {
        id: "1",
        title: "2.1 STATE OF MATTER",
        links: [
            { href: "/chemistry/unit-2/state-of-matter/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/state-of-matter/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/state-of-matter/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/state-of-matter/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/state-of-matter/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/state-of-matter/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "2.2 ELEMENTS, COMPOUNDS AND MIXTURES",
        links: [
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/elements-compounds-and-mixtures/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "2.3 ALLOTROPES",
        links: [
            { href: "/chemistry/unit-2/allotropes/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/allotropes/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/allotropes/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/allotropes/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/allotropes/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/allotropes/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "2.4 Solution",
        links: [
            { href: "/chemistry/unit-2/solution/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/solution/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/solution/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/solution/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/solution/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/solution/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "2.4.8 Effect of Temperature on Solubility",
        links: [
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/effect-of-temperature-on-solubility/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "2.5 COLLOIDS & SUSPENSIONS",
        links: [
            { href: "/chemistry/unit-2/colloids-and-suspensions/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-2/colloids-and-suspensions/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-2/colloids-and-suspensions/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-2/colloids-and-suspensions/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-2/colloids-and-suspensions/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-2/colloids-and-suspensions/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Matter
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