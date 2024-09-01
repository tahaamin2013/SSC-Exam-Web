"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "AQEEDAH OF TAWHEED (Monotheism)",
        links: [
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-2/aqeedah-of-tawheed/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "2",
        title: "Aqeeda-e-Risalat",
        links: [
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-2/aqeeda-e-risalat/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "3",
        title: "Prayer",
        links: [
            {
                href: "/islamic-studies/chapter-2/prayer/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-2/prayer/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-2/prayer/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-2/prayer/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-2/prayer/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-2/prayer/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "4",
        title: "Fasting",
        links: [
            {
                href: "/islamic-studies/chapter-2/fasting/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-2/fasting/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-2/fasting/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-2/fasting/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-2/fasting/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-2/fasting/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
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
        </div>);
};

const ComputerSystemsDashboard = () => {
    return (
        <div
            className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
            style={{
                fontFamily: '"Poppins", sans-serif',
            }}
        >
            <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
                Faith and Ibadah
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
