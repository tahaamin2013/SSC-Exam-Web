import Head from 'next/head';

const PrefixesPage = () => {
    return (
        <>
            <Head>
                <title>Prefixes to Power of Ten</title>
                <meta name="description" content="Learn about prefixes used to express numbers in powers of ten." />
            </Head>
            <main className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">1.5 Prefixes to Power of Ten</h1>
                <p className="mb-4 text-gray-700">
                    A mechanism through which numbers are expressed in powers of ten that are given a proper name is called a prefix.
                    Prefixes make standard form or scientific notation further easier. Large numbers are simply written in more convenient
                    prefixes with units. For example, the thickness of a paper can be written conveniently in smaller units of millimetre
                    instead of metre. Similarly, the long distance between two cities may be expressed better in a bigger unit of distance,
                    i.e., kilometre. Some prefixes in SI to replace powers of 10 are given in the table below.
                </p>

                <h2 className="text-2xl font-semibold mb-2 text-blue-500">TABLE 1.3: Prefixes</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Decimal Multiplier</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[
                            { multiplier: '10^18', prefix: 'Exa', symbol: 'E' },
                            { multiplier: '10^15', prefix: 'Peta', symbol: 'P' },
                            { multiplier: '10^12', prefix: 'Tera', symbol: 'T' },
                            { multiplier: '10^9', prefix: 'Giga', symbol: 'G' },
                            { multiplier: '10^6', prefix: 'Mega', symbol: 'M' },
                            { multiplier: '10^3', prefix: 'Kilo', symbol: 'k' },
                            { multiplier: '10^2', prefix: 'Hecto', symbol: 'h' },
                            { multiplier: '10^1', prefix: 'Deca', symbol: 'da' },
                            { multiplier: '10^-1', prefix: 'Deci', symbol: 'd' },
                            { multiplier: '10^-2', prefix: 'Centi', symbol: 'c' },
                            { multiplier: '10^-3', prefix: 'Milli', symbol: 'm' },
                            { multiplier: '10^-6', prefix: 'Micro', symbol: 'μ' },
                            { multiplier: '10^-9', prefix: 'Nano', symbol: 'n' },
                            { multiplier: '10^-12', prefix: 'Pico', symbol: 'p' },
                            { multiplier: '10^-15', prefix: 'Femto', symbol: 'f' },
                            { multiplier: '10^-18', prefix: 'Atto', symbol: 'a' },
                        ].map((row) => (
                            <tr key={row.symbol}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.multiplier}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.prefix}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.symbol}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Examples</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li className="mb-2">
                        The number of seconds in a day is: <strong>86,400 seconds</strong> = <strong>8.64 x 10^4 s</strong> = <strong>86.4 ks</strong>.
                    </li>
                    <li className="mb-2">
                        The distance to the nearest star, Alpha Centauri, is: <strong>4.132 x 10^16 m</strong> = <strong>41.32 Pm</strong>.
                    </li>
                    <li className="mb-2">
                        The thickness of the page of this book is about: <strong>4.0 x 10^-4 m</strong> = <strong>40 x 10^-3 m</strong> = <strong>40 mm</strong>.
                    </li>
                    <li className="mb-2">
                        The mass of a grain of salt is: <strong>1.0 x 10^-4 g</strong> = <strong>100 x 10^-6 g</strong> = <strong>100 mg</strong>.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Do You Know?</h2>
                <p className="mb-4 text-gray-700">
                    Volume is a derived quantity:
                    <ul className="list-disc list-inside">
                        <li>1 L = 1 dm³ = (10 cm)³ = 1000 cm³</li>
                        <li>1 mL = 1 cm³</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Can You Tell?</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li className="mb-2">
                        The mass of the Sun is about <strong>1.97 x 10^30 kg</strong>.
                    </li>
                    <li className="mb-2">
                        The radius of a hydrogen atom is about <strong>0.00000000005 m</strong> = <strong>5 x 10^-11 m</strong>.
                    </li>
                    <li className="mb-2">
                        The age of the Earth is about <strong>143,300,000,000,000,000 s</strong> = <strong>1.433 x 10^17 s</strong>.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Can You Express?</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li className="mb-2">
                        The thickness of a sheet of paper is about <strong>100,000 nanometers</strong> = <strong>1 x 10^5 nm</strong> = <strong>1 x 10^-4 m</strong>.
                    </li>
                    <li className="mb-2">
                        Pakistan has a total installed power generation capacity of over <strong>40,000 megawatts</strong> = <strong>4 x 10^4 MW</strong>.
                    </li>
                    <li className="mb-2">
                        A single hard disk capacity of computers has exceeded <strong>30 terabytes</strong> = <strong>30 x 10^12 bytes</strong>.
                    </li>
                </ul>
            </main>
        </>
    );
};

export default PrefixesPage;
