"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);
    const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  .root {
    BackgroundColor lightblue
    FontColor darkblue
    FontSize 16
    FontStyle bold
  }
  .subidea {
    BackgroundColor lightyellow
    FontColor darkgreen
    FontSize 14
  }
  .importance {
    BackgroundColor lightpink
    FontColor darkred
  }
  .elements {
    BackgroundColor lightgreen
    FontColor darkgreen
  }
  .software {
    BackgroundColor lavender
    FontColor purple
  }
}
</style>

* Solution Design Methods
** Flowcharts
*** Definition
**** Diagrammatic representation of an algorithm
**** Describes operations to solve a problem
*** Importance <<importance>>
**** Illustrates sequence of operations
**** Eases analysis and problem-solving
**** Facilitates writing computer programs
**** Aids in communicating problem-solving methods
*** Elements <<elements>>
**** Start/End (Oval)
**** Input/Output (Parallelogram)
**** Processing (Rectangle)
**** Decision (Diamond)
*** Steps for drawing
**** Start of flowchart
**** Input to flowchart
**** Type of processing required
**** Decision to be taken
**** Output of operation
**** End of flowchart
*** Software Tools <<software>>
**** Microsoft Visio
**** LARP

left side

** Concept Maps
*** Definition
**** Graphical tool representing concepts and relationships
*** Key Features <<elements>>
**** Concepts as boxes or circles
**** Relationships shown with lines or arrows
**** Lines labeled with linking words/phrases
**** Represents connections between concepts
*** Usage
**** Knowledge representation
**** Idea organization
*** Structure
**** Non-linear
**** Interconnected ideas
*** Software Tools <<software>>
**** CmapTools
**** Mind Manager
@endmindmap
`;
  
    return (
        <div>
            <div className="container mx-auto p-4">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2 text-left">Aspect</th>
                        <th className="border p-2 text-left">Flowcharts</th>
                        <th className="border p-2 text-left">Concept Maps</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2 font-semibold">Purpose</td>
                        <td className="border p-2">Represent algorithms and processes</td>
                        <td className="border p-2">Represent concepts and their relationships</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-semibold">Elements</td>
                        <td className="border p-2">Shapes for start/end, input/output, processing, decision</td>
                        <td className="border p-2">Boxes or circles for concepts, lines or arrows for relationships</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-semibold">Structure</td>
                        <td className="border p-2">Sequential, with clear start and end points</td>
                        <td className="border p-2">Non-linear, interconnected ideas</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-semibold">Usage</td>
                        <td className="border p-2">Problem-solving, algorithm design</td>
                        <td className="border p-2">Knowledge representation, idea organization</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-semibold">Software Tools</td>
                        <td className="border p-2">Microsoft Visio, LARP</td>
                        <td className="border p-2">CmapTools, Mind Manager</td>
                    </tr>
                </tbody>
            </table>
                <PlantUMLDiagram code={umlCode} />
            </div>

        </div>
    );
};

export default Page;
