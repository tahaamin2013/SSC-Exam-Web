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
        title: "Chapter 1: Input Devices",
        links: [
            { href: "input-and-output-devices/input-devices/notes", text: "Notes" },
            { href: "input-and-output-devices/input-devices/mind-map", text: "Mind Map" },
            { href: "input-and-output-devices/input-devices/quiz", text: "MCQs" },
            { href: "input-and-output-devices/input-devices/brief-questions", text: "Brief Questions" },
            { href: "input-and-output-devices/nfdsotes", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "Chapter 2: Output Devices",
        links: [
            { href: "input-and-output-devices/output-devices/notes", text: "Notes" },
            { href: "input-and-output-devices/notfdses", text: "Mind Map" },
            { href: "input-and-output-devices/output-devices/quiz", text: "MCQs" },
            { href: "input-and-output-devices/output-devices/brief-questions", text: "Brief Questions" },
            { href: "input-and-output-devices/notesfdsfds", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "Chapter 3: How Input and Output Devices Work Together",
        links: [
            { href: "input-and-output-devices/how-input-and-output-devices-work-together/notes", text: "Notes" },
            { href: "input-and-output-devices/nfdsfdsafotes", text: "Mind Map" },
            { href: "input-and-output-devices/how-input-and-output-devices-work-together/quiz", text: "MCQs" },
            { href: "input-and-output-devices/how-input-and-output-devices-work-together/brief-questions", text: "Brief Questions" },
            { href: "input-and-output-devices/nofdasfdstes", text: "Detailed Questions" },
        ],
    },
    {
        id: "4",
        title: "Chapter 4: Choosing the Right Devices for Your Tasks",
        links: [
            { href: "input-and-output-devices/choosing-the-right-devices-for-your-tasks/notes", text: "Notes" },
            { href: "input-and-output-devices/nfdsfdsafotes", text: "Mind Map" },
            { href: "input-and-output-devices/choosing-the-right-devices-for-your-tasks/quiz", text: "MCQs" },
            { href: "input-and-output-devices/choosing-the-right-devices-for-your-tasks/brief-questions", text: "Brief Questions" },
            { href: "input-and-output-devices/nofdasfdstes", text: "Detailed Questions" },
        ],
    },
    {
        id: "5",
        title: "Chapter 5: The Future of Input and Output Devices",
        links: [
            { href: "input-and-output-devices/the-future-of-input-and-output-devices/notes", text: "Notes" },
            { href: "input-and-output-devices/nfdsfdsafotes", text: "Mind Map" },
            { href: "input-and-output-devices/the-future-of-input-and-output-devices/quiz", text: "MCQs" },
            { href: "input-and-output-devices/the-future-of-input-and-output-devices/brief-questions", text: "Brief Questions" },
            { href: "input-and-output-devices/nofdasfdstes", text: "Detailed Questions" },
        ],
    },

];

export default function page() {
    return (
        <div className="p-3">
            <h1 className="font-bold text-3xl">Unit3S: Input/Output Devices</h1>
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
