// pages/io-devices.tsx

import React from 'react';

const page = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Chapter 4: Input/Output Devices</h1>
            <p className="mb-4">
                Input/Output devices are the components that allow a computer to interact with the external world. They are crucial for receiving data from users or other sources (input) and presenting results or information (output).
            </p>

            <h2 className="text-2xl font-semibold mb-3">4.1 Input Devices</h2>
            <p className="mb-2">Input devices are used to feed data and instructions into a computer. Some common input devices include:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Keyboard:</strong> The most common text input device. Allows users to type letters, numbers, and commands.</li>
                <li><strong>Mouse:</strong> A pointing device for graphical user interfaces. Enables navigation and selection on the screen.</li>
                <li><strong>Touchpad:</strong> Often found on laptops. Serves a similar function to a mouse.</li>
                <li><strong>Scanner:</strong> Converts physical documents into digital images. Useful for digitizing text and images.</li>
                <li><strong>Microphone:</strong> Captures audio input. Used for voice commands, recording, and communication.</li>
                <li><strong>Webcam:</strong> Captures video input. Used for video conferencing and photography.</li>
                <li><strong>Touchscreen:</strong> Allows direct interaction with displayed content. Common in smartphones, tablets, and some laptops.</li>
                <li><strong>Game controllers:</strong> Specialized input devices for gaming. Can include joysticks, gamepads, and motion sensors.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">4.2 Output Devices</h2>
            <p className="mb-2">Output devices present data from the computer to the user or to another system. Common output devices include:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Monitor:</strong> Displays visual output. Can be LCD, LED, OLED, or other technologies.</li>
                <li><strong>Printer:</strong> Produces hard copies of digital documents. Types include inkjet, laser, and 3D printers.</li>
                <li><strong>Speakers:</strong> Produce audio output. Used for music, notifications, and communication.</li>
                <li><strong>Headphones:</strong> Personal audio output device. Useful for private listening or in noisy environments.</li>
                <li><strong>Projector:</strong> Displays output on a large screen or wall. Often used for presentations or home theater systems.</li>
                <li><strong>Plotter:</strong> Produces vector graphics output. Often used in engineering and design fields.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">4.3 Input/Output Devices</h2>
            <p className="mb-2">Some devices serve both input and output functions:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Touchscreen displays:</strong> Act as both input (touch) and output (display) devices.</li>
                <li><strong>Network interface cards:</strong> Allow computers to send (output) and receive (input) data over networks.</li>
                <li><strong>Modems:</strong> Modulate and demodulate signals for data transmission over communication lines.</li>
                <li><strong>Virtual Reality (VR) headsets:</strong> Provide immersive visual output while also tracking head movements as input.</li>
            </ul>

            <p className="mb-4">
                Understanding these I/O devices is crucial as they form the interface between the computer&apos;s internal processes and the external world, facilitating human-computer interaction and data exchange with other systems.
            </p>
            <p className="mb-4">
                In the next chapter, we&apos;ll discuss various types of ports that allow these I/O devices to connect to the computer.
            </p>
        </div>
    );
};

export default page;
