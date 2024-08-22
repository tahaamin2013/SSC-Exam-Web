import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const mindmapMomentofaForce = () => {
  return (
    <div className="p-5 space-y-10">
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

      <section>
        <h1 className="text-4xl font-bold text-blue-500">Equilibrium</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor darkblue
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightgreen
    }
    :depth(2) {
      BackgroundColor lightyellow
    }
    :depth(3) {
      BackgroundColor lightpink
    }
}
</style>

* Equilibrium
** Net Force = 0
*** Object at rest
*** Object moving with uniform velocity in straight line
** Net Torque = 0
*** Object not rotating
*** Object rotating with uniform velocity
** Forces
*** Produce change in translational motion
** Moment of Force (Torque)
*** Produces change in rotational motion
** Definition
*** State where all individual forces and moments are balanced
*** Net force = 0
*** Net torque = 0

@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          CONDITION OF EQUILIBRIUM
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor darkblue
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightgreen
    }
    :depth(2) {
      BackgroundColor lightyellow
    }
    :depth(3) {
      BackgroundColor lightpink
    }
    :depth(4) {
      BackgroundColor lightsalmon
    }
}
</style>

* Conditions of Equilibrium
** First Condition
*** Vector sum of all forces = 0
*** F₁ + F₂ + F₃ + .... + Fₙ = 0
*** Force polygon must close
*** Example:
**** Four forces with vector sum = 0
**** Object at rest or moving with uniform velocity

** Second Condition
*** Vector sum of all torques = 0
*** τ₁ + τ₂ + τ₃ + .... + τₙ = 0

** Complete Equilibrium
*** Both conditions must be satisfied

@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        PRINCIPLE OF MOMENTS
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor darkblue
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightgreen
    }
    :depth(2) {
      BackgroundColor lightyellow
    }
    :depth(3) {
      BackgroundColor lightpink
    }
    :depth(4) {
      BackgroundColor lightsalmon
    }
}
</style>

* Principle of Moments
** Definition
*** Sum of clockwise moments = Sum of anti-clockwise moments
*** About the same pivot

** Key Factors
*** Perpendicular distance from axis of rotation
*** Convention: Anticlockwise (+), Clockwise (-)
*** Sum of all torques = 0

** Balancing Example
*** Uniform meter stick
*** 4 N at 0.1 m = 2 N at 0.4 m from pivot
*** Can balance 3+ torques around a pivot

** Seesaw Balance Example
*** Given
**** Kamil: 250 N at 0.6 m (anticlockwise)
**** Bilal: 200 N at unknown distance (clockwise)

*** Solution
**** d₁ × W₁ = d₂ × W₂
**** d₂ = (d₁ × W₁) / W₂ = 0.75 m

*** Insight
**** Less weight needs greater moment arm for balance

@endmindmap`}
        />
      </section>

      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        TYPES OF EQUILIBRIUM
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor darkblue
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightgreen
    }
    :depth(2) {
      BackgroundColor lightyellow
    }
    :depth(3) {
      BackgroundColor lightpink
    }
}
</style>

* Types of Equilibrium
** Static Equilibrium
*** Body at rest
*** Several forces and torques acting
*** Example: Book resting on table
**** Weight balanced by normal reaction force

** Dynamic Equilibrium
*** Body moving at uniform velocity
*** Two subtypes:

**** Dynamic Translational Equilibrium
***** Body moving with uniform linear velocity
***** Example: Paratrooper falling at constant velocity

**** Dynamic Rotational Equilibrium
***** Body moving with uniform rotation
***** Example: Ceiling fan rotating at unchanging speed

@endmindmap`}
        />
      </section>
    </div>
  );
};

export default mindmapMomentofaForce;
