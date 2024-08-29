import React from 'react';

const BasicComponentsOfFood: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">15.7 BASIC COMPONENTS OF FOOD</h1>

            <h2 className="text-xl font-semibold mb-4">CARBOHYDRATES</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deficiency</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Dairy products such as yogurt, milk, ice cream, fruits, grains, plant-based proteins, and beans
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Provide energy to feed the muscles and brain, while fiber helps to feel full and aids digestion and elimination
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Carbohydrates are soluble in water and readily broken down into sugars that can be oxidized during cellular respiration. These properties allow for carbohydrates to be a source of fuel for living things.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            A carbohydrate-deficient diet may cause headaches, fatigue, weakness, difficulty concentrating, nausea, constipation, bad breath, vitamin and mineral deficiencies.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-4 mt-8">PROTEINS</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deficiency</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Proteins are found in meat, fish, and eggs from animals and in peas, pulses, and beans from plants. Soya beans are one of the major sources. They contain very little fat.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            The main role of proteins is to carry out functions for cells. Proteins are also essential for wound healing and for brain function. Proteins also help other types of communication within the body. Many hormones, or chemical messengers, are proteins. They speed up chemical reactions.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Proteins are colourless and usually tasteless. Proteins are digested in the stomach and small intestine and absorbed as amino acids. Proteins are used to make enzymes.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Little growth in children, brittle hair and nails, poor wound healing, anemia, unintentional weight loss, and scaly skin.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-4 mt-8">LIPIDS</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deficiency</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Meat and animal foods, e.g., eggs, milk, and cheese, are rich in saturated fats and cholesterol. Plant sources such as sunflower seeds and peanuts are rich in unsaturated fats.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Lipids primarily function as an energy reserve. Lipids are an important source of energy. They are insoluble in water. They also provide insulation to the body.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Lipids and fats are digested in small intestines and absorbed as fatty acids, and glycerol. The body can store unlimited amounts of fats contributing to obesity. Lipids are not soluble in water but are soluble in solvents such as chloroform.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Dry rashes, hair loss, a weaker immune system, decreased growth in infants and children, increased risk of different infections.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-4 mt-8">NUCLEIC ACIDS</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deficiency</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Seeds, grains, and fish eggs are good sources of the genetic material, DNA.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            DNA is a type of genetic material that contains all a person&apos;s genetic information. DNA also allows genetic information to be passed down from one generation to the next. RNA plays a role in the expression of DNA&apos;s genetic code by generating certain proteins.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Nucleic acids carry genetic information which is read in cells to make the RNA and proteins by which living things work. They play a central role in a wide variety of cellular processes, including metabolic regulation and the storage and utilization of genetic information.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Lesch-Nyhan syndrome (a rare congenital birth disorder that affects a child&apos;s brain and behavior), and ataxia telangiectasia (also known as Louis-Bar syndrome, a rare inherited childhood neurological disorder that affects the part of the brain that controls motor movement, intended movement of muscles, and speech).
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasicComponentsOfFood;
