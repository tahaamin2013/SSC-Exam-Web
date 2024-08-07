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
  { id: "1", link: "/computer-sicence", title: "Computer Scince" },
  { id: "2", link: "/chemistry", title: "Chemistry" },
  { id: "3", link: "/physics", title: "Physics" },
  { id: "4", link: "/pak-studies", title: "Pak Studies" },
  { id: "5", link: "/islamic-studies", title: "Islamic Studies" },
  { id: "6", link: "/english", title: "English" },
  { id: "7", link: "/urdu", title: "Urdu" },
  { id: "8", link: "/mathematics", title: "Mathematics" },
  { id: "9", link: "/tarjuma-tul-guran-ul-majeed", title: "TARJUMA -TUL-QURAN -UL MAJEED" },
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
    <Link href={section.link} onClick={handleClick} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 p-6">
        <Book className="mb-4 h-8 w-8 text-purple-500 transition-colors duration-300 group-hover:text-white" />
        <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
          {section.title}
        </h2>
        <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-purple-100">
          Explore this Subject
        </p>
        <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white" />
      </div>
    </Link>
  );
};

export default function Home() {
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
        <h1 className="mb-12 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          SSC-1 (9th Class) Subjects <br /> FBISE Islamabad
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