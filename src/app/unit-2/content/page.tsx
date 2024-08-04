'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface SubChapter {
  title: string;
  children?: SubChapter[];
}

interface Chapter {
  title: string;
  gradient: string;
  subChapters?: SubChapter[];
}

const chapters: Chapter[] = [
  {
    title: "1. Problems",
    gradient: "from-purple-400 to-pink-500",
    subChapters: [
      { title: "1.1 Economic" },
      { title: "1.2 Healthcare" },
      { title: "1.3 Education" },
      { title: "1.4 Transportation" },
      { title: "1.5 Internet" },
      { title: "1.6 Biology" },
    ],
  },
  {
    title: "2. Identifying a Computing Problem",
    gradient: "from-yellow-400 to-orange-500",
    subChapters: [
      { title: "2.1 Decision Problems" },
      { title: "2.2 Search Problems" },
      { title: "2.3 Counting Problems" },
    ],
  },
  {
    title: "3. Problem Solving",
    gradient: "from-green-400 to-cyan-500",
    subChapters: [
      { title: "3.1 6 step problem solving process for complex problems" },
    ],
  },
  {
    title: "4. Input-Processing-Output (I-P-O) Model",
    gradient: "from-red-400 to-pink-500",
  },
  {
    title: "5. Input-Processing-Output (I-P-O) Chart",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "6. Computational Thinking",
    gradient: "from-blue-400 to-indigo-500",
    subChapters: [
      { title: "6.1 Importance of Computational Thinking" },
      { title: "6.2 Properties of computational Thinking" },
    ],
  },
  {
    title: "7. Principles of Computational Thinking",
    gradient: "from-teal-400 to-blue-500",
    subChapters: [
      { title: "7.1 Logical thinking" },
      { title: "7.2 Algorithmic Thinking" },
    ],
  },
  {
    title: "8. Methods to Design a Solution",
    gradient: "from-pink-400 to-purple-500",
    subChapters: [
      { 
        title: "8.1 Flowcharts",
        children: [
          { title: "8.1.1 Importance of flowchart in solving a problem" },
        ],
      },
      { title: "8.2 Larp" },
    ],
  },
  {
    title: "9. Concept Maps",
    gradient: "from-orange-400 to-red-500",
  },
];

const ChapterCard: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
  <motion.div 
    className={`chapter-card backdrop-blur-md bg-white bg-opacity-20 rounded-3xl shadow-lg overflow-hidden border border-white border-opacity-20`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`bg-gradient-to-r ${chapter.gradient} p-6 rounded-t-3xl`}>
      <h2 className="text-2xl font-bold text-white">{chapter.title}</h2>
    </div>
    {chapter.subChapters && (
      <ul className="p-6 space-y-3">
        {chapter.subChapters.map((subChapter, index) => (
          <motion.li 
            key={index} 
            className={`subchapter p-3 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm
                        hover:bg-opacity-20 transition-all duration-300 ease-in-out`}
            whileHover={{ x: 5 }}
          >
            {subChapter.title}
            {subChapter.children && (
              <ul className="ml-4 mt-2 space-y-1">
                {subChapter.children.map((child, childIndex) => (
                  <li key={childIndex} className="text-sm text-gray-200">{child.title}</li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ul>
    )}
  </motion.div>
);

const ChapterContent: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-16">
          Unit 2: Chapter Content
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;