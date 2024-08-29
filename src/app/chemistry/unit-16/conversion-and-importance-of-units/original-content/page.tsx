// pages/conversionImportance.tsx
import React from 'react';

const ConversionImportance = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">16.2 CONVERSION AND THE IMPORTANCE OF UNITS:</h1>
      <p>The ability to convert from one unit to another is essential in scientific methods. For example, a nurse has a tablet of 50 mg. She has to give 0.2 g of the tablet to a patient. She needs to know that 0.2 g equals 200 mg, so 4 tablets are needed. There is a simple way to convert from one unit to another:</p>

      <p>10 millimeters</p>
      <p>10 centimeters</p>
      <p>100 centimeters</p>
      <p>1000 meters</p>

      <h3 className="text-lg font-semibold mt-4">LENGTH CONVERSION</h3>
      <p>(Converting smaller units into larger units)</p>
      <p>1 centimeter</p>
      <p>1 decimeter</p>
      <p>1 meter</p>
      <p>1 kilometer</p>
      <p>10 mm</p>
      <p>1 cm</p>
      <p>10 cm</p>
      <p>1 dm</p>
      <p>100 cm</p>
      <p>1 m</p>
      <p>1000 m</p>
      <p>1 km</p>

      <p>60 seconds</p>
      <p>60 minutes</p>
      <p>24 hours</p>
      <p>7 days</p>
      <p>365 days</p>

      <h3 className="text-lg font-semibold mt-4">TIME CONVERSION</h3>
      <p>(Converting smaller units into larger units)</p>
      <p>1 minute</p>
      <p>1 hour</p>
      <p>1 day</p>
      <p>1 week</p>
      <p>1 year</p>

      <h3 className="text-lg font-semibold mt-4">MASS CONVERSION</h3>
      <p>(Converting smaller units into larger units)</p>
      <p>100 milligrams</p>
      <p>1 gram</p>
      <p>1000 grams</p>
      <p>1 kilogram</p>

      <p>In the laboratory, chemists use cm³ (cubic centimeters), g (grams), and s (seconds) as more practical units when working with small amounts in the lab for several reasons:</p>

      <ul className="list-disc list-inside">
        <li><strong>Appropriateness:</strong> The use of cm³ allows chemists to easily measure and calculate the volume of liquids and solids. It is a smaller unit than liters and is more suitable for measuring small volumes accurately.</li>
        <li><strong>Precision:</strong> To have precise measurements, the use of grams as a unit of mass provides a more accurate and consistent measurement compared to larger units like kilograms.</li>
        <li><strong>Compatibility:</strong> The use of these units ensures compatibility with a wide range of laboratory equipment and instruments. The use of smaller units makes it easier to perform experiments and obtain accurate results.</li>
        <li><strong>Time-sensitive reactions:</strong> In chemistry, time plays a significant role in various reactions. Using seconds as a unit of time allows chemists to accurately measure reaction rates, reaction times, and other time-dependent parameters.</li>
        <li><strong>International Standards:</strong> The International System of Units (SI) recommends the use of these units for scientific measurements. This standardization ensures uniformity and helps communication between scientists worldwide.</li>
      </ul>

      <p className="mt-4 font-bold">DO YOU KNOW?</p>
      <p>The SI unit for volume is the cubic meter (m³). The cubic centimeter (cm³), the liter (L), and the milliliter (mL) are also used.</p>
      <p>1 liter (L) = 1000 milliliters (mL)</p>
      <p>1 liter (L) = 1 decimeter cube (dm³)</p>
      <p>1 decimeter cube (dm³) = 1000 cubic centimeters (cm³)</p>
      <p>1000 cubic centimeters (cm³) = 1 liter (L)</p>
    </div>
  );
};

export default ConversionImportance;
