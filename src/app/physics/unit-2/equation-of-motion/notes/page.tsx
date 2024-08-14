import Head from 'next/head'

export default function EquationsOfMotion() {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <Head>
                <title>Equations of Motion</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold mb-6">2.6 Equations of Motion</h1>

                        <p className="mb-4">
                            There are three basic equations of motion for bodies moving with uniform acceleration:
                        </p>

                        <h2 className="text-xl font-semibold mb-2">First Equation of Motion</h2>
                        <p className="mb-4">v = v<sub>i</sub> + at</p>

                        <h2 className="text-xl font-semibold mb-2">Second Equation of Motion</h2>
                        <p className="mb-4">S = v<sub>i</sub>t + ½at²</p>

                        <h2 className="text-xl font-semibold mb-2">Third Equation of Motion</h2>
                        <p className="mb-4">v² = v<sub>i</sub>² + 2aS</p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">Example Problems</h2>

                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold mb-2">Example 2.11</h3>
                            <p>A train slows down from 80 km/h with a uniform retardation of 2 m/s². Time to reach 20 km/h: 8.3 s</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold mb-2">Example 2.12</h3>
                            <p>A bicycle accelerates at 1 m/s² from 4 m/s for 10 s. Distance moved: 90 m</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">Example 2.13</h3>
                            <p>A car accelerates from 5 m/s to 15 m/s over 50 m. Acceleration: 2 m/s², Time: 5 s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}