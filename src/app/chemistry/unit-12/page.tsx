"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "12.1",
        title: "12.1 Properties Of Water",
        links: [
            { href: "/chemistry/unit-12/properties-of-water/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/properties-of-water/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/properties-of-water/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/properties-of-water/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/properties-of-water/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/properties-of-water/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.2",
        title: "12.2 Treatment Of Domestic Water Supply",
        links: [
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/treatment-of-domestic-water-supply/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.3",
        title: "12.3 Water Pollution",
        links: [
            { href: "/chemistry/unit-12/water-pollution/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/water-pollution/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/water-pollution/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/water-pollution/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/water-pollution/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/water-pollution/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.4",
        title: "12.4 Waterborne Diseases",
        links: [
            { href: "/chemistry/unit-12/waterborne-diseases/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/waterborne-diseases/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/waterborne-diseases/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/waterborne-diseases/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/waterborne-diseases/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/waterborne-diseases/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.5",
        title: "12.5 Ways To Deal With The Negative Effects Of Water Pollution",
        links: [
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/ways-to-deal-with-the-negative-effects-of-water-pollution/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.6",
        title: "12.6 Water Scarcity In Pakistan",
        links: [
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/water-scarcity-in-pakistan/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "12.7",
        title: "12.7 Fertilizers",
        links: [
            { href: "/chemistry/unit-12/fertilizers/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-12/fertilizers/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-12/fertilizers/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-12/fertilizers/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-12/fertilizers/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-12/fertilizers/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Environmental Chemistry-Water
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