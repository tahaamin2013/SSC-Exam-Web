"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";
const data = [
    {
        id: "1",
        title: "8.1 Energy in Chemical Reactions",
        links: [
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/energy-in-chemical-reactions/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "8.2 Thermochemical Reactions",
        links: [
            { href: "/chemistry/unit-8/thermochemical-reactions/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/thermochemical-reactions/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/thermochemical-reactions/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/thermochemical-reactions/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/thermochemical-reactions/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/thermochemical-reactions/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "8.3 Enthalpy of Reaction",
        links: [
            { href: "/chemistry/unit-8/enthalpy-of-reaction/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/enthalpy-of-reaction/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/enthalpy-of-reaction/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/enthalpy-of-reaction/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/enthalpy-of-reaction/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/enthalpy-of-reaction/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "8.4 Bond Energy and Bond Dissociation Energy",
        links: [
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/bond-energy-and-bond-dissociation-energy/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "8.5 Activation Energy",
        links: [
            { href: "/chemistry/unit-8/activation-energy/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/activation-energy/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/activation-energy/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/activation-energy/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/activation-energy/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/activation-energy/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "8.6 Catalyst",
        links: [
            { href: "/chemistry/unit-8/catalyst/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/catalyst/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/catalyst/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/catalyst/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/catalyst/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/catalyst/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "7",
        title: "8.7 Respiration",
        links: [
            { href: "/chemistry/unit-8/respiration/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-8/respiration/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-8/respiration/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-8/respiration/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-8/respiration/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-8/respiration/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Energetics
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