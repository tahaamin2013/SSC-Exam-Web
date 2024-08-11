// pages/summary.tsx
import React from 'react';
import Head from 'next/head';

const Summary = () => {
    return (
        <>
            <Head>
                <title>Fun Science Summary</title>
                <meta name="description" content="A fun summary of basic science concepts for kids" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 flex flex-col items-center justify-center p-6">
                <h1 className="text-5xl font-bold text-yellow-600 mb-8 drop-shadow-lg">Fun Science Summary!</h1>
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full">
                    <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">What We Learned:</h2>
                    <div className="space-y-6">
                        <div className="bg-yellow-400 p-5 rounded-xl shadow-lg border-2 border-yellow-500">
                            <h3 className="text-2xl font-semibold text-yellow-800">Position</h3>
                            <p className="text-lg text-gray-700">Where something is.</p>
                        </div>
                        <div className="bg-green-400 p-5 rounded-xl shadow-lg border-2 border-green-500">
                            <h3 className="text-2xl font-semibold text-green-800">Distance</h3>
                            <p className="text-lg text-gray-700">How far we went.</p>
                        </div>
                        <div className="bg-blue-400 p-5 rounded-xl shadow-lg border-2 border-blue-500">
                            <h3 className="text-2xl font-semibold text-blue-800">Displacement</h3>
                            <p className="text-lg text-gray-700">The shortest path between two points.</p>
                        </div>
                        <div className="bg-orange-400 p-5 rounded-xl shadow-lg border-2 border-orange-500">
                            <h3 className="text-2xl font-semibold text-orange-800">Speed</h3>
                            <p className="text-lg text-gray-700">How fast we go. (Just a number!)</p>
                        </div>
                        <div className="bg-purple-400 p-5 rounded-xl shadow-lg border-2 border-purple-500">
                            <h3 className="text-2xl font-semibold text-purple-800">Velocity</h3>
                            <p className="text-lg text-gray-700">How fast and which way we go.</p>
                        </div>
                        <div className="bg-teal-400 p-5 rounded-xl shadow-lg border-2 border-teal-500">
                            <h3 className="text-2xl font-semibold text-teal-800">Acceleration</h3>
                            <p className="text-lg text-gray-700">How quickly we speed up or slow down.</p>
                        </div>
                        <div className="bg-cyan-400 p-5 rounded-xl shadow-lg border-2 border-cyan-500">
                            <h3 className="text-2xl font-semibold text-cyan-800">Graphs</h3>
                            <p className="text-lg text-gray-700">Speed and distance in pictures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;
