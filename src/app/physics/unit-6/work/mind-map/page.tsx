import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Work And Energy</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Work and Energy
left side
** Work
*** Work in physics means using energy to make something move!
*** :Examples
**** Pushing a Shopping Cart: Using force to move the cart.
**** Lifting a Book: Using energy to lift the book upward.
**** Riding a Bicycle: Pedaling to move the bike forward.

** Energy
*** Energy is what makes things move, change, or happen. It&apos;sthe power that keeps everything going.
*** :Examples
**** Food Gives You Energy: Powers your body to run, jump, and play.
**** Sunlight for Plants: Energy that helps plants grow.
**** Batteries in a Toy: Energy that makes the toy work.

right side
** Definition of Work
*** Scientific meaning
**** Force applied
**** Distance covered
*** Examples
**** Man carrying physics book (moving)
**** Man holding book on head (not moving)
** Relation to Energy
*** Energy used when work is done
*** Energy explains changes during work
** Importance in Physics
*** Fundamental concept
*** Explains physical changes
** Key Concepts
*** Work
*** Energy
*** Power
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">WORK</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Work
** Definition
*** Force displacing a body in its direction
** Mathematical Formula
*** W = F x d
**** W: Work done
**** F: Force
**** d: Displacement
** Properties
*** Scalar quantity
*** SI unit: Joule (J)
**** 1J = 1N x 1m
** Vector Representation
*** Force not always in direction of motion
*** Resolution into rectangular components
** Example Calculation
*** Given: F = 100 N, d = 200 m
*** Solution: W = 100N x 200m = 20,000 J = 20 kJ
** Science Tidbits
*** Vector representation in angled forces
** Can You Tell?
*** Man pushing stationary truck
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
