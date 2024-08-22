import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const mindmapMomentofaForce = () => {
  return (
    <div>
      <PlantUMLDiagram
        code={`
        @startmindmap
skinparam shadowing false
skinparam roundcorner 30

title Moment of Force (Torque)

* Moment of Force (Torque)
** The turning effect produced in a body about a fixed point due to an applied force is called the moment of force or torque
** It is a vector quantity with the SI unit Nm (Newton meter)
** Moment of force plays the same role in rotational motion as force in translational motion
** Mathematically, τ = F x d, where τ is the moment of force, F is the force, and d is the perpendicular distance from the axis of rotation to the line of action of the force (moment arm)
** Increasing the magnitude of force or moment arm increases the moment of force and vice versa

** Axis of Rotation
*** Rotational motion is the turning or spinning motion of an object about an axis that passes through it
*** The axis of rotation is a line about which rotation takes place and remains fixed during rotational motion
*** The axis of rotation can be a pivot, hinges, or any other support

** Clockwise and Anticlockwise Moments
*** If the force is capable of rotating the body in a clockwise direction, the moment is known as a clockwise moment
*** If the force is capable of producing rotation in the anticlockwise direction, the moment is known as an anticlockwise moment
*** Conventionally, clockwise moment is taken as negative, while anticlockwise moment is taken as positive

** Example 4.1
*** The teacher applied a force of 60 N to open a door
*** d₁ = 0.40 m: The torque produced was T = 24.0 Nm (anticlockwise)
*** d₂ = 0.20 m: The torque produced was T = 12.0 Nm (anticlockwise)
*** d₃ = 0.0 m: The torque produced was T = 0 Nm (since the line of action of force passes through the axis of rotation)

** Key Concepts
*** Moment of force (or torque) is the vector product of force and moment arm
*** Moment of force plays a crucial role in rotational motion, similar to how force affects translational motion
*** The axis of rotation is the fixed line about which an object rotates
*** Clockwise and anticlockwise moments are distinguished and have different signs
@endmindmap`}
      />
    </div>
  );
};

export default mindmapMomentofaForce;
