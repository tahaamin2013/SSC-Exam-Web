"use client"
import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

export default function GravityNotes() {
    const [height, setHeight] = useState(100);
    const [time, setTime] = useState(0);

    const calculateTime = () => {
        // t = sqrt(2h/g)
        const g = 9.8;
        const calculatedTime = Math.sqrt((2 * height) / g);
        // @ts-ignore
        setTime(calculatedTime.toFixed(2));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">2.5 Motion Due to Gravity</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Key Points:</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>All freely falling objects have the same acceleration due to gravity (g), independent of their masses.</li>
                    <li>Near Earth&apos;s surface, g ≈ 9.80 m/s² or 32.2 ft/s²</li>
                    <li>Acceleration due to gravity is directed downward, toward the Earth&apos;s center.</li>
                    <li>For large objects, air resistance is often neglected.</li>
                    <li>When an object moves with gravity: +g; against gravity: -g</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Air Resistance Effects:</h2>
                <div className="flex justify-around items-center mb-4">
                    <div className="text-center">
                        <p className="font-semibold mb-2">With Air</p>
                        <div className="relative h-40 w-20 bg-blue-200 rounded">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                <ArrowDown className="text-yellow-500" size={24} />
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                <ArrowDown className="text-red-500" size={24} />
                            </div>
                        </div>
                        <p className="mt-2">Coin falls faster</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold mb-2">Without Air</p>
                        <div className="relative h-40 w-20 bg-gray-300 rounded">
                            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                                <ArrowDown className="text-yellow-500" size={24} />
                            </div>
                            <div className="absolute top-0 right-1/4 transform translate-x-1/2">
                                <ArrowDown className="text-red-500" size={24} />
                            </div>
                        </div>
                        <p className="mt-2">Both fall at same rate</p>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Example 2.5: Acceleration Due to Gravity</h2>
                <div className="bg-white p-4 rounded shadow">
                    <p className="mb-2"><strong>Given:</strong> Mass = 2 kg, Initial speed = 0 m/s, Final speed = 78.5 m/s, g = 9.8 m/s²</p>
                    <p className="mb-2"><strong>Required:</strong> Time to reach the ground</p>
                    <p className="mb-2"><strong>Solution:</strong> ∆t = (v₂ - v₁) / g = (78.5 - 0) / 9.8 = 8 s</p>
                    <p><strong>Result:</strong> The block will reach the ground in 8 seconds.</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Interactive Example: Free Fall Calculator</h2>
                <div className="bg-white p-4 rounded shadow">
                    <p className="mb-2">Calculate the time for an object to fall from a given height:</p>
                    <div className="flex items-center mb-4">
                        <label htmlFor="height" className="mr-2">Height (m):</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="border rounded px-2 py-1 w-20"
                        />
                    </div>
                    <button
                        onClick={calculateTime}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Calculate Time
                    </button>
                    {time > 0 && (
                        <p className="mt-4">
                            Time to reach the ground: <strong>{time} seconds</strong>
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}