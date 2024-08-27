'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
    {
        id: "1",
        title: "7.1 Density",
        links: [
            { href: "/physics/unit-7/density/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/density/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/density/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/density/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/density/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/density/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "2",
        title: "7.2 Measuring Densities of Defferent Substance",
        links: [
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/measuring-densities-of-defferent-substance/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "3",
        title: "7.3 STATES OF MATTER",
        links: [
            { href: "/physics/unit-7/states-of-matter/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/states-of-matter/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/states-of-matter/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/states-of-matter/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/states-of-matter/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/states-of-matter/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "4",
        title: "7.4 Plasma as a Fourth State Of Matter",
        links: [
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/plasma-as-a-fourth-state-of-matter/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.5 Relationship Between the Motion of Particles and Temperature",
        links: [
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/relationship-between-the-motion-of-particles-and-temperature/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.6 INTERNAL ENERGY AND TEMPERATURE OF A SUBSTANCE",
        links: [
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/internal-energy-and-temperature-of-a-substance/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.8 VARIATION IN PHYSICAL PROPERTIES AS A TOOL FOR MEASURING TEMPERATURE OF A SUBSTANCE",
        links: [
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/variation-in-physical-properties-as-a-tool-for-measuring-tempurature-of-a-substance/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.9 FIXED POINTS IN CALIBRATION OF THERMOMETRE",
        links: [
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/fixed-points-in-calibration-of-thermometere/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.10 SENSITIVITY, RANGE AND LINEARITY OF THERMOMETRES",
        links: [
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/sensitivity-range-and-linearity-of-thermometers/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.11 STRUCTURES AND FUNCTION OF LIQUID-IN-GLASS AND THERMOCOUPLE THERMOMETRES",
        links: [
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/structures-and-function-of-liquid-in-glass-thermocouple-thermometers/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.12 EFFECT OF STRUCTURE OF A LIQUID-IN-GLASS THERMOMETRE",
        links: [
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/original-content", text: "Original Content", icon: List },
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/notes", text: "Notes", icon: BookOpen },
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/mind-map", text: "Mind Map", icon: Brain },
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/quiz", text: "MCQs", icon: HelpCircle },
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/effect-of-sturcute-of-a-liquid-in-glass-thermometer/detailed-questions", text: "Detailed Questions", icon: List },
        ],
    },
    {
        id: "5",
        title: "Chapter Round up",
        links: [
            { href: "/physics/unit-7/summary", text: "Summary", icon: BookOpen },
            { href: "/physics/unit-7/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/physics/unit-7/brief-questions", text: "Brief Questions", icon: FileText },
            { href: "/physics/unit-7/detailed-questions", text: "Detailed Questions", icon: List },
            { href: "/physics/unit-7/content", text: "Content", icon: List },
        ],
    },
];

const Section = ({ section }: any) => {
    return (
        <div className="w-[400px] mb-6 py-6 px-5 rounded-3xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700">
            <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
            <div className="grid grid-cols-2 gap-3">
                {section.links.map((link: any) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center space-x-3 p-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
                    >
                        <div className="p-2 bg-purple-700 rounded-lg group-hover:bg-purple-600 transition-colors duration-200">
                            {React.createElement(link.icon, { size: 20 })}
                        </div>
                        <span className="text-sm font-medium">{link.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const ComputerSystemsDashboard = () => {
    return (
        <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800" style={{
            fontFamily: '"Poppins", sans-serif'
        }}>
            <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
                Density and Temperature
            </h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {data.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
};

export default ComputerSystemsDashboard;