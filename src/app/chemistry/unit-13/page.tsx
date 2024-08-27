"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "13.1",
        title: "13.1 ORGANIC COMPOUNDS",
        links: [
            { href: "/chemistry/unit-13/organic-compounds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/organic-compounds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/organic-compounds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/organic-compounds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/organic-compounds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/organic-compounds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.2",
        title: "13.2 Homologous Series",
        links: [
            { href: "/chemistry/unit-13/homologous-series/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/homologous-series/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/homologous-series/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/homologous-series/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/homologous-series/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/homologous-series/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.3",
        title: "13.3 STRUCTURAL FORMULA",
        links: [
            { href: "/chemistry/unit-13/structural-formula/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/structural-formula/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/structural-formula/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/structural-formula/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/structural-formula/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/structural-formula/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.4",
        title: "13.4 SATURATED AND UNSATURATED HYDROCARBONS",
        links: [
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/saturated-and-unsaturated-hydrocarbons/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.5",
        title: "13.5 CHEMICAL DIVERSITY OF ORGANIC COMPOUNDS",
        links: [
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/chemical-diversity-of-organic-compounds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.6",
        title: "13.6 CLASSIFICATION OF ORGANIC COMPOUNDS",
        links: [
            { href: "/chemistry/unit-13/classification-of-organic-compounds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/classification-of-organic-compounds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/classification-of-organic-compounds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/classification-of-organic-compounds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/classification-of-organic-compounds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/classification-of-organic-compounds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "13.7",
        title: "13.7 FUNCTIONAL GROUPS",
        links: [
            { href: "/chemistry/unit-13/functional-groups/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-13/functional-groups/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-13/functional-groups/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-13/functional-groups/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-13/functional-groups/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-13/functional-groups/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Organic Chemistry
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