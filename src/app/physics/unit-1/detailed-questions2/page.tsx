import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const questionsAndAnswers = [
    {
        question: "Define the branches of Physics.",
        answer: `
        1) Mechanics: Study of motion of objects, its causes and effects.
        2) Heat: Deals with nature, modes of transfer, and effects of heat.
        3) Sound: Concerns audible sound waves, their production, properties, and applications.
        4) Light: Focuses on properties of light, optical instruments, and their use.
        5) Electricity and Magnetism: Study of charges, their effects, and relationship with magnetism.
        6) Atomic Physics: Study of the structure and properties of atoms.
        7) Nuclear Physics: Deals with properties and behavior of atomic nuclei.
        8) Plasma Physics: Study of the fourth state of matter, ionized gases.
        9) Geophysics: Study of Earth's internal structure.
        `,
    },
    {
        question: "Explain the Importance of Physics in daily life.",
        answer: `
        1. Technologies: Modern technologies, such as cars, airplanes, and domestic appliances, are based on Physics principles.
        2. Communication: Devices like radios, TVs, telephones, and computers are results of Physics applications.
        3. Impact: Physics impacts commerce, industry, agriculture, education, and overall human life, improving standards of living.
        4. Challenges: Inventions also have caused environmental pollution and harmful effects.
        `,
    },
    {
        question: "Write a note on Vernier Calipers.",
        answer: `
        Vernier Calipers are used for precise measurements of small lengths.
        - Main Scale: Measures in centimeters and millimeters.
        - Vernier Scale: Allows reading smaller divisions accurately.
        - Pitch: 1 millimeter.
        `,
    },
    {
        question: "Pick out the base units in the following: Joule, Newton, kilogram, hertz, mole, ampere, meter, Kelvin, coulomb and watt.",
        answer: `
        Base units:
        - Kilogram (mass)
        - Mole (quantity of substance)
        - Ampere (electric current)
        - Meter (length)
        - Kelvin (temperature)
        `,
    },
    {
        question: "Find the base quantities involved in each of the following derived quantities:",
        subQuestions: [
            {
                question: "Speed",
                answer: `
                Speed = Distance / Time
                Base quantities: Length (m) and Time (s)
                Unit: m/s
                `,
            },
            {
                question: "Volume",
                answer: `
                Volume = Length x Breadth x Height
                Base quantities: Length (m)
                Unit: m³
                `,
            },
            {
                question: "Force",
                answer: `
                Force = Mass x Acceleration
                Base quantities: Mass (kg) and Acceleration (m/s²)
                Unit: kg·m/s² (Newton)
                `,
            },
            {
                question: "Work",
                answer: `
                Work = Force x Distance
                Base quantities: Force (Newton) and Distance (m)
                Unit: kg·m²/s² (Joule)
                `,
            },
        ],
    },
    {
        question: "Estimate your age in seconds.",
        answer: `
        Age in years: 15
        Age in days: 15 x 365.25 = 5478.75 days
        Age in hours: 5478.75 x 24 = 131490 hours
        Age in minutes: 131490 x 60 = 7889400 minutes
        Age in seconds: 7889400 x 60 = 473364000 seconds (approximately 4.73 x 10^8 seconds)
        `,
    },
    {
        question: "What role SI units have played in the development of science?",
        answer: `
        SI units provide a standard for measuring physical quantities, ensuring consistency and accuracy in scientific communication and research.
        `,
    },
    {
        question: "What are the types of zero errors in measurement instruments?",
        answer: `
        1. Positive Zero Error: Occurs if the zero of the scale is behind the index line.
        2. Negative Zero Error: Occurs if the zero of the scale is ahead of the index line.
        `,
    },
    {
        question: "What is a Physical Balance? And how is it used?",
        answer: `
        A Physical Balance is an instrument used to measure mass by comparing it to known masses.
        - Construction: Beam, fulcrum, and pans.
        - Procedure: Adjust leveling screws, place object and standard masses, and balance the beam.
        `,
    },
    {
        question: "Which one of the following is the most accurate: Beam balance, Physical balance, and Electronic balance?",
        answer: `
        The Electronic Balance is the most accurate, with precision up to 0.001 g or 1 mg.
        `,
    },
    {
        question: "Write a note on the Stopwatch.",
        answer: `
        A Stopwatch measures time intervals.
        - Mechanical Stopwatch: Measures up to 0.1 seconds.
        - Electronic/Digital Stopwatch: Measures up to 0.01 seconds.
        `,
    },
    {
        question: "What do you know about the Measuring Cylinder? How is the volume of liquids measured using this cylinder?",
        answer: `
        A Measuring Cylinder measures volumes of liquids and powders.
        - Construction: Transparent cylinder with a scale.
        - Measurement: Read volume at the bottom of the meniscus on a horizontal surface.
        `,
    },
    {
        question: "How is the volume of irregular shapes measured using the displacement method?",
        answer: `
        - Fill a measuring cylinder with liquid and note the initial volume.
        - Immerse the irregular solid and note the new volume.
        - Volume of the solid = New volume - Initial volume.
        `,
    },
    {
        question: "Define and explain Significant figures. What are the main points to be kept in mind while determining the significant figures of a result?",
        answer: `
        Significant figures are digits in a measurement that convey precision.
        - Non-zero digits are always significant.
        - Zeros between significant digits are significant.
        - Leading zeros are not significant.
        - Trailing zeros in decimals are significant.
        - Trailing zeros in whole numbers may or may not be significant.
        - Scientific notation ensures all digits before the power of 10 are significant.
        `,
    },
    {
        question: "Write down the rules to round off the numbers.",
        answer: `
        - If the last digit is less than 5, drop it.
        - If the last digit is more than 5, increase the preceding digit by 1.
        - If the last digit is exactly 5, round to the nearest even number.
        Examples:
        - 1.943 rounded to 1.94
        - 1.35 rounded to 1.4
        - 1.45 rounded to 1.4
        `,
    },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Detailed Questions and Answers on Physics (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {questionsAndAnswers.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                                {item.subQuestions &&
                                    item.subQuestions.map((subItem, subIndex) => (
                                        <div key={subIndex} className="mt-4">
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
