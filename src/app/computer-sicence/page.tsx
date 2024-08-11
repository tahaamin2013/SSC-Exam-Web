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
    { id: "1", link: "/computer-sicence/unit-1", title: "Unit 1: Computer Systems" },
    { id: "2", link: "/computer-sicence/unit-2", title: "Unit 2: Computational Thinking & Algorithms" },
    { id: "3", link: "/computer-sicence/unit-3", title: "Unit 3: Programming Fundamentals" },
    { id: "4", link: "/computer-sicence/unit-4", title: "Unit 4: Data And Analysis" },
    { id: "5", link: "/computer-sicence/unit-5", title: "Unit 5: Application of Computer Science" },
    { id: "6", link: "/computer-sicence/unit-6", title: "Unit 6: Impacts of Computing" },
    { id: "7", link: "/computer-sicence/unit-7", title: "Unit 7: Entrepreneurship" },
    // { id: "8", link: "/computer-sicence/introduction-to-computers", title: "Unit 1S: Introduction to Computers" },
    // { id: "9", link: "/computer-sicence/computers-components", title: "Unit 2S: Computer Components" },
    // { id: "10", link: "/computer-sicence/input-and-output-devices", title: "Unit 3S: Input/Output Devices" },
    // { id: "11", link: "/computer-sicence/storage-devices", title: "Unit 4S: Storage devices" },
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
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
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
        <Link href={section.link} onClick={handleClick} className="group relative overflow-hidden rounded-2xl  shadow-lg shadow-white/5 transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 p-6">
                <Book className="mb-4 h-8 w-8 text-purple-500 transition-colors duration-300 group-hover:text-white" />
                <h2 className="mb-2 text-xl font-bold  text-zinc-200 transition-colors duration-300 group-hover:text-white">
                    {section.title}
                </h2>
                <p className="text-sm text-zinc-200 transition-colors duration-300 group-hover:text-purple-100">
                    Explore this unit
                </p>
                <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white" />
            </div>
        </Link>
    );
};

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [redirectingId, setRedirectingId] = useState<string | null>(null);

    const filteredData = data.filter((section) =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRedirect = (id: string) => {
        setRedirectingId(id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-12 text-center text-5xl font-extrabold leading-tight tracking-tight text-transparent text-white">
                    Dive into the World of Computer Science
                </h1>
                <div
                    className="relative mb-16 flex justify-center"
                >
                    <input
                        type="text"
                        placeholder="Search subjects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-2xl rounded-full border-2 border-gray-700 bg-gray-800 py-4 px-6 text-lg text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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
                        <p className="text-2xl font-semibold text-white">
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

export default Page;
