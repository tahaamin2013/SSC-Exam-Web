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
                            Q.No.1 Explain different states of matter on the basis of kinetic molecular theory.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Kinetic molecular model is used to explain the three states of matter - solid, liquid, and gas.
                            </p>
                            <p>
                                (i) <b>Solid:</b> Solids have fixed shapes and volume. Their molecules are held close together. However, they vibrate about their mean positions but do not move from place to place. Examples are stone, metal spoon, pencil, etc.
                            </p>
                            <p>
                                (ii) <b>Liquids:</b> The distance between the molecules of a liquid is more than in solids. Thus, attractive forces between them are weaker. Like solids, molecules of a liquid also vibrate about their mean position but are not rigidly held with each other. Due to the weaker attractive forces, they can slide over one another. Thus, liquids can flow. The volume of a certain amount of liquid remains the same, but because it can flow, it attains the shape of the container to which it is put.
                            </p>
                            <p>
                                (iii) <b>Gases:</b> Gases such as air have no fixed shape or volume. They can be filled in any container of any shape. Their molecules have random motion and move with very high velocities. In gases, molecules are much farther apart than solids or liquids. Thus, gases are much lighter than solids and liquids. They can be squeezed into smaller volumes.
                            </p>
                            <p>
                                (iv) <b>Plasma:</b> The kinetic energy of gas molecules goes on increasing if a gas is heated continuously. This causes the gas molecules to move faster and faster. The collisions between atoms and molecules of the gas become so strong that they tear off the atoms. Atoms lose their electrons and become positive ions. This ionic state of matter is called plasma.
                            </p>
                            <p>
                                <b>Plasma in discharge tubes:</b> Plasma is also formed in gas discharge tubes when electric current passes through these tubes.
                            </p>
                            <p>
                                <b>Plasma - The Fourth State of Matter:</b> Plasma is also called the fourth state of matter in which gas occurs in its ionic state. Positive ions and electrons get separated in the presence of electric and magnetic fields. Plasma also exists in neon and fluorescent tubes when they glow.
                            </p>
                            <p>
                                <b>Universe Formation:</b> Most of the matters that fill the universe are in the plasma state. In stars such as our sun, gases exist in their ionic state.
                            </p>
                            <p>
                                <b>Plasma - Good Conductor:</b> Plasma is a highly conducting state of matter. It allows electric current to pass through it.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Q.No.2 What is atmospheric pressure? And explain atmospheric pressure with the help of an experiment.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The Earth is surrounded by a cover of air called the atmosphere. It extends to a few hundred kilometers above sea level. Just as certain sea creatures live at the bottom of the ocean, we live at the bottom of a huge ocean of air. Air is a mixture of gases. The density of air in the atmosphere is not uniform. It decreases continuously as we go up. Atmospheric pressure acts in all directions.
                            </p>
                            <p>
                                <b>Examples:</b> Soap bubbles expand till the pressure of air in them is equal to the atmospheric pressure. Soap bubbles so formed have spherical shapes because the atmospheric pressure acts on a bubble equally in all directions. A balloon expands as we fill air into it. The balloon will expand in all directions.
                            </p>
                            <p>
                                <b>Experiment:</b> The fact that the atmosphere exerts pressure can be explained by a simple experiment. Take an empty tin can with a lid. Open its cap and put some water in it. Place it over the flame. Wait till the water begins to boil and the steam expels the air out of the can. Remove it from the flame. Close the can firmly with its cap. Now place the can under tap water. The can will squeeze due to atmospheric pressure. When the can is cooled by tap water, the steam in it condenses. As the steam changes into water, it leaves an empty space behind it. This lowers the pressure inside the can compared to the atmospheric pressure outside the can. This will cause the can to collapse from all directions. This experiment shows that the atmosphere exerts pressure in all directions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Q.No.3 Which device is used to measure atmospheric pressure? Explain the measurement of atmospheric pressure by using a barometer.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: A simple device used to measure atmospheric pressure is a barometer.
                            </p>
                            <p>
                                <b>Barometer:</b> The instruments that measure atmospheric pressure are called barometers. One of the simple barometers is a mercury barometer. It consists of a glass tube 1 meter long closed at one end. After filling it with mercury, it is inverted in a mercury trough. Mercury in the tube descends and stops at a certain height. The column of mercury held in the tube exerts pressure at its base. At sea level, the height of the mercury column above the mercury in the trough is found to be about 76 cm. The pressure exerted by a 76 cm column of mercury is nearly 101,300 Nm², equal to atmospheric pressure.
                            </p>
                            <p>
                                It is common to express atmospheric pressure in terms of the height of the mercury column. As the atmospheric pressure at a place does not remain constant, the height of the mercury column also varies with atmospheric pressure.
                            </p>
                            <p>
                                <b>Mercury in Barometer Instead of Water:</b> Mercury is 13.6 times denser than water. Atmospheric pressure can hold a vertical column of water that is about 13.6 times the height of the mercury column at a place. Thus, at sea level, the vertical height of the water column would be 0.76 m × 13.6 ≈ 10.34 m. Thus, a glass tube more than 10 meters long is required to make a water barometer.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Q.No.4 Write a note on variation in atmospheric pressure.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The atmospheric pressure decreases as we go up. The atmospheric pressure on mountains is lower than at sea level. At a height of about 30 km, the atmospheric pressure becomes only 7 mm of mercury, which is approximately 1000 Pa. It would become zero at an altitude where there is no air. Thus, we can determine the altitude of a place by knowing the atmospheric pressure at that place.
                            </p>
                            <p>
                                <b>Effect of Weather on Atmospheric Pressure:</b> On a hot day, air above the Earth becomes hot and expands. This causes a fall in atmospheric pressure in that region. During cold, chilly nights, as the air above the Earth cools down, this causes an increase in atmospheric pressure.
                            </p>
                            <p>
                                <b>Expected Weather Changes Due to Variation of Atmospheric Pressure:</b> The changes in atmospheric pressure at a certain place indicate the expected changes in the weather conditions at that place.
                            </p>
                            <p>
                                <b>Decrease in Atmospheric Pressure:</b> A gradual and average drop in atmospheric pressure means low pressure in a neighboring locality. A minor but rapid fall in atmospheric pressure indicates a windy and showery condition in the nearby region. A decrease in atmospheric pressure accompanied by a breeze and rain indicates that rain is likely to occur in a few hours&apos; time. A sudden fall in atmospheric pressure is often followed by a storm, rain, and typhoon.
                            </p>
                            <p>
                                <b>Increase in Atmospheric Pressure:</b> An increasing atmospheric pressure with a decline later on predicts intense weather conditions. A gradual large increase in the atmospheric pressure indicates a long spell of pleasant weather. A rapid increase in atmospheric pressure means that it will soon be followed by a sudden storm or bad weather.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Q.No.5 What is an ideal gas? State Boyle’s law. Derive Boyle’s law from kinetic molecular theory of gases.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: A gas that strictly obeys all the gas laws under all conditions of pressure and temperature is called an ideal gas. An ideal gas is a hypothetical gas which obeys all gas laws under all conditions of temperature and pressure. It also has a specific equation of state for it. Under various temperatures and pressures, ideal gas behaves according to the following gas equation:
                                <br />
                                <b>PV = nRT</b>
                            </p>
                            <p>
                                <b>Boyle’s Law:</b> Boyle’s law states that the volume of a given mass of a gas is inversely proportional to its pressure at constant temperature.
                                <br />
                                <b>Mathematically:</b> P ∝ 1/V at constant temperature
                                <br />
                                <b>Or</b>
                                <br />
                                <b>PV = K</b>
                                <br />
                                Where K is a constant.
                            </p>
                            <p>
                                <b>Derivation of Boyle’s Law from Kinetic Molecular Theory:</b>
                                <br />
                                (i) The average kinetic energy of gas molecules is directly proportional to the temperature of the gas.
                                <br />
                                (ii) The gas molecules are in constant random motion and collide with the walls of the container. These collisions with the walls cause pressure.
                                <br />
                                (iii) If the volume of the gas decreases, the frequency of collisions of gas molecules with the walls of the container increases. This increases the pressure of the gas.
                                <br />
                                (iv) Since temperature is constant, the average kinetic energy of the gas molecules remains the same.
                                <br />
                                (v) Therefore, the pressure of the gas is inversely proportional to its volume.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Q.No.6 What is the difference between an ideal gas and a real gas? Explain the deviation of a real gas from ideal gas behavior.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Ideal gas is a hypothetical gas which obeys all gas laws under all conditions of temperature and pressure. A real gas does not behave like an ideal gas under all conditions of temperature and pressure.
                            </p>
                            <p>
                                <b>Differences:</b>
                                <br />
                                (i) An ideal gas follows gas laws perfectly, while a real gas deviates from the ideal gas laws under high pressure and low temperature.
                                <br />
                                (ii) Real gases have intermolecular forces, whereas ideal gases have no intermolecular forces.
                                <br />
                                (iii) Real gases occupy more space than ideal gases due to the finite size of their molecules.
                                <br />
                                (iv) Real gases do not obey Boyle&apos;s Law and Charles&apos;s Law perfectly, while ideal gases obey these laws perfectly.
                            </p>
                            <p>
                                <b>Deviation from Ideal Gas Behavior:</b>
                                <br />
                                (i) At high pressure, the volume of a real gas is much larger than the ideal gas, due to the intermolecular forces that become significant.
                                <br />
                                (ii) At low temperature, the kinetic energy of gas molecules decreases, and intermolecular forces become more pronounced, causing deviation from ideal gas behavior.
                                <br />
                                (iii) The presence of intermolecular forces between molecules leads to attractions or repulsions, which affects the pressure and volume of the gas.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            Q.No.7 Explain the three states of matter on the basis of kinetic molecular theory.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The kinetic molecular theory of matter describes the behavior of molecules in different states of matter.
                            </p>
                            <p>
                                (i) <b>Solid:</b> Molecules are tightly packed in a fixed position. They vibrate but do not move around. Solids have a definite shape and volume because the intermolecular forces are strong enough to hold the molecules in place.
                            </p>
                            <p>
                                (ii) <b>Liquid:</b> Molecules are close together but can move past each other. Liquids have a definite volume but take the shape of their container. The intermolecular forces are weaker than in solids, allowing molecules to flow and slide over one another.
                            </p>
                            <p>
                                (iii) <b>Gas:</b> Molecules are far apart and move freely. Gases have neither a definite shape nor a definite volume and will expand to fill the container. The intermolecular forces are very weak, allowing for high kinetic energy and rapid movement of molecules.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Q.No.8 What are the postulates of kinetic theory of gases?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The postulates of the kinetic theory of gases are as follows:
                            </p>
                            <p>
                                (i) <b>Gas molecules are in constant random motion:</b> They move in straight lines until they collide with each other or with the walls of the container.
                            </p>
                            <p>
                                (ii) <b>The volume of gas molecules is negligible:</b> The actual volume of the molecules is so small compared to the volume of the container that it can be ignored.
                            </p>
                            <p>
                                (iii) <b>Collisions between gas molecules are perfectly elastic:</b> There is no loss of kinetic energy during collisions between gas molecules.
                            </p>
                            <p>
                                (iv) <b>The average kinetic energy of gas molecules is directly proportional to the temperature of the gas:</b> Higher temperatures result in higher average kinetic energy.
                            </p>
                            <p>
                                (v) <b>The forces of attraction or repulsion between gas molecules are negligible:</b> The interactions between molecules are so weak that they do not affect the behavior of the gas significantly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            Q.No.9 Derive Charles’s law from the kinetic molecular theory of gases.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Charles&apos;s Law states that the volume of a given mass of gas is directly proportional to its temperature when pressure is held constant. This can be derived from the kinetic molecular theory as follows:
                            </p>
                            <p>
                                (i) As the temperature of a gas increases, the average kinetic energy of the gas molecules also increases.
                            </p>
                            <p>
                                (ii) With increased kinetic energy, the gas molecules move faster and collide more frequently with the walls of the container.
                            </p>
                            <p>
                                (iii) At constant pressure, if the temperature of the gas increases, the volume of the gas must also increase to maintain the pressure. This is because the molecules are moving faster and require more space to maintain the same pressure.
                            </p>
                            <p>
                                (iv) Mathematically, if V₁ is the initial volume, T₁ is the initial temperature, V₂ is the final volume, and T₂ is the final temperature, then V₁/T₁ = V₂/T₂.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            Q.No.10 What is the significance of Avogadro’s law? How is Avogadro’s law related to ideal gas equation?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Avogadro&apos;s Law states that equal volumes of gases, at the same temperature and pressure, contain an equal number of molecules. This law is significant because it helps relate the volume of a gas to the number of molecules it contains.
                            </p>
                            <p>
                                <b>Avogadro’s Law:</b> V ∝ n, where V is the volume and n is the number of moles of the gas.
                            </p>
                            <p>
                                <b>Ideal Gas Equation:</b> The ideal gas equation combines Boyle’s Law, Charles’s Law, and Avogadro’s Law into one equation: PV = nRT, where P is the pressure, V is the volume, n is the number of moles, R is the universal gas constant, and T is the temperature. Avogadro&apos;s Law is directly related to the ideal gas equation, as it provides the relationship between the volume and number of moles of a gas.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            Q.No.11 Explain the terms ‘thermodynamic equilibrium’, ‘heat’ and ‘temperature’.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans:
                            </p>
                            <p>
                                (i) <b>Thermodynamic Equilibrium:</b> Thermodynamic equilibrium refers to a state in which all parts of a system are at the same temperature and there are no net changes in the energy or matter within the system. In this state, the system&apos;s properties do not change over time.
                            </p>
                            <p>
                                (ii) <b>Heat:</b> Heat is the energy transferred between systems or objects with different temperatures. It flows from the hotter object to the cooler one until thermal equilibrium is reached. Heat is measured in joules (J).
                            </p>
                            <p>
                                (iii) <b>Temperature:</b> Temperature is a measure of the average kinetic energy of the particles in a substance. It indicates how hot or cold a substance is. Temperature is measured in degrees Celsius (°C), Kelvin (K), or Fahrenheit (°F).
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            Q.No.12 State and explain the first law of thermodynamics.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The first law of thermodynamics, also known as the law of energy conservation, states that energy cannot be created or destroyed, only transformed from one form to another. The total energy of an isolated system remains constant.
                            </p>
                            <p>
                                Mathematically, it is expressed as:
                                <br />
                                <b>ΔU = Q - W</b>
                                <br />
                                Where ΔU is the change in internal energy, Q is the heat added to the system, and W is the work done by the system.
                            </p>
                            <p>
                                This law implies that any energy added to a system as heat must be used to do work or to increase the internal energy of the system. Conversely, if energy is lost by the system as work, it must be compensated by the heat added to the system.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
