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
                Problems
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            7.1 A wooden block measuring 40 cm x 10 cm x 5 cm has a mass of 850 g. Find the density of the wood.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Volume of wooden block = 40 cm x 10 cm x 5 cm = 2000 cm³ = 2 x 10⁻³ m³
                            <br />
                            Mass of wooden block = 850 g = 0.85 kg
                            <br />
                            Required
                            <br />
                            Density of wooden block = ρ
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Density = Mass / Volume
                            <br />
                            By putting the values, we have
                            <br />
                            ρ = 0.85 kg / 2 x 10⁻³ m³ = 0.425 x 10³ kg/m³
                            <br />
                            OR
                            <br />
                            ρ = 425 kg/m³
                            <br />
                            Result
                            <br />
                            Density of wooden block = 425 kg/m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            7.2 How much would be the volume of the ice formed by freezing 1 liter of water?
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Volume of water = V = 1 liter
                            <br />
                            Required
                            <br />
                            Volume of ice on freezing = Vᵢ
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Volume of ice = (Density of water / Density of ice) x Volume of water
                            <br />
                            So
                            <br />
                            Volume of ice = (1000 / 920) x 1 liter
                            <br />
                            Volume of ice = 1.09 liters
                            <br />
                            Result
                            <br />
                            Volume of ice on freezing = 1.09 liters
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            7.3 (i) Calculate the volume of an iron sphere of mass 5 kg with a density of iron as 8200 kg/m³.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Mass of iron sphere = m = 5 kg
                            <br />
                            Density of iron = ρ = 8200 kg/m³
                            <br />
                            Required
                            <br />
                            Volume of iron sphere = V
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Density = Mass / Volume
                            <br />
                            Volume = Mass / Density
                            <br />
                            By putting the values, we have
                            <br />
                            V = 5 kg / 8200 kg/m³ = 0.00061 m³
                            <br />
                            Volume = 6.1 x 10⁻⁴ m³
                            <br />
                            OR
                            <br />
                            Volume = 0.00061 m³
                            <br />
                            Result
                            <br />
                            Volume of iron sphere = 6.1 x 10⁻⁴ m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            7.3 (ii) Calculate the volume of 200 g of lead shot with a density of 11300 kg/m³.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Mass of lead shot = m = 200 g = 0.2 kg
                            <br />
                            Density of lead = ρ = 11300 kg/m³
                            <br />
                            Required
                            <br />
                            Volume of lead shot = V
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Density = Mass / Volume
                            <br />
                            Volume = Mass / Density
                            <br />
                            By putting the values, we have
                            <br />
                            V = 0.2 kg / 11300 kg/m³ = 0.000017699 m³
                            <br />
                            Volume = 1.77 x 10⁻⁵ m³
                            <br />
                            Result
                            <br />
                            Volume of lead shot = 1.77 x 10⁻⁵ m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            7.3 (iii) Calculate the volume of a gold bar with a mass of 0.2 kg and a density of 19300 kg/m³.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Mass of gold bar = m = 0.2 kg
                            <br />
                            Density of gold = ρ = 19300 kg/m³
                            <br />
                            Required
                            <br />
                            Volume of gold bar = V
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Density = Mass / Volume
                            <br />
                            Volume = Mass / Density
                            <br />
                            By putting the values, we have
                            <br />
                            V = 0.2 kg / 19300 kg/m³ = 0.00001036 m³
                            <br />
                            Volume = 1.04 x 10⁻⁵ m³
                            <br />
                            Result
                            <br />
                            Volume of gold bar = 1.04 x 10⁻⁵ m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            7.4 Find the mass of air in a room measuring 8m x 5m x 4m with a density of air as 1.3 kg/m³.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Density of air = ρ = 1.3 kg/m³
                            <br />
                            Dimensions of room = 8m x 5m x 4m
                            <br />
                            Required
                            <br />
                            Mass of air = m
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Mass = Density x Volume
                            <br />
                            Volume = 8m x 5m x 4m = 160 m³
                            <br />
                            By putting the values, we have
                            <br />
                            m = 1.3 kg/m³ x 160 m³ = 208 kg
                            <br />
                            Result
                            <br />
                            Mass of air = 208 kg
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7.5 A student applies a force of 75 N with a contact area of 1.5 cm². Find the pressure under her thumb.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Force exerted by student = F = 75 N
                            <br />
                            Contact area = A = 1.5 cm² = 1.5 x 10⁻⁴ m²
                            <br />
                            Required
                            <br />
                            Pressure under the thumb = P
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Pressure = Force / Area
                            <br />
                            By putting the values, we have
                            <br />
                            P = 75 N / 1.5 x 10⁻⁴ m² = 500000 N/m²
                            <br />
                            OR
                            <br />
                            P = 5 x 10⁵ N/m²
                            <br />
                            Result
                            <br />
                            Pressure under the thumb = 5 x 10⁵ N/m²
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            7.6 The head of a pin is a square with a side of 10 mm. Find the pressure on it due to a force of 20 N.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Force applied = F = 20 N
                            <br />
                            Side of pin head = 10 mm = 1 x 10⁻² m
                            <br />
                            Area of pin head = (Side)² = (1 x 10⁻² m)² = 1 x 10⁻⁴ m²
                            <br />
                            Required
                            <br />
                            Pressure on the pin head = P
                            <br />
                            Solution
                            <br />
                            As we know that
                            <br />
                            Pressure = Force / Area
                            <br />
                            By putting the values, we have
                            <br />
                            P = 20 N / 1 x 10⁻⁴ m² = 200000 N/m²
                            <br />
                            OR
                            <br />
                            P = 2 x 10⁵ N/m²
                            <br />
                            Result
                            <br />
                            Pressure on the pin head = 2 x 10⁵ N/m²
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            7.7 (i) Find the pressure exerted by a rectangular block of wood on the surface with its longest edge vertical.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Dimensions of block = 40 cm x 10 cm x 5 cm
                            <br />
                            Mass of block = 850 g = 0.85 kg
                            <br />
                            Acceleration due to gravity = g = 9.8 m/s²
                            <br />
                            Required
                            <br />
                            Pressure exerted = P
                            <br />
                            Solution
                            <br />
                            The area of the surface in contact with the ground = 10 cm x 5 cm = 50 cm² = 50 x 10⁻⁴ m²
                            <br />
                            The weight of the block = Mass x g = 0.85 kg x 9.8 m/s² = 8.33 N
                            <br />
                            By putting the values, we have
                            <br />
                            P = 8.33 N / 50 x 10⁻⁴ m² = 1.67 x 10⁵ N/m²
                            <br />
                            Result
                            <br />
                            Pressure exerted = 1.67 x 10⁵ N/m²
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            7.7 (ii) Calculate the density of a wooden block with given dimensions and mass.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Dimensions of block = 40 cm x 10 cm x 5 cm
                            <br />
                            Mass of block = 850 g = 0.85 kg
                            <br />
                            Required
                            <br />
                            Density of block = ρ
                            <br />
                            Solution
                            <br />
                            The volume of the block = 40 cm x 10 cm x 5 cm = 2000 cm³ = 2 x 10⁻³ m³
                            <br />
                            As we know that
                            <br />
                            Density = Mass / Volume
                            <br />
                            By putting the values, we have
                            <br />
                            ρ = 0.85 kg / 2 x 10⁻³ m³ = 425 kg/m³
                            <br />
                            Result
                            <br />
                            Density of block = 425 kg/m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            7.8 A glass cube with a side of 5 cm and mass of 306 g has a cavity inside. Find the volume of the cavity.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Side of the glass cube = 5 cm
                            <br />
                            Mass of the glass cube = 306 g = 0.306 kg
                            <br />
                            Density of glass = 2.5 x 10³ kg/m³
                            <br />
                            Required
                            <br />
                            Volume of cavity = Vᵢ
                            <br />
                            Solution
                            <br />
                            Volume of the cube = (5 cm)³ = 125 cm³ = 1.25 x 10⁻³ m³
                            <br />
                            Mass of the glass without cavity = Density x Volume = 2.5 x 10³ kg/m³ x 1.25 x 10⁻³ m³ = 3.125 kg
                            <br />
                            By putting the values, we have
                            <br />
                            Volume of cavity = (Mass of the cube - Mass of the glass without cavity) / Density of glass
                            <br />
                            Vᵢ = (0.306 kg - 3.125 kg) / 2.5 x 10³ kg/m³
                            <br />
                            Vᵢ = 1.025 x 10⁻³ m³
                            <br />
                            Result
                            <br />
                            Volume of cavity = 1.025 x 10⁻³ m³
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            7.9 An object weighs 18 N in air and 11.4 N in water. Calculate its density and identify the material.
                        </AccordionTrigger>
                        <AccordionContent>
                            Given Data
                            <br />
                            Weight in air = Wₐ = 18 N
                            <br />
                            Weight in water = Wᵦ = 11.4 N
                            <br />
                            Acceleration due to gravity = g = 9.8 m/s²
                            <br />
                            Density of water = ρᵦ = 1000 kg/m³
                            <br />
                            Required
                            <br />
                            Density of the object = ρ
                            <br />
                            Solution
                            <br />
                            Volume of the object = (Weight in air - Weight in water) / (Density of water x g)
                            <br />
                            V = (18 N - 11.4 N) / (1000 kg/m³ x 9.8 m/s²) = 0.000685 m³
                            <br />
                            Density of the object = Mass / Volume
                            <br />
                            Mass = Weight in air / g = 18 N / 9.8 m/s² = 1.84 kg
                            <br />
                            By putting the values, we have
                            <br />
                            Density = 1.84 kg / 0.000685 m³ = 2696 kg/m³
                            <br />
                            Result
                            <br />
                            Density of the object = 2696 kg/m³
                            <br />
                            Material = Likely to be some type of metal such as Aluminum (density ~2700 kg/m³)
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
