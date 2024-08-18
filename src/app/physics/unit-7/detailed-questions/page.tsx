import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionDashboard = () => {
    return (
        <section
            id="Questions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Long Questions (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Define density. Describe methods to determine densities of regular and irregular-shaped solids, liquids, and gases.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Density is defined as the mass per unit volume of a substance. It is expressed mathematically as
                                ρ = m/V, where ρ is the density, m is the mass, and V is the volume. To determine the density of
                                different substances, various methods are used:
                            </p>
                            <ul>
                                <li>
                                    <strong>Regular-shaped solids:</strong> Measure the mass using a balance. For volume, measure
                                    dimensions with a ruler or caliper and calculate volume (e.g., length × width × height for a
                                    rectangular block). Density is then calculated by dividing mass by volume.
                                </li>
                                <li>
                                    <strong>Irregular-shaped solids:</strong> Measure the mass using a balance. For volume, use the
                                    water displacement method: submerge the object in a graduated cylinder or water-filled container
                                    and record the volume displacement. Density is then calculated as mass divided by volume.
                                </li>
                                <li>
                                    <strong>Liquids:</strong> Measure the mass of the liquid using a balance and its volume using
                                    a graduated cylinder. Calculate density as mass divided by volume.
                                </li>
                                <li>
                                    <strong>Gases:</strong> Measure the mass of the gas in a container (often challenging, so this
                                    might be done in specialized conditions) and the volume using a gas syringe or container of known
                                    volume. Density is calculated as mass divided by volume.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How would you distinguish between solids, liquids, and gases on the basis of attractive forces between particles and the motion of particles?
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Solids, liquids, and gases can be distinguished based on the attractive forces between particles and
                                their motion:
                            </p>
                            <ul>
                                <li>
                                    <strong>Solids:</strong> Particles in solids have strong attractive forces between them, which
                                    keeps them in fixed positions and allows only vibrational motion. This results in a definite shape
                                    and volume.
                                </li>
                                <li>
                                    <strong>Liquids:</strong> In liquids, the attractive forces between particles are weaker compared
                                    to solids, allowing particles to move past each other. This results in a definite volume but an
                                    indefinite shape, as liquids take the shape of their container.
                                </li>
                                <li>
                                    <strong>Gases:</strong> Particles in gases have very weak attractive forces, allowing them to move
                                    freely and independently. This results in neither definite shape nor definite volume, as gases
                                    expand to fill the entire volume of their container.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Describe two different physical properties that vary with temperature and explain how these properties can be used to measure temperature.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Two physical properties that vary with temperature are:
                            </p>
                            <ul>
                                <li>
                                    <strong>Thermal Expansion:</strong> Many materials expand when heated and contract when cooled.
                                    This property is used in thermometers, where the expansion of a liquid or a metal bimetallic strip is
                                    used to measure temperature changes. For example, in a liquid-in-glass thermometer, the liquid expands
                                    with temperature, causing a rise in the liquid level that can be read on a scale.
                                </li>
                                <li>
                                    <strong>Electrical Resistance:</strong> The resistance of some materials changes with temperature.
                                    For instance, in resistance temperature detectors (RTDs), the electrical resistance of a metal changes
                                    predictably with temperature. This change in resistance is measured to determine the temperature.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Describe the construction and working of different types of gas thermometers.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                Gas thermometers are based on the principle that the pressure of a gas is related to its temperature,
                                provided the volume is constant. Here are some types of gas thermometers:
                            </p>
                            <ul>
                                <li>
                                    <strong>Constant Volume Gas Thermometer:</strong> This type has a fixed volume of gas. The
                                    thermometer measures temperature by noting the pressure of the gas, which changes with temperature
                                    while the volume remains constant. The pressure is measured using a manometer, and the temperature is
                                    determined from the pressure readings.
                                </li>
                                <li>
                                    <strong>Constant Pressure Gas Thermometer:</strong> This thermometer keeps the pressure of the gas
                                    constant and varies the volume. The temperature is measured by noting the volume of the gas, which
                                    changes with temperature. The volume is measured using a graduated cylinder or similar device, and
                                    the temperature is calculated based on the volume change.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Analyze how the structure of a liquid-in-glass thermometer can be modified to improve its performance. Give a detailed answer.
                        </AccordionTrigger>
                        <AccordionContent>
                            {/* Add detailed answer here */}
                            <p>
                                The performance of a liquid-in-glass thermometer can be improved by modifying its structure in several ways:
                            </p>
                            <ul>
                                <li>
                                    <strong>Diameter of the Capillary Tube:</strong> Using a narrower capillary tube increases the
                                    sensitivity of the thermometer. A smaller diameter tube results in a larger change in liquid level for
                                    a given temperature change, making it easier to detect small temperature variations.
                                </li>
                                <li>
                                    <strong>Type of Liquid:</strong> Using a liquid with a wide and predictable range of thermal expansion,
                                    such as mercury or alcohol, can improve accuracy and range. For specific applications, selecting a liquid
                                    with a lower freezing point and a higher boiling point can expand the operational range of the thermometer.
                                </li>
                                <li>
                                    <strong>Glass Type:</strong> Using high-quality glass such as borosilicate glass, which has a linear
                                    expansion coefficient, can enhance the linearity of the thermometer and provide more accurate readings.
                                </li>
                                <li>
                                    <strong>Scale Calibration:</strong> Ensuring precise calibration of the scale with accurate reference
                                    points improves the accuracy of temperature readings.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
