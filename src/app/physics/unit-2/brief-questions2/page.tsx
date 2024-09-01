import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from 'next/image'

const Page = () => {
  const q1 = `
@startmindmap
* Kinematics
** Definition
*** Study of motion
*** Does not consider causes of motion
** Focus Areas
*** Position
*** Displacement
*** Velocity
*** Acceleration
*** Time
** Excludes
*** Forces
*** Energy
@endmindmap
`;

  const q2 = `
@startmindmap
* Dynamics
** Definition
*** Deals with forces
*** Studies action of forces on motion
** Key Elements
*** Forces
*** Motion of bodies
@endmindmap
`;

  const q3 = `
@startmindmap
* Study of Motion
** Kinematics
*** Definition
**** Studies motion of bodies
**** Without reference to force and mass
** Dynamics
*** Definition
**** Deals with forces
**** Studies action of forces on motion of bodies
@endmindmap
`;

  const q4 = `
@startmindmap
* State of Rest
** Body
*** Does not change position
** Surroundings
*** Neighborhood
*** Contains various objects
** Conditions for Rest
*** Position fixed relative to surroundings
@endmindmap
`;

  const q5 = `
@startmindmap
* Motion
** Definition
*** Continuous change in position
*** Relative to surroundings
** Key Elements
*** Position
*** Time
*** Reference Frame
** Types
*** Linear
*** Rotational
@endmindmap`;

  const q6 = `
@startmindmap
* Relative Motion
** Definition
*** State of rest or motion depends on observer
** Examples
*** Passenger in moving bus
**** At rest relative to other passengers
**** In motion relative to outside observer
** Key Factors
*** Frame of reference
*** Observer&apos;sposition
@endmindmap`;

  const q7 = `
@startmindmap
* Rotatory Motion
** Definition
*** Spinning motion of a body around its axis
** Axis of Rotation
*** Line around which a body rotates
** Examples
*** Earth rotating around its geographic axis
*** Wheel spinning around its axis
*** Steering wheel turning
*** Ceiling electric fan blades spinning
@endmindmap`;

  const q8 = `
@startmindmap
* Types of Motion
** Circular Motion
*** Point of rotation is outside the body
** Rotatory Motion
*** Axis of rotation passes through the body
@endmindmap
`;

  const q9 = `
@startmindmap
* Vibratory Motion
** Definition
*** To and fro movement about mean position
*** Repeating motion between extreme positions
** Examples
*** Swing moving back and forth
*** Pendulum of a wall clock
*** See-saw motion
*** Hammer of a ringing electric bell
*** Strings of a sitar
@endmindmap
`;

  const q10 = `
@startmindmap
* Physical Quantities
** Scalar
*** Definition
**** Described by magnitude only
**** Numerical value with unit
*** Examples
**** Mass
**** Length
**** Time
**** Speed
**** Volume
**** Area
**** Energy
** Vector
*** Definition
**** Described by magnitude and direction
*** Examples
**** Velocity
**** Force
**** Displacement
**** Momentum
**** Torque
@endmindmap
`;

  const q11 = `
@startmindmap
* Vectors and Direction
** Importance
*** Vectors meaningless without direction
** Example: Locating a Place
*** Distance alone is insufficient
*** Direction is necessary
** Components
*** Magnitude (e.g., distance)
*** Direction
@endmindmap
`;
  const q12 = `
@startmindmap
* Vector Representation
** Symbolic
*** Bold letters (F, a, d)
*** Bar or arrow over symbols
** Graphical
*** Line segment with arrowhead
**** Length represents magnitude
**** Direction of line shows vector direction
@endmindmap`;
  const q13 = `
@startmindmap
* Position
** Definition
*** Location of a place or point
*** Relative to a reference point
** Reference Point
*** Called the origin
** Example
*** Home to School
**** Home (H) is origin
**** School (S) is position
**** Represented by straight line from H to S
@endmindmap`;
  const q14 = `
@startmindmap
* Distance
** Definition
*** Total length/separation of path between two points
** Characteristics
*** Scalar quantity
** Unit
*** Meter (m)
** Representation
*** Symbol: S
@endmindmap`;
  const q15 = `
@startmindmap
* Displacement
** Definition
*** Shortest path between two points
** Characteristics
*** Vector quantity
** Unit
*** Meter (m)
** Representation
*** Symbol: d
@endmindmap`;

  const q16 = `
@startmindmap
* Speed
** Definition
*** Distance covered by a moving body in unit time
** Characteristics
*** Scalar quantity
** Unit
*** SI unit: meter per second (m/s)
** Representation
*** Symbol: v
@endmindmap
`;
  const q17 = `
@startmindmap
* Average Speed
** Definition
*** Total distance covered divided by total time taken
** Formula
*** Average speed = Total distance / Total time
@endmindmap
`;
  const q18 = `
@startmindmap
* Instantaneous Speed
** Definition
*** Speed at a particular instant of time
** Example
*** Speedometer reading in a car
@endmindmap
`;
  const q19 = `
@startmindmap
* Velocity
** Definition
*** Rate of change of displacement with respect to time
** Quantity
*** Vector quantity
** Unit
*** SI unit: meter per second (m/s)
** Mathematical Form
*** Velocity = Displacement / Time
@endmindmap
`;
  const q20 = `
@startmindmap
* Uniform Velocity
** Definition
*** Equal displacement in equal time intervals
** Example
*** Car moving in straight line with constant speed
@endmindmap
`;
  const q21 = `
@startmindmap
* Variable Velocity
** Definition
*** Unequal displacements in equal time intervals
*** Or both displacement and time change
** Example
*** Car moving on curved path with uniform speed
@endmindmap
`;
  const q22 = `
@startmindmap
* Acceleration (a)
** Definition
*** Rate of change of velocity with respect to time
** Mathematical Form
*** Acceleration = Change in velocity / Time taken
** Quantity
*** Vector quantity
** Unit
*** SI unit: meter per second squared (m/s²)
@endmindmap
`;
  const q23 = `
@startmindmap
* Uniform Acceleration
** Definition
*** Velocity changes by equal amounts in equal time intervals
*** Can be increasing or decreasing
** Example
*** Ball rolling down an inclined plane
@endmindmap
`;

  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Brief Questions and Answers Physics (3 marks each)
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        <Accordion type="single" collapsible>
          {/* Question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>Q1. Define Kinematics.</AccordionTrigger>
            <AccordionContent>
              The study of motion of an object without discussing the cause of
              motion is called kinematics.
              <PlantUMLDiagram code={q1} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>Q2. Define Dynamics.</AccordionTrigger>
            <AccordionContent>
              Dynamics deals with forces and their action on the motion of
              bodies.
              <PlantUMLDiagram code={q2} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Q3. Differentiate between Kinematics and Dynamics.
            </AccordionTrigger>
            <AccordionContent>
              <strong>Kinematics:</strong> The study of motion of bodies without
              the reference of force and mass.
              <br />
              <strong>Dynamics:</strong> Deals with forces and their action on
              the motion of bodies.
              <PlantUMLDiagram code={q3} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>Q4. How would you define rest?</AccordionTrigger>
            <AccordionContent>
              If a body does not change its position with respect to
              surroundings, then it is said to be in a state of rest.
              Surroundings are the places in its neighborhood where various
              objects are present.
              <PlantUMLDiagram code={q4} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Q5. How would you define motion?
            </AccordionTrigger>
            <AccordionContent>
              If a body continuously changes its position with respect to
              surroundings, then it is said to be in a state of motion.
              <PlantUMLDiagram code={q5} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Q6. How can we say that rest and motion are relative states?
            </AccordionTrigger>
            <AccordionContent>
              The state of rest or motion of a body is relative. For example, a
              passenger sitting in a moving bus is at rest because they are not
              changing their position with respect to other passengers in the
              bus. But to an observer outside the bus, the passengers and
              objects are in motion because they are changing their positions.
              <PlantUMLDiagram code={q6} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger>Q7. Define Rotatory motion.</AccordionTrigger>
            <AccordionContent>
              The spinning motion of a body around its axis is called rotatory
              motion.
              <br />
              <strong>Examples:</strong>
              <br />
              - Motion of Earth around its geographic axis
              <br />
              - Motion of a wheel and steering wheel around its axis
              <br />
              - Motion of a ceiling electric fan
              <br />- The axis of rotation is a line around which a body
              rotates.
              <PlantUMLDiagram code={q7} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 8 */}
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Q8. Differentiate between circular motion and rotatory motion.
            </AccordionTrigger>
            <AccordionContent>
              <strong>Circular Motion:</strong> The point about which a body
              moves around is outside the body.
              <br />
              <strong>Rotatory Motion:</strong> The line around which a body
              moves about passes through the body itself.
              <PlantUMLDiagram code={q8} />
              <Image src="/Rotation-and-Revolution.gif" alt="Rotation And Revolution" width={400} height={400} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 9 */}
          <AccordionItem value="item-9">
            <AccordionTrigger>Q9. Define Vibratory motion.</AccordionTrigger>
            <AccordionContent>
              When a body moves to and fro about its mean position, it is called
              vibratory motion. The motion of the body repeats from one extreme
              position to the other.
              <br />
              <strong>Examples:</strong>
              <br />
              - Motion of a swing back and forth
              <br />
              - Motion of the pendulum of a wall clock
              <br />
              - Motion of a see-saw
              <br />
              - Motion of the hammer of a ringing electric bell
              <br />- Motion of the strings of a sitar
              <PlantUMLDiagram code={q9} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 10 */}
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Q10. What do you know about scalar and vector quantities?
            </AccordionTrigger>
            <AccordionContent>
              A physical quantity that can be completely described by its
              magnitude only is called a scalar. The magnitude of a quantity
              means its numerical value with an appropriate unit.
              <br />
              <strong>Examples of Scalars:</strong> Mass, length, time, speed,
              volume, area, energy, etc.
              <br />
              <strong>Vector:</strong> A physical quantity that can be
              completely described by its magnitude along with its direction.
              <br />
              <strong>Examples of Vectors:</strong> Velocity, force,
              displacement, momentum, torque, etc.
              <PlantUMLDiagram code={q10} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 11 */}
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Q11. How are vector quantities important to us in our daily life?
            </AccordionTrigger>
            <AccordionContent>
              It would be meaningless to describe vectors without direction. For
              example, the distance of a place from a reference point is
              insufficient to locate that place. The direction of that place
              from the reference point is also necessary to locate it.
              <PlantUMLDiagram code={q11} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 12 */}
          <AccordionItem value="item-12">
            <AccordionTrigger>
              Q12. What do you know about Vector Representation?
            </AccordionTrigger>
            <AccordionContent>
              <strong>Symbolic Representation:</strong> To represent vectors, we
              generally use bold letters like F, a, d, or a bar/arrow over their
              symbols.
              <br />
              <strong>Graphical Representation:</strong> Graphically, a vector
              can be represented by a segment with an arrowhead. The length of
              the line gives the magnitude of the vector, and the direction of
              the line gives the direction of the vector.
              <PlantUMLDiagram code={q12} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 13 */}
          <AccordionItem value="item-13">
            <AccordionTrigger>Q13. What is Position?</AccordionTrigger>
            <AccordionContent>
              The term position describes the location of a place or a point
              with respect to some reference point. This reference point is
              called the origin.
              <br />
              <strong>Example:</strong> If you want to describe the position of
              your school from your home, the position will be represented by a
              straight line from your home (H) to the school (S).
              <PlantUMLDiagram code={q13} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 14 */}
          <AccordionItem value="item-14">
            <AccordionTrigger>Q14. What is meant by distance?</AccordionTrigger>
            <AccordionContent>
              The total length/separation of a path between two points is known
              as distance between those points.
              <br />
              <strong>Quantity:</strong> It is a scalar quantity.
              <br />
              <strong>Unit:</strong> Its unit is meter (m).
              <br />
              <strong>Representation:</strong> It is represented by
              &quot;S&quot;.
              <PlantUMLDiagram code={q14} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 15 */}
          <AccordionItem value="item-15">
            <AccordionTrigger>
              Q15. What is meant by displacement?
            </AccordionTrigger>
            <AccordionContent>
              The shortest path between two points is called displacement.
              <br />
              <strong>Quantity:</strong> It is a vector quantity.
              <br />
              <strong>Unit:</strong> The unit of displacement is meter (m).
              <br />
              <strong>Representation:</strong> It is represented by
              &quot;d.&quot;
              <PlantUMLDiagram code={q15} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 16 */}
          <AccordionItem value="item-16">
            <AccordionTrigger>Q16. What is speed?</AccordionTrigger>
            <AccordionContent>
              The distance covered by a moving body in unit time is called
              speed.
              <br />
              <strong>Quantity:</strong> It is a scalar quantity.
              <br />
              <strong>Unit:</strong> Its SI unit is meter per second (m/s).
              <br />
              <strong>Representation:</strong> It is represented by
              &quot;v&quot;.
              <PlantUMLDiagram code={q16} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 17 */}
          <AccordionItem value="item-17">
            <AccordionTrigger>Q17. What is average speed?</AccordionTrigger>
            <AccordionContent>
              The average speed of a body is the total distance covered divided
              by the total time taken.
              <br />
              <strong>Formula:</strong> Average speed = Total distance / Total
              time.
              <PlantUMLDiagram code={q17} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 18 */}
          <AccordionItem value="item-18">
            <AccordionTrigger>
              Q18. What do you know about instantaneous speed?
            </AccordionTrigger>
            <AccordionContent>
              The speed of a body at any particular instant of time is called
              instantaneous speed.
              <br />
              <strong>Example:</strong> Speedometer reading in a car shows the
              instantaneous speed of the car at any particular instant.
              <PlantUMLDiagram code={q18} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 19 */}
          <AccordionItem value="item-19">
            <AccordionTrigger>Q19. Define velocity.</AccordionTrigger>
            <AccordionContent>
              The rate of change of displacement of a body with respect to time
              is called velocity.
              <br />
              <strong>Quantity:</strong> It is a vector quantity.
              <br />
              <strong>Unit:</strong> SI unit of velocity is meter per second
              (m/s).
              <br />
              <strong>Mathematical Form:</strong> Velocity = Displacement /
              Time.
              <PlantUMLDiagram code={q19} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 20 */}
          <AccordionItem value="item-20">
            <AccordionTrigger>Q20. Define uniform velocity.</AccordionTrigger>
            <AccordionContent>
              If a body covers equal displacement in equal intervals of time,
              then it is said to have uniform velocity.
              <br />
              <strong>Example:</strong> A car moving in a straight line with
              constant speed.
              <PlantUMLDiagram code={q20} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 21 */}
          <AccordionItem value="item-21">
            <AccordionTrigger>Q21. What is variable velocity?</AccordionTrigger>
            <AccordionContent>
              If a body covers unequal displacements in equal intervals of time,
              or both change with time, then the body is said to be moving with
              variable velocity.
              <br />
              <strong>Example:</strong> A car moving on a curved path with
              uniform speed.
              <PlantUMLDiagram code={q21} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 22 */}
          <AccordionItem value="item-22">
            <AccordionTrigger>Q22. Define acceleration.</AccordionTrigger>
            <AccordionContent>
              The rate of change of velocity of a body with respect to time is
              called acceleration. It is represented by &quot;a.&quot;
              <br />
              <strong>Mathematical Form:</strong> Acceleration = Change in
              velocity / Time taken.
              <br />
              <strong>Quantity:</strong> It is a vector quantity.
              <br />
              <strong>Unit:</strong> SI unit of acceleration is meter per second
              squared (m/s²).
              <PlantUMLDiagram code={q22} />
            </AccordionContent>
          </AccordionItem>

          {/* Question 23 */}
          <AccordionItem value="item-23">
            <AccordionTrigger>
              Q23. What do you know about uniform acceleration?
            </AccordionTrigger>
            <AccordionContent>
              If the velocity of a body increases or decreases by equal amounts
              in equal intervals of time, then the body is said to have uniform
              acceleration.
              <br />
              <strong>Example:</strong> Motion of a ball rolling down an
              inclined plane.
              <PlantUMLDiagram code={q23} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Page;
