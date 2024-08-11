// pages/output-devices.tsx

import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Output Devices</h1>
      <p className="mb-4">
        Output devices are how computers show us information. They turn the computer&apos;s data into something we can see, hear, or touch. Let&apos;s explore some common output devices:
      </p>

      <h2 className="text-2xl font-semibold mb-3">Monitors</h2>
      <p className="mb-4">
        Monitors are screens that show us pictures and text from the computer. They come in different sizes and types. Some are flat and thin, while others are curved. Monitors help us see what we&apos;re doing on the computer.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Printers</h2>
      <p className="mb-4">
        Printers make paper copies of things from our computer. There are several types of printers:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Daisy Wheel Printer:</strong> This old type of printer works like a typewriter. It has a wheel with letters that press against a ribbon to print.</li>
        <li><strong>Line Printer:</strong> Line printers print a whole line at once. They&apos;re fast but not very clear. They&apos;re often used for simple business reports.</li>
        <li><strong>Inkjet Printer:</strong> Inkjet printers spray tiny drops of ink onto paper. They can print in color and are good for photos.</li>
        <li><strong>Laser Printer:</strong> Laser printers use a laser and special powder called toner. They print very clearly and quickly.</li>
        <li><strong>Electrostatic Printer:</strong> These printers use static electricity to stick toner to paper. They&apos;re used for large prints like maps or posters.</li>
        <li><strong>Electrothermal Printer:</strong> This kind of printer uses heat to make marks on special paper. It&apos;s often used in cash registers to print receipts.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Plotters</h2>
      <p className="mb-4">
        Plotters are special printers that draw lines. They&apos;re used to make big drawings like blueprints or maps.
      </p>

      <h2 className="text-2xl font-semibold mb-3">CD Writer</h2>
      <p className="mb-4">
        A CD writer can put information onto blank CDs. This is a way to save large files or make music CDs.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Disk Drive</h2>
      <p className="mb-4">
        We talked about disk drives as input devices, but they&apos;re output devices too. They can save information from your computer onto disks or USB drives.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Soft Copy vs. Hard Copy</h2>
      <p className="mb-4">
        When we talk about output, we often use two terms:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Soft Copy:</strong> This is what we see on the screen. It&apos;s called &quot;soft&quot; because we can&apos;t touch it. Examples are things we see on monitors or hear from speakers.</li>
        <li><strong>Hard Copy:</strong> This is output we can touch, like printed papers or photos. It&apos;s called &quot;hard&quot; because it&apos;s a real, physical thing.</li>
      </ul>

      <p className="mb-4">
        Output devices help us understand what the computer is telling us. Some show us pictures and words, while others make sounds or give us something we can hold.
      </p>

      <p className="mb-4">
        In the next chapter, we&apos;ll look at how input and output devices work together to make computers useful tools.
      </p>
    </div>
  );
};

export default page;
