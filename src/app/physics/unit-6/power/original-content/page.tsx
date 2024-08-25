import React from "react";

const PowerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">6.4 POWER</h1>
        <p className="text-lg mb-4">
          The definition of work makes no reference to the passage of time. But often we need to know how fast is being done or how fast energy is being converted from one form to another. We describe this in terms of power. Power is the time rate at which work is done or the rate at which energy is consumed. Mathematically
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-purple-600">P = W/t</p>
            <p className="font-mono text-xl text-purple-600">P = E/t</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          Like work, power is a scalar quantity. The SI unit of power is watt (W), in honour of James Watt, a Scottish physicist who invented the first steam engine. From equation (6.7), the unit of power is given by
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-purple-600">1 watt = 1 joule / 1 second</p>
            <p className="font-mono text-xl text-purple-600">1 W = 1 Js</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          The power rating (sometimes called the &quot;wattage&quot;) of a light bulb tells you how fast it will convert electric energy into heat and light. A 100 W filament bulb and a 40 W tube light are shown in Figure 6.20.
        </p>
        <p className="text-lg mb-4">
          For practical purposes, a larger unit is often used, the horse power (hp). One horse power (hp) is defined as 550 ft.lb/s which equals 746 W.
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-purple-600">1 hp = 746 W</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          A unit of energy (work) can now be defined in terms of the unit of power. One kilowatt hour (kWh) is the energy converted or consumed in 1 hour at the constant rate of 1 kW = 1000 J/s. The numerical value of 1 kWh is:
        </p>
        <div className="flex justify-center my-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono text-xl text-purple-600">1 kWh = (10 W) × (3600 s)</p>
            <p className="font-mono text-xl text-purple-600">1 kWh = 3.6 × 10<sup>6</sup> J</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          The electricity bills that we pay are measured in terms of this unit, i.e., 1 unit = 1 kWh.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">EXAMPLE 6.5: POWER OF AN ENGINE</h2>
        <p className="text-lg mb-4">
          How powerful will be a Tesla Car&apos;s engine if it does 3 × 10<sup>6</sup> J of work in 1 minute? What will be its power in hp?
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <p className="font-semibold mb-2">GIVEN:</p>
          <ul className="list-disc ml-6">
            <li>Work &apos;W&apos; = 3 × 10<sup>6</sup> J</li>
            <li>Time &apos;t&apos; = 1 min = 60 s</li>
          </ul>
          <p className="font-semibold mb-2 mt-4">REQUIRED:</p>
          <p className="ml-6">Power in horsepower &apos;P&apos; =?</p>
          <p className="font-semibold mb-2 mt-4">SOLUTION:</p>
          <p className="ml-6">Power is given by the relation: P = W/t</p>
          <p className="ml-6">Putting values: P = 3 × 10<sup>6</sup> J / 60 s</p>
          <p className="ml-6">Hence, P = 6.15 × 10<sup>4</sup> W = 615 kW</p>
          <p className="ml-6 mt-4">Since, 1 hp = 746 watt,</p>
          <p className="ml-6">P = 615 kW × (1 hp / 746 W)</p>
          <p className="ml-6 mt-4">Therefore,</p>
          <p className="ml-6">P = 825 hp</p>
          <p className="font-semibold mt-4">Answer: Thus, power of such an engine will be 615 kW or 825 hp.</p>
        </div>
      </div>
    </div>
  );
};

export default PowerPage;
