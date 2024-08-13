'use client'

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const QuestionDashboard = () => {
  const q1 = `
    @startmindmap
* Translatory Motion
** Definition
*** Movement along a line without rotation
*** Line can be straight or curved
** Examples
*** Car in straight line
*** Electron around nucleus
*** Gas molecules
*** Airplane moving straight
** Types
*** Linear Motion
**** Definition: Motion in a straight line
**** Examples
***** Freely falling bodies
***** Car on straight road
*** Circular Motion
**** Definition: Motion in a circle
**** Examples
***** Stone whirled on thread
***** Vehicle on circular track
***** Earth around sun
*** Random Motion
**** Definition: Disordered or irregular motion
**** Examples
***** Flight of insects and birds
***** Brownian motion of molecules
***** Dust or smoke particles in air
@endmindmap`;

  const q2 = `
@startmindmap
* Distance-Time Graph
** Axes
*** Horizontal: Time
*** Vertical: Distance
** Object States
*** At Rest
**** Zero distance moved over time
**** Represented by horizontal line parallel to time axis
**** Indicates zero speed
*** Constant Speed
**** Equal distances in equal time intervals
**** Represented by straight line with constant slope
**** Slope indicates speed
*** Variable Speed
**** Unequal distances in equal time intervals
**** Represented by curved line
**** Instantaneous speed: slope of tangent at a point
@endmindmap`;
  const data = [
    { time: 0, atRest: 0, constantSpeed: 0, variableSpeed: 0 },
    { time: 1, atRest: 0, constantSpeed: 2, variableSpeed: 1 },
    { time: 2, atRest: 0, constantSpeed: 4, variableSpeed: 3 },
    { time: 3, atRest: 0, constantSpeed: 6, variableSpeed: 6 },
    { time: 4, atRest: 0, constantSpeed: 8, variableSpeed: 10 },
    { time: 5, atRest: 0, constantSpeed: 10, variableSpeed: 15 },
  ];

  const data2 = [
    { time: 0, constantSpeed: 50, accelerating: 0, decelerating: 100 },
    { time: 1, constantSpeed: 50, accelerating: 20, decelerating: 80 },
    { time: 2, constantSpeed: 50, accelerating: 40, decelerating: 60 },
    { time: 3, constantSpeed: 50, accelerating: 60, decelerating: 40 },
    { time: 4, constantSpeed: 50, accelerating: 80, decelerating: 20 },
    { time: 5, constantSpeed: 50, accelerating: 100, decelerating: 0 },
  ];

  const q3 = `
  @startmindmap
* Speed-Time Graph
** Axes
*** x-axis: Time
*** y-axis: Speed
** Constant Speed
*** Horizontal line
*** Parallel to time axis
** Uniformly Changing Speed
*** Straight line with slope
*** Slope represents acceleration
** Distance Traveled
*** Area under the graph
*** Calculation methods
**** Rectangle for constant speed
**** Trapezium for changing speed
@endmindmap`;

const q4 = `
@startmindmap
* Equations of Motion
** Important Points
*** Motion along straight line
*** Magnitudes considered
*** Uniform acceleration
** Case Study
*** Initial velocity: v0
*** Final velocity: v
*** Acceleration: a
*** Time: t
*** Distance: S
** Equations
*** First Equation
**** v = v0 + at
**** Derived from slope of speed-time graph
*** Second Equation
**** S = v0t + (1/2)at^2
**** Area under speed-time graph
*** Third Equation
**** S = (v^2 - v0^2) / (2a)
**** Alternative representation of distance
** Speed-Time Graph
*** Line AB represents motion
*** Slope of AB is acceleration
*** Area under AB is distance traveled
@endmindmap`

const q5 = `
@startmindmap
* Equations of Motion
** Assumptions
*** Straight line motion
*** Uniform acceleration
*** Magnitudes considered
** Variables
*** v0: Initial velocity
*** v: Final velocity
*** a: Acceleration
*** t: Time
*** S: Distance
** Equations
*** First: v = v0 + at
*** Second: S = v0t + (1/2)at^2
*** Third: S = (v^2 - v0^2) / (2a)
** Speed-Time Graph
*** Line AB: Motion representation
*** Slope of AB: Acceleration
*** Area under AB: Distance traveled
@endmindmap`
  // Constants for the motion
  const v0 = 0; // Initial velocity (m/s)
  const a = 2; // Acceleration (m/s^2)
  const t = 10; // Total time (s)

  // Generate data points
  const data3 = Array.from({ length: t + 1 }, (_, i) => {
    const time = i;
    const velocity = v0 + a * time;
    return { time, velocity };
  });

  // Calculate final velocity
  const v = v0 + a * t;

  return (
    <section
      id="Questions"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Problem Solving Questions
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        <Accordion type="single" collapsible>
          {/* Question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Q.No.1 Define Translatory motion and its types.
            </AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Ans:</strong> Translatory motion is a type of motion in
                which a body moves along a line without any rotation. The line
                may be straight or curved.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>Motion of a car in a straight line</li>
                <li>Motion of an electron around the nucleus</li>
                <li>Motion of gas molecules</li>
                <li>An airplane moving straight is in translatory motion</li>
              </ul>
              <p>
                <strong>Types of Translatory Motion:</strong>
              </p>
              <p>There are three types of translatory motion:</p>
              <ol>
                <li>
                  <strong>Linear motion:</strong> If the motion of a body is in
                  a straight line, it is known as linear motion.
                </li>
                <li>
                  <strong>Circular motion:</strong> If a body moves in a circle,
                  it is called circular motion.
                </li>
                <li>
                  <strong>Random motion:</strong> The disorder or irregular
                  motion of an object is called random motion.
                </li>
              </ol>
              <p>
                <strong>Examples of Linear Motion:</strong>
              </p>
              <ul>
                <li>The motion of freely falling bodies</li>
                <li>A car moving along a straight road</li>
              </ul>
              <p>
                <strong>Examples of Circular Motion:</strong>
              </p>
              <ul>
                <li>
                  A stone attached to a thread, when whirled, it moves along a
                  circular path.
                </li>
                <li>A bicycle or car moving along a circular track</li>
                <li>Earth moving around the sun in the solar system</li>
              </ul>
              <p>
                <strong>Examples of Random Motion:</strong>
              </p>
              <ul>
                <li>The flight of an insect and birds</li>
                <li>Brownian motion of gas or liquid molecules</li>
                <li>Motion of dust or smoke particles in the air</li>
              </ul>
              <PlantUMLDiagram code={q1} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Q.No.2 Explain Distance-Time Graph.
            </AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Ans:</strong> In a distance-time graph, time is plotted
                along the horizontal axis while distance is plotted along the
                vertical axis.
              </p>
              <p>
                <strong>Object at Rest:</strong>
              </p>
              <p>
                If the distance moved by the object with time is zero, the
                object is at rest. This is represented by a horizontal line
                parallel to the time axis on the distance-time graph, indicating
                zero speed.
              </p>
              <p>
                <strong>Object Moving with Constant Speed:</strong>
              </p>
              <p>
                The speed is constant if the object covers equal distances in
                equal intervals of time. On the distance-time graph, this is
                shown by a straight line with a constant slope, where the slope
                represents the speed of the object.
              </p>
              <p>
                <strong>Object Moving with Variable Speed:</strong>
              </p>
              <p>
                If the object does not cover equal distances in equal intervals
                of time, its speed is not constant. On the distance-time graph,
                this is shown by a curved line. The slope of the curve at any
                point represents the instantaneous speed, which can be found by
                calculating the slope of the tangent to the curve at that point.
              </p>
              <PlantUMLDiagram code={q2} />
              <LineChart
                width={600}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time">
                  <Label value="Time" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis>
                  <Label value="Distance" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="atRest"
                  stroke="#8884d8"
                  name="At Rest"
                />
                <Line
                  type="monotone"
                  dataKey="constantSpeed"
                  stroke="#82ca9d"
                  name="Constant Speed"
                />
                <Line
                  type="monotone"
                  dataKey="variableSpeed"
                  stroke="#ffc658"
                  name="Variable Speed"
                />
              </LineChart>
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Q.No.3 Explain Speed-Time Graph.
            </AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Ans:</strong> In a speed-time graph, time is plotted
                along the x-axis and speed is plotted along the y-axis.
              </p>
              <p>
                <strong>Object Moving with Constant Speed:</strong>
              </p>
              <p>
                If the speed of the object is constant over time, the speed-time
                graph will be a horizontal line parallel to the time axis. This
                indicates that the object is moving with constant speed.
              </p>
              <p>
                <strong>
                  Object Moving with Uniformly Changing Speed (Uniform
                  Acceleration):
                </strong>
              </p>
              <p>
                If the speed of the object changes uniformly over time, the
                speed-time graph will be a straight line with a slope. The slope
                of this line represents the acceleration of the object.
              </p>
              <p>
                <strong>Distance Traveled by a Moving Object:</strong>
              </p>
              <p>
                The area under the speed-time graph represents the distance
                traveled by the object. For uniform motion, the area can be
                calculated using geometric formulas based on the shape of the
                graph. For example, the area of a rectangle represents distance
                traveled at constant speed, and the area of a trapezium
                represents distance traveled with changing speed.
              </p>
              <PlantUMLDiagram code={q3} />

              <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Speed-Time Graph</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Speed', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="constantSpeed" stroke="#8884d8" name="Constant Speed" />
          <Line type="linear" dataKey="accelerating" stroke="#82ca9d" name="Accelerating" />
          <Line type="linear" dataKey="decelerating" stroke="#ffc658" name="Decelerating" />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm">
        <p><strong>Constant Speed:</strong> The blue line represents an object moving at a constant speed of 50 units.</p>
        <p><strong>Accelerating:</strong> The green line shows an object starting at rest and uniformly increasing its speed.</p>
        <p><strong>Decelerating:</strong> The yellow line illustrates an object starting at high speed and uniformly decreasing to rest.</p>
        <p><strong>Note:</strong> The area under each line represents the distance traveled by the object in that time period.</p>
      </div>
    </div>
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Q.No.4 Derive the equations of motion for uniformly accelerated
              rectilinear motion.
            </AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Ans:</strong> There are three basic equations of motion
                for bodies moving with uniform acceleration. These equations
                relate initial velocity, final velocity, acceleration, time, and
                distance covered by a moving body.
              </p>
              <p>
                <strong>Important Points in Derivation:</strong>
              </p>
              <ul>
                <li>The motion is assumed to be along a straight line.</li>
                <li>
                  Only the magnitudes of displacements, velocities, and
                  acceleration are considered.
                </li>
                <li>Acceleration is assumed to be uniform.</li>
              </ul>
              <p>
                <strong>Case Study:</strong>
              </p>
              <p>
                Consider a body moving with an initial velocity{" "}
                <em>
                  v<sub>0</sub>
                </em>{" "}
                in a straight line with uniform acceleration <em>a</em>. Its
                velocity becomes <em>v</em> after time <em>t</em>. The motion of
                the body is described by the speed-time graph as shown by line
                AB. The slope of line AB represents acceleration <em>a</em>. The
                total distance covered by the body is shown by the shaded area
                under the line AB. The equations of motion can be derived from
                this graph.
              </p>
              <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data3}
          margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time">
            <Label value="Time (s)" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Velocity (m/s)" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          <ReferenceLine x={0} stroke="#666" label={{ value: "O", position: "insideTopLeft" }} />
          <ReferenceLine x={t} stroke="#666" label={{ value: "D", position: "insideTopRight" }} />
          <ReferenceLine y={v0} stroke="#666" label={{ value: "A", position: "insideLeft" }} />
          <ReferenceLine y={v} stroke="#666" label={{ value: "B", position: "insideRight" }} />
          <Line type="linear" dataKey="velocity" stroke="#8884d8" name="v = v0 + at" />
        </LineChart>
      </ResponsiveContainer>
              <p>
                <strong>First Equation of Motion:</strong>
              </p>
              <p>The slope of line AB gives:</p>
              <p>
                <em>
                  a = (v - v<sub>0</sub>) / t
                </em>
              </p>
              <p>Rearranging, we get:</p>
              <p>
                <em>
                  v = v<sub>0</sub> + at
                </em>
              </p>

              <p>
                <strong>Second Equation of Motion:</strong>
              </p>
              <p>
                The total distance <em>S</em> traveled by the body is equal to
                the area <em>OABD</em> under the graph, which includes the area
                of the rectangle and the triangle:
              </p>
              <p>
                <em>
                  S = v<sub>0</sub>t + (1/2)at<sup>2</sup>
                </em>
              </p>

              <p>
                <strong>Third Equation of Motion:</strong>
              </p>
              <p>
                The total distance <em>S</em> traveled by the body can also be
                represented by:
              </p>
              <p>
                <em>
                  S = (v<sup>2</sup> - v<sub>0</sub>
                  <sup>2</sup>) / (2a)
                </em>
              </p>
              <PlantUMLDiagram code={q4} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default QuestionDashboard;
