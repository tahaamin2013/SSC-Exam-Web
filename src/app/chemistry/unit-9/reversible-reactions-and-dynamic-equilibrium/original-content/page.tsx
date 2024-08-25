import React from 'react';

const ReversibleReactionsPage = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">9.1 REVERSIBLE REACTIONS AND DYNAMIC EQUILIBRIUM.</h1>

            <p className="mb-4">
                What happens when some liquid is placed in a closed container?<br />
                Some of the liquid changes physically as it evaporates. When more liquid evaporates, some of the vapor condenses as a result of collision with the surface of the liquid. Finally, the rate of evaporation equals the rate of condensation. At this stage, a balance is achieved between forward and backward changes.
            </p>

            <p className="mb-4">
                Liquid<br />
                Vapours<br />
                Many chemical reactions do not end. In such reactions, the conversion of reactants into products and the conversion of products into reactants can occur simultaneously. A reaction in which the products can react with each other to form the original reactants again is called a reversible reaction. A reversible reaction proceeds in both the forward and reverse directions under the same conditions. These reactions never end. All reversible changes (physical and chemical) occur simultaneously in both directions. A double arrow in a chemical equation indicates that the reaction is reversible. For example:
            </p>

            <p className="mb-4">
                2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &harr; 2SO<sub>3</sub>(g)<br />
                Sulphur dioxide &harr; Sulphur trioxide<br />
                N<sub>2</sub>(g) + 3H<sub>2</sub>(g) &harr; 2NH<sub>3</sub>(g)<br />
                Nitrogen + Hydrogen &harr; Ammonia<br />
                N<sub>2</sub>(g) + 2O<sub>2</sub>(g) &harr; 2NO<sub>2</sub>(g)<br />
                Nitrogen + Oxygen &harr; Nitrogen dioxide
            </p>

            <p className="mb-4">
                Consider what happens when SO<sub>2</sub> and O<sub>2</sub> gases are mixed in a sealed container (Figure 9.1)
            </p>

            <p className="mb-4">
                Science Titbits<br />
                SO<sub>2</sub> and O<sub>2</sub> molecules react to form SO<sub>3</sub>. SO<sub>3</sub> molecules break to give SO<sub>2</sub> and O<sub>2</sub>. What types of molecules are in equilibrium? In the first reaction (from left to right), SO<sub>2</sub> and O<sub>2</sub> produce SO<sub>3</sub>. In the second reaction (from right to left), SO<sub>3</sub> decomposes into SO<sub>2</sub> and O<sub>2</sub>. Which reaction is called a forward reaction? Which reaction is called the reverse reaction? In the beginning, there is no SO<sub>3</sub>. So the rate of the reverse reaction is zero. Due to the high concentration of the reactants, the speed of the forward reaction is the highest. As the reaction progresses, the concentration of the reactants gradually decreases and the speed of the forward reaction decreases accordingly.
            </p>

            <p className="mb-4">
                When fizzy drinks are made, CO<sub>2</sub> is dissolved in the liquid drink under pressure and sealed. When you remove the lid of the bottle, bubbles of CO<sub>2</sub> suddenly appear. When you put the lid back on the bottle, the bubbles stop. This is due to the following equilibrium.<br />
                CO<sub>2</sub>(g) &harr; CO<sub>2</sub>(g)
            </p>

            <p className="mb-4">
                The forward reaction happens during manufacturing and the reverse reaction happens on opening
            </p>

            <p className="mb-4">
                2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; SO<sub>3</sub>(g)
            </p>

            <p className="mb-4">
                As the concentration of SO<sub>3</sub> increases, a small amount of SO<sub>3</sub> slowly decomposes into SO<sub>2</sub> and O<sub>2</sub>. This means that the reverse reaction has started. In this reaction, SO<sub>3</sub> acts as a reactant and produces SO<sub>2</sub> and O<sub>2</sub>. That is, the opposite reaction<br />
                2SO<sub>3</sub>(g) &rarr; 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)
            </p>

            <p className="mb-4">
                As the concentration of SO<sub>3</sub> increases, the reverse reaction accelerates. In the end, the two rates are equal. At this point, SO<sub>3</sub> decomposes into SO<sub>2</sub> and O<sub>2</sub> as fast as SO<sub>2</sub> and O<sub>2</sub> produce SO<sub>3</sub>. At this point, the reaction has reached equilibrium. (Figure 9.1) The state of a chemical reaction where the forward and reverse reactions occur at the same rate is called chemical equilibrium. Chemical equilibrium is dynamic equilibrium. This is because reactions do not stop when they reach equilibrium. Individual molecules are constantly reacting. However, the actual quantities of reactants and products do not change. This means that the concentration of reactants and products becomes constant in the equilibrium state.
            </p>
        </div>
    );
};

export default ReversibleReactionsPage;
