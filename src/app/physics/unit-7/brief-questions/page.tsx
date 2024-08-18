import React from "react";
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
                Brief Questions and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Two liquids A and B, have densities 1 g/mL and 1.2 g/mL respectively. When both liquids are poured into a container, one liquid floats on top of the other. Which liquid is on top, and why?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Liquid A, with a density of 1 g/mL, will float on top of liquid B, which has a density of 1.2 g/mL. This is because a liquid with a lower density will float on top of a liquid with a higher density due to the principle of buoyancy.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Write a method to find the volume and density of a human body.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                To find the volume of the human body, use the water displacement method. Submerge the person in a large container filled with water and measure the volume of displaced water. The volume of the displaced water equals the volume of the body. To find the density, divide the body mass (measured using a scale) by the volume.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            How is plasma the fourth state of matter? Give a reason.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Plasma is considered the fourth state of matter because it consists of ionized gases with free electrons and ions. Unlike solids, liquids, and gases, plasma has unique properties such as electrical conductivity and responsiveness to magnetic fields, which arise due to the high energy and ionization of its particles.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Why is water not used in liquid-in-glass thermometers?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Water is not used in liquid-in-glass thermometers because it has a high freezing point and a relatively narrow range of boiling points compared to other liquids like mercury or alcohol. This limits its usefulness in measuring a wide range of temperatures.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Can we increase the internal energy of a substance without increasing its temperature?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Yes, internal energy can be increased without changing the temperature if work is done on the substance or if energy is added through other means such as phase changes (e.g., melting or vaporization) where latent heat is involved.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Why are fixed point scales required for thermometers? What difficulties are there when setting fixed points for thermometer scales?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Fixed point scales are required for thermometers to provide accurate and reliable temperature measurements by calibrating the thermometer against known temperatures, such as the freezing and boiling points of water. Difficulties in setting fixed points include achieving precise and stable temperatures, as well as dealing with the potential for calibration errors and variations in the thermometer&apos;s material properties.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            Mercury is replaced with alcohol in liquid-in-glass thermometers. Discuss the possible change in sensitivity and range of the thermometer.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Replacing mercury with alcohol in liquid-in-glass thermometers generally increases sensitivity because alcohol expands more than mercury for a given temperature change. However, the range of the thermometer may be reduced because alcohol has a lower boiling point and a higher freezing point compared to mercury.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Why -273.15°C temperature is called absolute zero? Can we achieve this temperature?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                -273.15°C is called absolute zero because it is the theoretical temperature at which all molecular motion ceases, representing the lowest possible temperature on the Kelvin scale (0 K). According to the laws of thermodynamics, achieving absolute zero is impossible as it would require removing all thermal energy from a substance.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            Why is a thermocouple thermometer suitable for measuring high temperatures but not a liquid-in-glass thermometer?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Thermocouple thermometers are suitable for high temperatures because they use the voltage generated by the thermoelectric effect between two different metals. This method can handle much higher temperatures than the liquid-in-glass thermometers, which are limited by the boiling point of the liquid used. Additionally, liquid-in-glass thermometers are prone to breakage and inaccuracies at very high temperatures.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            Can we increase the sensitivity of a liquid-in-glass thermometer without changing its range?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Yes, sensitivity can be increased without changing the range by using a narrower capillary tube. This would make the liquid&apos;s movement more pronounced for small temperature changes, thus improving sensitivity, while the range remains unchanged if the volume and type of liquid are constant.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            One student claims to have constructed a more sensitive liquid-in-glass thermometer. How can her claim be verified?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                The student&apos;s claim can be verified by comparing the thermometer&apos;s performance to a standard thermometer. This can be done by measuring the same temperature changes with both thermometers and checking if the new thermometer shows more precise or smaller temperature increments. Calibration against known fixed points can also help verify the sensitivity.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
