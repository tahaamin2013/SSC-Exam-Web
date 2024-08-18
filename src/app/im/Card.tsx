"use client";

import React, { useState } from "react";

interface SentenceSectionProps {
  title: string;
  category: "noun" | "adjective" | "preposition";
  subCategory: "Negative" | "Positive" | "Yes/No Questions";
  sentences: string[];
  onNext: () => void;
  onPrev: () => void;
  onSelectSubCategory: (subCategory: "Negative" | "Positive" | "Yes/No Questions") => void;
  currentSubCategory: "Negative" | "Positive" | "Yes/No Questions";
}

const Card = ({ learnAbout, data }: { learnAbout: string; data: any }) => {
  const [indexes, setIndexes] = useState({
    noun: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    adjective: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    preposition: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
  });

  const [currentSubCategories, setCurrentSubCategories] = useState({
    noun: "Negative",
    adjective: "Negative",
    preposition: "Negative",
  });

  const getSentences = (category: "noun" | "adjective" | "preposition", subCategory: "Negative" | "Positive" | "Yes/No Questions") => {
    return data[0][category].find((item: any) => item.name === subCategory)?.sentence || [];
  };

  const nextSentence = (category: "noun" | "adjective" | "preposition") => {
    const subCategory = currentSubCategories[category];
    const sentences = getSentences(category, subCategory);
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: (prevIndexes[category][subCategory] + 1) % sentences.length,
      },
    }));
  };

  const prevSentence = (category: "noun" | "adjective" | "preposition") => {
    const subCategory = currentSubCategories[category];
    const sentences = getSentences(category, subCategory);
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: (prevIndexes[category][subCategory] - 1 + sentences.length) % sentences.length,
      },
    }));
  };

  const handleSubCategoryChange = (category: "noun" | "adjective" | "preposition", subCategory: "Negative" | "Positive" | "Yes/No Questions") => {
    setCurrentSubCategories((prev) => ({
      ...prev,
      [category]: subCategory,
    }));
    // Reset the index to 0 when switching sub-categories
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: 0,
      },
    }));
  };

  const SentenceSection: React.FC<SentenceSectionProps> = ({
    title,
    category,
    subCategory,
    sentences,
    onNext,
    onPrev,
    onSelectSubCategory,
    currentSubCategory,
  }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-bold text-center py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        {title}
      </h2>
      <div className="p-6">
        <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-xl shadow-inner mb-4">
          <div className="text-xl font-semibold text-center mb-4 h-24 flex items-center justify-center text-gray-800">
            {sentences[indexes[currentSubCategory]]}
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => onPrev()}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transform transition hover:scale-105"
          >
            Back
          </button>
          <button
            onClick={() => onNext()}
            className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform transition hover:scale-105"
          >
            Next
          </button>
        </div>
        <div className="flex justify-around">
          {["Negative", "Positive", "Yes/No Questions"].map((type) => (
            <button
              key={type}
              onClick={() => onSelectSubCategory(type as "Negative" | "Positive" | "Yes/No Questions")}
              className={`px-4 py-2 font-bold rounded-full ${currentSubCategory === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Learn About {learnAbout}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SentenceSection
            title="Noun"
            category="noun"
            subCategory={currentSubCategories.noun}
            sentences={getSentences("noun", currentSubCategories.noun)}
            onNext={() => nextSentence("noun")}
            onPrev={() => prevSentence("noun")}
            onSelectSubCategory={(subCategory) => handleSubCategoryChange("noun", subCategory)}
            currentSubCategory={currentSubCategories.noun}
          />

          <SentenceSection
            title="Adjectives"
            category="adjective"
            subCategory={currentSubCategories.adjective}
            sentences={getSentences("adjective", currentSubCategories.adjective)}
            onNext={() => nextSentence("adjective")}
            onPrev={() => prevSentence("adjective")}
            onSelectSubCategory={(subCategory) => handleSubCategoryChange("adjective", subCategory)}
            currentSubCategory={currentSubCategories.adjective}
          />
          <SentenceSection
            title="With Preposition"
            category="preposition"
            subCategory={currentSubCategories.preposition}
            sentences={getSentences("preposition", currentSubCategories.preposition)}
            onNext={() => nextSentence("preposition")}
            onPrev={() => prevSentence("preposition")}
            onSelectSubCategory={(subCategory) => handleSubCategoryChange("preposition", subCategory)}
            currentSubCategory={currentSubCategories.preposition}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;