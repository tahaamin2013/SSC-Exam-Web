import Head from 'next/head';

export default function page() {
    return (
        <>
            <Head>
                <title>Memory Units and Expansion Components</title>
            </Head>
            <div className="min-h-screen bg-gray-100 p-6">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800">Memory Units and Expansion Components</h1>
                </header>
                <main className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700">What are Memory Units?</h2>
                        <p className="mt-4 text-gray-600">
                            Memory units are ways we measure computer data. Just like we use inches or centimeters to measure length, we use special units to measure data.
                        </p>
                        <h3 className="text-xl font-semibold text-gray-700">The Basic Units:</h3>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Bit</h4>
                                <p>A bit is the smallest unit of data. It&apos;s like a tiny switch that can be on or off. We show this as a 1 (on) or 0 (off).</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Byte</h4>
                                <p>A byte is made up of 8 bits. It can show 256 different values. One letter or number usually takes up one byte.</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Bigger Units:</h3>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Kilobyte (KB)</h4>
                                <p>1 KB = 1,024 bytes. About the size of a short email.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Megabyte (MB)</h4>
                                <p>1 MB = 1,024 KB. About the size of a small book.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Gigabyte (GB)</h4>
                                <p>1 GB = 1,024 MB. About the size of a movie.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Terabyte (TB)</h4>
                                <p>1 TB = 1,024 GB. Can hold thousands of movies.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700">Cache Memory</h2>
                        <p className="mt-4 text-gray-600">
                            Cache is a special type of computer memory that&apos;s faster but smaller than regular RAM.
                        </p>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">L1 Cache</h4>
                                <p>Smallest and fastest. Usually measured in KB. Typically 32 KB to 64 KB per CPU core.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">L2 Cache</h4>
                                <p>Larger but slightly slower than L1. Usually measured in KB or MB. Typically 256 KB to 512 KB per CPU core.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">L3 Cache</h4>
                                <p>Largest but slowest of the cache levels. Usually measured in MB. Typically 4 MB to 50 MB, shared among all cores.</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Why Cache Matters</h3>
                        <p className="mt-4 text-gray-600">
                            Speeds up computer operations by storing frequently used data. Bridges the speed gap between the CPU and main memory. Improves overall system performance.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700">Ports, Expansion Slots, and Expansion Cards</h2>
                        <h3 className="text-xl font-semibold text-gray-700">Ports</h3>
                        <p className="mt-4 text-gray-600">
                            Ports are connection points on a computer that allow it to communicate with external devices.
                        </p>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">USB Ports</h4>
                                <p>Universal Serial Bus. Used for connecting a wide variety of devices like keyboards, mice, and external drives. Different versions (USB 2.0, 3.0, 3.1) offer varying speeds.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">HDMI Ports</h4>
                                <p>High-Definition Multimedia Interface. Used for connecting to displays and TVs. Carries both audio and video signals.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Ethernet Ports</h4>
                                <p>Used for connecting to wired networks. Provides a more stable internet connection than Wi-Fi.</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Expansion Slots</h3>
                        <p className="mt-4 text-gray-600">
                            Expansion slots are connectors on the motherboard that allow for the installation of expansion cards.
                        </p>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">PCI Slots (Peripheral Component Interconnect)</h4>
                                <p>Older type of expansion slot. Still found in some computers for compatibility reasons.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">PCIe Slots (PCI Express)</h4>
                                <p>Modern standard for expansion slots. Come in different sizes (x1, x4, x8, x16) offering different bandwidth capabilities.</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Expansion Cards</h3>
                        <p className="mt-4 text-gray-600">
                            Expansion cards are hardware components that can be inserted into expansion slots to add functionality to a computer.
                        </p>
                        <div className="mt-4 space-y-6 text-gray-600">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Graphics Cards</h4>
                                <p>Improve a computer&apos;s ability to render images and video. Essential for high-end gaming and graphics-intensive work.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Sound Cards</h4>
                                <p>Enhance audio capabilities. Used in professional audio production setups.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Network Cards</h4>
                                <p>Add or improve networking capabilities. Can add Wi-Fi or faster Ethernet connections.</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Why These Components Matter</h3>
                        <p className="mt-4 text-gray-600">
                            Understanding these components helps you know how to connect and use various devices with your computer. Understand the upgrade potential of your system. Make informed decisions when buying or upgrading a computer.
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}
