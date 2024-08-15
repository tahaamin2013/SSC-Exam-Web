// pages/index.js
import Head from 'next/head';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <Head>
                <title>Physics Summary</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                    <header className="bg-gray-800 text-white py-6 px-8">
                        <h1 className="text-4xl font-bold text-center">Physics Summary</h1>
                    </header>
                    <div className="p-8">
                        <ul className="space-y-6">
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Elasticity</h2>
                                <p className="text-gray-700">Elasticity is the property of a body, which enables the body to regain its original dimension when the deforming force acting on it is removed.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Hooke&apos;s Law</h2>
                                <p className="text-gray-700">Hooke&apos;s law states that within elastic limits the extension (or compression) is directly proportional to the force applied.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Pressure</h2>
                                <p className="text-gray-700">Pressure is force applied per unit area.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Atmospheric Pressure</h2>
                                <p className="text-gray-700">Atmospheric Pressure or barometric pressure is the force exerted by the air (its weight) on unit area.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Barometer</h2>
                                <p className="text-gray-700">Barometer is a device used to measure atmospheric pressure.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Manometer</h2>
                                <p className="text-gray-700">Manometer is one of the most accurate devices for measuring pressure, including atmospheric pressure in the lower ranges.</p>
                            </li>
                            <li>
                                <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Pascal&apos;s Principle</h2>
                                <p className="text-gray-700">Pascal&apos;s Principle states that if the pressure at one point of a confined fluid is increased by an amount, the pressure increases by the same amount at all other parts throughout the fluid.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}