// pages/techniquesAndTools.tsx
import React from 'react';

const TechniquesAndTools = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">16.5 TECHNIQUE AND TOOLS FOR ACCURATE MEASUREMENT IN LABORATORY</h1>

      <h2 className="text-xl font-semibold mt-4">Graduated Cylinder</h2>
      <p>A significant technique in a chemistry lab is the ability to accurately measure a liquid in a graduated cylinder.</p>
      <img src="/graduated-cylindar.jpg" alt="Graduated Cylinder" className="w-full mt-4 mb-4" />
      <p>When a solution is in the graduated cylinder, the liquid sticks to the sides making a U shape called a meniscus. This makes it difficult to read a measuring cylinder accurately. If you are too high, you will read a smaller volume. If you are too low, you will read a larger volume. The right way to take a reading is to get to &apos;eye level&apos; to read an accurate volume of water.</p>

      <h2 className="text-xl font-semibold mt-4">Beaker</h2>
      <p>Measuring beakers are tools used to measure the approximate volume of liquids. Beakers are also used for holding samples, stirring, mixing, and heating liquids. Beakers can also be used as a container for reactions and to estimate the volume of liquid.</p>

      <h2 className="text-xl font-semibold mt-4">Measuring Cylinder</h2>
      <p>Measuring cylinders are more accurate than beakers. They should only be used when an approximate volume measurement is required. They are mostly found in sizes of 10 cm³, 25 cm³, 50 cm³, and 100 cm³.</p>

      <h2 className="text-xl font-semibold mt-4">Volumetric Pipettes</h2>
      <p>Most pipettes are used to transfer amounts of up to 1-100 ml of liquids. They can only measure a single volume, usually 25 cm³, but they measure this volume very accurately. They are designed to deliver the measured volume when emptied under gravity, so they hold a slightly greater volume than this. They should only be used with a pipette filler.</p>

      <h2 className="text-xl font-semibold mt-4">Burette</h2>
      <p>Burettes are designed to deliver any volume up to 50 cm³. They are more accurate than measuring cylinders but less accurate than pipettes. The volume delivered can be deduced by subtracting the initial measurement from the final measurement. They need to be used with a stand, clamp, and boss, and they are mainly used in titrations.</p>

      <h2 className="text-xl font-semibold mt-4">Gas Syringes</h2>
      <p>Gas syringes are used to collect and measure the volume of gas. They have a similar accuracy to measuring cylinders.</p>

      <h2 className="text-xl font-semibold mt-4">Laboratory Thermometer</h2>
      <p>The thermometer is used for measuring temperatures other than human body temperature. It ranges from -10°C to 110°C. Laboratory thermometers are used for purposes such as checking the boiling point and freezing points or the temperature of other substances.</p>

      <h2 className="text-xl font-semibold mt-4">Analytical Balance</h2>
      <p>Analytical balances are precision measuring instruments used in quantitative chemical analysis. They are used to determine the mass of solid objects, liquids, powders, and granular substances.</p>

      <h2 className="text-xl font-semibold mt-4">Beam Balance</h2>
      <p>It is a valuable tool when an accurate measurement of mass is required. It doesn&apos;t require any electricity for its operation.</p>

      <h2 className="text-xl font-semibold mt-4">Electronic Balance</h2>
      <p>Electronic balance is an instrument used for the accurate measurement of the weight of materials. It provides digital results of measurements and is significant for laboratories requiring precise measurement of chemicals used in experiments.</p>

      <h2 className="text-xl font-semibold mt-4">Stopwatch</h2>
      <p>Stopwatches and timers are instruments used to measure time intervals, defined as the elapsed time between two events. Stopwatches show time readings up to 2 decimal places. Thus, the precision of most stopwatches is 0.01 seconds.</p>
    </div>
  );
};

export default TechniquesAndTools;
