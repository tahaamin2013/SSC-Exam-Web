import Head from 'next/head';

export default function SummaryPage() {
    const summaryItems = [
        { title: "Work", description: "Force multiplied by distance moved in the direction of the force." },
        { title: "Energy", description: "The capacity of a body to do work." },
        { title: "Kinetic Energy", description: "Energy of an object due to its motion, given by E = mv²." },
        { title: "Potential Energy", description: "Energy an object possesses due to its position or state." },
        { title: "Gravitational Potential Energy", description: "Energy associated with an object&apos;sposition in a gravitational field, given by E = mgh." },
        { title: "Energy Conversion", description: "Process of changing one form of energy into another." },
        { title: "Law of Conservation of Energy", description: "Total energy of an isolated system remains constant over time." },
        { title: "Energy Resources", description: "Substances or systems from which we can extract energy." },
        { title: "Non-renewable Energy Resources", description: "Finite sources of energy, e.g., fossil fuels, nuclear fuels." },
        { title: "Renewable Energy Resources", description: "Sources naturally replenished on a human timescale, e.g., sunlight, wind, rain." },
        { title: "Perpetual Motion Machine", description: "Hypothetical device operating indefinitely without external energy source." },
        { title: "Fossil Fuels", description: "Hydrocarbons formed from remains of dead plants and animals over millions of years." },
        { title: "Nuclear Fuel", description: "Material used to generate nuclear energy through nuclear reactions." },
        { title: "Hydroelectric Resources", description: "Generation of electricity by harnessing energy of flowing water." },
        { title: "Power", description: "Rate of doing work or conversion of energy. P = W/t." },
        { title: "Efficiency", description: "Ratio of useful energy/work output to total energy/work input." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
            <Head>
                <title>Summary</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-white text-center mb-8">Summary</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                            <p className="text-gray-100">{item.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}