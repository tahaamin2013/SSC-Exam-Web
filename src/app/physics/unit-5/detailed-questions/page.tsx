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
                            1. Define elasticity and elastic limit. Show that a force may produce change in size and shape of solids.
                        </AccordionTrigger>
                        <AccordionContent>
                            Elasticity is the property of a material that allows it to return to its original shape and size after the removal of an external force that caused deformation. The elastic limit is the maximum extent to which a material can be stretched or compressed without permanently altering its shape. Beyond this limit, the material undergoes plastic deformation and does not return to its original dimensions.

                            A force applied to a solid can change its size and shape. For instance, stretching a rubber band or compressing a spring are examples where forces lead to temporary changes in size and shape. If the force is within the elastic limit, the solid will return to its original state once the force is removed. Otherwise, the deformation will be permanent.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. What is Hooke&apos;s law? Illustrate its applications. Also, define and calculate the spring constant.
                        </AccordionTrigger>
                        <AccordionContent>
                            Hooke&apos;s law states that the force required to extend or compress a spring is directly proportional to the displacement from its equilibrium position. Mathematically, it is expressed as:
                            \[ F = kx \]
                            where \( F \) is the force applied, \( k \) is the spring constant, and \( x \) is the displacement.

                            Applications of Hooke&apos;s law include the design of springs in various mechanical devices such as car suspensions, watches, and measuring instruments.

                            The spring constant \( k \) is defined as the ratio of the force applied to the displacement caused. To calculate it:
                            \[ k = \frac｛F｝｛x｝ \]
                            where \( F \) is the applied force and \( x \) is the displacement. For example, if a force of 10 N stretches a spring by 2 m, the spring constant \( k \) would be:
                            \[ k = \frac｛10\, \text｛N｝｝｛2\, \text｛m｝｝ = 5\, \text｛N / m｝ \]
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Draw and explain the force-extension graph for elastic solids.
                        </AccordionTrigger>
                        <AccordionContent>
                            The force-extension graph for elastic solids typically shows a linear relationship within the elastic limit. The graph plots force (F) on the y-axis and extension (x) on the x-axis.

                            Initially, as the force increases, the extension of the solid also increases linearly. This linear portion of the graph represents Hooke&apos;s law, where the slope of the graph indicates the spring constant. Beyond the elastic limit, the graph starts to curve, indicating plastic deformation, where the material does not return to its original shape.

                            The graph can be divided into three regions:
                            - Elastic Region: Linear part where Hooke&apos;s law applies.
                            - Yield Point: The point at which deformation becomes permanent.
                            - Plastic Region: Where the material undergoes irreversible changes.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Define and explain pressure. What is the effect of area on pressure acting on a surface?
                        </AccordionTrigger>
                        <AccordionContent>
                            Pressure is defined as the force applied per unit area. It is given by the formula:
                            \[ P = \frac｛F｝｛A｝ \]
                            where \( P \) is pressure, \( F \) is the force applied, and \( A \) is the area over which the force is distributed.

                            The effect of area on pressure is inversely proportional. As the area increases, for the same force, the pressure decreases. Conversely, for a given force, a smaller area results in higher pressure. This is why sharp objects like needles can penetrate surfaces more easily than blunt objects; they concentrate the same force over a smaller area.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Explain the term atmospheric pressure along with its units. How is atmospheric pressure measured with a liquid barometer? Explain its construction and applications.
                        </AccordionTrigger>
                        <AccordionContent>
                            Atmospheric pressure is the force exerted by the weight of the air above a surface. It is measured in units such as pascals (Pa), atmospheres (atm), or millimeters of mercury (mm Hg). One atmosphere is equivalent to 101,325 pascals or 760 mm Hg.

                            A liquid barometer measures atmospheric pressure using a column of liquid (usually mercury). It consists of a long, sealed glass tube filled with mercury, which is inverted into a reservoir of mercury. The height of the mercury column is balanced by the atmospheric pressure. The height of the column is proportional to the atmospheric pressure.

                            Applications of atmospheric pressure measurements include weather forecasting, altitude measurements, and various scientific experiments.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Explain with examples how atmospheric pressure varies with altitude. What kind of weather change is indicated by variation in atmospheric pressure? What are different applications of atmospheric pressure?
                        </AccordionTrigger>
                        <AccordionContent>
                            Atmospheric pressure decreases with increasing altitude because there is less air above exerting force. For example, at higher altitudes like mountains, the atmospheric pressure is lower compared to sea level.

                            Variations in atmospheric pressure can indicate changes in weather. A decrease in atmospheric pressure often signals approaching storms or bad weather, while an increase indicates fair weather or high-pressure systems.

                            Applications of atmospheric pressure include weather forecasting, aircraft altimeter calibration, and monitoring of breathing conditions in high-altitude environments.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Show that liquid in a container exerts pressure equal to \( P = \rho gh \). What is the effect of depth on the pressure of a liquid?
                        </AccordionTrigger>
                        <AccordionContent>
                            The pressure \( P \) exerted by a liquid in a container is given by:
                            \[ P = \rho gh \]
                            where \( \rho \) is the density of the liquid, \( g \) is the acceleration due to gravity, and \( h \) is the depth of the liquid column.

                            This equation shows that pressure increases linearly with depth. As the depth increases, the weight of the liquid above increases, leading to higher pressure at greater depths.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. State Pascal&apos;s law. Describe the working principle of a hydraulic lift using Pascal&apos;s law. What do you mean by a force multiplier?
                        </AccordionTrigger>
                        <AccordionContent>
                            Pascal&apos;s law states that an external pressure applied to a confined fluid is transmitted equally in all directions within the fluid.

                            A hydraulic lift operates on Pascal&apos;s law. It consists of two cylinders connected by a tube, filled with hydraulic fluid. When force is applied to a small piston, it creates pressure in the fluid that is transmitted to a larger piston. Due to the larger area of the second piston, the force is multiplied, allowing a small force to lift a heavier load.

                            A force multiplier refers to the ability of a hydraulic system to amplify a small input force into a larger output force, thanks to the principle of pressure transmission in fluids.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
