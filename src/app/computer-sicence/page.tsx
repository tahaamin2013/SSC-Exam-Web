'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Book, ChevronRight } from 'lucide-react';

type Section = {
    id: string;
    link: string;
    title: string;
};

const data: Section[] = [
    { id: "1", link: "/unit-1", title: "Unit 1: Computer Systems" },
    { id: "2", link: "/unit-2", title: "Unit 2: Computational Thinking & Algorithms" },
    { id: "3", link: "/unit-3", title: "Unit 3: Programming Fundamentals" },
    { id: "4", link: "/unit-4", title: "Unit 4: Data And Analysis" },
    { id: "5", link: "/unit-5", title: "Unit 5: Application of Computer Science" },
    { id: "6", link: "/unit-6", title: "Unit 6: Impacts of Computing" },
    { id: "7", link: "/unit-7", title: "Unit 7: Entrepreneurship" },
    // { id: "8", link: "/introduction-to-computers", title: "Unit 1S: Introduction to Computers" },
    // { id: "9", link: "/computers-components", title: "Unit 2S: Computer Components" },
    // { id: "10", link: "/input-and-output-devices", title: "Unit 3S: Input/Output Devices" },
    // { id: "11", link: "/storage-devices", title: "Unit 4S: Storage devices" },
];

const UnitCard = ({ section, isRedirecting, onRedirect }: { section: Section; isRedirecting: boolean; onRedirect: () => void }) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRedirect();
        setTimeout(() => {
            router.push(section.link);
        }, 1500); // Adjust this delay as needed
    };

    if (isRedirecting) {
        return (
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-100" />
                <div className="relative z-10 p-6 flex items-center justify-center h-full">
                    <p className="text-xl font-bold text-white animate-pulse">
                        Redirecting...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <a href={section.link} onClick={handleClick} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 p-6">
                <Book className="mb-4 h-8 w-8 text-purple-500 transition-colors duration-300 group-hover:text-white" />
                <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                    {section.title}
                </h2>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-purple-100">
                    Explore this unit
                </p>
                <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white" />
            </div>
        </a>
    );
};

export default function page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [redirectingId, setRedirectingId] = useState<string | null>(null);

    const filteredData = data.filter((section) =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRedirect = (id: string) => {
        setRedirectingId(id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-12 text-center text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    Dive into the World of Computer Science
                </h1>
                <div className="relative mb-16 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search units..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-2xl rounded-full border-2 border-purple-300 bg-white py-4 pl-6 pr-12 text-lg shadow-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300"
                    />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredData.map((section) => (
                        <UnitCard
                            key={section.id}
                            section={section}
                            isRedirecting={redirectingId === section.id}
                            onRedirect={() => handleRedirect(section.id)}
                        />
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className="mt-16 text-center">
                        <p className="text-2xl font-semibold text-gray-600">
                            No units found.
                        </p>
                        <p className="mt-2 text-gray-500">
                            Try a different search term or explore our available units.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}