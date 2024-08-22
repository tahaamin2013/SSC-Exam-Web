import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapofStability = () => {
  return (
    <div className="p-5 space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STABILITY</h1>
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

* Stability
** Definition
*** Ability to return to original position
*** After disturbing force is removed

** Characteristics
*** Stable objects
**** Difficult to topple over
*** Unstable objects
**** Easy to topple over

** Key Factor
*** Position of Center of Gravity (CG) or Center of Mass (CM)
**** Affects ease of toppling

** Importance in Design
*** Tall vehicles
**** Tendency to overturn when cornering
*** Racing cars
*** Reading lamps
*** Drinking glasses

@endmindmap`}
        />
      </section>
      
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STABLE EQUILIBRIUM</h1>
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

* Stable Equilibrium
** Definition
*** Body returns to original position
*** After slight tilt and release

** Characteristics
*** Centre of mass rises when displaced
*** Weight creates restoring moment
**** About the point of contact
**** Reduces displacement

** Example: Book on table
*** Tilt book slightly about one edge
*** Lift from opposite side
*** Returns to previous position when released

** Key Points
*** Body regains original position
*** Resistant to displacement
*** Stable state of equilibrium

@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">UNSTABLE EQUILIBRIUM</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
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
* Unstable Equilibrium
** Definition
*** Body moves further away when slightly displaced
*** Centre of mass falls when displaced
** Characteristics
*** Moment increases displacement
** Example
*** Pencil standing vertically on its tip
**** Topples over when released
** Key Point
*** Opposite of stable equilibrium
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">NEUTRAL EQUILIBRIUM</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
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
* Equilibrium States
** Neutral Equilibrium
*** Definition
**** Body stays in new position when displaced
**** Center of mass doesn't rise or fall
*** Example
**** Ball on horizontal surface
** Stable Equilibrium
*** Characteristics
**** Object returns to original position when disturbed
**** Center of mass below support point
*** Improving Stability
**** Lower center of mass
**** Increase area of support
**** Combination of both
*** Applications
**** Self-righting toys
***** Balancing birds
***** Wobbling dolls
***** Weighted-bottom cups
** Egg-shaped Toy Example
*** Tilting mechanism
**** Weight creates moment
**** Restoring force brings it back to vertical
*** Vertical position
**** Weight directly above pivot
**** No moment, toy at rest
@endmindmap`}
        />
      </section>
      
    </div>
  );
};

export default MindmapofStability;
