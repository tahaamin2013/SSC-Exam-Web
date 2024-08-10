import React from 'react';

const MeasuringInstruments = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">1.7 MEASURING INSTRUMENTS</h1>
            <p className="mb-4">
                Physics is built on definitions that are expressed in terms of measurements. For measurements of physical quantities, we need devices termed as measuring instruments. These range from simple objects such as rulers and stopwatches to Atomic Force Microscope (AFM) and Scanning Tunneling Electron Microscope (STEM).
            </p>
            <p className="mb-4">
                All measuring instruments have some measuring limitations. Least count is the minimum value that can be measured on the scale of measuring instrument. The measurement of every instrument is therefore limited to its least count.
            </p>
            <h2 className="text-xl font-semibold mb-4">1.7.1 METRE RULE AND MEASURING TAPE</h2>
            <p className="mb-4">
                We use ruler to draw margin lines on our notebooks. Have you ever used the scale on it to draw the lines with exact lengths? A meter rule is a physics laboratory tool, used to measure the length of objects. Metre rules are one metre long (as compared to the standard metre). Metre Rulers usually have 1000 small divisions on them called millimetres. Such metre rulers have a least count of 1 mm as shown in figure 1.7.
            </p>
            <p className="mb-4">
                These instruments have similar scale on it as drawn on our rulers, principally rulers are shorter versions of metre rule. A measuring tape is a flexible ruler used to measure larger distances or lengths. It consists of a ribbon of cloth, plastic, metal, or fiberglass with linear measurement markings on it. The tape is usually housed in a compact case, and it can be pulled out and locked in place to measure distances. The most common units of measurement on a measuring tape are inches and centimeters. Measuring tapes come in various lengths, typically ranging from a few feet to several meters.
            </p>
            <p className="mb-4 font-bold">POINT TO PONDER</p>
            <p className="mb-4">
                Can you measure distances smaller than 1 mm on metre rule? Why?
            </p>
            <p className="mb-4 font-bold">CAN YOU TELL?</p>
            <p className="mb-4">
                Some metre rulers like the one shown in figure 1.7 are marked with inches and feet. What is the least count of metre rule on this scale?
            </p>
            <h2 className="text-xl font-semibold mb-4">1.7.2 VERNIER CALIPER</h2>
            <p className="mb-4">
                In physics, sometimes we need to measure a length smaller than 1 mm. A vernier caliper can help take readings smaller than a millimetre.
            </p>
            <p className="mb-4">
                'Vernier caliper is a device used to measure a fraction of a smallest division on scale by sliding another scale over it'.
            </p>
            <p className="mb-4">
                It can be used to measure the thickness, diameter, or width of an object and the internal and external diameter of a hollow cylinder.
            </p>
            <p className="mb-4">
                There are two scales on vernier calipers:
            </p>
            <ul className="list-disc ml-8 mb-4">
                <li>
                    A main scale which has markings of usually 1 mm each and it contains a jaw on its left end.
                </li>
                <li>
                    A sliding scale called vernier scale which has markings of some multiple of the marking on the main scale.
                </li>
            </ul>
            <p className="mb-4">
                Minimum length which can be measured accurately with the help of a vernier calipers is called the least count (vernier constant) of vernier calipers. Least count can be obtained by dividing the value of the smallest division on the main scale by the total number of divisions on the vernier scale.
            </p>
            <p className="mb-4">
                Least Count = Smallest division on main scale / Total number of divisions on vernier scale
            </p>
            <p className="mb-4">
                If the smallest main scale division is 1 mm and the vernier scale division has 10 divisions on it, then the least count of the vernier caliper is:
            </p>
            <p className="mb-4">
                Least Count = 1 mm / 10 = 0.1 mm
            </p>
            <p className="mb-4 font-bold">CAN YOU TELL?</p>
            <p className="mb-4">
                What is the length of the object measured by metre rod if it is 20.14 cm measured by vernier calipers? On closing the jaws of the vernier calipers, the zero of the vernier scale should coincide with the zero of the main scale. If their zeros do not coincide, there is an error in the instrument, called zero error. The zero error can be corrected which you will learn in laboratory work.
            </p>
            <h2 className="text-xl font-semibold mb-4">TAKING MEASUREMENT WITH VERNIER CALLIPERS</h2>
            <p className="mb-4">
                If we want to measure the diameter of an object (e.g., a small sphere) with vernier caliper, the following steps can be followed:
            </p>
            <ol className="list-decimal ml-8 mb-4">
                <li>Note the least count of the vernier (it is usually written on vernier caliper, or we can find it by the method already learned). Determine and correct zero error if any.</li>
                <li>Fix the small sphere in the jaws and note the complete divisions of the main scale past by the zero of the vernier scale. This is the main scale reading as shown in figure 1.6.</li>
                <li>Look for the division of the vernier scale that is coinciding with any division on the main scale. This is the vernier scale reading.</li>
                <li>Multiply the vernier scale reading with the least count, which is the fraction to be added to the main scale reading. This fraction will be smaller than the main scale's least count, thus the vernier caliper measures the reading to the part of a millimeter.</li>
            </ol>
            <h2 className="text-xl font-semibold mb-4">DIGITAL VERNIER CALIPER</h2>
            <p className="mb-4">
                Digital Vernier Calipers have greater precision than mechanical vernier calipers. The least count of Digital Vernier Calipers is 0.01 mm.
            </p>
            <h2 className="text-xl font-semibold mb-4">1.7.3 SCREW GAUGE</h2>
            <p className="mb-4">
                Screw gauge is also a length measuring device and is used for measurements even smaller than vernier calipers. 'Screw Gauge is a device used to measure a fraction of a smallest division on scale by rotating circular scale over it'.
            </p>
            <p className="mb-4">
                The distance traveled by the circular scale on the linear (or main) scale in one rotation is called the pitch of the screw gauge. The minimum length which can be measured accurately by a screw gauge is called the least count of the screw gauge. The least count of screw gauge is found by dividing its pitch by the number of circular scale divisions.
            </p>
            <p className="mb-4">
                Least Count = Pitch of Screw Gauge / Total Number of Divisions on Circular Scale
            </p>
            <p className="mb-4">
                If the pitch of the screw gauge is 0.5 mm and the number of divisions on the circular scale is 50, then:
            </p>
            <p className="mb-4">
                Least Count = 0.5 mm / 50 = 0.01 mm
            </p>
            <h2 className="text-xl font-semibold mb-4">ZERO ERROR IN SCREW GAUGE</h2>
            <p className="mb-4">
                Turn the thimble until the anvil and spindle meet. The datum line of the linear scale must meet with the zero on the thimble scale. If the zero mark on the thimble scale (or circular scale) does not lie directly opposite the datum line of the main scale, we say that there is zero error. The zero error and its correction will be discussed in laboratory work.
            </p>
            <h2 className="text-xl font-semibold mb-4">TAKING MEASUREMENT WITH SCREW GAUGE</h2>
            <p className="mb-4">
                To measure the diameter of a small ball bearing using a screw gauge, the following steps can be followed:
            </p>
            <ol className="list-decimal ml-8 mb-4">
                <li>Note the least count of the screw gauge (it is usually written on the instrument, or we can calculate it as described earlier). Determine and correct zero error if any.</li>
                <li>Place the ball bearing between the spindle and anvil. Turn the thimble until the ball bearing is held between the spindle and the anvil. Ensure the ratchet knob is used to avoid excessive force.</li>
                <li>Note the reading on the main scale (linear scale) and the reading on the circular scale (thimble scale).</li>
                <li>Multiply the circular scale reading by the least count of the screw gauge and add this to the main scale reading. This gives the diameter of the ball bearing.</li>
            </ol>
            <h2 className="text-xl font-semibold mb-4">DIGITAL MICROMETER</h2>
            <p className="mb-4">
                Digital Micrometers have greater precision than mechanical screw gauges. The least count of Digital Micrometers is 0.001 mm.
            </p>
            <p className="mb-4">
                In summary, measuring instruments are crucial in physics and engineering for obtaining accurate measurements. From simple rulers to sophisticated digital micrometers, each tool serves a specific purpose and has its own limitations.
            </p>
        </div>
    );
};

export default MeasuringInstruments;
