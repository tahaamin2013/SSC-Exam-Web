"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "3.1",
        title: "3.1 ATOMIC MODELS",
        links: [
            { href: "/chemistry/unit-3/atomic-models/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/atomic-models/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/atomic-models/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/atomic-models/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/atomic-models/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/atomic-models/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.2",
        title: "3.2 SUBATOMIC PARTICLES",
        links: [
            { href: "/chemistry/unit-3/subatomic-particles/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/subatomic-particles/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/subatomic-particles/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/subatomic-particles/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/subatomic-particles/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/subatomic-particles/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.3",
        title: "3.3 PROTON OR ATOMIC NUMBER",
        links: [
            { href: "/chemistry/unit-3/proton-atomic-number/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/proton-atomic-number/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/proton-atomic-number/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/proton-atomic-number/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/proton-atomic-number/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/proton-atomic-number/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.4",
        title: "3.4 RELATIVE ATOMIC MASS AND ATOMIC MASS UNIT",
        links: [
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/relative-automic-mass-and-atomic-mass-unit/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.5",
        title: "3.5 ISOTOPES",
        links: [
            { href: "/chemistry/unit-3/isotopes/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/isotopes/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/isotopes/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/isotopes/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/isotopes/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/isotopes/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.6",
        title: "3.6 CATIONS AND ANIONS",
        links: [
            { href: "/chemistry/unit-3/cation-and-anions/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/cation-and-anions/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/cation-and-anions/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/cation-and-anions/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/cation-and-anions/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/cation-and-anions/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3.7",
        title: "3.7 ELECTRONIC CONFIGURATION",
        links: [
            { href: "/chemistry/unit-3/electronic-configuration/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-3/electronic-configuration/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-3/electronic-configuration/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-3/electronic-configuration/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-3/electronic-configuration/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-3/electronic-configuration/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Atomic Structure
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