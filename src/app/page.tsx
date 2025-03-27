"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Section = {
  id: string;
  link: string;
  title: string;
  color: string;
};

const data: Section[] = [
  { id: "3", link: "/company-law", title: " CAF-2 Tax Practices", color: "#4ECDC4" },
  { id: "3", link: "/company-law", title: " CAF-3 Cost and Management Accounting", color: "#4ECDC4" },
  { id: "3", link: "/managerial-and-financial-analysis", title: " CAF-6 Managerial and Financial Analysis", color: "#4ECDC4" },
  { id: "3", link: "/company-law", title: " CAF-8 Audit and Assurance", color: "#4ECDC4" },
 
];

const UnitCard = ({
  section,
  onRedirect,
}: {
  section: Section;
  isRedirecting: boolean;
  onRedirect: () => void;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRedirect();
    setTimeout(() => {
      router.push(section.link);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={section.link} onClick={handleClick} className="block">
        <div className="relative h-48 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: section.color }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-30"></div>

          {/* Circles */}
          <div className="absolute top-3 left-4 w-[60px] h-[60px] bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-0 w-24 h-24 bg-white opacity-10 rounded-full transform translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white opacity-10 rounded-full transform translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl hover:text-3xl transition-all duration-500 h-full w-full flex justify-center items-center font-bold text-white text-center px-4">
              {section.title}
            </h2>
          </div>
        </div>
      </Link>
    </motion.div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
        >
The Institute of Chartered Accountants of Pakistan         </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-16 flex justify-center"
        >
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl rounded-full border-2 border-gray-700 bg-gray-800 py-4 px-6 text-lg text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </motion.div>

        <AnimatePresence>
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredData.map((section) => (
              <UnitCard
                key={section.id}
                section={section}
                isRedirecting={redirectingId === section.id}
                onRedirect={() => handleRedirect(section.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-16 text-center"
          >
            <p className="text-2xl font-semibold text-gray-300">
              No subjects found.
            </p>
            <p className="mt-2 text-gray-400">
              Try a different search term or explore our available subjects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
