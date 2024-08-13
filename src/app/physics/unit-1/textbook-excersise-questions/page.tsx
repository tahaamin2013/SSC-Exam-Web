import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const textbookQuestionsAndAnswers = [
    {
        question: "The number of base units in SI are:",
        options: [
            { label: "a) 3", value: "a" },
            { label: "b) 6", value: "b" },
            { label: "c) 7", value: "c" },
        ],
        answer: "c) 7",
    },
    {
        question: "Which one of the following unit is not a derived unit?",
        options: [
            { label: "a) Pascal", value: "a" },
            { label: "b) kilogram", value: "b" },
            { label: "c) Newton", value: "c" },
            { label: "d) watt", value: "d" },
        ],
        answer: "b) kilogram",
    },
    {
        question: "Amount of a substance in terms of numbers is measured in:",
        options: [
            { label: "a) Gram", value: "a" },
            { label: "b) kilogram", value: "b" },
            { label: "c) Newton", value: "c" },
            { label: "d) mole", value: "d" },
        ],
        answer: "d) mole",
    },
    {
        question: "An interval of 200 µs is equivalent to:",
        options: [
            { label: "a) 0.2 s", value: "a" },
            { label: "b) 0.02 s", value: "b" },
            { label: "c) 2 x 10^-4 s", value: "c" },
            { label: "d) 2 x 10^-6 s", value: "d" },
        ],
        answer: "d) 2 x 10^-4 s",
    },
    {
        question: "Which one of the following is the smallest quantity?",
        options: [
            { label: "a) 0.01 g", value: "a" },
            { label: "b) 2 mg", value: "b" },
            { label: "c) 100 µg", value: "c" },
            { label: "d) 5000 ng", value: "d" },
        ],
        answer: "d) 5000 ng",
    },
    {
        question: "Which instrument is most suitable to measure the internal diameter of a test tube?",
        options: [
            { label: "a) Meter rule", value: "a" },
            { label: "b) Vernier calipers", value: "b" },
            { label: "c) Measuring tape", value: "c" },
            { label: "d) Screw gauge", value: "d" },
        ],
        answer: "b) Vernier calipers",
    },
    {
        question: "A student claimed the diameter of a wire as 1.032 cm using vernier calipers. To what extent do you agree with it?",
        options: [
            { label: "a) 1 cm", value: "a" },
            { label: "b) 1.0 cm", value: "b" },
            { label: "c) 1.03 cm", value: "c" },
        ],
        answer: "c) 1.03 cm",
    },
    {
        question: "A measuring cylinder is used to measure:",
        options: [
            { label: "a) Mass", value: "a" },
            { label: "b) Area", value: "b" },
            { label: "c) Volume", value: "c" },
            { label: "d) Length", value: "d" },
        ],
        answer: "c) Volume",
    },
    {
        question: "A student noted the thickness of a grass sheet using a scale. It reads 3 divisions while an 8th division on the index line. Its thickness is:",
        options: [
            { label: "a) 3.8 cm", value: "a" },
            { label: "b) 3.08 cm", value: "b" },
            { label: "c) 3.08 mm", value: "c" },
            { label: "d) 3.08 m", value: "d" },
        ],
        answer: "c) 3.08 mm",
    },
    {
        question: "Significant figures in an expression are:",
        options: [
            { label: "a) All the digits", value: "a" },
            { label: "b) All the accurately known digits", value: "b" },
            { label: "c) All the accurately known digits and the first doubtful digit", value: "c" },
            { label: "d) All the accurately known and all the doubtful digits", value: "d" },
        ],
        answer: "c) All the accurately known digits and the first doubtful digit",
    },
    {
        question: "Identify the base quantity in the following:",
        options: [
            { label: "a) Speed", value: "a" },
            { label: "b) Area", value: "b" },
            { label: "c) Force", value: "c" },
            { label: "d) Distance", value: "d" },
        ],
        answer: "d) Distance",
    },
    {
        question: "What is the difference between base quantities and derived quantities? Give three examples in each case.",
        answer: `
        **Base Quantities:**
        The physical quantities which form the foundation for other physical quantities are called base quantities.
        Examples:
        - Length
        - Time
        - Mass

        **Derived Quantities:**
        Physical quantities which can be described in terms of base quantities are known as derived quantities.
        Examples:
        - Force
        - Area
        - Volume
        `,
    },
    {
        question: "Pick out the base units in the following: Joule, Newton, kilogram, hertz, mole, ampere, meter, Kelvin, coulomb and watt.",
        answer: `
        **Base Units:**
        - Kilogram (unit of mass)
        - Mole (unit of quantity of substance)
        - Ampere (unit of electric current)
        - Meter (unit of length)
        - Kelvin (unit of temperature)
        `,
    },
    {
        question: "Find the base quantities involved in each of the following derived quantities:",
        subQuestions: [
            {
                question: "(a) Speed",
                answer: `
                Speed = Distance / Time
                - Unit of Speed: m/s
                - Base Quantities: Length, Time
                `,
            },
            {
                question: "(b) Volume",
                answer: `
                Volume = Length x Breadth x Height
                - Unit of Volume: m³
                - Base Quantities: Length
                `,
            },
            {
                question: "(c) Force",
                answer: `
                Force = Mass x Acceleration
                - Unit of Force: N (Newton)
                - Base Quantities: Mass, Length, Time
                `,
            },
            {
                question: "(d) Work",
                answer: `
                Work = Force x Distance
                - Unit of Work: J (Joule)
                - Base Quantities: Mass, Length, Time
                `,
            },
        ],
    },
    {
        question: "Estimate your age in seconds.",
        answer: `
        **Age Calculation:**
        - Age in days: 15 x 365.25 = 5478.75 days
        - Age in hours: 5478.75 x 24 = 131490 hours
        - Age in minutes: 131490 x 60 = 7889400 minutes
        - Age in seconds: 7889400 x 60 = 473364000 seconds
        - Age in scientific notation: 4.73 x 10^8 seconds
        `,
    },
    {
        question: "What role SI units have played in the development of science?",
        answer: `With the developments in the field of science and technology, the need for a commonly acceptable system of units was seriously felt all over the world, particularly to exchange scientific and technical information.`,
    },
    {
        question: "What is meant by vernier constant?",
        answer: `"The difference between one main scale division and one vernier division is called vernier constant. This is the minimum length which can be measured accurately with the help of a vernier scale. That is why it is called the least count of vernier callipers."`,
    },
    {
        question: "What do you understand by the zero error of a measuring instrument?",
        answer: `In Vernier Calipers, if the zero of the main scale does not coincide with the zero of the vernier scale, then the error is called zero error.`,
    },
    {
        question: "Why is the use of zero error necessary in a measuring instrument?",
        answer: `The use of zero error is necessary in a measuring instrument to take correct measurements by compensating for any zero error present in the instrument.`,
    },
    {
        question: "What is a stopwatch? What is the least count of a mechanical stopwatch you have used in the laboratories?",
        answer: `"A stopwatch is an instrument used to measure the time interval or specific period of an event. A mechanical stopwatch used in laboratories can measure a time interval up to a minimum of 0.1 seconds."`,
    },
    {
        question: "Why do we need to measure extremely small intervals of time?",
        answer: `Instantaneous time rate of change of a variable is calculated with the help of small intervals of time.`,
    },
    {
        question: "What is meant by significant figures of a measurement?",
        answer: `In any measurement, the accurately known digits and the first doubtful digit are known as significant figures.`,
    },
    {
        question: "How is precision related to the significant figures in a measured quantity?",
        answer: `An improvement in the quality of measurement by using better instruments increases the significant figures in the measured result. The significant figures are all the digits that are known accurately and the one estimated one. More significant figures mean greater precision.`,
    },
];

const Page = () => {
    return (
        <section
            id="textbook-exercises"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Textbook Exercise Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {textbookQuestionsAndAnswers.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.options && (
                                    <ul className="list-disc pl-5 mb-2">
                                        {item.options.map((option, idx) => (
                                            <li key={idx}>{option.label}</li>
                                        ))}
                                    </ul>
                                )}
                                <p>{item.answer}</p>
                                {item.subQuestions && item.subQuestions.map((subItem, subIndex) => (
                                    <div key={subIndex} className="mt-2">
                                        <strong>{subItem.question}</strong>
                                        <p>{subItem.answer}</p>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
