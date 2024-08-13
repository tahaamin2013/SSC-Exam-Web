import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const questionsAndAnswers = [
    {
        question: "What is Science?",
        answer: "The knowledge gained through observations and experimentations is called science. The word science is derived from the Latin work scientia which means knowledge."
    },
    {
        question: "What is Physics?",
        answer: "Physics is that branch of science in which we study matter, energy and their interaction. The laws and principles of physics help us to understand nature."
    },
    {
        question: "What are the physical quantities?",
        answer: "All measurable quantities are called physical quantities. These are characteristics of every object which are used to be measured to specify them. These characteristics of the object are known as physical quantities. Example: Length, time, mass, force, speed, volume, density etc."
    },
    {
        question: "What are the basic characteristics of physical quantities?",
        answer: "A physical quantity possesses at least two characteristics in common: (1) Numerical magnitude (ii) Unit in which it is measured."
    },
    {
        question: "What are the base quantities?",
        answer: "The physical quantities which form the foundation for other physical quantities are called base quantities. Base quantities are the quantities on the basis of which other quantities are expressed. Example: Length, time, mass, electric current, intensity of light, quantity of matter, temperature. These are seven quantities in total."
    },
    {
        question: "What are the derived quantities?",
        answer: "All the quantities, which can be described in terms of base quantities, are known as derived quantities. The quantities that are expressed in terms of base quantities are called derived quantities. Example: Force, area, volume, density etc."
    },
    {
        question: "Why is a standard unit needed to measure a quantity correctly?",
        answer: "To measure a quantity, we need to compare it with some standard quantity. While measuring the physical quantity, we have to see how many times this quantity is bigger or smaller than the standard quantity. Therefore, a standard unit is needed to measure a quantity correctly."
    },
    {
        question: "What do you know about the International System of Units (SI)?",
        answer: "With the development in the field of science and technology, the need for a commonly acceptable system of units was seriously felt all over the world, particularly to exchange scientific and technical information. The eleventh General Conference on Weights and Measures held in Paris in 1960 adopted a worldwide system of measurements called the International System of Units (SI)."
    },
    {
        question: "What do you know about prefixes?",
        answer: "Multiples and sub-multiples of units can be expressed in terms of prefixes. Prefixes are the words or letters added before SI units. Examples: Kilo (k) = 10^3, Mega (M) = 10^6, Giga (G) = 10^9, Milli (m) = 10^-3, Nano (n) = 10^-9. Examples of usage of prefixes: 200,000 ms = 200 x 10^3 ms, 4,800,000 W = 4.8 x 10^6 W, 3,300,000,000 Hz = 3.3 x 10^9 Hz."
    },
    {
        question: "How are numbers expressed in Scientific Notation?",
        answer: "Very small or very large numbers are expressed conveniently by using the scientific method based on some power of ten multiplied by a number between 1 and 10. Example: Distance of moon from the Earth is 384,000,000 meters which is written in scientific notation as 3.84 x 10^8 m. 0.0045 is written in scientific notation as 4.5 x 10^-3."
    },
    {
        question: "What do you know about Meter Rule?",
        answer: "It is an instrument used in laboratories to measure the length of an object or distance between two points. It is one meter long which is equal to 100 centimeters. Each centimeter is divided into 10 small divisions called millimeters (mm). The least count of a meter rule is 1 mm. This is the minimum length that can be accurately measured by the meter rule. Precautions: While measuring the length or distance with the help of a meter rule, we should keep the eye vertically above the reading point."
    },
    {
        question: "Explain the statement, 'A micrometer screw gauge measures more accurately than a vernier caliper'.",
        answer: "A micrometer screw gauge can measure more accurately than a vernier caliper because a micrometer screw gauge can accurately measure up to one hundredth part of a millimeter, whereas vernier calipers can only measure accurately up to one tenth part of a millimeter."
    },
    {
        question: "What do you know about Lever Balance?",
        answer: "A lever balance consists of a system of levers. When a lever is lifted placing an object in one pan and standard masses on the other pan, the pointer of the lever system moves. The pointer is brought to zero by varying standard masses."
    },
    {
        question: "What is an electronic balance? What is its range? And how is mass measured by using an electronic balance?",
        answer: "An electronic balance is an instrument used to measure the mass of an object electronically. It comes in various ranges: milligram ranges, gram ranges, and kilogram ranges. Procedure to measure mass: Before measuring the mass of an object, the balance is switched on and its reading is set to zero. Next, the object is placed on the balance, and the reading on the balance gives the mass of the body."
    },
    {
        question: "What do you know about Measuring Tape?",
        answer: "Measuring tapes are used to measure length in meters and centimeters. They are used by blacksmiths and carpenters. Formation: A measuring tape consists of a thin long strip of cotton, metal, or plastic. It can generally measure 10 m, 20 m, 50 m, or 100 m. Measuring tapes are marked in centimeters as well as in inches."
    }
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers Physics (3 marks each)
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
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
