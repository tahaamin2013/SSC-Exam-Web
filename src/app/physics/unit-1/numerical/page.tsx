import React from 'react'

const page = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">UNIT 1: PHYSICAL QUANTITIES AND MEASUREMENT</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">NUMERICAL RESPONSE QUESTIONS</h2>
                    <ol className="list-decimal pl-6 space-y-6">
                        <li>
                            <p className="font-medium">Write the following numbers in scientific notations:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>1234 m</li>
                                <li>0.000023 s</li>
                                <li>469.3 x 10m</li>
                                <li>0.00985 x 10's</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-medium">Express the following measurements using prefixes:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>27.5x10m</li>
                                <li>0.00023 × 10's</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-medium">If a boy has an age of 15 years 2 months and 10 days, convert his age in:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>seconds</li>
                                <li>milliseconds</li>
                                <li>megaseconds</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-medium">How many kilometers are there in 25 micrometers?</p>
                        </li>
                        <li>
                            <p className="font-medium">What is pitch and least count of:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>Vernier calipers if smallest division on main scale is 1mm and total divisions on vernier scale are 20.</li>
                                <li>Screw gauge if smallest division on its main scale is 0.5 mm and its movable scale has 50 divisions.</li>
                            </ul>
                        </li>
                        <li>
                            <p className="font-medium">Look at the measurement of vernier calipers:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>What is its main scale reading?</li>
                                <li>What is its coinciding division on vernier scale?</li>
                                <li>Calculate total reading on the vernier calipers?</li>
                            </ul>
                            <p className="mt-2">10 cm 2 0 10</p>
                        </li>
                        <li>
                            <p className="font-medium">Look at the figure of screw gauge, let a small steel ball is placed between its thimble and anvil then:</p>
                            <ul className="list-[lower-alpha] pl-6 mt-2">
                                <li>What is its main scale reading?</li>
                                <li>What is coinciding division of circular scale?</li>
                                <li>Calculate the total diameter of the ball?</li>
                            </ul>
                            <p className="mt-2">BARREL THIMBLE</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default page