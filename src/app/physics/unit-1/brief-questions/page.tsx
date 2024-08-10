import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. How physics plays an important role in our life?</AccordionTrigger>
                        <AccordionContent>
                            Physics is fundamental in our daily life, from understanding how everyday objects work to the principles that govern modern technology. It explains the behavior of matter and energy, which influences everything from the functioning of electrical devices to the motion of vehicles and the operation of various machines.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. Estimate your age in minutes and seconds</AccordionTrigger>
                        <AccordionContent>
                            To estimate age in minutes and seconds, multiply the number of years by 525,600 (minutes per year) and 31,536,000 (seconds per year) respectively. For example, for a person who is 20 years old: 20 years x 525,600 minutes/year = 10,512,000 minutes, and 20 years x 31,536,000 seconds/year = 630,720,000 seconds.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. What base quantities are involved in these derived physical quantities; force, pressure, power, and charge?</AccordionTrigger>
                        <AccordionContent>
                            - **Force:** Length, Mass, Time (measured in Newtons: kg·m/s²)
                            - **Pressure:** Length, Mass, Time (measured in Pascals: kg/(m·s²))
                            - **Power:** Length, Mass, Time (measured in Watts: kg·m²/s³)
                            - **Charge:** Time, Ampere (measured in Coulombs)
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. Show that prefix micro is thousand times smaller than prefix milli.</AccordionTrigger>
                        <AccordionContent>
                            - **Milli (m)**: 10^-3 (1/1000)
                            - **Micro (µ)**: 10^-6 (1/1,000,000)
                            - **Comparison:** Micro is 1000 times smaller than milli because 10^-6 is 1000 times smaller than 10^-3.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Justify that displacement is a vector quantity while energy is a scalar quantity.</AccordionTrigger>
                        <AccordionContent>
                            - **Displacement:** Has both magnitude and direction (e.g., 10 meters north).
                            - **Energy:** Has magnitude only and no direction (e.g., 50 Joules).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. Screw gauge can give more precise length than vernier calipers. Briefly explain why?</AccordionTrigger>
                        <AccordionContent>
                            A screw gauge provides finer precision due to its smaller least count, typically 0.01 mm, compared to a vernier caliper which usually has a least count of 0.1 mm. This is because the screw gauge uses a rotating screw mechanism to measure length with greater accuracy.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. Differentiate between mechanical stopwatch and digital stopwatch.</AccordionTrigger>
                        <AccordionContent>
                            - **Mechanical Stopwatch:** Uses a manual mechanism with gears and springs to measure time, often less precise and requires manual operation.
                            - **Digital Stopwatch:** Uses electronic components and digital display for precise timing, often with additional features like lap timing and automatic reset.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>8. How measuring cylinder is used to measure volume of an irregular shaped stone?</AccordionTrigger>
                        <AccordionContent>
                            By submerging the stone in a measuring cylinder filled with water, the volume of displaced water, which corresponds to the volume of the stone, is measured.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>9. What precaution should be kept in mind while taking measurement using measuring cylinder?</AccordionTrigger>
                        <AccordionContent>
                            Ensure the measuring cylinder is on a flat surface and read the measurement at eye level to avoid parallax error. Also, ensure the liquid is at the bottom of the meniscus.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>10. Why do we need to consider significant digits in measurements?</AccordionTrigger>
                        <AccordionContent>
                            Significant digits indicate the precision of a measurement. They help in accurately reporting and communicating the degree of uncertainty in measurements, which is crucial for scientific calculations and comparisons.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>11. How random error can be reduced?</AccordionTrigger>
                        <AccordionContent>
                            Random errors can be minimized by taking multiple measurements and averaging the results. Using precise and calibrated instruments can also help reduce random errors.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>12. Differentiate between precision and accuracy.</AccordionTrigger>
                        <AccordionContent>
                            - **Precision:** Refers to the consistency or repeatability of measurements (how close multiple measurements are to each other).
                            - **Accuracy:** Refers to how close a measurement is to the true or accepted value.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
