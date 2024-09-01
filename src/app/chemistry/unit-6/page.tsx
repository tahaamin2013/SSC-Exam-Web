"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "6.1 EMPIRICAL FORMULA AND MOLECULAR FORMULA",
        links: [
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/empirical-and-molecular-formula/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "6.2 MOLECULAR MASS AND FORMULA MASS",
        links: [
            { href: "/chemistry/unit-6/molecular-and-formula-mass/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/molecular-and-formula-mass/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/molecular-and-formula-mass/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/molecular-and-formula-mass/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/molecular-and-formula-mass/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/molecular-and-formula-mass/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "6.3 CHEMICAL FORMULA AND NAME OF BINARY IONIC COMPOUNDS",
        links: [
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/chemical-formula-and-name-binary-ionic-compounds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "6.4 AVOGADRO&apos;sNUMBER AND MOLE",
        links: [
            { href: "/chemistry/unit-6/avogadros-number-and-mole/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/avogadros-number-and-mole/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/avogadros-number-and-mole/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/avogadros-number-and-mole/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/avogadros-number-and-mole/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/avogadros-number-and-mole/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "6.5 CHEMICAL CALCULATIONS",
        links: [
            { href: "/chemistry/unit-6/chemical-calculations/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/chemical-calculations/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/chemical-calculations/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/chemical-calculations/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/chemical-calculations/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/chemical-calculations/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "6.6 CHEMICAL EQUATION AND BALANCING",
        links: [
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/chemical-equation-and-balancing/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "7",
        title: "6.7 MOLECULAR AND STRUCTURAL FORMULA",
        links: [
            { href: "/chemistry/unit-6/molecular-and-structural-formula/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-6/molecular-and-structural-formula/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-6/molecular-and-structural-formula/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-6/molecular-and-structural-formula/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-6/molecular-and-structural-formula/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-6/molecular-and-structural-formula/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Chemical Bonding
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