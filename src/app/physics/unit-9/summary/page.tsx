import React from 'react'

const Page = () => {
    return (
        <div className="min-h-screen bg-white  py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto border shadow-2xl px-6 py-9 rounded-xl">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Summary</h1>
                <div className="space-y-6 text-lg text-gray-700">
                    <p><span className="font-semibold">Physics:</span> Physics is the branch of science that describes matter, energy, and their mutual relationship.</p>
                    <p><span className="font-semibold">Hypothesis:</span> A hypothesis is a tentative assumption or explanation made before any research that can be verified by further investigation.</p>
                    <p><span className="font-semibold">Theory:</span> A theory explains how nature behaves under specific conditions.</p>
                    <p><span className="font-semibold">Law:</span> A law is a statement that summarizes an observed regularity or pattern in nature and gives the relationship between variables.</p>
                    <p><span className="font-semibold">Technology:</span> Technology is tools, including methods, that assist people in accomplishing tasks.</p>
                    <p><span className="font-semibold">Engineering:</span> Engineering is the process of studying and developing technology.</p>
                </div>
            </div>
        </div>
    )
}

export default Page
