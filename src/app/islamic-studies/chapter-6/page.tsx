"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";


const data = [
    {
        id: "1",
        title: "Hazrat Imam Zain ul Abideen",
        links: [
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-6/hazrat-imam-zain-ul-abideen/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "2",
        title: "The Noble Companions RA (Sahaba Karam RA)",
        links: [
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-6/noble-companions-ra/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "3",
        title: "The Noble Female Companions RA (Sahabiyat RA)",
        links: [
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-6/noble-female-companions-ra/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "4",
        title: "The Honorable Sufis (Soofiay e Karam)",
        links: [
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-6/honorable-sufis/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "5",
        title: "Scholars and Thinkers (Ulma o Mufakkirin)",
        links: [
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-6/scholars-and-thinkers/detailed-questions",
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
                Chapter Six: Sources of Guidance and Renowned Figures of Islam (Hidyat ke Sarchachmay aur Mashaheer e Islam)
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
