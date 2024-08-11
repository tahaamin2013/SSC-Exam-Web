"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const KinematicsPage = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const umlCode = `
  @startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
}
</style>
*[#FFD700] Kinematics
left side
++[#FF6347] Rest and Motion
+++[#FFA07A] Rest
++++_ Object does not change position
++++_ Example: A parked car
right side
+++[#FFA07A] Motion
++++_ Object changes position
++++_ Example: A running athlete
++[#FF8C00] Types of Motion
+++[#FFD700] Translatory Motion
++++ Rectilinear Motion
++++ Curvilinear Motion
++++ Random Motion
++++_ Movement in a straight or curved path
++++_ Example: Car moving on a road, football kicked
+++[#FFD700] Rotatory Motion
++++_ Rotation around a fixed axis
++++_ Example: Earth spinning, fan blades
+++[#FFD700] Vibratory Motion
++++_ Back and forth movement around a mean position
++++_ Example: Swinging, guitar strings
@endmindmap

@startmindmap
<style>
mindmapDiagram {
    .rest {
        BackgroundColor lightblue
    }
    .motion {
        BackgroundColor lightcoral
    }
    .translatory {
        BackgroundColor lightgreen
    }
    .rotatory {
        BackgroundColor lightgoldenrodyellow
    }
    .vibratory {
        BackgroundColor lightpink
    }
}
</style>
* Kinematics
** Rest and Motion <<rest>>
*** Rest
**** Object does not change position
*** Motion
**** Object changes position
** Types of Motion <<motion>>
*** Translatory Motion <<translatory>>
**** Rectilinear Motion
**** Curvilinear Motion
**** Random Motion
*** Rotatory Motion <<rotatory>>
*** Vibratory Motion <<vibratory>>
@endmindmap
`;

  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">2.1 REST AND MOTION</h1>
      <p className="mb-4">Mechanics is the study of motion. Everywhere we look, objects are moving...</p>

      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b font-semibold" rowSpan={3}>Types of Motion</td>
            <td className="py-2 px-4 border-b">Translatory Motion</td>
            <td className="py-2 px-4 border-b">Movement in a straight or curved path</td>
            <td className="py-2 px-4 border-b">Car moving, football kicked</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Rotatory Motion</td>
            <td className="py-2 px-4 border-b">Rotation around an axis</td>
            <td className="py-2 px-4 border-b">Earth spinning, fan blades</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Vibratory Motion</td>
            <td className="py-2 px-4 border-b">Back and forth movement around a mean position</td>
            <td className="py-2 px-4 border-b">Swinging, guitar strings</td>
          </tr>
        </tbody>
      </table>

      <PlantUMLDiagram code={umlCode} />

    </div>
  );
};

export default KinematicsPage;
