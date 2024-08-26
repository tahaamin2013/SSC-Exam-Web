import React from "react";

const EfficiencyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">6.5 EFFICIENCY</h1>
        <p className="text-lg mb-4">
          The principle of conservation of energy suggests that energy can neither be created nor destroyed. That is, the total energy output of a machine must be equal to its energy input. However, it is found that the energy output is always less than the energy input. This is mainly due to the work that must be done against frictional forces.
        </p>
        <p className="text-lg mb-4">
          A car engine is designed to convert chemical energy stored in the fuel into kinetic energy for the car. A light bulb is designed to convert electric energy into light energy. While the car engine and the light bulb are transforming some of the potential energy into the desired form of energy, part of its energy is &quot;lost&quot;.
        </p>
        <p className="text-lg mb-4">
          The lost energy is converted into a form that does not serve the intended purpose. Often, the lost energy is transformed into heat. The efficiency &quot;η&quot; of a machine or device describes the extent to which it converts input energy or work into a useful type of output energy or work.
        </p>
        <p className="text-lg mb-4">
          Efficiency &quot;η&quot; is the ratio of useful work output &quot;W<sub>out</sub>&quot; to the total work input &quot;W<sub>in</sub>&quot;.
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-blue-600">
              η = (Useful output work) / (Input work)
            </p>
            <p className="font-mono text-xl text-blue-600">η = W<sub>out</sub> / W<sub>in</sub></p>
          </div>
        </div>
        <p className="text-lg mb-4">
          In terms of energy, the equation can be written as:
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-blue-600">η = E<sub>out</sub> / E<sub>in</sub></p>
          </div>
        </div>
        <p className="text-lg mb-4">
          Efficiency has no unit as it is the ratio of the same quantities, and therefore, units cancel out. The efficiency of an energy transformation is sometimes given as a percentage:
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-blue-600">η = (E<sub>out</sub> / E<sub>in</sub>) × 100%</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          The correlation between power and efficiency becomes apparent when considering the output power of an energy conversion process. The output power &quot;P<sub>out</sub>&quot; of a given system is directly proportional to its input power &quot;P<sub>in</sub>&quot; through the efficiency &quot;η&quot; factor:
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-blue-600">P<sub>out</sub> = η × P<sub>in</sub></p>
          </div>
        </div>
        <p className="text-lg mb-4">
          Equation 6.10 clearly demonstrates that the output power is a fraction of the input power, determined by the efficiency of the system. In the event that the system operates at 100% efficiency (η = 1), the output power will be equivalent to the input power. However, in practical applications, energy is often dissipated as waste heat or in other forms, resulting in efficiencies lower than 100%.
        </p>
        <p className="text-lg mb-4">
          Efficiency maximization plays a pivotal role in energy systems as it allows for optimal utilization of resources while minimizing energy wastage.
        </p>
        <p className="text-lg mb-4">
          An incandescent light bulb is designed to provide light energy. Unfortunately, it also produces a significant amount of waste heat. In fact, only about 5% of the electrical energy delivered to the bulb transforms into light energy; the rest becomes waste thermal energy. We say that the incandescent light bulb is only 5% efficient. A fluorescent lamp is about 20% efficient at converting electrical energy into light, as shown in Figure 6.21.
        </p>
        <p className="text-lg mb-4">
          It is not possible to have a machine with 100% efficiency because friction lowers the efficiency of a machine. Work output is always less than work input, so an actual machine wasting some of the input energy as heat (which is not required) cannot be 100% efficient. Typical efficiencies of energy transformation technologies are given in the table below:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="py-2 border-b-2 border-gray-300">Device</th>
                <th className="py-2 border-b-2 border-gray-300">Efficiency (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border-b border-gray-300">Electric generator</td>
                <td className="py-2 border-b border-gray-300">98</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Hydroelectric power plant</td>
                <td className="py-2 border-b border-gray-300">95</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Large electric motor</td>
                <td className="py-2 border-b border-gray-300">95</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Home gas furnace</td>
                <td className="py-2 border-b border-gray-300">85</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Wind generator</td>
                <td className="py-2 border-b border-gray-300">55</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Fossil fuel power plant</td>
                <td className="py-2 border-b border-gray-300">40</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Automobile engine</td>
                <td className="py-2 border-b border-gray-300">25</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Fluorescent light</td>
                <td className="py-2 border-b border-gray-300">20</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-gray-300">Incandescent light</td>
                <td className="py-2 border-b border-gray-300">5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">EXAMPLE 6.6: EFFICIENCY</h2>
        <p className="text-lg mb-4">
          A petrol engine intakes 400 J of fuel energy and does only 120 J of useful work. How efficient is this petrol engine?
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <p className="font-semibold mb-2">GIVEN:</p>
          <ul className="list-disc ml-6">
            <li>Input energy (E<sub>in</sub>) = 400 J</li>
            <li>Output energy (E<sub>out</sub>) = 120 J</li>
          </ul>
          <p className="font-semibold mb-2 mt-4">REQUIRED:</p>
          <p className="ml-6">Efficiency = ?</p>
          <p className="font-semibold mb-2 mt-4">SOLUTION:</p>
          <p className="ml-6">The efficiency of an engine is given by:</p>
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <p className="font-mono text-xl text-blue-600">η = E<sub>out</sub> / E<sub>in</sub></p>
          </div>
          <p className="ml-6">Putting values:</p>
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <p className="font-mono text-xl text-blue-600">η = 120 / 400</p>
          </div>
          <p className="ml-6">In percentage:</p>
          <div className="bg-gray-100 p-4 rounded-lg my-4">
            <p className="font-mono text-xl text-blue-600">Efficiency = 0.3 × 100% = 30%</p>
          </div>
          <p className="ml-6">
            Therefore, this petrol engine is 30% efficient. This means that it will only do about one quarter of useful work of the provided input fuel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyPage;
