import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const mindmapMomentofaForce = () => {
  return (
    <div>
      <PlantUMLDiagram
        code={`
@startmindmap
title Center of Mass and Center of Gravity

* CM & CG

** Center of Mass (CM)
*** Point about which mass is equally distributed
*** If force passes through CM, no rotation
*** Entire mass concentrated at one point

** Center of Gravity (CG)
*** Point where entire weight (force of gravity) acts
*** Same as CM for small objects
*** Slightly different for tall objects

left side
** Differences between CM and CG
*** CM and CG are the same for small objects
*** CM and CG are slightly different for tall objects
*** CM/CG location depends on object shape and symmetry
*** CM/CG may not always lie inside mass distribution
*** CM/CG can change with object orientation

** Example Object Shapes
*** Homogeneous cube/sphere: CM/CG at geometric center
*** Right circular cylinder/cone: CM/CG on axis of symmetry
*** Uniform wooden rod: CM/CG at mid-point
*** Irregular objects: CG determined by hanging object
@endmindmap`}
      />
    </div>
  );
};

export default mindmapMomentofaForce;
