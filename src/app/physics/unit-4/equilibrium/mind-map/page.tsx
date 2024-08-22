import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const mindmapMomentofaForce = () => {
  return (
    <div>
      <PlantUMLDiagram
        code={`
@startmindmap
title Equilibrium

* Equilibrium
** Net force and net torque on object are zero

** Condition of Equilibrium
*** First Condition
**** Sum of forces is zero
*** Second Condition 
**** Sum of torques is zero

** Principle of Moments
*** Sum of clockwise moments = Sum of anti-clockwise moments
*** Perpendicular distance from axis of rotation is important
*** Anti-clockwise torques are positive, clockwise torques are negative

** Types of Equilibrium
*** Static Equilibrium
**** Body at rest under forces and torques
*** Dynamic Equilibrium
**** Body moving at uniform velocity under forces
***** Dynamic Translational Equilibrium
****** Uniform linear velocity
***** Dynamic Rotational Equilibrium
****** Uniform rotation
@endmindmap`}
      />
    </div>
  );
};

export default mindmapMomentofaForce;
