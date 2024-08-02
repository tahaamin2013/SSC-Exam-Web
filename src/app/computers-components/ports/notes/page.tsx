// pages/ports.tsx

import React from 'react';

const page = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Chapter 5: Ports</h1>
            <p className="mb-4">
                Ports are connection points on a computer that allow various devices to be connected, enabling communication between the computer and external devices. They play a crucial role in expanding a computer&apos;s capabilities and facilitating data transfer.
            </p>

            <h2 className="text-2xl font-semibold mb-3">5.1 Serial Ports</h2>
            <p className="mb-2">Serial ports transmit data one bit at a time in sequence. Key points about serial ports:</p>
            <ul className="list-disc list-inside mb-2">
                <li>Historically used for connecting modems, some printers, and other peripherals</li>
                <li>Lower data transfer rates compared to parallel ports</li>
                <li>Can transmit over longer distances with less signal degradation</li>
            </ul>
            <p className="mb-2">Examples include:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>RS-232:</strong> An older standard, still used in some industrial applications</li>
                <li><strong>USB (Universal Serial Bus):</strong> Now the most common type of serial port. Various versions (1.0, 2.0, 3.0, 3.1, 4) with increasing speeds. Used for a wide range of devices including keyboards, mice, printers, and external storage.</li>
                <li><strong>FireWire (IEEE 1394):</strong> Faster than early USB versions. Often used for video cameras and external hard drives.</li>
                <li><strong>Thunderbolt:</strong> Combines PCI Express and DisplayPort into a serial signal. Very high data transfer rates.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">5.2 Parallel Ports</h2>
            <p className="mb-2">Parallel ports transmit multiple bits of data simultaneously. Characteristics of parallel ports:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Historically used for printers and scanners</li>
                <li>Faster data transfer over short distances compared to old serial ports</li>
                <li>Limited cable length due to signal degradation</li>
                <li>Largely phased out in modern computers, replaced by USB and other serial interfaces</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">5.3 Other Important Ports</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>HDMI (High-Definition Multimedia Interface):</strong> Transmits uncompressed video and compressed/uncompressed audio. Common for connecting displays and home theater systems.</li>
                <li><strong>DisplayPort:</strong> Designed to replace VGA and DVI. Can carry audio, USB, and other forms of data.</li>
                <li><strong>Ethernet Port:</strong> Used for connecting to wired networks. Supports various speeds (10/100/1000 Mbps and beyond).</li>
                <li><strong>Audio Ports:</strong> 3.5mm jacks for microphones and speakers/headphones. Some computers have separate ports for input and output.</li>
                <li><strong>VGA (Video Graphics Array):</strong> An older standard for video output. Still found on some projectors and older monitors.</li>
                <li><strong>DVI (Digital Visual Interface):</strong> Supports both digital and analog signals. Being phased out in favor of HDMI and DisplayPort.</li>
                <li><strong>PS/2 Ports:</strong> Once common for keyboards and mice. Largely replaced by USB.</li>
                <li><strong>Card Readers:</strong> Built-in ports for reading memory cards (SD, microSD, etc.).</li>
            </ul>

            <p className="mb-4">
                Understanding these ports is essential for connecting various devices to a computer and ensuring compatibility. The trend in recent years has been towards universal, high-speed serial interfaces like USB and Thunderbolt, which can handle multiple types of devices and data transfer needs.
            </p>
            <p className="mb-4">
                In the next and final chapter, we&apos;ll discuss the motherboard, which houses many of these ports and serves as the central hub connecting all computer components.
            </p>
        </div>
    );
};

export default page;
