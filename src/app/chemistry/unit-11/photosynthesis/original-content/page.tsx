// pages/photosynthesis.js
import React from 'react';

const Photosynthesis = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">UNIT 11</h1>
            <h2 className="text-xl font-semibold mb-4">PHOTOSYNTHESIS</h2>

            <p className="mb-4">
                Photosynthesis is a biochemical process in which plants use solar energy to convert carbon dioxide (CO<sub>2</sub>) and water (H<sub>2</sub>O) into glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) in the presence of chlorophyll. This process is essential for sustaining most life on Earth as it produces oxygen and organic compounds.
            </p>

            <p className="mb-4">
                The role of photosynthesis extends beyond producing oxygen. It plays a critical role in the carbon cycle by removing carbon dioxide from the atmosphere and converting it into organic matter. The general equation for photosynthesis is:
            </p>

            <pre className="bg-gray-100 p-4 rounded-md mb-4">
                {`6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂`}
            </pre>

            <p>
                In this process, chlorophyll in the plant cells captures solar energy, which drives the conversion of carbon dioxide and water into glucose and oxygen. The glucose produced serves as an energy source for the plant and can be used to build various organic compounds.
            </p>
        </div>
    );
};

export default Photosynthesis;
