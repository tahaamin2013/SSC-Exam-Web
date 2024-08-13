import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const problemsAndSolutions = [
    {
        question: "Express the following quantities using prefixes:",
        subQuestions: [
            {
                question: "(a) 5000 g",
                answer: "5000 g = 5 x 10^3 g = 5 kg",
            },
            {
                question: "(b) 2000000 W",
                answer: "2000000 W = 2 x 10^6 W = 2 MW",
            },
            {
                question: "(c) 52 x 10^6 kg",
                answer: "52 x 10^6 kg = 5.2 x 10^7 kg = 5.2 x 10^7 g",
            },
            {
                question: "(d) 225 x 10^3 s",
                answer: "225 x 10^3 s = 2.25 x 10^5 s",
            },
        ],
    },
    {
        question: "How do the prefixes micro, nano, and pico relate to each other?",
        answer: `
        1 pico (p) = 10^-12
        1 nano (n) = 10^-9
        1 micro (µ) = 10^-6
        
        Therefore:
        1 n = 1000 p
        1 µ = 1000 n
        `,
    },
    {
        question: "Your hairs grow at the rate of 1 mm per day. Find their growth rate in meters per second.",
        answer: `
        Rate of growth = 1 mm/day
        
        Convert 1 mm to meters: 1 mm = 0.001 m
        
        Number of seconds in a day = 24 x 60 x 60 = 86400 s
        
        Growth rate = 0.001 m / 86400 s = 1.157 x 10^-8 m/s
        `,
    },
    {
        question: "Rewrite the following in standard form:",
        subQuestions: [
            {
                question: "(a) 116810",
                answer: "116810 = 1.1681 x 10^5",
            },
            {
                question: "(b) 32 x 10^3",
                answer: "32 x 10^3 = 3.2 x 10^4",
            },
            {
                question: "(c) 725 x 10^-3 kg",
                answer: "725 x 10^-3 kg = 7.25 x 10^-1 kg",
            },
            {
                question: "(d) 0.02 x 10^4",
                answer: "0.02 x 10^4 = 2.0 x 10^2",
            },
        ],
    },
    {
        question: "Write the following quantities in standard form:",
        subQuestions: [
            {
                question: "(a) 6400 km",
                answer: "6400 km = 6.4 x 10^3 km",
            },
            {
                question: "(b) 330,000 km",
                answer: "330,000 km = 3.3 x 10^5 km",
            },
            {
                question: "(c) 300,000,000 ms",
                answer: "300,000,000 ms = 3.0 x 10^8 ms",
            },
            {
                question: "(d) Seconds in a day",
                answer: `
                Number of seconds in a day = 24 x 60 x 60 = 86400 s
                86400 s = 8.64 x 10^4 s
                `,
            },
        ],
    },
    {
        question: "Die on closing the jaws of a vernier calipers, zero of the Vernier scale is on the right of the main scale such that the 4th division of its Vernier scale coincides with one of the main scale divisions. Find its zero error and zero correction.",
        answer: `
        Number of divisions of Vernier scale = 50
        Least count of Vernier calipers = 0.01 mm
        
        Zero error = 4 x 0.01 mm = 0.04 mm (Positive as it is on the right side)
        Zero correction = -0.04 mm
        `,
    },
    {
        question: "A screw gauge has 50 divisions on its circular scale. The pitch of the screw gauge is 6.5 mm. What is its least count?",
        answer: `
        Pitch of screw gauge = 6.5 mm
        Number of circular scale divisions = 50
        
        Least count = Pitch / Number of circular scale divisions
        Least count = 6.5 mm / 50 = 0.13 mm = 0.013 cm
        `,
    },
    {
        question: "Which of the following quantities have three significant figures?",
        subQuestions: [
            {
                question: "(a) 3.0066 m",
                answer: "Does not have three significant figures",
            },
            {
                question: "(b) 0.00309 kg",
                answer: "Has three significant figures",
            },
            {
                question: "(c) 5.05 x 10^2 kg",
                answer: "Has three significant figures",
            },
            {
                question: "(d) 2001",
                answer: "Has four significant figures",
            },
        ],
    },
    {
        question: "What are the significant figures in the following measurements?",
        subQuestions: [
            {
                question: "(a) 1,009 m",
                answer: "Has four significant figures",
            },
            {
                question: "(b) 0.00450 kg",
                answer: "Has three significant figures",
            },
            {
                question: "(c) 1.66 x 10^2 kg",
                answer: "Has three significant figures",
            },
            {
                question: "(d) 2001",
                answer: "Has four significant figures",
            },
        ],
    },
    {
        question: "A chocolate wrapper is 6.7 cm long and 5.4 cm wide. Calculate its area up to a reasonable number of significant figures.",
        answer: `
        **Given data:**
        - Length = 6.7 cm
        - Width = 5.4 cm

        **Required:**
        - Area of chocolate wrapper

        **Solution:**
        Area = Length x Width
        Area = 6.7 cm x 5.4 cm = 36.18 cm²

        **Reasonable significant figures:**
        Since the measurements have 2 significant figures each, the area should also be expressed with 2 significant figures.

        **Area = 36 cm²**
        `,
    },
];

const Page = () => {
    return (
        <section
            id="problems-solutions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Problems and Solutions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {problemsAndSolutions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.subQuestions && item.subQuestions.map((subItem, subIndex) => (
                                    <div key={subIndex} className="mt-2">
                                        <strong>{subItem.question}</strong>
                                        <p>{subItem.answer}</p>
                                    </div>
                                ))}
                                {item.answer && !item.subQuestions && (
                                    <p>{item.answer}</p>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
