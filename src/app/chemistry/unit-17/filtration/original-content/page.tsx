// pages/filtration.tsx
import React from 'react';

const Filtration = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">17.4 FILTRATION</h1>

            <p className="mb-4">
                Filtration is a separation technique used to separate the components of a mixture containing an undissolved solid in a liquid. The exact method used depends on the purpose of the filtration, whether it is for the isolation of a solid from a mixture or removal of impurities from a mixture.
            </p>

            <h2 className="text-xl font-bold mb-4">17.4.1 Filtration Process</h2>

            <p className="mb-4">
                The principle of filtration is based on the difference in sizes between the particles. Filtration separates the solid matter from a liquid mixture using a filter medium, for example, filter paper or filtration membrane, that allows the liquid to pass through it and block the solid particles on the other side of it. The pores of the filter medium are bigger compared to the solvent particles but are smaller compared to the solute particles, so they allow only solvent particles to pass through them, leaving the solute particles on the other side, making the solution free from the insoluble solute. The mechanism of &quot;filtration&quot; can be mechanical, biological, or physical. Filtration may be done cold or hot, using gravity or applying vacuum, using a Buchner or Hirsch funnel or a simple glass funnel.
            </p>

            <p className="mb-4">
                As the process of filtration uses the concept of difference in the particles, we have two types of mixtures:
            </p>

            <ul className="list-disc list-inside mb-4">
                <li><strong>Heterogenous Mixture:</strong> A mixture in which the solute particle is not evenly distributed in the solvent phase. For example, sand in water is a heterogeneous mixture.</li>
                <li><strong>Homogeneous Mixture:</strong> A mixture in which the solute particles are evenly distributed in the solvent. A brine solution is an example of a homogeneous mixture. Homogeneous mixtures are also called solutions.</li>
            </ul>

            <p className="mb-4">
                A homogeneous mixture of two or more components is called a solution. A solution has two components:
            </p>

            <ul className="list-disc list-inside mb-4">
                <li><strong>Solute:</strong> The component of a solution which is present in smaller quantity. For example, salt in a salt solution.</li>
                <li><strong>Solvent:</strong> The component of a solution which is present in larger quantity. For example, water in a salt solution.</li>
            </ul>

            <p className="mb-4">
                Various types of processes are used for filtration. In general, the filtration process uses the filtration membrane that allows only a specific size particle to move through it, making the solution at one end free from the insoluble solute particles. Insoluble solid substances left behind are called residues. We can understand this by using the example of filtering sand and water, where a muslin cloth at the mouth of the container containing the sand and water allows only water to pass through, separating the sand from the sand and water solution. Filtration paper can also be used in place of muslin cloth as the filtration membrane.
            </p>

            <h2 className="text-xl font-bold mb-4">17.4.2 Filtration by filter paper</h2>
            <p className="mb-4">
                Filter paper is a semi-permeable barrier placed perpendicular to a liquid or air flow. Filter paper can have pore sizes ranging from small to large to permit slow to fast filtering.
            </p>

            <h2 className="text-xl font-bold mb-4">17.4.3 Filtration by vacuum (or Suction)</h2>
            <p className="mb-4">
                Vacuum filtration uses a Buchner funnel. A Buchner funnel is a flat-bottomed, porous, circular porcelain bowl with a short stem. The stem is fitted with a rubber stopper and inserted into the mouth of a side-arm filter flask. Circular filter paper, the same diameter as the bowl, is placed on the flat bottom and wetted with the appropriate solvent to create a seal before starting the filtration.
            </p>

            <h2 className="text-xl font-bold mb-4">17.4.4 Filtration in daily life:</h2>
            <p className="mb-4">
                When making coffee, hot water is filtered through the ground coffee, and the coffee bean. The filtrate is the coffee in liquid form. Using a tea ball or a tea bag (paper filter) for tea is also an example of filtration.
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>A kidney is a biological filter that is used to filter human blood. Blood filtering in kidneys is another application of the filtration technique.</li>
                <li>HEPA filters are used by various vacuum cleaners and air conditioners to filter out dust and pollen from the air.</li>
                <li>Filters with particulate-capturing fibers are commonly used in aquariums.</li>
                <li>During mining, belt filters extract precious metals. Filtration techniques are used in the metallurgical process to remove the slag.</li>
                <li>Sand and permeable rock in the ground filter the water, which is then stored in the aquifer and used as groundwater.</li>
                <li>The wastewater treatment plant uses the filtration technique to filter the sewage.</li>
                <li>Air filters are used in automobiles and factories to remove harmful particles from the smoke.</li>
                <li>The treatment of water uses filtration techniques.</li>
            </ul>
        </div>
    );
};

export default Filtration;
