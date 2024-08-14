// pages/equilibrium.tsx
import { FC } from 'react';

const Equilibrium: FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">4.4 EQUILIBRIUM</h1>
      <p className="mb-4">
        Forces produce change in translational motion, therefore, when the net force on the object is zero the object will either be at rest or move with uniform velocity in a straight line. The same is also true for the moment of force which produces change in rotational motion, therefore, when the net torque on the object is zero the object will not rotate or will rotate with uniform velocity.
      </p>
      <p className="mb-4">
        The effect of force is to produce change in translational motion and effect of moment of force or torque is to produce change in rotational motion.
      </p>
      <p className="mb-4">
        Equilibrium is the state in which all the individual forces and moment of forces or torques exerted upon an object are balanced. This means that net force and torque on the object are zero the object is said to be in equilibrium.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.4.1 CONDITION OF EQUILIBRIUM</h2>
      <p className="mb-4">Therefore for complete equilibrium two conditions must be met.</p>

      <p className="mb-4">
        <strong>A. First Condition of Equilibrium:</strong> When the vector sum of all the forces acting on the body is ZERO then the first condition of equilibrium is satisfied. Mathematically if F is the sum of forces F₁, F₂, F₃,...., Fₙ then
      </p>
      <p className="mb-4 text-center font-semibold">F₁ + F₂ + F₃ + .... + Fₙ = 0</p>
      <p className="mb-4">
        For an object to satisfy the first condition of equilibrium the force polygon must close.
      </p>
      <p className="mb-4">
        For example if there are four forces on the object and their vector sum is zero as shown in the figure 4.8, the first condition of equilibrium will be satisfied and the object will either be at rest or will move with uniform velocity. Mathematically if F₁ is the sum of forces F₁, F₂, F₃, and F₄ by head to tail rule it must be ZERO.
      </p>

      <p className="mb-4">
        <strong>B. Second Condition of Equilibrium:</strong> When the vector sum of all the torques acting on the body is ZERO then the second condition of equilibrium is satisfied. If τ is the sum of torques τ₁, τ₂, τ₃,... then mathematically
      </p>
      <p className="mb-4 text-center font-semibold">τ₁ + τ₂ + τ₃ + .... + τₙ = 0</p>
      <p className="mb-4">
        For complete equilibrium both the first and second conditions of equilibrium must be satisfied.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.4.2 PRINCIPLE OF MOMENTS</h2>
      <p className="mb-4">
        Second condition of equilibrium is also called the principle of moments, which states that &apos;For an object in equilibrium, the sum of the clockwise moments taken about the pivot must be equal to the sum of anti-clockwise moments taken about the same pivot&apos;.
      </p>
      <p className="mb-4">
        To balance torques or moment of force, the perpendicular distance from the axis of rotation play an important role.
      </p>
      <p className="mb-4">
        By convention the anticlockwise torques are taken as positive while clockwise torques are taken as negative, which leads to second condition of equilibrium that the sum of both these torques must be zero.
      </p>
      <p className="mb-4">
        For example, Let a uniform meter stick is balanced from center. Now if we suspend weight of 4 N at 0.1 m from the pivot, it exerts the same torque as 2 N weight at 0.4 m from the fulcrum. A uniform meter stick will balance on pivot under these conditions as shown in the figure 4.9.
      </p>
      <p className="mb-4">
        Similarly three or more torques around a pivot (as axis of rotation) can also balance each other.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">EXAMPLE 4.2: SEESAW BALANCE</h2>
      <p className="mb-4">
        Kamil and Bilal are sitting on a seesaw at F9 Park Islamabad, Kamil, weighing 250 N, is sitting at a distance of 0.6 m from the pivot. At what distance from the pivot should Bilal, weighing 200 N sit in order to balance the seesaw?
      </p>
      <p className="mb-4">
        <strong>GIVEN</strong><br />
        Weight of Kamil &apos;W₁&apos; = 250 N<br />
        Moment arm of Kamil &apos;d₁&apos; = 0.6 m<br />
        Weight of Bilal &apos;W₂&apos; = 200 N
      </p>
      <p className="mb-4">
        <strong>REQUIRED</strong><br />
        Moment arm of Bilal &apos;d₂&apos;?
      </p>
      <p className="mb-4">
        <strong>SOLUTION</strong><br />
        Kamil&apos;s weight is producing anticlockwise moment, while Bilal&apos;s weight is producing clockwise moment. Therefore, by principle of moments:
      </p>
      <p className="mb-4 text-center font-semibold">d₁ × W₁ = d₂ × W₂</p>
      <p className="mb-4">
        Hence d₂ = (d₁ × W₁) / W₂ = (0.6 m × 250 N) / 200 N
      </p>
      <p className="mb-4">
        Therefore d₂ = 0.75 m
      </p>
      <p className="mb-4">
        This means that having less weight (or force), the moment arm should be greater in order to produce same torque as produced by a greater weight and small moment arm.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.4.3 TYPES OF EQUILIBRIUM</h2>
      <p className="mb-4">
        The equilibrium is divided into two types
      </p>

      <p className="mb-4">
        <strong>A. Static Equilibrium:</strong> When a body is at rest under the action of several forces acting together and several torques acting the body is said to be in static equilibrium. For example a book resting on the table is in static equilibrium, the weight mg of the book is balanced by a normal reaction force from the table surface.
      </p>

      <p className="mb-4">
        <strong>B. Dynamic Equilibrium:</strong> When a body is moving at uniform velocity under the action of several forces acting together the body is said to be in dynamic equilibrium. It is further divided in to two types.
      </p>

      <p className="mb-4">
        <strong>I. Dynamic Translational Equilibrium:</strong> When a body is moving with uniform linear velocity the body is said to be in dynamic translational equilibrium. For example a paratrooper falling down with constant velocity is in dynamic translational equilibrium as shown in figure 4.10 (a).
      </p>

      <p className="mb-4">
        <strong>II. Dynamic Rotational Equilibrium:</strong> When a body is moving with uniform rotation the body is said to be in dynamic rotational equilibrium. For example when the ceiling fan is rotating with unchanging speed as shown in figure 4.10 (b).
      </p>
    </div>
  );
};

export default Equilibrium;
