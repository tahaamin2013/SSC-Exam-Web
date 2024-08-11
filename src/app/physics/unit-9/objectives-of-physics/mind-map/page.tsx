import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const umlCode = `
@startmindmap
*:Science - Study of
physical nature & its aspects;
right side
** Origin: Latin "Scientia" (to know)
** Methods
*** Imagination
*** Experimentation
*** Deduction
** Knowledge gained through
*** Experiments
*** Observations
*** Trials
left side
**:Physical Sciences
(Study of non-living things);
*** Physics
*** Chemistry
*** Geology
*** Meterology
*** Astronomy
**:Biological Sciences
(Study of living things);
*** Botany
*** Zoology
*** Genetics
*** Medicine
@endmindmap
`;

const umlCode2 = `
@startmindmap
* Physics
** Scope
*** From atoms to galaxies
***:Natural phenomena
(These are things or events in our
world that can be seen or felt);
*** Artificial creations
** Applications
***:GPS and navigation
(e.g. cell phones, aeroplanes, and ships);
*** Aeronautics
*** Communication
*** Climate and weather
*** Transportation
left side
** Key Concepts
*** Matter
*** Energy
*** Space
*** Time
** Objectives
*** Understand physical world
*** Develop theories/laws
*** Conduct experiments
*** Express in mathematical formulas
** Notable Scientists
*** Isaac Newton
**** Laws of motion
*** Albert Einstein
**** Theory of relativity
@endmindmap`;

const MindMap = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white my-6 p-8 rounded-lg shadow-lg max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-8">Nature of Science and Physics</h1>
                <PlantUMLDiagram code={umlCode} />
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <h2 className="text-2xl font-bold mb-4">Summary Table</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Aspect</th>
                                    <th className="border p-2">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-semibold">Definition</td>
                                    <td className="border p-2">Study of physical nature and its aspects</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Origin</td>
                                    <td className="border p-2">Latin word &quot;Scientia&quot; meaning &quot;to know&quot;</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Components</td>
                                    <td className="border p-2">Imagination, Experimentation, Deduction</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Knowledge Acquisition</td>
                                    <td className="border p-2">Experiments, Observations, Trials</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Main Branches</td>
                                    <td className="border p-2">Physical Sciences, Biological Sciences</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Physical Sciences</td>
                                    <td className="border p-2">Physics, Chemistry, Geology, Geography</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Biological Sciences</td>
                                    <td className="border p-2">Botany, Zoology, Genetics, Medicine</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-center mb-8 mt-4">Objectives of Physics</h1>
                <PlantUMLDiagram code={umlCode2} />
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <h2 className="text-2xl font-bold mb-4">Summary of Physics Applications</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Application</th>
                                    <th className="border p-2">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-semibold">GPS and Navigation</td>
                                    <td className="border p-2">Used in cell phones, aeroplanes, and ships for location and routing</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Aeronautics</td>
                                    <td className="border p-2">Pressure difference principles for flight, thermal insulation in bird feathers</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Atmospheric Phenomena</td>
                                    <td className="border p-2">Explanation of sky color through light scattering</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Climate Moderation</td>
                                    <td className="border p-2">Large water bodies moderate nearby climates due to water&apos;s heat capacity</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Vehicles</td>
                                    <td className="border p-2">Use of mechanics and thermodynamics for energy conversion</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Marine Vehicles</td>
                                    <td className="border p-2">Submarines and ships operate on the principle of floatation</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold">Communication</td>
                                    <td className="border p-2">Cell phones use electronic components and electromagnetic waves</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MindMap;