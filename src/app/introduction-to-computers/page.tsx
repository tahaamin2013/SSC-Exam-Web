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
        title: "1S.1 History and development of computers",
        links: [
            { href: "history-and-development-of-computers/notes", text: "Notes" },
            { href: "history-and-development-of-computers/mind-map", text: "Mind Map" },
            { href: "history-and-development-of-computers/quiz", text: "MCQs" },
            { href: "history-and-development-of-computers/brief-questions", text: "Brief Questions" },
            { href: "nfdsotes", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "1S.2 Impact of computers and the internet on society",
        links: [
            { href: "impact-of-computers-and-the-internet-on-society/notes", text: "Notes" },
            { href: "notfdses", text: "Mind Map" },
            { href: "impact-of-computers-and-the-internet-on-society/quiz", text: "MCQs" },
            { href: "impact-of-computers-and-the-internet-on-society/brief-questions", text: "Brief Questions" },
            { href: "notesfdsfds", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "1S.3 Introduction to programming languages (high level, medium level and low level) concepts of compiler, interpreter and assembler.",
        links: [
            { href: "introduction-to-programming-languages/notes", text: "Notes" },
            { href: "nfdsfdsafotes", text: "Mind Map" },
            { href: "introduction-to-programming-languages/quiz", text: "MCQs" },
            { href: "introduction-to-programming-languages/brief-questions", text: "Brief Questions" },
            { href: "nofdasfdstes", text: "Detailed Questions" },
        ],
    },
];

export default function page() {
    return (
        <div className="p-3">
            <h1 className="font-bold text-3xl">Unit 1S: Introduction to Computers</h1>
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
