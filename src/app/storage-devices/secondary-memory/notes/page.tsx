// pages/secondary-memory.tsx
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">What is Secondary Memory?</h1>
            <p className="mb-4">
                Secondary memory is where your computer stores data for a long time. Unlike main memory, it keeps information even when the power is off. It&apos;s like a filing cabinet for your computer.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Types of Secondary Memory:</h2>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Floppy Disk</h3>
                <ul className="list-disc list-inside mb-2">
                    <li>An older type of storage</li>
                    <li>Holds a small amount of data</li>
                    <li>Not used much today</li>
                    <li>Was popular in the 1980s and 1990s</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Hard Disk</h3>
                <ul className="list-disc list-inside mb-2">
                    <li>Stores lots of data</li>
                    <li>Found in most computers</li>
                    <li>Can hold thousands of files</li>
                    <li>
                        Two main types:
                        <ul className="list-disc list-inside mt-1">
                            <li>a) HDD (Hard Disk Drive): Uses spinning disks</li>
                            <li>b) SSD (Solid State Drive): Faster, no moving parts</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Compact Disk (CD)</h3>
                <ul className="list-disc list-inside mb-2">
                    <li>Round, flat disk</li>
                    <li>Often used for music or software</li>
                    <li>Can typically hold up to 700 MB</li>
                    <li>Read by a laser</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Magnetic Tape</h3>
                <ul className="list-disc list-inside mb-2">
                    <li>Long strip of magnetic material</li>
                    <li>Used for backing up large amounts of data</li>
                    <li>Not for everyday use</li>
                    <li>Stores data in a long sequence</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-2">How Secondary Memory Works:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Data is written to the device</li>
                <li>It stays there until you erase it</li>
                <li>You can access it anytime</li>
                <li>It&apos;s slower than main memory but can hold much more</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Why Secondary Memory Matters:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Lets you keep files for a long time</li>
                <li>Holds all your programs, photos, and documents</li>
                <li>Allows you to move data between computers</li>
                <li>Provides a way to back up important information</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Choosing Secondary Memory:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Think about how much space you need</li>
                <li>Consider how fast you need to access data</li>
                <li>Look at the cost</li>
                <li>Decide if you need to move data around</li>
            </ul>

            <p className="font-semibold">
                Remember: Technology keeps improving. New types of secondary memory are always being developed. They&apos;re getting faster, smaller, and can hold more data.
            </p>
        </div>
    );
};

export default page;
