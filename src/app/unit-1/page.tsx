"use client";
import MyMindMap from "@/components/MyMindMap";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

type LinkData = {
    href: string;
    text: string;
};

type Section = {
    id: string;
    title: string;
    links: LinkData[];
};

const data: Section[] = [
    {
        id: "1",
        title: "1.1 History of Computer Systems and Computer Generations",
        links: [
            { href: "unit-1/history-of-computer-systems-and-computer-generations/notes", text: "Notes" },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/mind-map", text: "Mind Map" },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/quiz", text: "MCQs" },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/brief-questions", text: "Brief Questions" },
            { href: "unit-1/history-of-computer-systems-and-computer-generations/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "1.2 Understanding Systems and Their Types",
        links: [
            { href: "unit-1/understanding-systems-and-their-types/notes", text: "Notes" },
            { href: "unit-1/understanding-systems-and-their-types/mind-map", text: "Mind Map" },
            { href: "unit-1/understanding-systems-and-their-types/quiz", text: "MCQs" },
            { href: "unit-1/understanding-systems-and-their-types/brief-questions", text: "Brief Questions" },
            { href: "unit-1/understanding-systems-and-their-types/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "1.3 Core Components of a Computer System",
        links: [
            { href: "unit-1/core-components-of-a-computer-system/notes", text: "Notes" },
            { href: "unit-1/core-components-of-a-computer-system/mind-map", text: "Mind Map" },
            { href: "unit-1/core-components-of-a-computer-system/quiz", text: "MCQs" },
            { href: "unit-1/core-components-of-a-computer-system/brief-questions", text: "Brief Questions" },
            { href: "unit-1/core-components-of-a-computer-system/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "4",
        title: "1.4 Von Neumann Architecture",
        links: [
            { href: "unit-1/von-neumann-architecture/notes", text: "Notes" },
            { href: "unit-1/von-neumann-architecture/mind-map", text: "Mind Map" },
            { href: "unit-1/von-neumann-architecture/quiz", text: "MCQs" },
            { href: "unit-1/von-neumann-architecture/brief-questions", text: "Brief Questions" },
            { href: "unit-1/von-neumann-architecture/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "5",
        title: "1.5 Data Transmission within a computer system",
        links: [
            { href: "unit-1/data-transmission-within-a-computer-system/notes", text: "Notes" },
            { href: "unit-1/data-transmission-within-a-computer-system/mind-map", text: "Mind Map" },
            { href: "unit-1/data-transmission-within-a-computer-system/quiz", text: "MCQs" },
            { href: "unit-1/data-transmission-within-a-computer-system/brief-questions", text: "Brief Questions" },
            { href: "unit-1/data-transmission-within-a-computer-system/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "6",
        title: "1.6 Types and Hierarchy of Computer Memory",
        links: [
            { href: "unit-1/types-and-hierarchy-of-computer-memory/notes", text: "Notes" },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/mind-map", text: "Mind Map" },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/quiz", text: "MCQs" },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/brief-questions", text: "Brief Questions" },
            { href: "unit-1/types-and-hierarchy-of-computer-memory/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "7",
        title: "1.7 Software and Hardware Engineering",
        links: [
            { href: "unit-1/software-and-hardware-engineering/notes", text: "Notes" },
            { href: "unit-1/software-and-hardware-engineering/mind-map", text: "Mind Map" },
            { href: "unit-1/software-and-hardware-engineering/quiz", text: "MCQs" },
            { href: "unit-1/software-and-hardware-engineering/brief-questions", text: "Brief Questions" },
            { href: "unit-1/software-and-hardware-engineering/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "8",
        title: "1.8 Computer Software Multiple",
        links: [
            { href: "unit-1/computer-software-multiple/notes", text: "Notes" },
            { href: "unit-1/computer-software-multiple/mind-map", text: "Mind Map" },
            { href: "unit-1/computer-software-multiple/quiz", text: "MCQs" },
            { href: "unit-1/computer-software-multiple/brief-questions", text: "Brief Questions" },
            { href: "unit-1/computer-software-multiple/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "9",
        title: "1.9 Data Communication",
        links: [
            { href: "unit-1/data-communication/notes", text: "Notes" },
            { href: "unit-1/data-communication/mind-map", text: "Mind Map" },
            { href: "unit-1/data-communication/quiz", text: "MCQs" },
            { href: "unit-1/data-communication/brief-questions", text: "Brief Questions" },
            { href: "unit-1/data-communication/detailed-questions", text: "Detailed Questions" },
        ],
    },
    {
        id: "10",
        title: "Chapter Round up",
        links: [
            { href: "unit-1/summary", text: "Summary" },
            { href: "unit-1/quiz", text: "MCQS" },
            { href: "unit-1/brief-questions", text: "Brief Questions" },
            { href: "unit-1/detailed-questions", text: "Detailed Questions" },
            { href: "unit-1/content", text: "Content" },
        ],
    },
];

export default function page() {
    return (
        <div className="p-3">
            <h1 className="font-bold text-3xl">Computer Systems</h1>
            <div className="flex gap-6 flex-wrap mt-3">
                {data.map((section) => (
                    <div key={section.id} className="rounded-md flex flex-col gap-3 bg-white w-[400px] py-3 px-3 border shadow-xl">
                        <h1 className="font-bold text-lg">{section.title}</h1>
                        <div className="flex flex-row gap-4 flex-wrap">
                            {section.links.map((link) => (
                                <Link key={link.href} href={link.href} className="bg-violet-900 w-fit q py-2 text-center px-4 text-white rounded-xl">
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
