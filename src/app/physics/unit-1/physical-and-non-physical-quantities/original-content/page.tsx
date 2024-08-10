import React from 'react'

const Page = () => {
    return (
        <section
            id="PhysicalQuantities"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Physical and Non-Physical Quantities
            </h1>

            <div className="text-left">
                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    Physical and Non-Physical Quantities
                </h2>
                <p>
                    Physical quantities are those that can be measured, such as length, mass, time, density, and temperature. These quantities can be defined and quantified. For example, you can measure the length of an object in meters or the mass of an object in kilograms. On the other hand, non-physical quantities, such as taste, feeling, and color, cannot be measured in standard units and are therefore considered non-physical.
                </p>

                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    Point to Ponder
                </h2>
                <p>
                    Measurement involves comparing an unknown physical quantity (like length, mass, time, etc.) to a standard to determine how large or small it is relative to that standard. The unit is the standard used for comparison. Measurement consists of a numerical magnitude (the number representing the size of the quantity) and the unit in which it is measured. For example, if the length of a person is 1.65 meters (or 5 feet and 5 inches), 1.65 is the numerical magnitude and meter is the unit.
                </p>
                <p>
                    To record a measurement, an appropriate unit is chosen, and the size of the quantity is then determined using an instrument with a proper scale (such as a measuring tape).
                </p>

                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    Base and Derived Physical Quantities
                </h2>
                <p>
                    Base (or fundamental) physical quantities are the simplest forms of physical quantities, such as mass, length, and time. These are selected because all other physical quantities can be derived from them. Physical quantities that are obtained by multiplying or dividing base physical quantities are called derived physical quantities.
                </p>
            </div>
        </section>
    )
}

export default Page;
