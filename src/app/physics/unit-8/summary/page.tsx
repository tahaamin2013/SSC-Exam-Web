import Head from 'next/head'
import { Fragment } from 'react'

const MagnetismSummary = () => {
    return (
        <Fragment>
            <Head>
                <title>Magnetism Summary</title>
                <meta name="description" content="Summary of magnetism concepts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-primary-bg min-h-screen text-white font-sans">
                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-4xl font-bold mb-6 text-center">Magnetism Summary</h1>
                    <div className="bg-white text-black rounded-lg p-6 shadow-custom border-2 border-border">
                        <h2 className="text-2xl font-semibold mb-4 text-highlight">Key Concepts</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><span className="font-bold">Magnetic Domain:</span> A group of atoms with aligned N-poles.</li>
                            <li><span className="font-bold">Magnet Poles:</span> Magnets have both N-pole and S-pole. Like poles repel; unlike poles attract.</li>
                            <li><span className="font-bold">Magnetic Materials:</span> Attracted to magnets and other magnetic materials.</li>
                            <li><span className="font-bold">Magnetic Field:</span> Region around a magnet where it attracts opposite poles. Field lines go from N-pole to S-pole.</li>
                            <li><span className="font-bold">Magnetic Shielding:</span> Making a space free from magnetic fields.</li>
                            <li><span className="font-bold">Induced Magnetism:</span> Magnetizing a material with an external magnetic field.</li>
                            <li><span className="font-bold">Temporary Magnets:</span> Magnets that behave like a magnet only in the presence of current.</li>
                            <li><span className="font-bold">Permanent Magnets:</span> Magnets that retain their magnetic properties without current.</li>
                            <li><span className="font-bold">Diamagnetic Materials:</span> Materials with zero net magnetic fields per atom.</li>
                            <li><span className="font-bold">Paramagnetic Materials:</span> Materials with a small net magnetic field per atom.</li>
                            <li><span className="font-bold">Ferromagnetic Materials:</span> Materials with a large net magnetic field per atom.</li>
                            <li><span className="font-bold">Earth&apos;s Magnetic Field:</span> Resembles a bar magnet&apos;s field, protecting life from cosmic rays and solar radiation. Earth&apos;s geographic and magnetic poles differ by 11.3 degrees, and migratory animals use Earth&apos;s magnetic field for navigation.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default MagnetismSummary
