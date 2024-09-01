"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "The conquest of Mecca (Arabic: فَتْحُ مَكَّةَ Fatḥu Makkah, alternatively, 'liberation of Mecca')",
        links: [
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/the-conquest-of-mecca/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "2",
        title: "The Battle of Hunayn (Arabic: غزوة حنين, romanized: Ghazwat Ḥunayn)",
        links: [
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/the-battle-of-hunayn/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "3",
        title: "Sanat al-wufūd (Arabic: سنة الوفود) or 'Ām al-wufūd (Arabic: عام الوفود), or the Year of Delegates",
        links: [
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/sanat-al-wufud/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "4",
        title: "The childhood and youth of Hazrat Muhammad (PBUH)",
        links: [
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/the-childhood-and-youth-of-hazrat-muhammad/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "5",
        title: "Hazoor Ka Zoq-e-Ibadat",
        links: [
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/hazoor-ka-zoq-e-ibadat/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "6",
        title: "The Generosity (Sakhawat) and Selflessness (Esar) of Prophet Muhammad",
        links: [
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/islamic-studies/chapter-3/the-generosity-and-selflessness-of-prophet-muhammad/detailed-questions",
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
                Seerat e Tayyiba            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;
