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
        title: "Chapter 1: Main Memory",
        links: [
            { href: "storage-devices/main-memory/notes", text: "Notes" },
            { href: "storage-devices/main-memory/mind-map", text: "Mind Map" },
            { href: "storage-devices/main-memory/quiz", text: "MCQs" },
            { href: "storage-devices/main-memory/brief-questions", text: "Brief Questions" },
            { href: "storage-devices/nfdsotes", text: "Detailed Questions" },
        ],
    },
    {
        id: "2",
        title: "Chapter 2: Memory Units",
        links: [
            { href: "storage-devices/memory-units/notes", text: "Notes" },
            { href: "storage-devices/notfdses", text: "Mind Map" },
            { href: "storage-devices/memory-units/quiz", text: "MCQs" },
            { href: "storage-devices/memory-units/brief-questions", text: "Brief Questions" },
            { href: "storage-devices/notesfdsfds", text: "Detailed Questions" },
        ],
    },
    {
        id: "3",
        title: "Chapter 3: Secondary Memory",
        links: [
            { href: "storage-devices/secondary-memory/notes", text: "Notes" },
            { href: "storage-devices/nfdsfdsafotes", text: "Mind Map" },
            { href: "storage-devices/secondary-memory/quiz", text: "MCQs" },
            { href: "storage-devices/secondary-memory/brief-questions", text: "Brief Questions" },
            { href: "storage-devices/nofdasfdstes", text: "Detailed Questions" },
        ],
    },
];

export default function page() {
    return (
        <div className="p-3">
            <h1 className="font-bold text-3xl">Unit 4S: Storage devices</h1>
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
