import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionsAndAnswers = [
  {
    question: "Why do we study physics?",
    answer: `
        The rapid progress in science during the recent years has become possible due to the discoveries and inventions in the field of Physics. The technologies are the applications of scientific principles. Most of the technologies of our modern society throughout the world are related to Physics.
        `,
  },
  {
    question: "Name any five branches of Physics.",
    answer: `
        1. Mechanics
        2. Heat
        3. Sound
        4. Light (Optics)
        5. Atomic Physics
        `,
  },
  {
    question: "How can you differentiate between base and derived quantities?",
    answer: `
        **Base Quantities:** The physical quantities which form the foundation for other physical quantities are called base quantities. Examples: length, time, mass.

        **Derived Quantities:** All the quantities which can be described in terms of base quantities are known as derived quantities. Examples: Force, area, volume, density.
        `,
  },
  {
    question:
      "Identify the following as base or derived quantity: Density, force, mass, speed, time, length, temperature, and volume.",
    answer: `
        **Base Units:**
        - Mass
        - Time
        - Length
        - Temperature

        **Derived Units:**
        - Density
        - Force
        - Speed
        - Volume
        `,
  },
  {
    question: "Name five prefixes most commonly used.",
    answer: `
        1. Kilo (k) = 10^3
        2. Mega (M) = 10^6
        3. Giga (G) = 10^9
        4. Milli (m) = 10^-3
        5. Nano (n) = 10^-9
        `,
  },
  {
    question:
      "The Sun is one hundred and fifty million kilometers away from the Earth. Write this (a) as an ordinary whole number and (b) in scientific notation.",
    answer: `
        **(a)** As an ordinary whole number: 150,000,000 km or 150,000,000,000 m

        **(b)** In scientific notation: 1.5 x 10^8 km
        `,
  },
  {
    question: "Write the numbers given below in scientific notation:",
    subQuestions: [
      {
        question: "3,000,000,000 m",
        answer: `3.0 x 10^9 m`,
      },
      {
        question: "6,400,000 m",
        answer: `6.4 x 10^6 m`,
      },
      {
        question: "0.0000000016 g",
        answer: `1.6 x 10^-9 g`,
      },
      {
        question: "0.0000548 s",
        answer: `5.48 x 10^-5 s`,
      },
    ],
  },
  {
    question: "What is the least count of the Vernier Callipers?",
    answer: `The least count of Vernier Callipers is 0.1 mm or 0.01 cm.`,
  },
  {
    question: "How many divisions are there on its Vernier scale?",
    answer: `There are 10 divisions on the Vernier scale.`,
  },
  {
    question: "Why do we use zero correction?",
    answer: `Zero correction is used to take accurate measurements by compensating for any zero error present in the measuring instrument.`,
  },
  {
    question: "What is the least count of a screw gauge?",
    answer: `The least count of a screw gauge is 0.01 mm or 0.001 cm.`,
  },
  {
    question: "What is the pitch of your laboratory screw gauge?",
    answer: `The pitch of the laboratory screw gauge is typically 1 mm.`,
  },
  {
    question:
      "What is the range of the two instruments: Vernier Calipers and Screw Gauge, and why?",
    answer: `
        The Screw Gauge is more precise because it can measure accurately up to one hundredth part of a millimeter, while Vernier Calipers can only measure accurately up to one tenth part of a millimeter.
        `,
  },
  {
    question: "What is the function of balancing screws in a physical balance?",
    answer: `The function of the balancing screws in a physical balance is to ensure that the pans are level and the balance is accurate.`,
  },
  {
    question: "On which pan do we place the object and why?",
    answer: `We place the object on the left pan because standard masses are placed on the right pan.`,
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
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
                {item.subQuestions &&
                  item.subQuestions.map((subItem, subIndex) => (
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
};

export default Page;
