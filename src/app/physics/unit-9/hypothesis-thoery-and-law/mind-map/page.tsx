import React from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const umlCode = `
@startmindmap
* Scientific Method
left-side
** Hypothesis
*** Tentative assumption
*** Can be verified
**:Why do scientists
develop a hypothesis;
***:To predict outcomes and
define the parameters
of the research;
right-side
**:Theory
A comprehensive set of ideas
explaining a phenomenon in nature;
*** Well-supported explanation
*** Verified through rigorous testing
*** Examples
**** Kinetic Molecular Theory
**** Theory of General Relativity
**:Law
describe phenomena that scientists
have found to be provably true;
*** Observed regularity in nature
*** Relationship between variables
*** Examples
**** Newton&apos;sLaws
**** Boyle&apos;sLaw
**** Laws of Thermodynamics
** Theory vs Law
***:Laws describe phenomena,
while theories explain why phenomena exist;
@endmindmap
`;

const ScientificMethodComponent = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
            <div className="bg-white items-center flex flex-col p-8 rounded-lg shadow-lg max-w-4xl w-full mb-8">
                <h1 className="text-3xl font-bold text-center mb-8">Scientific Method: Hypothesis, Theory, and Law</h1>
                <PlantUMLDiagram code={umlCode} />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h2 className="text-2xl font-bold mb-4">Comparison of Hypothesis, Theory, and Law</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Aspect</th>
                                <th className="border p-2">Hypothesis</th>
                                <th className="border p-2">Theory</th>
                                <th className="border p-2">Law</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 font-semibold">Definition</td>
                                <td className="border p-2">Tentative assumption or explanation</td>
                                <td className="border p-2">Well-supported explanation of natural phenomena</td>
                                <td className="border p-2">Statement summarizing observed regularity in nature</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Verification</td>
                                <td className="border p-2">Can be verified through investigation</td>
                                <td className="border p-2">Verified through rigorous testing</td>
                                <td className="border p-2">Provably true based on observations</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Scope</td>
                                <td className="border p-2">Specific and limited</td>
                                <td className="border p-2">Broad, explains how nature behaves</td>
                                <td className="border p-2">Describes specific relationships or patterns</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Examples</td>
                                <td className="border p-2">Varies by research</td>
                                <td className="border p-2">Kinetic Molecular Theory, Theory of General Relativity</td>
                                <td className="border p-2">Newton&apos;s Laws, Boyle&apos;s Law, Laws of Thermodynamics</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScientificMethodComponent;