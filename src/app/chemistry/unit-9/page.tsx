"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";
const data = [
    {
        id: "1",
        title: "9.1 Reversible Reactions and Dynamic Equilibrium",
        links: [
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-9/reversible-reactions-and-dynamic-equilibrium/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "9.2 Conditions for Equilibrium",
        links: [
            { href: "/chemistry/unit-9/conditions-for-equilibrium/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-9/conditions-for-equilibrium/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-9/conditions-for-equilibrium/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-9/conditions-for-equilibrium/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-9/conditions-for-equilibrium/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-9/conditions-for-equilibrium/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "9.3 Effect of Heat (Temperature) on a Chemical Equilibrium System",
        links: [
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-9/effect-of-heat-on-chemical-equilibrium/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Chemical Equilibrium
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