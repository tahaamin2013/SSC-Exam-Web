"use client";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define TypeScript interfaces for data types
interface DistanceTimeData {
    time: number;
    distance: number;
}

interface SpeedTimeData {
    time: number;
    speed: number;
}

export default function MotionGraphsNotes() {
    const [distanceTime, setDistanceTime] = useState<DistanceTimeData[]>([]);
    const [speedTime, setSpeedTime] = useState<SpeedTimeData[]>([]);

    useEffect(() => {
        // Generate data for distance-time graph
        const distanceData: DistanceTimeData[] = Array.from({ length: 11 }, (_, i) => ({
            time: i,
            distance: i * 10,
        }));
        setDistanceTime(distanceData);

        // Generate data for speed-time graph
        const speedData: SpeedTimeData[] = [
            ...Array.from({ length: 5 }, (_, i) => ({ time: i, speed: i * 6 })),
            ...Array.from({ length: 8 }, (_, i) => ({ time: i + 5, speed: 30 })),
            ...Array.from({ length: 3 }, (_, i) => ({ time: i + 13, speed: 30 - i * 10 })),
        ];
        setSpeedTime(speedData);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">2.6 Graphical Analysis of Motion</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">2.6.1 Distance-Time Graph</h2>
                <p className="mb-4">A distance-time graph shows the relationship between distance (s) and time (t). Time is plotted on the x-axis, and distance on the y-axis.</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>The graph is always in the positive X plane.</li>
                    <li>The gradient (slope) of the graph gives speed.</li>
                </ul>
                <div className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="font-semibold mb-2">Calculating Gradient:</h3>
                    <ol className="list-decimal pl-6">
                        <li>Choose two points P₁ and P₂</li>
                        <li>Determine coordinates P₁(t₁, s₁) and P₂(t₂, s₂)</li>
                        <li>Calculate Δt = t₂ - t₁ and Δs = s₂ - s₁</li>
                        <li>Gradient = Δs / Δt = speed</li>
                    </ol>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={distanceTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -10 }} />
                        <YAxis label={{ value: 'Distance (m)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="distance" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Example 2.5: Peshawar to Islamabad through M1</h2>
                <div className="bg-white p-4 rounded shadow">
                    <p className="mb-2">A car travels from Peshawar to Islamabad, stopping for 30 minutes at a rest area.</p>
                    <p className="mb-2"><strong>Results:</strong></p>
                    <ul className="list-disc pl-6">
                        <li>Peshawar to rest area: 100 km/hr (27.78 m/s)</li>
                        <li>Rest area to Islamabad: 50 km/hr (13.89 m/s)</li>
                        <li>Overall journey: 70 km/hr (19.44 m/s)</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">2.6.2 Speed-Time Graph</h2>
                <p className="mb-4">A speed-time graph shows the relationship between speed (v) and time (t). Speed is plotted on the y-axis, and time on the x-axis.</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>The slope of the graph gives the magnitude of acceleration.</li>
                    <li>The area under the graph gives the distance traveled.</li>
                </ul>
                <div className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="font-semibold mb-2">Calculating Area:</h3>
                    <p>Rectangle: Area = v × t</p>
                    <p>Triangle: Area = 0.5 × v × t</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={speedTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -10 }} />
                        <YAxis label={{ value: 'Speed (m/s)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="speed" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Example 2.6: Graphical Representation of Speed of Car</h2>
                <div className="bg-white p-4 rounded shadow">
                    <p className="mb-2">A car increases speed from 0 to 30 m/s in 20s, maintains speed for 30s, then decreases to 0 in 10s.</p>
                    <p className="mb-2"><strong>Results:</strong></p>
                    <ul className="list-disc pl-6">
                        <li>Acceleration (0-20s): 1.5 m/s²</li>
                        <li>Acceleration (20-50s): 0 m/s²</li>
                        <li>Acceleration (50-60s): -3 m/s²</li>
                        <li>Total distance: 1350 m</li>
                        <li>Average speed: 22.5 m/s</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
