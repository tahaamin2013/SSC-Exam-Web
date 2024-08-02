import Head from 'next/head';

export default function page() {
    return (
        <>
            <Head>
                <title>Main Memory</title>
            </Head>
            <div className="min-h-screen bg-gray-100 p-6">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800">Main Memory</h1>
                </header>
                <main className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700">What is Main Memory?</h2>
                        <p className="mt-4 text-gray-600">
                            Main memory is the part of your computer that holds data for quick use. It&apos;s like a desk where you keep things you&apos;re working on right now. The computer can grab info from here very fast.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-gray-700">Types of Main Memory:</h3>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">RAM (Random Access Memory)</h4>
                                <p>RAM is a short-term memory. It holds data while your computer is on. When you turn off your computer, RAM loses all its data. RAM is fast and helps your computer run programs quickly.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">ROM (Read-Only Memory)</h4>
                                <p>ROM keeps data even when your computer is off. It holds info that doesn&apos;t change, like startup instructions. You can read ROM, but you can&apos;t change it easily.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">SIMM (Single Inline Memory Module)</h4>
                                <p>SIMM is an older type of memory stick. It was used in older computers. SIMMs have fewer pins than newer memory types.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">DIMM (Dual Inline Memory Module)</h4>
                                <p>DIMM is a newer type of memory stick. It&apos;s used in most computers today. DIMMs are faster and hold more data than SIMMs.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-gray-700">How Memory Works</h3>
                        <p className="mt-4 text-gray-600">
                            Think of memory like a big grid. Each spot in the grid holds a tiny bit of data. The computer knows where each bit is and can find it fast. This is why we call it &quot;random access&quot; - the computer can jump to any spot quickly.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-gray-700">Why Main Memory Matters</h3>
                        <p className="mt-4 text-gray-600">
                            Main memory is key to how fast your computer works. More memory often means a faster computer. It&apos;s like having a bigger desk - you can keep more stuff within easy reach.
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}
