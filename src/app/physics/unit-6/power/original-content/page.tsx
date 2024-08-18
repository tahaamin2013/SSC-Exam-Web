import React from 'react';

const Power = () => {
  return (
    <div className="bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-6">6.4 Power</h1>
      <p className="text-lg mb-4">
        The definition of work makes no reference to the passage of time. But often we need to know how fast work is being done or how fast energy is being converted from one form to another. We describe this in terms of power. Power is the time rate at which work is done or the rate at which energy is consumed. Mathematically,
      </p>
      <p className="text-lg mb-4">
        <code className="bg-gray-100 p-2 rounded">P = W / t</code> <br />
        or <br />
        <code className="bg-gray-100 p-2 rounded">P = E / t</code>
      </p>
      <p className="text-lg mb-4">
        Like work, power is a scalar quantity. The SI unit of power is the watt (W), in honor of James Watt, a Scottish physicist who invented the first steam engine. From the equations above, the unit of power is given by <code className="bg-gray-100 p-2 rounded">1 watt = 1 joule / 1 second</code>, or in symbols, <code className="bg-gray-100 p-2 rounded">1 W = 1 J/s</code>.
      </p>
      <p className="text-lg mb-4">
        The power rating (sometimes called the &quot;wattage&quot;) of a light bulb tells you how fast it will convert electric energy into heat and light. For example, a 100 W filament bulb and a 40 W tube light are shown in the figure 6.20.
      </p>
      <p className="text-lg mb-4">
        For practical purposes, a larger unit is often used: the horsepower (hp). One horsepower (hp) is defined as 550 ft·lbf/s, which equals 746 W. Therefore, <code className="bg-gray-100 p-2 rounded">1 hp = 746 W</code>.
      </p>
      <p className="text-lg mb-4">
        A unit of energy (work) can now be defined in terms of the unit of power. One kilowatt hour (kWh) is the energy converted or consumed in 1 hour at a constant rate of 1 kW = 1000 J/s. The numerical value of 1 kWh is,
      </p>
      <p className="text-lg mb-4">
        <code className="bg-gray-100 p-2 rounded">1 kWh = (1000 W) × (3600 s)</code> <br />
        or <br />
        <code className="bg-gray-100 p-2 rounded">1 kWh = 3.6 × 10<sup>6</sup> J</code>
      </p>
      <p className="text-lg mb-4">
        The electricity bills that we pay are measured in terms of this unit, i.e., 1 unit = 1 kWh.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">EXAMPLE 6.5: POWER OF AN ENGINE</h2>
      <p className="text-lg mb-4">
        How powerful will a Tesla Car&apos;s engine be if it does <code className="bg-gray-100 p-2 rounded">3 × 10<sup>6</sup> J</code> of work in 1 minute? What will be its power in hp?
      </p>
      <p className="text-lg mb-4">
        <strong>GIVEN:</strong><br />
        Work <code className="bg-gray-100 p-2 rounded">W = 3 × 10<sup>6</sup> J</code><br />
        Time <code className="bg-gray-100 p-2 rounded">t = 1 min = 60 s</code>
      </p>
      <p className="text-lg mb-4">
        <strong>REQUIRED:</strong><br />
        Power in horsepower <code className="bg-gray-100 p-2 rounded">P = ?</code>
      </p>
      <p className="text-lg mb-4">
        <strong>SOLUTION:</strong><br />
        Power is given by the relation: <code className="bg-gray-100 p-2 rounded">P = W / t</code><br />
        Putting values: <code className="bg-gray-100 p-2 rounded">P = (3 × 10<sup>6</sup> J) / 60 s</code><br />
        Hence, <code className="bg-gray-100 p-2 rounded">P = 6.15 × 10<sup>4</sup> W = 615 kW</code><br />
        Since, <code className="bg-gray-100 p-2 rounded">1 hp = 746 W</code> or <code className="bg-gray-100 p-2 rounded">1 W = 1 / 746 hp</code><br />
        Therefore, <code className="bg-gray-100 p-2 rounded">P = 6.15 × 10<sup>4</sup> W × (1 hp / 746 W)</code><br />
        Thus, <code className="bg-gray-100 p-2 rounded">P = 825 hp</code>
      </p>
      <p className="text-lg mb-4">
        <strong>Answer:</strong><br />
        Thus, the power of such an engine will be <code className="bg-gray-100 p-2 rounded">615 kW</code> or <code className="bg-gray-100 p-2 rounded">825 hp</code>.
      </p>
    </div>
  );
};

export default Power;