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
                    {/* Existing Questions */}
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

                    {/* New Questions */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>13. What is the difference between base quantities and derived quantities? Give three examples in each case.</AccordionTrigger>
                        <AccordionContent>
                            - **Base Quantities:** Fundamental physical quantities that are not derived from other quantities. Examples: Length (meter), Mass (kilogram), Time (second).
                            - **Derived Quantities:** Quantities derived from base quantities through mathematical operations. Examples: Velocity (meter/second), Force (Newton), Energy (Joule).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>14. Pick out the base units in the following: joule, newton, kilogramme, hertz, mole, ampere, metre, kelvin, coulomb and watt.</AccordionTrigger>
                        <AccordionContent>
                            - **Base Units:** Kilogramme (kg), Metre (m), Ampere (A), Kelvin (K), Mole (mol), Second (s)
                            - **Derived Units:** Joule (J), Newton (N), Hertz (Hz), Coulomb (C), Watt (W)
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                        <AccordionTrigger>15. Find the base quantities involved in each of the following derived quantities: (a) speed (b) volume (c) force (d) work</AccordionTrigger>
                        <AccordionContent>
                            - **Speed:** Length, Time (e.g., meters/second)
                            - **Volume:** Length (e.g., cubic meters)
                            - **Force:** Length, Mass, Time (e.g., Newtons)
                            - **Work:** Length, Mass, Time (e.g., Joules)
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                        <AccordionTrigger>16. Estimate your age in seconds.</AccordionTrigger>
                        <AccordionContent>
                            To estimate age in seconds, multiply the number of years by 31,536,000 (seconds per year). For example, for a person who is 20 years old: 20 years x 31,536,000 seconds/year = 630,720,000 seconds.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-17">
                        <AccordionTrigger>17. What role SI units have played in the development of science?</AccordionTrigger>
                        <AccordionContent>
                            SI units provide a standardized system for measuring physical quantities, which allows for consistency and comparability in scientific research and communication globally. They help in reducing confusion and errors in measurement, facilitating advancements in technology and science.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-18">
                        <AccordionTrigger>18. What is meant by vernier constant?</AccordionTrigger>
                        <AccordionContent>
                            The vernier constant is the smallest length that can be measured with a vernier caliper. It is the difference between the main scale reading and the vernier scale reading per division. It determines the precision of the measurement.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-19">
                        <AccordionTrigger>19. What do you understand by the zero error of a measuring instrument?</AccordionTrigger>
                        <AccordionContent>
                            Zero error occurs when a measuring instrument does not read zero when the quantity being measured is zero. It leads to inaccuracies in measurements and needs to be corrected to ensure accurate readings.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-20">
                        <AccordionTrigger>20. Why is the use of zero error necessary in a measuring instrument?</AccordionTrigger>
                        <AccordionContent>
                            Correcting for zero error ensures that the instrument gives accurate readings. It prevents systematic errors that can skew results and affect the reliability of measurements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-21">
                        <AccordionTrigger>21. What is a stopwatch? What is the least count of a mechanical stopwatch you have used in the laboratories?</AccordionTrigger>
                        <AccordionContent>
                            A stopwatch is a device used to measure time intervals. The least count of a mechanical stopwatch typically ranges from 0.1 seconds to 0.01 seconds, depending on the model.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-22">
                        <AccordionTrigger>22. Why do we need to measure extremely small intervals of time?</AccordionTrigger>
                        <AccordionContent>
                            Measuring extremely small intervals of time is crucial for precise experiments and high-speed processes where accurate timing is essential, such as in scientific research, engineering, and technology development.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-23">
                        <AccordionTrigger>23. What is meant by significant figures of a measurement?</AccordionTrigger>
                        <AccordionContent>
                            Significant figures refer to the digits in a number that carry meaningful information about its precision. They include all non-zero digits, any zeros between significant digits, and any trailing zeros in the decimal portion.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-24">
                        <AccordionTrigger>24. How is precision related to the significant figures in a measured quantity?</AccordionTrigger>
                        <AccordionContent>
                            Precision is indicated by the number of significant figures in a measurement. More significant figures imply higher precision, as they reflect a finer level of detail and accuracy in the measurement.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
