"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import {
  FaCircle,
  FaArrowsAlt,
  FaChartLine,
  FaRocket,
  FaCog,
  FaQuestionCircle,
  FaRuler,
  FaTachometerAlt,
  FaVectorSquare,
  FaEquals,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

type DataPoint = {
  time: number;
  distance: number;
};

const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  for (let i = 0; i <= 10; i++) {
    data.push({
      time: i,
      distance: i * i * 0.5,
    });
  }
  return data;
};

const Page = () => {
  const data = generateData();
  const [progress, setProgress] = useState(0);

  const handleAccordionChange = (value: string) => {
    const totalItems = 13;
    const completedItems = value === "" ? 0 : parseInt(value.split("-")[1]);
    setProgress((completedItems / totalItems) * 100);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <header className="bg-indigo-600 text-white py-6 px-8">
          <h1 className="font-bold text-3xl text-center">
            Physics in Motion: Interactive Exercise Set
          </h1>
          <p className="text-center mt-2 text-indigo-200">
            Explore key concepts through Q&A
          </p>
          <div className="mt-4 bg-indigo-700 rounded-full h-2">
            <motion.div
              className="bg-indigo-300 h-2 rounded-full"
              style={{ width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </header>

        <div className="p-8">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            onValueChange={handleAccordionChange}
          >
            <AccordionItem
              value="item-1"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaCircle className="mr-2" />
                  1. Explain translatory motion and give examples
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p className="mb-2">
                  Translatory motion is when a body moves in such a way that
                  every point of the body travels the same distance in the same
                  time. It is a type of motion where all parts of the object
                  move in the same direction.
                </p>
                <p className="font-semibold mb-1">
                  Examples of translatory motion:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Linear motion (e.g., a car moving in a straight line)</li>
                  <li>Curvilinear motion (e.g., a wheel rotating)</li>
                  <li className="ml-5">Circular motion</li>
                  <li>Random motion (e.g., a butterfly flying)</li>
                </ul>
                <PlantUMLDiagram
                  code={`
                                    @startmindmap
* Translatory Motion
** Definition
*** Every point moves same distance
*** Same direction
*** Same time
** Examples
*** Linear motion
*** Curvilinear motion
**** Circular motion
*** Random motion
@endmindmap`}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaArrowsAlt className="mr-2" />
                  2. Differentiate between various types of motion
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p className="mb-2">(i) Rest and Motion:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>
                    Rest: A body is at rest if it does not change its position
                    with respect to its surroundings.
                  </li>
                  <li>
                    Motion: A body is in motion if it continuously changes its
                    position with respect to its surroundings.
                  </li>
                </ul>
                <p className="mb-2">
                  (ii) Circular Motion and Rotatory Motion:
                </p>
                <ul className="list-disc list-inside mb-2">
                  <li>
                    Circular Motion: Motion of an object along a circular path
                    (e.g., the motion of earth around the sun).
                  </li>
                  <li>
                    Rotatory Motion: Spinning motion of a body about its axis
                    (e.g., the motion of a wheel).
                  </li>
                </ul>
                <p className="mb-2">(iii) Distance and Displacement:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>
                    Distance: The total length covered between two points. It is
                    a scalar quantity.
                  </li>
                  <li>
                    Displacement: The shortest distance between two points,
                    directed from the initial to the final point. It is a vector
                    quantity.
                  </li>
                </ul>
                <p className="mb-2">(iv) Speed and Velocity:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>
                    Speed: The distance covered in unit time. It is a scalar
                    quantity.
                  </li>
                  <li>
                    Velocity: The rate of displacement of a body with respect to
                    time. It is a vector quantity.
                  </li>
                </ul>
                <p className="mb-2">(v) Scalars and Vectors:</p>
                <ul className="list-disc list-inside">
                  <li>
                    Scalar: Physical quantities described only by magnitude
                    (e.g., speed, distance).
                  </li>
                  <li>
                    Vector: Physical quantities described by both magnitude and
                    direction (e.g., force, velocity).
                  </li>
                </ul>
                <PlantUMLDiagram
                  code={`
                                    @startmindmap
* Types of Motion
** Rest vs Motion
*** Rest: No position change
*** Motion: Position changes
** Circular vs Rotatory
*** Circular: Along circular path
*** Rotatory: Spinning about axis
** Distance vs Displacement
*** Distance: Total length (scalar)
*** Displacement: Shortest path (vector)
** Speed vs Velocity
*** Speed: Distance/time (scalar)
*** Velocity: Displacement/time (vector)
** Scalars vs Vectors
*** Scalars: Magnitude only
*** Vectors: Magnitude and direction
@endmindmap`}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaChartLine className="mr-2" />
                  3. Define speed, velocity, and acceleration
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p className="mb-2">
                  <strong>Speed:</strong> The distance covered by an object in
                  unit time. Formula: Speed = Distance / Time
                </p>
                <p className="mb-2">
                  <strong>Velocity:</strong> The rate of displacement of a body
                  with respect to time. Formula: Velocity = Displacement / Time
                </p>
                <p>
                  <strong>Acceleration:</strong> The rate of change of velocity
                  of a body. Formula: Acceleration = Change in Velocity / Time
                </p>
                <PlantUMLDiagram
                  code={`
                                    @startmindmap
* Motion Concepts
** Speed
*** Distance / Time
*** Scalar quantity
** Velocity
*** Displacement / Time
*** Vector quantity
** Acceleration
*** Change in Velocity / Time
*** Vector quantity
@endmindmap`}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaCog className="mr-2" />
                  4. Can a body moving at a constant speed have acceleration?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  Yes, a body moving at a constant speed can have acceleration
                  if it changes direction. For instance, a body moving in a
                  circular path at constant speed is accelerating due to the
                  change in direction.
                </p>
                <PlantUMLDiagram
                  code={`
 @startmindmap
* Constant Speed with Acceleration
** Yes, possible
*** When direction changes
**** Example: Circular motion
*** Speed remains constant
*** Velocity vector changes
**** Due to direction change
*** Results in centripetal acceleration
@endmindmap`}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaQuestionCircle className="mr-2" />
                  5. How do riders in a Ferris wheel possess translatory motion
                  but not circular motion?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  Riders on a Ferris wheel are actually in circular motion
                  relative to the wheel, but if you consider their motion
                  relative to a fixed point outside the wheel, they also exhibit
                  translatory motion as they move up and down.
                </p>
                <PlantUMLDiagram
                  code={`
@startmindmap
* Ferris Wheel Motion
** Relative to wheel
*** Circular motion
** Relative to ground
*** Translatory motion
**** Up and down movement
** Combination of motions
*** Circular + Vertical displacement
@endmindmap`}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaRocket className="mr-2" />
                  6. Sketch a distance-time graph for a body starting from rest
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p className="mb-4">
                  The distance-time graph for a body starting from rest is a
                  straight line passing through the origin, showing a linear
                  relationship between distance and time. The slope of this line
                  represents the speed of the body. Formula: Speed = Distance /
                  Time.
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="time"
                      label={{ value: "Time (s)", position: "bottom" }}
                    />
                    <YAxis
                      label={{
                        value: "Distance (m)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="distance"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                  <PlantUMLDiagram
                    code={`
@startmindmap
* Distance-Time Graph
** Starting from rest
** Characteristics
*** Straight line
*** Passes through origin
*** Positive slope
** Slope
*** Represents speed
*** Speed = Distance / Time
@endmindmap`}
                  />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaChartLine className="mr-2" />
                  7. What would be the shape of a speed-time graph of a body
                  moving with variable speed?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  The speed-time graph for a body moving with variable speed is
                  typically zigzag or curved, reflecting the changes in speed
                  over time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaTachometerAlt className="mr-2" />
                  8. What can be obtained from the speed-time graph of a body?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <ul className="list-disc list-inside">
                  <li>Initial speed</li>
                  <li>Final speed</li>
                  <li>Distance covered in time t</li>
                  <li>Acceleration of motion</li>
                </ul>
                <p className="mt-2">
                  All of the above can be obtained from the speed-time graph.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaVectorSquare className="mr-2" />
                  9. How can vector quantities be represented graphically?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  Vector quantities can be represented graphically by drawing a
                  straight line with an arrowhead at one end. The length of the
                  line indicates the magnitude, and the direction of the
                  arrowhead indicates the direction of the vector.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaEquals className="mr-2" />
                  10. Why vector quantities cannot be added and subtracted like
                  scalar quantities?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  Vectors cannot be added or subtracted like scalar quantities
                  because they have both magnitude and direction. The addition
                  or subtraction of vectors involves combining both these
                  components, requiring vector-specific methods such as the
                  parallelogram rule or triangle rule.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaChalkboardTeacher className="mr-2" />
                  11. How are vector quantities important to us in our daily
                  life?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  Vector quantities are crucial in daily life for describing
                  physical phenomena accurately. For instance:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Directions are essential in navigation and GPS systems
                  </li>
                  <li>
                    Forces must be represented as vectors to understand their
                    effects on objects properly
                  </li>
                  <li>
                    Wind speed and direction are important in weather
                    forecasting
                  </li>
                  <li>Velocity is crucial in sports and transportation</li>
                  <li>
                    Electric and magnetic fields are vector quantities important
                    in electronics and power systems
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-12"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaRuler className="mr-2" />
                  12. Derive equations of motion for uniformly accelerated
                  rectilinear motion
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  The three equations of motion for uniformly accelerated
                  rectilinear motion are:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>v = u + at</li>
                  <li>s = ut + ½at²</li>
                  <li>v² = u² + 2as</li>
                </ol>
                <p className="mt-2">Where:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>v = final velocity</li>
                  <li>u = initial velocity</li>
                  <li>a = acceleration</li>
                  <li>t = time</li>
                  <li>s = displacement</li>
                </ul>
                <p className="mt-2">
                  These equations are derived using calculus, starting with the
                  definition of acceleration as the rate of change of velocity
                  with respect to time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-13"
              className="border border-indigo-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="flex items-center font-semibold text-indigo-700">
                  <FaBook className="mr-2" />
                  13. Sketch a velocity-time graph and calculate total distance
                  covered
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white">
                <p>
                  A velocity-time graph for uniformly accelerated motion is a
                  straight line with a positive slope. The total distance
                  traveled is the area under the velocity-time graph.
                </p>
                <p className="mt-2">
                  For a trapezoid-shaped graph (common in acceleration and
                  deceleration scenarios), the area can be calculated using the
                  formula:
                </p>
                <p className="mt-2 font-semibold">
                  Area = ½ * (Sum of parallel sides) * Height
                </p>
                <p className="mt-2">In terms of motion:</p>
                <p className="mt-2 font-semibold">
                  Distance = ½ * (Initial velocity + Final velocity) * Time
                </p>
                <p className="mt-2">
                  This formula gives the total distance traveled during the time
                  interval represented by the graph.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Page;
