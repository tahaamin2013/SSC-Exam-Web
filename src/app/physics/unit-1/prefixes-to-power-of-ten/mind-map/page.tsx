import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const PrefixesTable = () => {
  const umlCode = `
@startmindmap
* Prefixes to Power of Ten
** Deca (da) - 10^1
** Hecto (h) - 10^2
** Kilo (k) - 10^3
** Mega (M) - 10^6
** Giga (G) - 10^9
** Tera (T) - 10^12
** Peta (P) - 10^15
** Exa (E) - 10^18
left side
** Deci (d) - 10^-1
** Centi (c) - 10^-2
** Milli (m) - 10^-3
** Micro (μ) - 10^-6
** Nano (n) - 10^-9
** Pico (p) - 10^-12
** Femto (f) - 10^-15
** Atto (a) - 10^-18
@endmindmap

  `;
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Prefixes to Power of Ten</h1>

      <p className="mb-4">
        A mechanism through which numbers are expressed in powers of ten that are given a proper name is called a prefix.
        Prefixes make standard form or scientific notation easier.
        Large numbers are simply written in more convenient prefixes with units.
        For example, the thickness of a paper can be written conveniently in smaller units of millimetre instead of metre.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Decimal Multiplier</th>
              <th className="px-4 py-2 border">Prefix</th>
              <th className="px-4 py-2 border">Symbol</th>
            </tr>
          </thead>
          <tbody>
            {[
              { multiplier: "10^18", prefix: "Exa", symbol: "E" },
              { multiplier: "10^15", prefix: "Peta", symbol: "P" },
              { multiplier: "10^12", prefix: "Tera", symbol: "T" },
              { multiplier: "10^9", prefix: "Giga", symbol: "G" },
              { multiplier: "10^6", prefix: "Mega", symbol: "M" },
              { multiplier: "10^3", prefix: "Kilo", symbol: "k" },
              { multiplier: "10^2", prefix: "Hecto", symbol: "h" },
              { multiplier: "10^1", prefix: "Deca", symbol: "da" },
              { multiplier: "10^-1", prefix: "Deci", symbol: "d" },
              { multiplier: "10^-2", prefix: "Centi", symbol: "c" },
              { multiplier: "10^-3", prefix: "Milli", symbol: "m" },
              { multiplier: "10^-6", prefix: "Micro", symbol: "μ" },
              { multiplier: "10^-9", prefix: "Nano", symbol: "n" },
              { multiplier: "10^-12", prefix: "Pico", symbol: "p" },
              { multiplier: "10^-15", prefix: "Femto", symbol: "f" },
              { multiplier: "10^-18", prefix: "Atto", symbol: "a" }
            ].map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{item.multiplier}</td>
                <td className="px-4 py-2 border">{item.prefix}</td>
                <td className="px-4 py-2 border">{item.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">The number of seconds in a day is: 86,400 seconds = 8.64 x 10^4 s = 86.4 ks.</li>
          <li className="mb-2">The distance to the nearest star, Alpha Centauri, is: 4.132 x 10^16 m = 41.32 Pm.</li>
          <li className="mb-2">The thickness of the page of this book is about: 4.0 x 10^-4 m = 40 x 10^-3 m = 40 mm.</li>
          <li className="mb-2">The mass of a grain of salt is: 1.0 x 10^-4 g = 100 x 10^-6 g = 100 mg.</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <PlantUMLDiagram code={umlCode} />
</div>
    </div>

  );
};

export default PrefixesTable;
