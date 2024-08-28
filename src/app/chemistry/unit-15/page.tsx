"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "15.1",
        title: "15.1 NUTRITION AND HEALTHY EATING",
        links: [
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/nutrition-and-healthy-eating/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.2",
        title: "15.2 BIOCHEMISTRY",
        links: [
            { href: "/nutrition/unit-15/biochemistry/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/biochemistry/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/biochemistry/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/biochemistry/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/biochemistry/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/biochemistry/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.3",
        title: "15.3 CARBOHYDRATES - A SOURCE OF ENERGY",
        links: [
            { href: "/nutrition/unit-15/carbohydrates/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/carbohydrates/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/carbohydrates/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/carbohydrates/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/carbohydrates/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/carbohydrates/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.4",
        title: "15.4 PROTEINS",
        links: [
            { href: "/nutrition/unit-15/proteins/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/proteins/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/proteins/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/proteins/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/proteins/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/proteins/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.5",
        title: "15.5 LIPIDS",
        links: [
            { href: "/nutrition/unit-15/lipids/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/lipids/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/lipids/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/lipids/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/lipids/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/lipids/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.6",
        title: "15.6 NUCLEIC ACIDS",
        links: [
            { href: "/nutrition/unit-15/nucleic-acids/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/nucleic-acids/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/nucleic-acids/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/nucleic-acids/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/nucleic-acids/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/nucleic-acids/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.7",
        title: "15.7 BASIC COMPONENTS OF FOOD",
        links: [
            { href: "/nutrition/unit-15/basic-components-of-food/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/basic-components-of-food/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/basic-components-of-food/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/basic-components-of-food/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/basic-components-of-food/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/basic-components-of-food/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "15.8",
        title: "15.8 REQUIRED DAILY INTAKE FOR YOUNG ADULTS",
        links: [
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/notes", text: "NOTES", icon: BookOpen },
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/nutrition/unit-15/required-daily-intake-for-young-adults/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
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
                Biochemistry
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