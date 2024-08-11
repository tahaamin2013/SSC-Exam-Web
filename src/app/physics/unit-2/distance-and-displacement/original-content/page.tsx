// pages/distance-displacement.tsx

import React from "react";

const DistanceDisplacementPage: React.FC = () => {
  return (
    <div className="p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">2.2 DISTANCE AND DISPLACEMENT</h1>

      <p className="mb-4">
        If we are at Faisal Masjid, Islamabad and we want to move to Blue Area, Islamabad by searching on Google Maps as shown in figure 2.5 (a), we get a twisted path, showing us the way to reach our destination. However, the straight path as shown in figure 2.5 (b) can be shorter.
      </p>

      <p className="mb-4">
        <strong>&apos;The length of the path traveled between two positions is called distance.&apos;</strong>
        Distance has no direction and therefore it is a scalar quantity. Distance is usually denoted by \( \Delta x, \Delta r, \Delta s, \Delta d \) or \( \Delta l \), and has SI unit as metre (m).
      </p>

      <p className="mb-4">
        <strong>&apos;The shortest distance from the initial position to the final position (or straight directed distance) is called displacement.&apos;</strong>
        Displacement has direction and therefore it is a vector quantity. Displacement has SI unit as metre (same as length).
      </p>

      <p className="mb-4">
        If an object moves, then the object&apos;s position changes. This change in position vector \( \Delta d \) of an object, from initial position \( d_1 \) to final position \( d_2 \), is known as displacement as shown in figure 2.6 (b). Mathematically:
      </p>

      <p className="mb-4">
        <strong>POINT TO PONDER</strong>
        <br />
        \( \Delta d = d_2 - d_1 \)
        <br />
        Here we used the symbol \( \Delta \) (Greek letter delta) for change in position; however, it is used to represent a &apos;change in&apos; any quantity. For example, elapsed time \( \Delta t \) is the change in (or the difference between) the ending time \( t_2 \) and beginning time \( t_1 \):
        <br />
        \( \Delta t = t_2 - t_1 \)
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">CAN YOU TELL?</h2>

      <div className="mb-4">
        <p className="mb-2">
          If on a 400 m running track your starting point and ending point are the same, how much distance have you covered? What is your displacement?
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Starting point:</strong> The same as the ending point.</li>
          <li><strong>Ending point:</strong> The same as the starting point.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">CAN YOU TELL?</h2>

      <div className="mb-4">
        <p className="mb-2">
          Can displacement be greater than distance?
        </p>
        <p className="mb-2">
          Can distance and displacement be equal?
        </p>
      </div>
    </div>
  );
};

export default DistanceDisplacementPage;
