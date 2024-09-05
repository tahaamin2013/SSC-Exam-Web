import React from "react";

const ExamplesDashboard = () => {
    return (
        <section
            id="Examples"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Sample Problems on Gas Laws
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Example 5.1</h2>
                    <p>
                        A gas with volume 350 cm³ has a pressure of 650 mm of Hg. If its pressure is reduced to 325 mm of Hg, calculate what will be its new volume.
                    </p>
                    <h3 className="font-semibold">Data:</h3>
                    <ul>
                        <li>V₁ = 350 cm³</li>
                        <li>P₁ = 650 mm of Hg</li>
                        <li>P₂ = 325 mm of Hg</li>
                        <li>V₂ = ?</li>
                    </ul>
                    <h3 className="font-semibold">Solution:</h3>
                    <p>
                        By using Boyle&apos;s Law: PV = P₂V₂
                    </p>
                    <p>
                        Thus, <br />
                        V₂ = (P₁ × V₁) / P₂ <br />
                        V₂ = (650 × 350) / 325 = 700 cm³
                    </p>
                    <p>
                        Thus, the volume of the gas is doubled by reducing the pressure to half.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Example 5.2</h2>
                    <p>
                        785 cm³ of a gas was enclosed in a container under a pressure of 600 mm Hg. If the volume is reduced to 350 cm³, what will be the pressure?
                    </p>
                    <h3 className="font-semibold">Data:</h3>
                    <ul>
                        <li>V₁ = 785 cm³</li>
                        <li>P₁ = 600 mm of Hg</li>
                        <li>V₂ = 350 cm³</li>
                        <li>P₂ = ?</li>
                    </ul>
                    <h3 className="font-semibold">Solution:</h3>
                    <p>
                        By using Boyle&apos;s equation: P₁V₁ = P₂V₂
                    </p>
                    <p>
                        Thus, <br />
                        P₂ = (P₁ × V₁) / V₂ <br />
                        P₂ = (785 × 600) / 350 = 1345.7 mm of Hg
                    </p>
                    <p>
                        Converting to atm: <br />
                        1345.7 / 760 = 1.77 atm
                    </p>
                    <p>
                        Thus, the pressure is increased by decreasing the volume.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Example 5.3</h2>
                    <p>
                        A sample of oxygen gas has a volume of 250 cm³ at -30°C. If the gas is allowed to expand up to 700 cm³ at constant pressure, find out its final temperature.
                    </p>
                    <h3 className="font-semibold">Data:</h3>
                    <ul>
                        <li>V₁ = 250 cm³</li>
                        <li>T₁ = -30°C = 243 K</li>
                        <li>V₂ = 700 cm³</li>
                        <li>T₂ = ?</li>
                    </ul>
                    <h3 className="font-semibold">Solution:</h3>
                    <p>
                        By using Charles&apos;s Law: V₁ / T₁ = V₂ / T₂
                    </p>
                    <p>
                        Thus, <br />
                        T₂ = (V₂ × T₁) / V₁ <br />
                        T₂ = (700 × 243) / 250 = 680.4 K
                    </p>
                    <p>
                        Thus, the expansion is caused due to increasing temperature.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Example 5.4</h2>
                    <p>
                        A sample of hydrogen gas occupies a volume of 160 cm³ at 30°C. If its temperature is raised to 100°C, calculate what will be its new volume if the pressure remains constant.
                    </p>
                    <h3 className="font-semibold">Data:</h3>
                    <ul>
                        <li>V₁ = 160 cm³</li>
                        <li>T₁ = 30°C = 303 K</li>
                        <li>T₂ = 100°C = 373 K</li>
                        <li>V₂ = ?</li>
                    </ul>
                    <h3 className="font-semibold">Solution:</h3>
                    <p>
                        By using Charles&apos;s Law: V₁ / T₁ = V₂ / T₂
                    </p>
                    <p>
                        Thus, <br />
                        V₂ = (V₁ × T₂) / T₁ <br />
                        V₂ = (160 × 373) / 303 = 196.9 cm³
                    </p>
                    <p>
                        Thus, the volume of the gas has increased by raising the temperature.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExamplesDashboard;
