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
        Problem Solving Questions
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        <Accordion type="single" collapsible>
          {/* Question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Explain the typical properties of gases.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Typical Properties of Gases**</p>
              <ul>
                <li>
                  {" "}
                  <b>Diffusion:</b> Diffusion is defined as &quot;spontaneous mixing
                  up of molecules by random motion and collisions to form a
                  homogeneous mixture.&quot; Gases can diffuse very rapidly. The rate
                  of diffusion depends upon the molecular mass of the gases.
                  Lighter gases diffuse faster than heavier ones. Example:{" "}
                  <code>
                    H<sub>2</sub>
                  </code>{" "}
                  diffuses four times faster than{" "}
                  <code>
                    O<sub>2</sub>
                  </code>{" "}
                  gas.
                </li>
                <li>
                  <b>Effusion:</b> Effusion is the escaping of gas molecules
                  through a tiny hole into a space with lesser pressure.
                  Effusion depends upon molecular masses; lighter gases effuse
                  faster than heavier gases. Example: When a tyre gets
                  punctured, air effuses out.
                </li>
                <li>
                  <b>Pressure:</b> Gas molecules are always in a continuous
                  state of motion. When molecules strike with the walls of the
                  container or any other surface, they exert pressure. Pressure
                  (P) is defined as the force (F) exerted per unit surface area
                  (A), \( P = \frac F A \). The SI unit of force is Newton and
                  that of area is \( m^2 \). Hence pressure has SI unit of \(
                  N/m^2 \), also called Pascal (Pa). One Pascal (Pa) = 1 \(
                  N/m^2 \). Barometers measure atmospheric pressure and
                  manometers measure pressure in the laboratory. Standard
                  atmospheric Pressure is defined as the pressure exerted by a
                  mercury column of 760 mm height at sea level. 1 atm = 760 mm
                  Hg = 760 torr = 101325 N/m² = 101325 Pa.
                </li>
                <li>
                  <b>Compressibility:</b> Gases are highly compressible due to
                  empty spaces between their molecules. When gases are
                  compressed, the molecules come closer to one another and
                  occupy less volume compared to the uncompressed state.
                </li>
                <li>
                  <b>Mobility:</b> Gas molecules are always in a state of
                  continuous motion. They move from one place to another because
                  gas molecules possess very high kinetic energy. This mobility
                  results in the mixing of gas molecules to produce a
                  homogeneous mixture.
                </li>
                <li>
                  <b>Density of Gases:</b> Gases have lower density than liquids
                  and solids due to their light mass and larger volume occupied
                  by the gas molecules. Gas density is expressed in grams per
                  dm³. The density of gases increases by cooling because their
                  volume decreases. For example, at normal atmospheric pressure,
                  the density of oxygen gas is 1.4 g/dm³ at 20°C and 1.5 g/dm³
                  at 0.0°C.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Define Boyle&apos;s law and verify it with an example.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Boyle&apos;s Law**</p>
              <p>
                **Introduction:** In 1662, Robert Boyle studied the relationship
                between the volume and pressure of a gas at constant
                temperature.
              </p>
              <p>
                **Definition:** The volume of a given mass of a gas is inversely
                proportional to its pressure, provided the temperature remains
                constant.
              </p>
              <p>
                **Mathematical Expression:** The volume (V) of a given mass of
                gas decreases with an increase in pressure (P) and vice versa.
                Mathematically, \( PV = k \), where &apos;k&apos; is a constant. Boyle&apos;s
                law can be stated as &quot;the product of pressure and volume of a
                fixed mass of a gas is constant at a constant temperature.&quot;
              </p>
              <p>
                **Experimental Verification:** For example, if the pressure is
                increased from 2 atm to 8 atm, the volume decreases from 1 dm³
                to 0.25 dm³. The product of pressure and volume remains constant
                (2 atm x 1 dm³ = 2 atm dm³, 4 atm x 0.5 dm³ = 2 atm dm³, etc.),
                verifying Boyle&apos;s law.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              In which units is blood pressure measured?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Blood pressure is measured using a pressure gauge. It is
                reported in units such as torr. Blood pressure is given as two
                values, for example, 120/80. The first measurement shows the
                maximum pressure (systolic pressure) when the heart is pumping,
                and the second value shows the minimum pressure (diastolic
                pressure) when the heart is at rest. Hypertension is defined as
                a blood pressure greater than 140/90.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Define and explain Charles Law of gases.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Charles Law**</p>
              <p>
                **Introduction:** In 1787, French scientist J. Charles presented
                his law.
              </p>
              <p>
                **Definition:** The volume of a given mass of a gas is directly
                proportional to the absolute temperature if the pressure is kept
                constant.
              </p>
              <p>
                **Mathematical Expression:** When pressure (P) is constant, the
                volume (V) of a given mass of gas is proportional to absolute
                temperature (T). Mathematically, \( \frac(V)(T) = k \), where k
                is a constant.
              </p>
              <p>
                **Experimental Verification:** For example, if the initial
                volume of a gas is 50 cm³ at 25°C, it increases to about 62.5
                cm³ at 100°C.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Explain the Absolute Temperature Scale.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Absolute Temperature Scale**</p>
              <p>
                Lord Kelvin introduced the absolute temperature scale or Kelvin
                scale. It starts from 0 K (absolute zero), the temperature at
                which an ideal gas would have zero volume. The Kelvin scale has
                equal degree increments as the Celsius scale, where 0°C = 273 K
                and vice versa.
              </p>
              <p>
                **Conversion:** \( T(K) = T(°C) + 273 \), \( T(°C) = T(K) - 273
                \).
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Question 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Explain the physical states of matter and the role of
              intermolecular forces.
            </AccordionTrigger>
            <AccordionContent>
              <p>
                **The Physical States of Matter and the Role of Intermolecular
                Forces**
              </p>
              <p>
                Matter exists in three physical states: gas, liquid, and solid.
              </p>
              <ul>
                <li>
                  <b>Gaseous State:</b> Molecules are far apart with very weak
                  intermolecular forces.
                </li>
                <li>
                  <b>Liquid State:</b> Molecules are closer together with
                  stronger intermolecular forces, affecting properties like
                  boiling point.
                </li>
                <li>
                  <b>Solid State:</b> Molecules are closely packed with dominant
                  intermolecular forces, resulting in a fixed shape and higher
                  density compared to liquids and gases.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Define and explain Evaporation. On which factors does evaporation
              depend?
            </AccordionTrigger>
            <AccordionContent>
              <p>**Evaporation**</p>
              <p>
                Evaporation is the process where a liquid changes into a gas
                phase. It is an endothermic process (heat is absorbed). Factors
                affecting evaporation include:
              </p>
              <ul>
                <li>
                  <b>Surface Area:</b> Greater surface area leads to higher
                  evaporation.
                </li>
                <li>
                  <b>Temperature:</b> Higher temperature increases evaporation
                  rate.
                </li>
                <li>
                  <b>Intermolecular Forces:</b> Stronger intermolecular forces
                  decrease evaporation rate.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 8 */}
          <AccordionItem value="item-8">
            <AccordionTrigger>
              What is vapour pressure and how is it affected by intermolecular
              forces?
            </AccordionTrigger>
            <AccordionContent>
              <p>**Vapour Pressure**</p>
              <p>
                Vapour pressure is the pressure exerted by the vapour of a
                liquid at equilibrium with the liquid. It depends on:
              </p>
              <ul>
                <li>
                  <b>Nature of Liquid:</b> Polar liquids have lower vapour
                  pressure.
                </li>
                <li>
                  <b>Size of Molecules:</b> Smaller molecules exert higher
                  pressure.
                </li>
                <li>
                  <b>Temperature:</b> Higher temperature increases vapour
                  pressure.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 9 */}
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Define Boiling Point and explain how it is affected by different
              factors.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Boiling Point**</p>
              <p>
                The boiling point is the temperature at which the vapour
                pressure of a liquid equals the atmospheric pressure. It is
                affected by:
              </p>
              <ul>
                <li>
                  <b>Nature of Liquid:</b> Polar liquids have higher boiling
                  points.
                </li>
                <li>
                  <b>Intermolecular Forces:</b> Stronger forces lead to higher
                  boiling points.
                </li>
                <li>
                  <b>External Pressure:</b> Increased external pressure raises
                  the boiling point.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 10 */}
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Define Freezing Point and explain the factors it depends on.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Freezing Point**</p>
              <p>
                The freezing point is the temperature at which the vapour
                pressure of the liquid equals that of the solid. It depends on:
              </p>
              <ul>
                <li>
                  <b>Size of Molecules</b>
                </li>
                <li>
                  <b>Intermolecular Forces</b>
                </li>
                <li>
                  <b>Shape of Molecules</b>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 11 */}
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Describe the phenomenon of diffusion in liquids along with factors
              which influence it.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Diffusion in Liquids**</p>
              <p>
                Diffusion in liquids is the movement of molecules from higher to
                lower concentration to form a homogeneous mixture. Factors
                influencing diffusion include:
              </p>
              <ul>
                <li>
                  <b>Intermolecular Forces</b>
                </li>
                <li>
                  <b>Size of Molecules</b>
                </li>
                <li>
                  <b>Shapes of Molecules</b>
                </li>
                <li>
                  <b>Temperature</b>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Question 12 */}
          <AccordionItem value="item-12">
            <AccordionTrigger>Explain the density of liquids.</AccordionTrigger>
            <AccordionContent>
              <p>**Density of Liquids**</p>
              <p>
                The density of a liquid depends on its mass and volume. Liquids
                are denser than gases due to closely packed molecules. Example:
                Water has a density of 1.0 g/cm³.
              </p>
            </AccordionContent>
          </AccordionItem>
          {/* Question 13 */}
          <AccordionItem value="item-13">
            <AccordionTrigger>
              Explain typical properties of the solid state.
            </AccordionTrigger>
            <AccordionContent>
              <p>**Solid State**</p>
              <p>
                In the solid state, molecules are closely packed with definite
                shape and volume. Solids have strong intermolecular forces,
                making them denser and more rigid compared to liquids and gases.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default QuestionDashboard;
