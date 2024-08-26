// pages/protective-measures.js
import React from 'react';

const ProtectiveMeasures = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">UNIT 11</h1>
            <h2 className="text-xl font-semibold mb-4">PERSONAL PROTECTIVE MEASURES AGAINST POLLUTION</h2>

            <p className="mb-4">
                Reducing personal exposure to harmful pollutants can significantly improve your health and well-being. Here are some effective tools and strategies:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">1. Masks and Respiratory Protection</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>
                    <strong>N95 masks</strong> are designed to filter out particles, including pollutants such as dust, smoke, and some airborne chemicals.
                </li>
                <li>
                    <strong>Gas masks</strong> contain activated carbon filters that absorb certain gases and volatile organic compounds.
                </li>
            </ul>
            <p className="mb-4">
                <strong>NOTE:</strong> It is vital to choose masks certified by relevant regulatory authorities and use them precisely according to their instructions.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">2. Air Quality Indices</h3>
            <p className="mb-4">
                Air quality indices provide information about the general air quality of a certain location. They usually use a numerical scale or a colour-coded system to indicate the level of air pollution. By regularly checking the air quality, you can take necessary precautions.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">3. Carbon Monoxide Detector</h3>
            <p className="mb-4">
                Installing carbon monoxide detectors in homes and offices can alert you to carbon monoxide levels. This allows for quick action to be taken, such as ventilating the area, sealing off potential sources, or evacuating enclosed spaces.
            </p>
        </div>
    );
};

export default ProtectiveMeasures;
