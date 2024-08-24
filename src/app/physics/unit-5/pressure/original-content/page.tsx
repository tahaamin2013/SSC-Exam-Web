import React from 'react'

const PressurePage = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">5.2 PRESSURE</h1>
            <p className="text-base">
                Pressure is defined as force per unit area. Pressure is represented by letter &apos;P&apos;, if force &apos;F&apos; is applied on area &apos;A&apos;, the pressure is given by
            </p>
            <p className="text-base font-bold">P=F/A</p>
            <p className="text-base">
                The Sl unit of pressure is pascal (Pa) which equals newton per square meter (N/m²). 1 Pa = 1N 1m²
            </p>
            <p className="text-base">
                The pressure increases when the force on a specific area is increased or when a smaller area is subjected to a given force. Why does a balloon burst easily when pricked with a pin, but not when squeezed by our hand? The reason is that the force applied to the small area of the needle tip creates enough pressure to burst the balloon as shown in figure 5.7 (a).
            </p>
            <p className="text-base">
                Getting stepped on by a high-heeled shoe hurts more than getting stepped on by a flat one. This is because the weight of the body is concentrated on a smaller area with a pencil heel shoe, as illustrated in figure 5.7 (b).
            </p>
            <p className="text-base">
                Have you ever wondered why a blunt knife cannot cut meat easily? When you apply the same force on sharp and blunt knife, the sharp knife offers little surface area thereby increasing pressure, which help to cut meat easily as shown in figure 5.8.
            </p>
            <h2 className="text-lg font-bold">EXAMPLE 5.2: WEIGHT AS PRESSURE ON GROUND</h2>
            <p className="text-base">
                Abdurrahman was standing at the stage of a hall for a speech. What pressure does he apply on the stage if his two feet cover an area of 400 cm³? (b). If for a while he stands on one foot, what will be the pressure under that foot? (Take his mass 50 kg).
            </p>
            <h3 className="text-base font-bold">GIVEN</h3>
            <p className="text-base font-bold">REQUIRED</p>
            <p className="text-base">Mass of Abdullah &apos;m&apos; = 50 kg</p>
            <p className="text-base">(a) Pressure with both feet &apos;P,&apos; =?</p>
            <p className="text-base">Area of two feet &apos;A,&apos; = 400 cm² = 400 x 10m² = 0.04 m²</p>
            <p className="text-base">(b) Pressure with one foot &apos;P,&apos; =?</p>
            <p className="text-base">Area of one foot &apos;A,&apos; = A,/2 = 0.04 m²/2 = 0.02 m²</p>
            <h3 className="text-base font-bold">SOLUTION:</h3>
            <p className="text-base">
                Weight of Abdurrahman will be given by: W = mg = 40 kg x 9.8 m/s² = 490 N
            </p>
            <p className="text-base">P=</p>
            <p className="text-base">F_W</p>
            <p className="text-base">AA</p>
            <p className="text-base">
                (a) For both feet the equation 1 can be written as: W PA P₁ = 490 N Putting values P=0.04m² Therefore P12,250N/m² = 12,250 Pa = 12.25 kPa
            </p>
            <p className="text-base">Answer</p>
            <p className="text-base">
                (b) For one foot the above equation can be written as P₂ Putting values P₂ = 490 N 0.02m² aPk 5. 42 = aP005, 42 =2 m/ N005, 42=2 W Therefore Thus, for the same force (or weight), if area is halved pressure becomes double.
            </p>
            <p className="text-base">Answer</p>
        </div>
    )
}

export default PressurePage
