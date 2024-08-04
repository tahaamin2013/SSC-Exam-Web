"use client";
import Link from "next/link";
import { useState } from "react";

type Section = {
  id: string;
  link: string;
  title: string;
};

const data: Section[] = [
  { id: "1", link: "/unit-1", title: "Unit 1: Computer Systems" },
  {
    id: "2",
    link: "/unit-2",
    title: "Unit 2: Computational Thinking & Algorithms",
  },
  { id: "3", link: "/unit", title: "Unit 3: Prgramming Fundamentals" },
  { id: "4", link: "/unit", title: "Unit 4: Data And Analysis" },
  { id: "5", link: "/unit", title: "Unit 5: Application of Computer Science" },
  { id: "6", link: "/unit", title: "Unit 6: Impacts of Computing" },
  { id: "7", link: "/unit", title: "Unit 7: Entrepreneurship" },
  {
    id: "8",
    link: "/introduction-to-computers",
    title: "Unit 1S: Introduction to Computers",
  },
  {
    id: "9",
    link: "/computers-components",
    title: "Unit 2S: Computer Components",
  },
  {
    id: "9",
    link: "/input-and-output-devices",
    title: "Unit 3S: Input/Output Devices",
  },
  { id: "10", link: "/storage-devices", title: "Unit 4S: Storage devices" },
];
const UnitCard = ({ section }: { section: Section }) => (
  <Link
    href={section.link}
    className="group h-[130px] relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-px shadow-xl transition-all hover:p-1 hover:shadow-2xl"
  >
    <div className="relative h-[128px] rounded-xl bg-white p-5 transition-all group-hover:bg-transparent">
      <h2 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors">
        {section.title}
      </h2>
      <div className="mt-1 text-xs font-medium text-gray-500 group-hover:text-purple-200">
        Explore this unit
      </div>
      <div className="absolute bottom-3 right-2 rounded-full bg-purple-500 p-2 text-white opacity-0 transition-all group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </Link>
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Explore Our Units
        </h1>
        <div className="relative mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search units..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl rounded-full border-2 border-purple-300 bg-white py-3 pl-6 pr-12 text-lg shadow-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          {/* <Search className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-purple-500" /> */}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((section) => (
            <UnitCard key={section.id} section={section} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <p className="mt-8 text-center text-xl text-gray-600">
            No units found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}
