"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "4.1 PERIODIC TABLE",
        links: [
            { href: "/chemistry/unit-4/periodic-table/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/periodic-table/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/periodic-table/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/periodic-table/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/periodic-table/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/periodic-table/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "4.2 GROUP NUMBER AND CHARGE ON AN ION",
        links: [
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/group-number-and-charge-on-an-ion/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "4.3 PERIODICITY OF PROPERTIES",
        links: [
            { href: "/chemistry/unit-4/periodicity-of-properties/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/periodicity-of-properties/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/periodicity-of-properties/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/periodicity-of-properties/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/periodicity-of-properties/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/periodicity-of-properties/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "4.4 CHARACTERISTIC PROPERTIES",
        links: [
            { href: "/chemistry/unit-4/characteristic-properties/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/characteristic-properties/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/characteristic-properties/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/characteristic-properties/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/characteristic-properties/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/characteristic-properties/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "4.5 TRANSITION ELEMENTS",
        links: [
            { href: "/chemistry/unit-4/transition-elements/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/transition-elements/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/transition-elements/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/transition-elements/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/transition-elements/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/transition-elements/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "4.6 LANTHANIDES & ACTINIDES",
        links: [
            { href: "/chemistry/unit-4/lanthanides-and-actinides/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/lanthanides-and-actinides/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/lanthanides-and-actinides/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/lanthanides-and-actinides/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/lanthanides-and-actinides/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/lanthanides-and-actinides/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "7",
        title: "4.7 HALOGENS",
        links: [
            { href: "/chemistry/unit-4/halogens/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/halogens/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/halogens/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/halogens/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/halogens/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/halogens/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "8",
        title: "4.8 NOBLE GASES",
        links: [
            { href: "/chemistry/unit-4/noble-gases/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/noble-gases/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/noble-gases/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/noble-gases/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/noble-gases/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/noble-gases/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "9",
        title: "4.9 COMPARISON OF GENERAL PHYSICAL PROPERTIES OF METALS AND NON-METALS",
        links: [
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-4/comparison-of-general-physical-properties-of-metals-and-non-metals/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Periodic Table and Periodicity of Properties
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