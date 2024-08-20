import React from 'react';

const Allotropes = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">2.3 ALLOTROPES</h2>
            <p>
                The property of an element to exist in different physical forms is called allotropy. These different forms in the same physical state are called allotropes. Atoms of the same element arranged in different manners in the same physical state in allotropes. They are different structural forms of the same element. For example:
            </p>
            <ul className="list-disc list-inside">
                <li>Diamond, graphite, and buckyballs are three important allotropes of carbon.</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">Graphite:</h3>
            <p>
                Graphite is composed of flat two-dimensional layers of hexagonally arranged carbon atoms. In a layer, each C-atom is covalently bonded to three other carbon atoms. Weak intermolecular bonds exist between each layer, which allows the layers to slide over one another without breaking the bonds. This arrangement makes graphite soft and slippery, making it ideal to be used as a lubricant. Graphite is a good conductor of electricity.
            </p>
            <h3 className="text-lg font-semibold mt-4">Diamond:</h3>
            <p>
                Diamond is the hardest and the purest crystalline allotrope of carbon. In its structure, each C-atom is covalently bonded to four other carbon atoms, forming a rigid network of tetrahedral shape. This tetrahedral, three-dimensional arrangement makes it the hardest substance with a very high melting point. Since all the carbon atoms are bonded with other carbon atoms, no free electrons are present, resulting in the structure being non-conductive. Diamond is a non-conductor of electricity.
            </p>
            <h3 className="text-lg font-semibold mt-4">Buckyballs (C-60):</h3>
            <p>
                Buckyballs, also known as fullerenes, have a football-like fused hollow ring structure made up of twenty hexagons and twelve pentagons. Each of its 60 carbon atoms is bonded to 3 carbon atoms.
            </p>
            <p className="mt-4 font-bold">Fig 2.2: Classification of matter</p>
        </div>
    );
};

export default Allotropes;
