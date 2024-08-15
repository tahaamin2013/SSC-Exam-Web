import React from 'react'
const ManometerPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">5.5 MANOMETER</h1>
            <p className="text-base">
                A manometer can be defined as a device that is used to measure the pressure in a fluid using fluid dynamics. The fluid can be a gas or a liquid.
            </p>
            <p className="text-base">
                In other words, we can define it as a gauge that is used to measure pressure present in the fluids. Also, it is used in laboratory experiments to demonstrate the pressure of air on a liquid column or vice versa
            </p>
            <p className="text-base">
                The formula of a manometer is as follows:
            </p>
            <p className="text-base font-bold">P = ρgh 5.4</p>
            <p className="text-base">
                Where &apos;P&apos; is the pressure of the fluid, &apos;ρ&apos; is the density of the fluid, &apos;g&apos; is the gravitational acceleration exerted by the earth, and &apos;h&apos; is the height till which the fluid rises in a manometer.
            </p>
            <p className="text-base">
                The working principle of a manometer is that one end is connected to a seal-tight gas to measure the source of pressure. Whereas, its other end is left open to the atmospheric pressure of the earth. If the pressure present in it is greater than 1 atm then the fluid present in the column will be forced down by that pressure. However, it will cause an increase in equal amounts in the present column.
            </p>
            <h2 className="text-lg font-bold">5.5.1 APPLICATION OF MANOMETER</h2>
            <ul className="list-disc list-inside text-base">
                <li>It is used to measure the pressure of the fluids using mechanical properties of fluids.</li>
                <li>It is also used to measure vacuum.</li>
                <li>It is also used to measure the flow of the fluid.</li>
                <li>It is used to measure the filter pressure drop of the fluids.</li>
                <li>It is also used for meter calibrations.</li>
                <li>It is used to measure leak testing.</li>
                <li>It is also used to measure the liquid level present in a tank.</li>
            </ul>
            <h2 className="text-lg font-bold">TABLE 5.2: DIFFERENCE BETWEEN MANOMETER AND BAROMETER</h2>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2 text-left font-bold">Manometer</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Barometer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">It is a device that is used to measure the pressure of the fluid but that of a liquid concerning the earth&apos;s atmospheric pressure.</td>
                        <td className="border border-gray-300 p-2">It is a device that is used to measure fluid pressure but that of air as it can differ with distance when it&apos;s below or above sea level</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">It comes in different forms</td>
                        <td className="border border-gray-300 p-2">It comes only in one basic design for all its types</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">These are filled with mercury or any heavy liquid material but in some cases, they can be filled with a lighter liquid material</td>
                        <td className="border border-gray-300 p-2">In all its cases, these are only filled with mercury or any heavy liquid material</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ManometerPage
