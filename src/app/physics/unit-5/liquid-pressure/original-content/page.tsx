import React from 'react'
const LiquidPressurePage = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">5.4 LIQUID PRESSURE</h1>
            <p className="text-base">
                Just like gases liquids also exert pressure. The pressure in liquid is due to its weight. We will determine that how pressure of incompressible liquid increases with depth.
            </p>
            <p className="text-base">
                Consider a column of liquid of height &apos;h&apos;, base area &apos;A&apos; at the bottom of a tank in liquid and density &apos;ρ&apos; as shown in figure 5.14. The force acting on a base area is the weight of the cylindrical column of liquid of mass &apos;m&apos; is, The mass &apos;m&apos; of the cylindrical liquid, in terms of density &apos;ρ&apos; is given by,
            </p>
            <p className="text-base font-bold">F = W = mg</p>
            <p className="text-base">
                or m = ρV
            </p>
            <p className="text-base">
                Since the fluid forms a cylindrical volume V shown by dotted lines in the figure which has height h and area of cross section A. Therefore V = Ah, putting equation 3 in equation 2, we get m = ρAh, putting equation 4 in equation 1, we get
            </p>
            <p className="text-base font-bold">F = ρAhg</p>
            <p className="text-base">
                Since pressure is defined as P = F/A, putting equation 5 in equation 6, we get
            </p>
            <p className="text-base font-bold">P = ρgh</p>
            <p className="text-base">
                Therefore P = ρgh
            </p>
            <p className="text-base">
                From equation 7.3 we deduce that the pressure in a liquid depends on the depth and density of the liquid.
            </p>
            <h2 className="text-lg font-bold">EXAMPLE 7.3: LIMITS ON SUBMARINE DEPTH</h2>
            <p className="text-base">
                A submarine was moving in the Pacific Ocean (the largest and deepest ocean) at a depth of 8.5 km. How much pressure is exerted upon the submarine if density of water is 1000 kg/m³?
            </p>
            <p className="text-base">
                GIVEN
            </p>
            <ul className="list-disc list-inside">
                <li className="text-base">Depth = height h = 8.5 km = 8500 m</li>
                <li className="text-base">Density of water ρ = 1000 kg/m³</li>
                <li className="text-base">Acceleration due to gravity g = 9.8 m/s²</li>
            </ul>
            <p className="text-base">
                REQUIRED
            </p>
            <p className="text-base font-bold">Pressure P = ?</p>
            <p className="text-base">
                SOLUTION:
            </p>
            <p className="text-base">
                The pressure exerted on a body inside a liquid, can be given by: P = ρgh. Putting values P = (1000 kg/m³) x (9.8 m/s²) x (8500 m) Therefore P = 8.33 x 10⁷ N/m² = 8.33 x 10⁷ Pa
            </p>
            <p className="text-base font-bold">Answer</p>
            <p className="text-base">
                The water will exert a pressure of 8.33 x 10⁷ Pa or 83.3 MPa on the submarine.
            </p>
        </div>
    )
}

export default LiquidPressurePage
