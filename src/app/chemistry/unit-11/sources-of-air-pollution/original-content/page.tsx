// pages/environmental-chemistry.js
import React from 'react';

const EnvironmentalChemistry = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">UNIT 11</h1>
            <h2 className="text-xl font-semibold mb-4">ENVIRONMENTAL CHEMISTRY-AIR</h2>

            <h2 className="text-xl font-semibold mb-4">11.3 SOURCES OF AIR POLLUTION</h2>
            <p className="mb-4">
                Air that contains harmful particles and gases is said to be polluted. Some air pollution occurs naturally.
                But many types of air pollution are the result of human activities.
            </p>

            <h3 className="text-lg font-semibold mb-4">11.3.1 Natural Sources</h3>
            <p className="mb-4">
                Many natural processes such as forest fires, dust storms release smoke and dust particles into the air.
                Volcanoes emit clouds of dust and poisonous gases along with ash. Which gas is emitted by volcanoes?
                Termites and cows also release large amounts of methane in the air. Considerable electrical discharges in the atmosphere
                produce nitrogen oxides.
            </p>

            <h3 className="text-lg font-semibold mb-4">11.3.2 Human Activities</h3>
            <p className="mb-4">
                Most of the air pollution is the result of burning fossil fuels, such as coal, petroleum, and natural gas.
                Nearly half of the air pollution comes from cars and other motor vehicles. Factories and power plants that burn coal or oil
                release poisonous gases into the air. Burning fossil fuels and incineration release carbon monoxide (CO), nitrogen oxides
                (NO, NO₂), and sulphur oxides (SO₂, SO₃). Table 10.1 shows the effects produced by air pollutants.
            </p>

            <pre className="bg-gray-100 p-4 rounded mb-4">
                {`C(s) + O2(g) (limited) → CO(g)
S(s) + O2(g) → SO2(g)
N2(g) + O2(g) → 2NO(g)
2NO(g) + O2(g) → 2NO2(g)`}
            </pre>

            <h3 className="text-lg font-semibold mb-4">Table 11.1: Shows Effect Produced by Air Pollutants</h3>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Air Pollutant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Physical Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sources</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harmful Effects</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Carbon monoxide</td>
                        <td className="px-6 py-4 whitespace-nowrap">Colourless, odourless and poisonous gas</td>
                        <td className="px-6 py-4 whitespace-nowrap">Incomplete burning of wood, fuels and vehicle exhaust.</td>
                        <td className="px-6 py-4 whitespace-nowrap">Headache, brain damage, death.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Sulphur dioxide</td>
                        <td className="px-6 py-4 whitespace-nowrap">Colourless gas with unpleasant and irritating odour</td>
                        <td className="px-6 py-4 whitespace-nowrap">Power stations and industries using fossil fuels</td>
                        <td className="px-6 py-4 whitespace-nowrap">Breathing difficulties, bronchitis, emphysema, lung cancer, acid rain and greenhouse effect</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Oxides of nitrogen</td>
                        <td className="px-6 py-4 whitespace-nowrap">NO is colourless, odourless gas soluble in water. NO₂ is reddish brown gas with pungent odour soluble in water. Both are highly toxic gases</td>
                        <td className="px-6 py-4 whitespace-nowrap">Exhaust of motor vehicles, power stations and industries using fossil fuels</td>
                        <td className="px-6 py-4 whitespace-nowrap">Coughs, headaches lung diseases, acid rain and greenhouse effect (global warming)</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 11.4</h3>
            <p className="mb-4">1. Write three human activities that are responsible for air pollution.</p>
            <p className="mb-4">2. Write three natural processes that are contributing to air pollution.</p>
            <p className="mb-4">3. List main sources of the following air pollutants:</p>
            <ul className="list-disc list-inside mb-4">
                <li>(a) SO₂</li>
                <li>(b) CO</li>
                <li>(c) NOₓ</li>
            </ul>
        </div>
    );
};

export default EnvironmentalChemistry;
