// pages/center-of-mass.tsx
import { FC } from 'react';

const CenterOfMass: FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">4.3 CENTER OF MASS</h1>
      <p className="mb-4">
        A rigid body (a body that does not deform or change shape) is made of large number of small interconnected particles. The center of mass (abbreviated CM) of a rigid body is the point about which mass is equally distributed.
      </p>
      <p className="mb-4">
        If the line of action of force pass through the center of mass of a body it will not produce any rotation in it. As an example, consider the motion of the center of mass of the hammer as shown in Figure 4.4. When the hammer is thrown from handle the center of mass follows a smooth parabolic path while other points in the rotating hammer travel along more complicated paths.
      </p>
      <p className="mb-4">
        The center of mass can be considered as a point at which all the mass of an object is concentrated. In physics we often deal with weight (the force of gravity). Therefore we can assume that the entire force of gravity (weight) is concentrated at one point. The center of gravity (abbreviated &apos;CG&apos;) is the point where whole weight of the body appear to act.
      </p>
      <p className="mb-4">
        The center of mass and center of gravity (CM/CG) are same for small objects. But since the value of acceleration due to gravity decrease with altitude, therefore for tall objects (like mountains and building) there is a slight difference.
      </p>
      <p className="mb-4">
        The CM/CG of a homogeneous cube or sphere is at its geometric center, whereas the CM/CG of a right circular cylinder or cone is on the axis of symmetry, and so on as shown in the figure 4.5. Similarly the CM/CG of a uniform wooden rod is at its mid-point, and therefore it can balanced from its center.
      </p>
      <p className="mb-4">
        For irregular objects one way to determine the center of gravity is to hang it randomly from at least three different points, and then connecting vertical lines drawn with the help of plumb line. These line will meet each other at a common point which will be the center of gravity CG of the irregular object (sheet) as shown in figure 4.6.
      </p>
      <p className="mb-4">
        The CM/CG doesn&apos;t always lie inside the mass and may change its location depending upon the orientation of the object. For example the arm is stretched out the CM/CG lies inside the mass distribution, but when the arm is bent, the CM/CG shifts to the new location outside the mass distribution as shown in figure 4.7.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">CAN YOU TELL?</h2>
      <p className="mb-4">
        Is there any difference between center of mass and center of gravity? When would the center of mass of object be different than its center of gravity?
      </p>
    </div>
  );
};

export default CenterOfMass;
