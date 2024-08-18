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
                            1. Define work and its unit. Describe the conditions for maximum and minimum work.
                        </AccordionTrigger>
                        <AccordionContent>
                            Work is defined as the product of the force applied on an object and the displacement of the object in the direction of the force. Mathematically, it is expressed as W = F × d × cos(θ), where W is work, F is force, d is displacement, and θ is the angle between the force and the direction of displacement. The SI unit of work is the joule (J), where 1 joule is equal to 1 newton meter (1 J = 1 N·m).

                            For maximum work to be done, the force must be applied in the direction of the displacement (θ = 0°), and the displacement should be maximized. For minimum work, the force should be perpendicular to the direction of displacement (θ = 90°), resulting in zero work done if no movement occurs in the direction of the force.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. What is kinetic energy? Derive its expression by using graphical analysis.
                        </AccordionTrigger>
                        <AccordionContent>
                            Kinetic energy is the energy possessed by an object due to its motion. It is defined as the work needed to accelerate an object from rest to its current velocity. Mathematically, it is expressed as KE = 1/2 mv^2, where m is the mass of the object and v is its velocity.

                            To derive this expression graphically, consider a force F applied to an object of mass m. The work done by the force in accelerating the object from velocity v1 to v2 is equal to the change in kinetic energy. By integrating the force over the displacement, the work done (W) can be shown to be equal to 1/2 mv^2 when the object is accelerated from rest.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. What is potential energy? What are its different types? Show that gravitational potential energy is equal to the product of mass &apos;m&apos;, gravitational field strength &apos;g&apos; and height &apos;h&apos;.
                        </AccordionTrigger>
                        <AccordionContent>
                            Potential energy is the energy possessed by an object due to its position or configuration. It represents the work done to move the object to that position.

                            The different types of potential energy include:
                            - Gravitational Potential Energy: Energy stored due to an object&apos;s position in a gravitational field.
                            - Elastic Potential Energy: Energy stored in stretched or compressed elastic materials.
                            - Chemical Potential Energy: Energy stored in chemical bonds.

                            Gravitational potential energy (U) is given by the formula U = mgh, where m is the mass of the object, g is the gravitational field strength, and h is the height of the object above a reference point. This formula is derived from the work done to lift the object against the force of gravity.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. What is meant by energy conversion and energy conservation?
                        </AccordionTrigger>
                        <AccordionContent>
                            Energy conversion refers to the process of changing energy from one form to another. For example, in a power plant, chemical energy in fuel is converted into electrical energy.

                            Energy conservation, on the other hand, is the principle that energy cannot be created or destroyed, only transformed from one form to another. The total energy in a closed system remains constant, though it may change forms. This principle is a fundamental concept in physics and ensures that all forms of energy are accounted for in any process.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Describe how useful energy may be obtained from natural resources.
                        </AccordionTrigger>
                        <AccordionContent>
                            Useful energy can be obtained from natural resources through various methods:
                            - **Solar Energy**: Captured using solar panels to convert sunlight into electrical or thermal energy.
                            - **Wind Energy**: Harnessed by wind turbines that convert the kinetic energy of wind into electricity.
                            - **Hydropower**: Generated by damming rivers and using the flowing water to drive turbines that produce electricity.
                            - **Geothermal Energy**: Extracted from the heat stored within the Earth&apos;s crust and used for electricity generation or direct heating.
                            - **Biomass Energy**: Produced from organic materials like plant and animal waste, which are converted into biofuels or used directly for heat.

                            These methods utilize natural processes to provide energy that can be harnessed for various applications, reducing reliance on fossil fuels and mitigating environmental impact.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Differentiate between renewable and non-renewable energy sources with examples. Write down advantages and disadvantages of each in reference to their availability and environmental impact.
                        </AccordionTrigger>
                        <AccordionContent>
                            Renewable energy sources are those that can be replenished naturally in a short period of time. Examples include solar, wind, hydroelectric, geothermal, and biomass energy.

                            **Advantages of Renewable Energy**:
                            - Sustainable and abundant.
                            - Low environmental impact and reduced greenhouse gas emissions.
                            - Can reduce dependency on fossil fuels.

                            **Disadvantages of Renewable Energy**:
                            - Often intermittent and location-dependent.
                            - Higher initial installation costs.
                            - Requires significant infrastructure.

                            Non-renewable energy sources are those that are finite and cannot be replenished on a human timescale. Examples include coal, oil, natural gas, and uranium.

                            **Advantages of Non-Renewable Energy**:
                            - Established infrastructure and technology.
                            - High energy density and reliability.
                            - Generally lower initial costs.

                            **Disadvantages of Non-Renewable Energy**:
                            - Limited supply and depletion risk.
                            - Significant environmental impact, including pollution and greenhouse gas emissions.
                            - Contributes to climate change and habitat destruction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Describe the processes by which energy is converted from one form to another with reference to fossil fuel energy, hydroelectric generation, solar energy, nuclear energy, geothermal energy, wind energy and biomass energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            - **Fossil Fuel Energy**: Chemical energy stored in fossil fuels (coal, oil, natural gas) is burned to produce heat, which drives turbines to generate electricity.

                            - **Hydroelectric Generation**: Kinetic energy from flowing water is converted into mechanical energy by turbines, which is then transformed into electrical energy by generators.

                            - **Solar Energy**: Solar panels convert the energy from sunlight directly into electrical energy through the photovoltaic effect, or into thermal energy using solar collectors.

                            - **Nuclear Energy**: Energy from nuclear reactions (fission or fusion) is converted into heat, which produces steam to drive turbines and generate electricity.

                            - **Geothermal Energy**: Heat from within the Earth is extracted and used to produce steam, which drives turbines to generate electricity or for direct heating.

                            - **Wind Energy**: Kinetic energy from wind is captured by wind turbines and converted into mechanical energy, which is then used to generate electrical energy.

                            - **Biomass Energy**: Organic materials are burned or processed to release chemical energy, which can be converted into heat, electricity, or biofuels.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Describe the process of electricity generation by drawing a block diagram of the process from fossil fuel input to electricity output.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Electricity Generation Process**:
                            1. **Fossil Fuel Input**: Coal, oil, or natural gas is burned in a furnace.
                            2. **Boiler**: The burning fuel heats water in a boiler, producing steam.
                            3. **Turbine**: High-pressure steam drives a turbine.
                            4. **Generator**: The turbine is connected to a generator that converts mechanical energy into electrical energy.
                            5. **Transformer**: The electrical energy is transformed to high voltage for efficient transmission.
                            6. **Transmission Lines**: Electricity is transmitted over long distances through power lines.
                            7. **Distribution**: Electricity is stepped down in voltage and distributed to homes and businesses.

                            *(Block Diagram not shown in text format, but it involves these steps in sequence.)*
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Define power. What is the relation of its SI unit with horse power?
                        </AccordionTrigger>
                        <AccordionContent>
                            Power is the rate at which work is done or energy is transferred over time. It is defined as P = W / t, where P is power, W is work, and t is time. The SI unit of power is the watt (W), where 1 watt is equal to 1 joule per second (1 W = 1 J/s).

                            One horsepower (hp) is equivalent to 746 watts. Therefore, power measured in horsepower can be converted to watts by multiplying by 746.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. What is efficiency? Why is it important for cars or electronic devices to be designed with high efficiency? Why can the efficiency of machines never be unity or 100%?
                        </AccordionTrigger>
                        <AccordionContent>
                            Efficiency is the ratio of useful output energy or work done to the total input energy. It is expressed as η = (Useful Output Energy / Total Input Energy) × 100%.

                            High efficiency is crucial for cars and electronic devices because it means that more of the input energy is converted into useful work or output, reducing energy waste and improving performance.

                            The efficiency of machines can never be 100% due to inherent energy losses in the form of friction, heat, and other dissipative effects. The second law of thermodynamics states that some energy is always lost in the conversion process, making perfect efficiency impossible.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            11. Explain by drawing energy flow diagrams through steady-state systems such as a filament lamp, a power station, and a vehicle traveling at a constant speed on a level road.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Energy Flow Diagrams**:

                            - **Filament Lamp**: Electrical Energy → Heat Energy + Light Energy
                            (Electricity flows through the filament, which heats up and emits light.)

                            - **Power Station**: Chemical Energy (Fuel) → Heat Energy → Mechanical Energy (Turbine) → Electrical Energy
                            (Fuel is burned to produce heat, which drives a turbine connected to a generator.)

                            - **Vehicle on a Level Road**: Chemical Energy (Fuel) → Mechanical Energy (Engine) → Kinetic Energy (Motion) + Heat Energy (Friction Losses)
                            (Fuel combustion provides mechanical energy to move the vehicle, with some energy lost to heat due to friction.)

                            *(Diagrams are represented in flow format and would be visualized through diagrams.)*
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
