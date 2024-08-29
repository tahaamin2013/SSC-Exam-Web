"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "17.1",
        title: "17.1 METHODS OF SEPARATION",
        links: [
            { href: "/chemistry/unit-17/methods-of-separation/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-17/methods-of-separation/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-17/methods-of-separation/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-17/methods-of-separation/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-17/methods-of-separation/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-17/methods-of-separation/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "17.2",
        title: "17.2 EVAPORATION",
        links: [
            { href: "/chemistry/unit-17/evaporation/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-17/evaporation/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-17/evaporation/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-17/evaporation/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-17/evaporation/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-17/evaporation/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "17.3",
        title: "17.3 DISTILLATION",
        links: [
            { href: "/chemistry/unit-17/distillation/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-17/distillation/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-17/distillation/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-17/distillation/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-17/distillation/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-17/distillation/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "17.4",
        title: "17.4 FILTRATION",
        links: [
            { href: "/chemistry/unit-17/filtration/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-17/filtration/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-17/filtration/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-17/filtration/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-17/filtration/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-17/filtration/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "17.5",
        title: "17.5 CRYSTALLIZATION",
        links: [
            { href: "/chemistry/unit-17/crystallization/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-17/crystallization/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-17/crystallization/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-17/crystallization/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-17/crystallization/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-17/crystallization/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                SEPARATION TECHNIQUES
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