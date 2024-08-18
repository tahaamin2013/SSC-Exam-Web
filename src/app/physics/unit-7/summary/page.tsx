// pages/index.js
import Head from 'next/head';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
            <Head>
                <title>Physics Summary</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Physics Summary</h1>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <ul className="space-y-4">
                        {[
                            "Density is mass per unit volume",
                            "States of matter are four: Solids, Liquids, Gases, and Plasma",
                            "Plasma is called the fourth state of matter, which is the ionized state of matter",
                            "Thermometry is the branch of physics that deals with temperature measurements",
                            "Temperature is the measure of degree of hotness or coldness of a body",
                            "Thermometer is a device used to measure temperature",
                            "Heat is a form of energy transferred between bodies due to temperature differences"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center mr-3">
                                    {index + 1}
                                </span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}