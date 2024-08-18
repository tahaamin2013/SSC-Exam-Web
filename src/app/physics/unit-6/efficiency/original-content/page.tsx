import React from 'react';

const Efficiency = () => {
  return (
    <div className="bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-6">6.5 Efficiency</h1>
      <p className="text-lg mb-4">
        The principle of conservation of energy suggests that energy can neither be created nor destroyed. That is, the total energy output of a machine must be equal to its energy input. However, it is found that the energy output is always less than the energy input. This is mainly due to the work that must be done against frictional forces.
      </p>
      <p className="text-lg mb-4">
        A car engine is designed to convert chemical energy stored in the fuel into kinetic energy for the car. A light bulb is designed to convert electric energy into light energy. While the car engine and the light bulb are transforming some of the potential energy into the desired form of energy, part of the energy is &apos;lost&apos;.
      </p>
      <p className="text-lg mb-4">
        The lost energy is converted into a form that does not serve the intended purpose. Often, the lost energy is transformed into heat. The efficiency <code className="bg-gray-100 p-2 rounded">η</code> of a machine or device describes the extent to which it converts input energy or work into useful output energy or work.
      </p>
      <p className="text-lg mb-4">
        Efficiency <code className="bg-gray-100 p-2 rounded">η</code> is the ratio of useful work output <code className="bg-gray-100 p-2 rounded">W<sub>output</sub></code> to the total work input <code className="bg-gray-100 p-2 rounded">W<sub>input</sub></code>:
      </p>
      <p className="text-lg mb-4">
        <code className="bg-gray-100 p-2 rounded">η = W<sub>output</sub> / W<sub>input</sub></code> <br />
        or <br />
        <code className="bg-gray-100 p-2 rounded">η = E<sub>output</sub> / E<sub>input</sub></code>
      </p>
      <p className="text-lg mb-4">
        Efficiency has no unit as it is the ratio of the same quantities and therefore units cancel out. The efficiency of an energy transformation is sometimes given in percentage as follows:
      </p>
      <p className="text-lg mb-4">
        <code className="bg-gray-100 p-2 rounded">η (%) = (E<sub>output</sub> / E<sub>input</sub>) × 100%</code>
      </p>
      <p className="text-lg mb-4">
        The correlation between power and efficiency becomes apparent when considering the output power of an energy conversion process. The output power <code className="bg-gray-100 p-2 rounded">P<sub>o</sub></code> of a given system is directly proportional to its input power <code className="bg-gray-100 p-2 rounded">P</code> through the efficiency <code className="bg-gray-100 p-2 rounded">η</code> factor:
      </p>
      <p className="text-lg mb-4">
        <code className="bg-gray-100 p-2 rounded">P<sub>o</sub> = η × P</code>
      </p>
      <p className="text-lg mb-4">
        Equation <code className="bg-gray-100 p-2 rounded">6.10</code> clearly demonstrates that the output power is a fraction of the input power, determined by the efficiency of the system. In the event that the system operates at 100% efficiency (<code className="bg-gray-100 p-2 rounded">η = 1</code>), the output power will be equivalent to the input power. However, in practical applications, energy is often dissipated as waste heat or in other forms, resulting in efficiencies lower than 100%.
      </p>
      <p className="text-lg mb-4">
        Efficiency maximization plays a pivotal role in energy systems as it allows for optimal utilization of resources while minimizing energy wastage.
      </p>
      <p className="text-lg mb-4">
        An incandescent light bulb is designed to provide light energy. Unfortunately, it also produces a significant amount of waste thermal energy. For instance, only about 5% of the electrical energy delivered to the bulb is transformed into light energy, while the rest becomes waste heat. A fluorescent lamp is about 20% efficient in converting electrical energy into light.
      </p>
      <table className="min-w-full bg-gray-100 border border-gray-300 mt-8 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">DEVICE</th>
            <th className="border border-gray-300 p-2 text-left">EFFICIENCY (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Electric Generator</td>
            <td className="border border-gray-300 p-2">98</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Hydroelectric Power Plant</td>
            <td className="border border-gray-300 p-2">95</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Large Electric Motor</td>
            <td className="border border-gray-300 p-2">95</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Home Gas Furnace</td>
            <td className="border border-gray-300 p-2">85</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Wind Generator</td>
            <td className="border border-gray-300 p-2">55</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Fossil Fuel Power Plant</td>
            <td className="border border-gray-300 p-2">40</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Automobile Engine</td>
            <td className="border border-gray-300 p-2">25</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Fluorescent Light</td>
            <td className="border border-gray-300 p-2">20</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Incandescent Light</td>
            <td className="border border-gray-300 p-2">5</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">EXAMPLE 6.6: EFFICIENCY</h2>
      <p className="text-lg mb-4">
        A petrol engine intakes 400 J of fuel energy and does only 120 J of useful work. How efficient is this petrol engine?
      </p>
      <p className="text-lg mb-4">
        <strong>GIVEN:</strong><br />
        Input energy <code className="bg-gray-100 p-2 rounded">E<sub>input</sub> = 400 J</code><br />
        Output energy <code className="bg-gray-100 p-2 rounded">E<sub>output</sub> = 120 J</code>
      </p>
      <p className="text-lg mb-4">
        <strong>REQUIRED:</strong><br />
        Efficiency <code className="bg-gray-100 p-2 rounded">η = ?</code>
      </p>
      <p className="text-lg mb-4">
        <strong>SOLUTION:</strong><br />
        The efficiency of an engine is given by: <code className="bg-gray-100 p-2 rounded">η = E<sub>output</sub> / E<sub>input</sub></code><br />
        Putting values: <code className="bg-gray-100 p-2 rounded">η = 120 J / 400 J = 0.3</code><br />
        In percentage: <code className="bg-gray-100 p-2 rounded">η (%) = 0.3 × 100% = 30%</code>
      </p>
      <p className="text-lg mb-4">
        Therefore, the petrol engine will be 30% efficient. This means that such an engine will only do about one quarter of the useful work of the provided input fuel. Which means that such a petrol engine will be 25% efficient. It will only do one-quarter of the useful work of the provided input fuel.
      </p>
    </div>
  );
};

export default Efficiency;
