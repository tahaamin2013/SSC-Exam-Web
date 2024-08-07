"use client"
import React, { useState } from 'react';

const ColorfulCard = ({ title, children, color }: any) => (
    <div className={`${color} rounded-lg shadow-md p-6 mb-6`}>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <div className="text-white">{children}</div>
    </div>
);

const Example = ({ title, children }: any) => (
    <div className="bg-yellow-100 text-black mt-3 border-l-4 border-yellow-500 p-4 mb-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p>{children}</p>
    </div>
);

const BigDataNotes = () => {
    const [activeTab, setActiveTab] = useState('volume');

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">4.3 Big Data</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <p className="mb-4 text-lg">
                    Big data contains greater variety, arriving in increasing volumes and with more velocity.
                    This is also known as the three Vs. Big data is larger, more complex datasets, especially from new data sources.
                    These data sets are so voluminous that traditional data processing software can&apos;t manage them.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">The Three Vs of Big Data</h2>
                <div className="flex justify-center mb-4">
                    <button
                        className={`px-4 py-2 mr-2 rounded ${activeTab === 'volume' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('volume')}
                    >
                        Volume
                    </button>
                    <button
                        className={`px-4 py-2 mr-2 rounded ${activeTab === 'velocity' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('velocity')}
                    >
                        Velocity
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTab === 'variety' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('variety')}
                    >
                        Variety
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    {activeTab === 'volume' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Volume</h3>
                            <p>It refers to the amount of data. Big data deals with huge volumes of data, mostly unstructured data.</p>
                            <Example title="Example">
                                A single Jet engine can generate 10+ terabytes of data in 30 minutes of flight time.
                            </Example>
                        </div>
                    )}
                    {activeTab === 'velocity' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-green-600">Velocity</h3>
                            <p>It refers to the speed of data. Velocity is the fast rate at which data is received and acted upon.</p>
                            <Example title="Example">
                                Facebook processes 500+ terabytes of data daily.
                            </Example>
                        </div>
                    )}
                    {activeTab === 'variety' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-purple-600">Variety</h3>
                            <p>It refers to the various formats and types of data that are available.</p>
                            <Example title="Example">
                                Data can come in the form of emails, photos, videos, monitoring devices, PDFs, audio, etc.
                            </Example>
                        </div>
                    )}
                </div>
            </div>

            <ColorfulCard title="4.3.1 The History of Big Data" color="bg-blue-500">
                <p className="mb-2">
                    The term big data emerged in the early 2000s as a term to describe exponential growth of data.
                </p>
                <Example title="Key Milestone">
                    In 2005, Hadoop was open-sourced, providing a framework to store and analyze big datasets.
                </Example>
            </ColorfulCard>

            <ColorfulCard title="4.3.2 Advantages and Benefits of Big Data" color="bg-green-500">
                <ul className="list-disc list-inside">
                    <li>Product development</li>
                    <li>Predictive maintenance</li>
                    <li>Customer experience/satisfaction</li>
                    <li>Fraud and compliance</li>
                </ul>
                <Example title="Real-world Application">
                    Netflix uses big data analytics to recommend shows to its users, improving customer satisfaction and retention.
                </Example>
            </ColorfulCard>

            <ColorfulCard title="4.3.3 Big Data Challenges" color="bg-red-500">
                <ul className="list-disc list-inside">
                    <li>Data Quality</li>
                    <li>Data Security and privacy</li>
                    <li>Rapid growth of data</li>
                    <li>Big data tool selection</li>
                    <li>Data Integration</li>
                </ul>
                <Example title="Challenge Example">
                    Ensuring GDPR compliance while handling large volumes of personal data from diverse sources.
                </Example>
            </ColorfulCard>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">4.3.4 Applications of Big Data in Business</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ColorfulCard title="Healthcare" color="bg-indigo-500">
                        <p>Predicting epidemic outbreaks, real-time alerting, and personalized treatments.</p>
                        <Example title="Example">
                            Using wearable device data to predict and prevent heart attacks.
                        </Example>
                    </ColorfulCard>
                    <ColorfulCard title="Media and Entertainment" color="bg-pink-500">
                        <p>Targeting audiences and predicting content preferences.</p>
                        <Example title="Example">
                            Spotify&apos;s personalized playlists based on listening habits.
                        </Example>
                    </ColorfulCard>
                    <ColorfulCard title="IoT" color="bg-yellow-500">
                        <p>Enhancing capabilities of IoT devices through data analytics.</p>
                        <Example title="Example">
                            Smart homes optimizing energy usage based on occupant behavior.
                        </Example>
                    </ColorfulCard>
                    <ColorfulCard title="Manufacturing" color="bg-cyan-500">
                        <p>Predictive maintenance, supply chain optimization, and quality control.</p>
                        <Example title="Example">
                            Predicting machine failures before they occur, reducing downtime.
                        </Example>
                    </ColorfulCard>
                    <ColorfulCard title="Government" color="bg-teal-500">
                        <p>Improving public services, combating fraud, and enhancing national security.</p>
                        <Example title="Example">
                            Using big data for predictive policing to prevent crime.
                        </Example>
                    </ColorfulCard>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Other Big Data Applications</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Agriculture', 'Aviation', 'Cyber security', 'Crime prevention', 'E-commerce', 'Fake news detection', 'Fraud detection', 'Pharmaceutical research', 'Scientific research', 'Weather forecasting', 'Tax compliance'].map((item, index) => (
                        <li key={index} className="bg-gray-100 p-2 rounded">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BigDataNotes;