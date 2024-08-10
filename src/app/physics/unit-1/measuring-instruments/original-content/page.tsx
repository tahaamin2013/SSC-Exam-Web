// components/MeasuringInstruments.tsx

import React from 'react';

const MeasuringInstruments: React.FC = () => {
    return (
        <div className="p-6 bg-white text-gray-800">
            <h1 className="text-3xl font-bold mb-4">1.7 MEASURING INSTRUMENTS</h1>
            <p className="mb-4">
                Physics is built on definitions that are expressed in terms of measurements. For measurements of physical quantities, we need devices termed as measuring instruments. These range from simple objects such as rulers and stopwatches to Atomic Force Microscopes (AFM) and Scanning Tunneling Electron Microscopes (STEM). All measuring instruments have some measuring limitations.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1.7.1 METRE RULE AND MEASURING TAPE</h2>
            <p className="mb-4">
                We use rulers to draw margin lines on our notebooks. Have you ever used the scale on it to draw lines with exact lengths? A meter rule is a physics laboratory tool used to measure the length of objects. Metre rules are one metre long and usually have 1000 small divisions on them called millimetres. Such metre rulers have a least count of 1 mm. These instruments have a similar scale to rulers, which are shorter versions of metre rules.
            </p>
            <p className="mb-4">
                A measuring tape is a flexible ruler used to measure larger distances or lengths. It consists of a ribbon of cloth, plastic, metal, or fiberglass with linear measurement markings on it. The tape is usually housed in a compact case and can be pulled out and locked in place to measure distances. The most common units of measurement are inches and centimeters. Measuring tapes come in various lengths, typically ranging from a few feet to several meters.
            </p>

            <h3 className="text-xl font-medium mb-2">POINT TO PONDER</h3>
            <p className="mb-4">Can you measure distances smaller than 1 mm on a metre rule? Why?</p>

            <h3 className="text-xl font-medium mb-2">CAN YOU TELL?</h3>
            <p className="mb-4">Some metre rulers are marked with inches and feet. What is the least count of a metre rule on this scale?</p>

            <h2 className="text-2xl font-semibold mb-2">1.7.2 VERNIER CALIPER</h2>
            <p className="mb-4">
                In physics, sometimes we need to measure lengths smaller than 1 mm. A vernier caliper helps in taking measurements smaller than a millimetre. The vernier caliper is a device used to measure a fraction of the smallest division on a scale by sliding another scale over it. It can measure the thickness, diameter, or width of an object and the internal or external diameter of a hollow cylinder.
            </p>
            <p className="mb-4">
                There are two scales on the vernier calipers:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>A main scale which has markings usually of 1 mm each and it contains a jaw on its left end.</li>
                <li>A sliding scale called the vernier scale which has markings of some multiple of the main scale markings.</li>
            </ul>
            <p className="mb-4">
                The minimum length that can be measured accurately with the help of a vernier caliper is called the least count (vernier constant) of the vernier caliper. The least count can be obtained by dividing the value of the smallest division on the main scale by the total number of divisions on the vernier scale.
            </p>
            <p className="mb-4">
                If the smallest main scale division is 1 mm and the vernier scale division has 10 divisions on it, then the least count of the vernier caliper is:
                <br />
                Least Count = 1 mm / 10 = 0.1 mm
            </p>

            <h3 className="text-xl font-medium mb-2">CAN YOU TELL?</h3>
            <p className="mb-4">What is the length of the object measured by a metre rod if it is 20.14 cm measured by vernier calipers?</p>

            <p className="mb-4">
                On closing the jaws of the vernier calipers, the zero of the vernier scale should coincide with the zero of the main scale. If their zeros do not coincide, there is an error in the instrument called zero error. The zero error can be corrected, which you will learn in laboratory work.
            </p>

            <h3 className="text-xl font-medium mb-2">TAKING MEASUREMENT WITH VERNIER CALIPERS</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>Note the least count of the vernier (it is usually written on the vernier caliper, or we can find it by the method already learned). Determine and correct zero error if any.</li>
                <li>Fix the small sphere in the jaws and note the complete divisions of the main scale past the zero of the vernier scale. This is the main scale reading.</li>
                <li>Look for the division of the vernier scale that coincides with any division on the main scale. This is the vernier scale reading.</li>
                <li>Multiply the vernier scale reading by the least count, which is the fraction to be added to the main scale reading. This fraction will be smaller than the main scale least count, thus the vernier caliper measures the reading to the part of a millimetre.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2">1.7.3 SCREW GAUGE</h2>
            <p className="mb-4">
                The screw gauge is also a length measuring device used for measurements even smaller than vernier calipers. The screw gauge is a device used to measure a fraction of the smallest division on a scale by rotating the circular scale over it. The distance traveled by the circular scale on the linear (or main) scale in one rotation is called the pitch of the screw gauge.
            </p>
            <p className="mb-4">
                The minimum length which can be measured accurately by a screw gauge is called the least count of the screw gauge. The least count of the screw gauge is found by dividing its pitch by the number of circular scale divisions.
            </p>
            <p className="mb-4">
                If the pitch of the screw gauge is 0.5 mm and the number of divisions on the circular scale is 50, then:
                <br />
                Least Count = 0.5 mm / 50 = 0.01 mm
            </p>

            <h3 className="text-xl font-medium mb-2">ZERO ERROR IN SCREW GAUGE</h3>
            <p className="mb-4">
                Turn the thimble until the anvil and spindle meet. The datum line of the linear scale must meet with the zero on the thimble scale. If the zero mark on the thimble scale (or circular scale) does not lie directly opposite the datum line of the main scale, there is a zero error. The zero error and its correction will be discussed in laboratory work.
            </p>

            <h3 className="text-xl font-medium mb-2">TAKING MEASUREMENT WITH SCREW GAUGE</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>Note the pitch and least count of the screw gauge and determine the zero error (if any).</li>
                <li>Place the object (e.g., a wire piece) between the spindle and anvil. Gently close the gap between the spindle and the anvil by turning the ratchet.</li>
                <li>Turn the ratchet until it starts to click. The ratchet prevents the user from exerting too much pressure on the object.</li>
                <li>Read the main scale reading, which is the reading shown (or unblocked) by the circular scale.</li>
                <li>Identify the line of the circular scale aligned with the datum line. Multiply the least count of the screw gauge by this number. This is the circular scale reading.</li>
                <li>Add the linear (or main) scale reading and circular scale reading to get the total reading.</li>
            </ol>

            <h3 className="text-xl font-medium mb-2">CAN YOU TELL?</h3>
            <p className="mb-4">You have to measure the thickness of a page and the internal diameter of a beaker. Which instrument would you use: vernier calipers or screw gauge? Why?</p>

            <h3 className="text-xl font-medium mb-2">FOR YOUR INFORMATION</h3>
            <p className="mb-4">
                The least count of a ruler is 1 mm. It is 0.1 mm for Vernier Calipers and 0.01 mm for a micrometer screw gauge. Thus, measurements taken by a micrometer screw gauge are the most precise among the three.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1.7.4 PHYSICAL BALANCE</h2>
            <p className="mb-4">
                The balance (also known as balance scale, beam balance, or laboratory balance) was the first mass measuring instrument invented. A physical balance is a very sensitive common balance that can measure weights in the milligram order. It consists of a vertical pillar having a horizontal beam, resting on a knife edge with two pans. A long pointer is attached to the middle of the beam.
            </p>
            <p className="mb-4">
                Leveling screws are used to level the physical balance, while the pointer is set at the center of the scale by adjusting screws. It is placed in a protective glass case so that dust and wind do not affect the accuracy of the instrument. A weight box containing standard weights comes with the balance. The mass of a body is found by placing the body in one pan, placing some standard weights in the other, and then calculating it from the standard weights placed and the resting point of the pointer.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1.7.5 MEASURING CYLINDER</h2>
            <p className="mb-4">
                A measuring cylinder is a tool used in laboratories to measure the volume of liquids, chemicals, or solutions. It is also known as a graduated cylinder. Measuring cylinders are typically made of transparent plastic or glass and have a vertical scale in milliliters (ml) or cubic centimeters (cm³). The volume of a liquid can be determined by measuring the height of the liquid in the cylinder. The least count of a measuring cylinder is usually 1 cm³, meaning that any volume change smaller than this cannot be measured. Measuring cylinders come in various sizes, ranging from small capacities of a few milliliters to larger capacities of several liters. The choice of cylinder size depends on the volume of the liquid being measured.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1.7.6 STOP WATCH</h2>
            <p className="mb-4">
                The duration of specific intervals of time is measured by a stopwatch. Stopwatches are of two main types: mechanical (analogue) and digital.
            </p>

            <h3 className="text-xl font-medium mb-2">MECHANICAL/ANALOGUE STOPWATCH</h3>
            <p className="mb-4">
                It has two circular dials: a large circular dial in which the second hand rotates and a small minute hand in which the minute hand rotates. The watch starts and stops by pressing the knob at the top. Pressing it for some time will reset the watch back to zero.
            </p>

            <h3 className="text-xl font-medium mb-2">DIGITAL STOPWATCH</h3>
            <p className="mb-4">
                Digital stopwatches are usually controlled by two buttons on the case. Pressing the left button starts the timer, and pressing it again stops the time, showing the elapsed time. Pressing the right button resets the stopwatch to zero. The right button is also used to record split times or lap times.
            </p>
        </div>
    );
};

export default MeasuringInstruments;
