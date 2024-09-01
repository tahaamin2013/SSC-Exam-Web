import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Periodic Table and Periodicity
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Periodic Table and Periodicity
** Structure
*** Periods (horizontal rows)
**** 7 periods
**** Short periods (1-3)
**** Long periods (4-7)
*** Groups (vertical columns)
*** Blocks
**** s-block (Groups 1-2)
**** p-block (Groups 13-18)
**** d-block (Transition elements)
**** f-block (Lanthanides and Actinides)
** Element Properties
*** Group 1 (Alkali Metals)
**** Soft metals
**** Decreasing melting point
**** Increasing density
**** Increasing reactivity
*** Group 7 (Halogens)
**** Diatomic non-metals
**** Increasing density
**** Decreasing reactivity
**** Appearances at room temperature
*** Group 18 (Noble Gases)
**** Unreactive monoatomic gases
*** Transition Elements
**** High densities
**** High melting points
**** Variable oxidation numbers
**** Colored compounds
**** Catalytic properties
** Periodic Law
*** Elements arranged by atomic number
*** Properties repeat periodically
** Predicting Properties
*** Based on group trends
*** Based on period trends
** Metal vs Non-metal Properties
*** Thermal conductivity
*** Electrical conductivity
*** Malleability and ductility
*** Melting and boiling points
** Applications
*** Predicting reactivity
*** Understanding bonding
*** Catalysts in industrial processes
@endmindmap`}
        />
        <Image alt="fd" height={7000} src="/table.jpg" width={700} />
      </section>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 font-sans">
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Periodic Table and Periodicity
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Element Properties and Prediction
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Use chemical periodicity to predict properties of elements in a
              group. Deduce unknown elements&apos; nature and position from given
              properties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 1 (Alkali Metals)
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Characteristics: Relatively soft metals</li>
              <li>
                Trends down the group:
                <ul className="list-disc pl-5">
                  <li>Decreasing melting point</li>
                  <li>Increasing density</li>
                  <li>Increasing reactivity</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 7 (Halogens)
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Characteristics: Diatomic non-metals</li>
              <li>
                Trends down the group:
                <ul className="list-disc pl-5">
                  <li>Increasing density</li>
                  <li>Decreasing reactivity</li>
                </ul>
              </li>
              <li>
                Appearances at room temperature:
                <ul className="list-disc pl-5">
                  <li>Fluorine: Pale yellow gas</li>
                  <li>Chlorine: Yellow-green gas</li>
                  <li>Bromine: Red-brown liquid</li>
                  <li>Iodine: Grey-black solid</li>
                </ul>
              </li>
              <li>
                Reactions:
                <ul className="list-disc pl-5">
                  <li>Displacement reactions with halide ions</li>
                  <li>Act as reducing agents</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Hydrogen Halides
            </h2>
            <p className="text-lg text-gray-700">
              Analyze relative thermal stabilities. Explain in terms of bond
              strengths.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Transition Elements
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                Characteristics:
                <ul className="list-disc pl-5">
                  <li>High densities</li>
                  <li>High melting points</li>
                  <li>Variable oxidation numbers</li>
                  <li>Form colored compounds</li>
                  <li>
                    Act as catalysts (e.g., Haber process, catalytic converters)
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 18 (Noble Gases)
            </h2>
            <p className="text-lg text-gray-700">
              Characteristics: Unreactive monoatomic gases. Explain unreactivity
              in terms of electronic configuration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Metals vs. Non-metals
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                Compare general physical properties:
                <ul className="list-disc pl-5">
                  <li>Thermal conductivity</li>
                  <li>Electrical conductivity</li>
                  <li>Malleability and ductility</li>
                  <li>Melting and boiling points</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Periodic Table Structure
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Elements arranged by increasing atomic number</li>
              <li>Based on Periodic Law: Properties repeat periodically</li>
              <li>7 periods (horizontal rows)</li>
              <li>18 groups (vertical columns)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Blocks in the Periodic Table
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>s-block: Groups 1 and 2</li>
              <li>p-block: Groups 13 to 18 (except He)</li>
              <li>d-block: Transition elements</li>
              <li>f-block: Lanthanides and actinides</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Importance of the Periodic Table
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Organizes element information</li>
              <li>Predicts properties and reactivity</li>
              <li>Relates reactivity to atomic structure</li>
              <li>Predicts bond types (ionic or covalent)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
