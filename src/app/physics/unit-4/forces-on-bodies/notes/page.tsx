import React from 'react';

const DynamicsIINotesPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dynamics-II</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Print
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md">
              Download
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300 mb-8"></div>
        <div>
          <p className="mb-4 text-gray-700">
            In Dynamics I, we learnt about the force and Newton&apos;s laws of motion. Here in Dynamics II, we will study different effects of force on a body including its resistive nature, turning effect and its ability to rotate a body in a circle. We will also know about the stability of different bodies and the role of centre of mass and centre of gravity.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">4.1 FORCES ON BODIES</h2>
          <p className="mb-4 text-gray-700">
            Sometimes we need to extend the direction in which the force acts. The line along which a force acts is called the line of action of the force as shown in figure 4.1.
          </p>
          <p className="mb-4 text-gray-700">
            Multiple forces may act on bodies at the same time. Under such conditions, we have to determine the net force &apos;F&apos;. However, in such situations, the line of action of these forces becomes important. Suppose you are trying to move a heavy piece of furniture; if a friend helps and you both push together, the ease at which the furniture will move depends on the line of action of both forces on the object.
          </p>
          <p className="mb-4 text-gray-700">
            If the directions of forces are parallel to each other, even if they are in opposite directions, those forces are called parallel forces. If they are in the same direction, they are called &apos;Like parallel forces&apos;. If they are in opposite directions, they will be known as &apos;Unlike parallel forces&apos;. For example, when we push a cart with both hands, we are applying like parallel forces from each support as shown in figure 4.2 (a) and when we apply force with both hands on the handle of a bike to turn it, the force from one hand may be greater or equal. We are applying unlike parallel forces as shown in figure 4.2 (b).
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicsIINotesPage;