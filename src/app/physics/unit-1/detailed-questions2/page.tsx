import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

interface QuestionAnswer {
  question: string;
  answer: string;
  uml?: string; // Optional
  subQuestions?: Array<{
    question: string;
    answer: string;
  }>; // Optional
}

const questionsAndAnswers: QuestionAnswer[] = [
  {
    question: "Define the branches of Physics.",
    answer: `
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Mechanics:</strong> Study of motion of objects, its causes and effects.</li>
            <li><strong>Heat:</strong> Deals with nature, modes of transfer, and effects of heat.</li>
            <li><strong>Sound:</strong> Concerns audible sound waves, their production, properties, and applications.</li>
            <li><strong>Light:</strong> Focuses on properties of light, optical instruments, and their use.</li>
            <li><strong>Electricity and Magnetism:</strong> Study of charges, their effects, and relationship with magnetism.</li>
            <li><strong>Atomic Physics:</strong> Study of the structure and properties of atoms.</li>
            <li><strong>Nuclear Physics:</strong> Deals with properties and behavior of atomic nuclei.</li>
            <li><strong>Plasma Physics:</strong> Study of the fourth state of matter, ionized gases.</li>
            <li><strong>Geophysics:</strong> Study of Earth&apos;sinternal structure.</li>
        </ul>
        `,
    uml: `
        @startmindmap
* Define the branches of Physics
** Mechanics
   *** Study of motion of objects
   *** Causes and effects
** Heat
   *** Nature of heat
   *** Modes of transfer
   *** Effects of heat
** Sound
   *** Audible sound waves
   *** Production
   *** Properties
   *** Applications
** Light
   *** Properties of light
   *** Optical instruments
   *** Use
** Electricity and Magnetism
   *** Charges
   *** Effects
   *** Relationship with magnetism
** Atomic Physics
   *** Structure of atoms
   *** Properties of atoms
** Nuclear Physics
   *** Properties of atomic nuclei
   *** Behavior of atomic nuclei
** Plasma Physics
   *** Fourth state of matter
   *** Ionized gases
** Geophysics
   *** Earth&apos;sinternal structure
@endmindmap
        `,
  },
  {
    question: "Explain the Importance of Physics in daily life.",
    answer: `
    <div class="space-y-5">
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Technologies:</strong> Modern technologies, such as cars, airplanes, and domestic appliances, are based on Physics principles.</li>
            <li><strong>Communication:</strong> Devices like radios, TVs, telephones, and computers are results of Physics applications.</li>
            <li><strong>Impact:</strong> Physics impacts commerce, industry, agriculture, education, and overall human life, improving standards of living.</li>
            <li><strong>Challenges:</strong> Inventions also have caused environmental pollution and harmful effects.</li>
        </ul>
        <h2 class="text-2xl font-semibold mb-2">Rapid Progress in Science</h2>
    <p class="mb-4">
      The rapid progress in science during the recent years has become possible due to the discoveries and inventions in the field of Physics. The technologies are the applications of scientific principles. Most of the technologies of our modern society throughout the world are related to Physics.
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>A car is made on the principles of mechanics.</li>
      <li>A refrigerator is based on the principle of thermodynamics.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mb-2">Daily Life Usage</h2>
    <p class="mb-4">
      In our daily life, we hardly find a device where physics is not involved.
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Consider pulley that makes it easy to lift heavy loads.</li>
      <li>Electricity is used not only to get light but also mechanical energy drives fans and electric motors, etc.</li>
      <li>The cars, aeroplanes, and other means of transport have shortened the distances, and now people do not live in isolation.</li>
      <li>Domestic appliances such as air conditioners, refrigerators, vacuum washing machines, and microwave ovens are used in houses.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mb-2">Communication</h2>
    <p class="mb-4">
      The means of communication such as radio, TV, telephone, and computer are the result of applications of physics. These devices have made our lives much easier, faster, and more comfortable than in the past.
    </p>
    
    <h3 class="text-xl font-semibold mb-2">Mobile Phone</h3>
    <p class="mb-4">
      It allows us to contact people anywhere in the world and to get the latest worldwide information. We can take and save pictures, send and receive messages from our friends. We can also receive radio transmission and use it as a calculator.
    </p>
    
    <h2 class="text-2xl font-semibold mb-2">Destruction in the World</h2>
    <p class="mb-4">
      The scientific inventions have also caused harm and destruction of serious nature. One such destruction is environmental pollution, and another is deadly weapons.
    </p>
    
    <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
    <p>
      Physics has also registered its glory in commerce and industry, trade, agriculture, education, and, in a nutshell, on all pages of human life. Because of research in physics, the standard of human living is improving day by day.
    </p>
    </div>
        `,
    uml: `
        @startmindmap
* Importance of Physics in daily life
** Technologies
   *** Cars
   *** Airplanes
   *** Domestic appliances
** Communication
   *** Radios
   *** TVs
   *** Telephones
   *** Computers
** Impact
   *** Commerce
   *** Industry
   *** Agriculture
   *** Education
   *** Human life
** Challenges
   *** Environmental pollution
   *** Harmful effects
@endmindmap
`,
  },
  {
    question: "Write a note on Vernier Calipers.",
    answer: `
        <p><strong>Vernier Calipers</strong> are used for precise measurements of small lengths.</p>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Main Scale:</strong> Measures in centimeters and millimeters.</li>
            <li><strong>Vernier Scale:</strong> Allows reading smaller divisions accurately.</li>
            <li><strong>Pitch:</strong> 1 millimeter.</li>
        </ul>
         <div class="space-y-5 my-14">
    <h1 class="text-3xl font-bold mb-4">Physics Measurements and Units</h1>
    
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Vernier Calipers</h2>
      <p class="mb-4">
        Vernier Calipers are an instrument used to measure very small lengths accurately to one tenth of a millimeter.
      </p>
     
     <div>
     <h3 class="text-xl font-semibold mb-2">Construction</h3>
     <p class="mb-4">
     Vernier Calipers consist of two jaws and two scales connected with these jaws.
     </p>
     <div className="flex flex-col gap-3">
     <p>Main Scale</p>
     <p>Vernier Scale</p>
     </div>
     </div>

      <h3 class="text-xl font-semibold mb-2">Main Scale</h3>
      <ul class="list-disc list-inside mb-4">
        <li>The longer line on the main scale represents centimeters and smaller lines, millimeters.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Pitch</h3>
      <ul class="list-disc list-inside mb-4">
        <li>The separation between two smaller lines on the main scale is called the pitch of the surnier calipers. It is one milli meter(Imm)</li>
      </ul>
    </section>
    
  </div>
        `,
    uml: `
        @startmindmap
* Vernier Calipers
** Purpose
*** Used for precise measurements of small lengths
** Main Scale
*** Measures in centimeters
*** Measures in millimeters
** Vernier Scale
*** Allows reading smaller divisions accurately
** Pitch
*** 1 millimeter
** Physics Measurements and Units
** Construction
*** Two jaws
*** Two scales connected with the jaws
** Main Scale
*** Longer line represents centimeters
*** Smaller lines represent millimeters
** Vernier Scale
*** Provides precise measurement to one tenth of a millimeter
@endmindmap

`,
  },

  {
    question:
      "Pick out the base units in the following: Joule, Newton, kilogram, hertz, mole, ampere, meter, Kelvin, coulomb and watt.",
    answer: `
        <p><strong>Base units:</strong></p>
        <ul class="list-disc list-inside space-y-2">
            <li>Kilogram (mass)</li>
            <li>Mole (quantity of substance)</li>
            <li>Ampere (electric current)</li>
            <li>Meter (length)</li>
            <li>Kelvin (temperature)</li>
        </ul>
        `,
    uml: `
        @startmindmap
* Base Units
** Kilogram
   *** Mass
** Mole
   *** Quantity of substance
** Ampere
   *** Electric current
** Meter
   *** Length
** Kelvin
   *** Temperature
@endmindmap
`,
  },
  {
    question:
      "Find the base quantities involved in each of the following derived quantities:",
    uml: `@startmindmap
* Base Quantities in Derived Quantities
** Speed
   *** Distance / Time
   *** Length (m)
   *** Time (s)
   *** Unit: m/s
** Volume
   *** Length x Breadth x Height
   *** Length (m)
   *** Unit: m³
** Force
   *** Mass x Acceleration
   *** Mass (kg)
   *** Acceleration (m/s²)
   *** Unit: kg·m/s² (Newton)
** Work
   *** Force x Distance
   *** Force (Newton)
   *** Distance (m)
   *** Unit: kg·m²/s² (Joule)
@endmindmap
`,
    subQuestions: [
      {
        question: "Speed",
        answer: `
                <p><strong>Speed:</strong> Distance / Time</p>
                <p><strong>Base quantities:</strong> Length (m) and Time (s)</p>
                <p><strong>Unit:</strong> m/s</p>
                `,
      },
      {
        question: "Volume",
        answer: `
                <p><strong>Volume:</strong> Length x Breadth x Height</p>
                <p><strong>Base quantities:</strong> Length (m)</p>
                <p><strong>Unit:</strong> m³</p>
                `,
      },
      {
        question: "Force",
        answer: `
                <p><strong>Force:</strong> Mass x Acceleration</p>
                <p><strong>Base quantities:</strong> Mass (kg) and Acceleration (m/s²)</p>
                <p><strong>Unit:</strong> kg·m/s² (Newton)</p>
                `,
      },
      {
        question: "Work",
        answer: `
                <p><strong>Work:</strong> Force x Distance</p>
                <p><strong>Base quantities:</strong> Force (Newton) and Distance (m)</p>
                <p><strong>Unit:</strong> kg·m²/s² (Joule)</p>
                `,
      },
    ],
    answer: "",
  },
  {
    question: "Estimate your age in seconds.",
    answer: `
        <p><strong>Age in years:</strong> 15</p>
        <p><strong>Age in days:</strong> 15 x 365.25 = 5478.75 days</p>
        <p><strong>Age in hours:</strong> 5478.75 x 24 = 131490 hours</p>
        <p><strong>Age in minutes:</strong> 131490 x 60 = 7889400 minutes</p>
        <p><strong>Age in seconds:</strong> 7889400 x 60 = 473364000 seconds (approximately 4.73 x 10^8 seconds)</p>
        `,
    uml: `
        @startmindmap
* Estimate Age in Seconds
** Age in Years
   *** 15
** Age in Days
   *** 15 x 365.25 = 5478.75 days
** Age in Hours
   *** 5478.75 x 24 = 131490 hours
** Age in Minutes
   *** 131490 x 60 = 7889400 minutes
** Age in Seconds
   *** 7889400 x 60 = 473364000 seconds
   *** Approximately 4.73 x 10^8 seconds
@endmindmap
`,
  },
  {
    question: "What role SI units have played in the development of science?",
    answer: `
        <p><strong>SI units</strong> provide a standard for measuring physical quantities, ensuring consistency and accuracy in scientific communication and research.</p>
        `,
    uml: `
        @startmindmap
* Role of SI Units
** Standard Measurement
   *** Consistency
   *** Accuracy
** Scientific Communication
   *** Consistent research
   *** Accurate results
@endmindmap
`,
  },
  {
    question: "Write a note on the Screw Gauge",
    answer: `
        <div>
  <div className="max-w-4xl mx-auto p-6">
        <h1 class="text-2xl font-bold mb-4">Q.No.4 Write a note on the Screw Gauge</h1>
        <p class="mb-4">
          A screw gauge is the instrument used to measure small lengths accurately up to one-hundredth part of a millimeter. It is also called a micrometer screw gauge. Its accuracy is greater than that of a vernier caliper.
        </p>
        
        <h2 class="text-xl font-semibold mb-2">Construction</h2>
        <p class="mb-4">
          It consists of a U-shaped metal stud at one end. A hollow cylinder (or sleeve) has a millimeter scale over it along a line called the index line, parallel to its axis. The hollow circular scale acts as a nut. A thimble has a threaded spindle inside it.
        </p>

        <h3 class="text-lg font-semibold mb-2">Circular Scale</h3>
        <p class="mb-4">
          The thimble has 100 divisions around one end. It is the circular scale of the screw gauge. As the thimble completes one rotation, 100 divisions pass the index line, and the thimble moves 1 mm along the main scale. Thus, each division of the circular scale crossing the index line moves the thimble through 1/100 mm or 0.01 mm on the main scale.
        </p>

        <h3 class="text-lg font-semibold mb-2">Pitch</h3>
        <p class="mb-4">
          As the thimble completes one rotation, the spindle moves 1 mm along the index line. The distance between consecutive threads on the spindle is 1 mm; this distance is called the pitch of the screw gauge.
        </p>

        <h3 class="text-lg font-semibold mb-2">Least Count</h3>
        <p class="mb-4">
          The least count of a screw gauge can be found as follows:
          <br />
          <code class="bg-gray-100 p-1 rounded">Least count = pitch of screw gauge / number of divisions on the circular scale</code>
          <br />
          <code class="bg-gray-100 p-1 rounded">= 1 mm / 100 = 0.01 mm = 0.001 cm</code>
          <br />
          The least count of the screw gauge is 0.01 mm or 0.001 cm.
        </p>

        <h3 class="text-lg font-semibold mb-2">Zero Error of Screw Gauge</h3>
        <p class="mb-4">
          If we close the gap between the spindle and the stud of the screw gauge by rotating the ratchet in the clockwise direction, and if the zero of the circular scale coincides with the index line, then the zero error will be zero. If the zero of the circular scale does not coincide with the index line, then there is a zero error in the screw gauge.
        </p>
        <div class="pb-6">
  <h3 class="text-lg font-semibold mb-2">Positive Zero Error</h3>
  <p class="mb-4">
    If the zero of the circular scale is behind (below) the index line, it will measure slightly more than the actual thickness, and this is called positive zero error.
  </p>
  <p class="mb-4">
    <strong>Zero Correction:</strong> In this case, multiply the number of divisions of the circular scale that have not crossed the index line by the least count of the screw gauge to find the zero error. This error will be subtracted from the observed measurement.
  </p>

  <h3 class="text-lg font-semibold mb-2">Negative Zero Error</h3>
  <p class="mb-4">
    If the zero of the circular scale has crossed (above) the index line, it will show slightly less than the actual thickness, and this is called negative zero error.
  </p>
  <p class="mb-4">
    <strong>Zero Correction:</strong> In this case, multiply the number of divisions of the circular scale that have crossed the index line by the least count of the screw gauge to find the zero error. This error will be added to the observed measurement.
  </p>
</div>

      </div>
        </div>
        `,
    uml: `
      @startmindmap
* Screw Gauge
** Definition
*** Measures small lengths accurately up to 0.01 mm
*** Also called micrometer screw gauge
*** More accurate than vernier caliper
** Construction
*** U-shaped metal stud
*** Hollow cylinder (sleeve) with millimeter scale
**** Index line parallel to axis
*** Circular scale (nut)
*** Thimble with threaded spindle
** Circular Scale
*** 100 divisions around the thimble
*** 1 rotation = 1 mm movement on main scale
*** Each division = 0.01 mm movement
** Pitch
*** Distance between consecutive threads = 1 mm
*** One rotation moves spindle by 1 mm
** Least Count
*** Formula: Least count = pitch / number of divisions
*** Calculation: 1 mm / 100 = 0.01 mm = 0.001 cm
** Zero Error
*** Zero Error = difference between zero of circular scale and index line
*** Positive Zero Error
**** Zero below index line
**** Measures more than actual thickness
**** Correction: Subtract zero error (number of divisions not crossed * least count)
*** Negative Zero Error
**** Zero above index line
**** Measures less than actual thickness
**** Correction: Add zero error (number of divisions crossed * least count)
@endmindmap

`,
  },
  //   {
  //     question: "What are the types of zero errors in measurement instruments?",
  //     answer: `
  //         <ul class="list-disc list-inside space-y-2">
  //             <li><strong>Positive Zero Error:</strong> Occurs if the zero of the scale is behind the index line.</li>
  //             <li><strong>Negative Zero Error:</strong> Occurs if the zero of the scale is ahead of the index line.</li>
  //         </ul>
  //         `,
  //     uml: `
  //         @startmindmap
  // * Types of Zero Errors
  // ** Positive Zero Error
  //    *** Zero of the scale behind the index line
  // ** Negative Zero Error
  //    *** Zero of the scale ahead of the index line
  // @endmindmap
  // `,
  //   },
  {
    question: "What is a Physical Balance? And how is it used?",
    uml: `@startmindmap
* Physical Balance
** Definition
*** Measures mass by comparison
** Construction
*** Beam
**** Resting on fulcrum
**** Carries scale pans over hooks
*** Fulcrum
*** Pans
**** Unknown mass on left pan
**** Standard masses on right pan
** Components
*** Beam
*** Balancing Screw
*** Pillar
*** Hook
*** Pointer
*** Scale
*** Plumbline
*** Pan
*** Arrestment Knob
*** Leveling Screw
** Example: Finding Mass of a Small Stone
*** Steps
**** Adjust leveling screws using plumb line
**** Raise beam with arresting knob
**** Use balancing screws to set pointer at zero
**** Place object on right pan
**** Adjust with standard masses until pointer is at zero
@endmindmap
`,
    answer: `
      <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    A common physical balance is a laboratory instrument that is used to measure the mass of various objects by comparison.
  </p>

  <h2 class="text-xl font-semibold mb-2">Construction</h2>
  <p class="mb-4">
    It consists of a beam resting at the center on a fulcrum as shown in the figure. The beam carries scale pans over the hooks on either side. Unknown mass is placed on the left pan. Find some suitable standard masses that cause the pointer to remain at zero on raising the beam.
  </p>

  <div class="mb-4">
    <p class="font-semibold mb-2">Components:</p>
    <ul class="list-disc pl-5">
      <li>Beam</li>
      <li>Balancing Screw</li>
      <li>Pillar</li>
      <li>Hook</li>
      <li>Pointer</li>
      <li>Scale</li>
      <li>Plumbline</li>
      <li>Pan</li>
      <li>Arrestment knob</li>
      <li>Leveling Screw</li>
    </ul>
  </div>

  <h2 class="text-xl font-semibold mb-2">Example: Find the mass of a small stone by a physical balance</h2>
  <h3 class="text-lg font-semibold mb-2">Solution</h3>
  <ol class="list-decimal pl-5 mb-4">
    <li>Follow the steps to measure the mass of a given object.</li>
    <li>Adjust leveling screws with the help of a plumb line to level the platform of the physical balance.</li>
    <li>Raise the beam gently by turning the arresting knob clockwise. Using balancing screws at the ends of its beam, bring the pointer to the zero position.</li>
    <li>Turn the arresting knob to bring the beam back on its support. Place the given object on the right pan. Raise the beam. Lower the beam if its point is not zero.</li>
    <li>Repeat adding or removing suitable standard masses in the right pan till the pointer rests at zero on raising the beam.</li>
  </ol>
</div>

        `,
  },
  {
    question:
      "Which one of the following is the most accurate: Beam balance, Physical balance, and Electronic balance?",
    answer: `
        <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    The mass of one rupee coin is measured using different balances as given below:
  </p>

  <div class="mb-4">
    <h3 class="text-lg font-semibold mb-2">Beam Balance</h3>
    <p class="mb-2">
      Mass of coin = 3.2 g. A sensitive balance may be able to measure mass accurately as small as 0.1 g or 100 mg.
    </p>
  </div>

  <div class="mb-4">
    <h3 class="text-lg font-semibold mb-2">Physical Balance</h3>
    <p class="mb-2">
      Mass of the coin = 3.24 g. The least count of a physical balance is 0.01 g or 10 mg. Therefore, the measurement taken by a physical balance would be more precise than that of a sensitive beam balance.
    </p>
  </div>

  <div class="mb-4">
    <h3 class="text-lg font-semibold mb-2">Electronic Balance</h3>
    <p class="mb-2">
      Mass of coin = 3.247 g. The least count of an electronic balance is 0.001 g or 1 mg. Therefore, the measurement would be more precise than that of a sensitive physical balance. The electronic balance is the most sensitive balance among all the balances given above.
    </p>
  </div>
</div>

        `,
    uml: `@startmindmap
* Measurement of One Rupee Coin
** Beam Balance
*** Mass of Coin: 3.2 g
*** Least Count: 0.1 g or 100 mg
*** Accuracy: Less precise
** Physical Balance
*** Mass of Coin: 3.24 g
*** Least Count: 0.01 g or 10 mg
*** Accuracy: More precise than beam balance
** Electronic Balance
*** Mass of Coin: 3.247 g
*** Least Count: 0.001 g or 1 mg
*** Accuracy: Most precise among all balances
@endmindmap
`,
  },
  {
    question: "Write a note on the Stopwatch.",
    answer: `
       <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    "An instrument used to measure the time interval or specific period of an event is known as a stop watch."
  </p>

  <h3 class="text-lg font-semibold mb-2">Types of Stop Watch</h3>
  <p class="mb-4">There are two types of stop watches:</p>

  <ul class="list-disc pl-5 mb-4">
    <li>Mechanical stop watch</li>
    <li>Electronic stop watch (digital stop watch)</li>
  </ul>

  <h4 class="text-lg font-semibold mb-2">Mechanical Stop Watch</h4>
  <p class="mb-4">
    A mechanical stop watch can measure a time interval up to a minimum of 0.1 seconds.
  </p>
  <p class="mb-4">
    <strong>How to Use:</strong> A mechanical stop watch has a knob that is used to wind the spring that powers the watch. It can also be used as the start, stop, and reset button. The watch starts when the knob is pressed once. When pressed a second time, it stops the watch, while the third press brings the needle back to the zero position.
  </p>

  <h4 class="text-lg font-semibold mb-2">Electronic/Digital Stop Watch</h4>
  <p class="mb-4">
    A digital stop watch, commonly used in laboratories, can measure a time interval accurately up to 1/100 second or 0.01 seconds.
  </p>
  <p class="mb-4">
    <strong>How to Use:</strong> The digital stop watch starts to indicate the time elapsed when the start/stop button is pressed. As soon as the start/stop button is pressed again, it stops and indicates the time interval recorded between the start and stop of an event. A reset button restores its initial zero settings.
  </p>

  <p class="mb-4">
    The watch is named "stop watch" because it can be started or stopped at will as required when the duration of the time is to be measured.
  </p>
</div>
        `,
    uml: `
@startmindmap
* Stop Watch
** Definition
*** Measures time interval or specific period of an event
** Types
*** Mechanical Stop Watch
**** Measures time interval up to 0.1 seconds
**** How to Use
***** Knob winds the spring and functions as start, stop, and reset button
***** Press knob once to start
***** Press again to stop
***** Press third time to reset to zero
*** Electronic/Digital Stop Watch
**** Measures time interval up to 0.01 seconds (1/100 second)
**** How to Use
***** Start/stop button initiates and halts time measurement
***** Press button to start and stop
***** Reset button restores zero settings
** Name Origin
*** "Stop watch" refers to its ability to start or stop at will
@endmindmap

`,
  },
  {
    question:
      "What do you know about the Measuring Cylinder? How is the volume of liquids measured using this cylinder?",
    answer: `
      <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    A measuring cylinder is a cylindrical tube that is used to measure the volume of liquid or powdered substances. It is also used to find the volume of an irregular-shaped solid insoluble in a liquid by the displacement method.
  </p>

  <h3 class="text-lg font-semibold mb-2">Construction</h3>
  <p class="mb-4">
    It is made of transparent plastic or glass, and it has a vertical scale in milliliters (ml) or cubic centimeters (cm³). Measuring cylinders have different capacities ranging from 100 ml to 2500 ml.
  </p>

  <h3 class="text-lg font-semibold mb-2">Measurement of Volume</h3>
  <p class="mb-4">
    When a liquid is put into it, the volume is noted on the scale in front of the meniscus of the liquid. The meniscus of most liquids curves downwards, while the meniscus of mercury curves upwards.
  </p>

  <h3 class="text-lg font-semibold mb-2">Precautions</h3>
  <p class="mb-4">
    To measure the volume of the liquid correctly, the following precautions should be kept in mind:
  </p>
  <ul class="list-disc pl-5 mb-4">
    <li>The cylinder must be placed on a horizontal surface.</li>
    <li>The eye should be kept level with the bottom of the meniscus (curved surface). When the eye is above the liquid level, the meniscus appears higher on the scale. Similarly, when the eye is below the liquid level, the meniscus appears lower than the actual height of the liquid.</li>
  </ul>

  <div class="mb-4">
    <p class="font-semibold mb-2">Incorrect Position</p>
    <img src="/path-to-image/incorrect-position.png" alt="Incorrect position" class="w-full h-auto mb-2" />
    <p class="font-semibold mb-2">Correct Position</p>
    <img src="/path-to-image/correct-position.png" alt="Correct position" class="w-full h-auto" />
  </div>
</div>

        `,
    uml: `@startmindmap
* Measuring Cylinder
** Definition
*** Cylindrical tube used to measure volume of liquids or powdered substances
*** Used to find volume of irregular-shaped solids by displacement
** Construction
*** Made of transparent plastic or glass
*** Vertical scale in milliliters (ml) or cubic centimeters (cm³)
*** Capacities range from 100 ml to 2500 ml
** Measurement of Volume
*** Volume noted on the scale at the meniscus
*** Meniscus of most liquids curves downward
*** Meniscus of mercury curves upward
** Precautions
*** Place cylinder on a horizontal surface
*** Eye level with the bottom of the meniscus
**** Incorrect Position: Eye above or below liquid level
**** Correct Position: Eye level with liquid surface
@endmindmap

`,
  },
  {
    question:
      "How is the volume of irregular shapes measured using the displacement method?",
    answer: `
       <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    Volume of irregular-shaped solids is found by the displacement method.
  </p>

  <h3 class="text-lg font-semibold mb-2">Displacement Method</h3>
  <p class="mb-4">
    The solid is lowered into a measuring cylinder containing a liquid. The level of the liquid rises. The increase in the volume of the liquid is equal to the volume of the given solid object.
  </p>

  <h3 class="text-lg font-semibold mb-2">Method</h3>
  <p class="mb-4">
    Let us find the volume of a small stone. 
  </p>
  <ol class="list-decimal pl-5 mb-4">
    <li>Take the initial volume <code class="bg-gray-100 p-1 rounded">Vi</code> of water in the cylinder.</li>
    <li>Tie the solid with a thread.</li>
    <li>Lower the solid into the cylinder until it is fully immersed in water.</li>
    <li>Note the final volume <code class="bg-gray-100 p-1 rounded">Vf</code> of water and the solid.</li>
    <li>The volume of the solid will be <code class="bg-gray-100 p-1 rounded">Vf - Vi</code>.</li>
  </ol>
</div>

        `,
    uml: `@startmindmap
* Displacement Method
** Definition
*** Measures volume of irregular-shaped solids by the change in liquid level
** Method
*** Example: Finding Volume of a Small Stone
**** Take initial volume (Vi) of water in the cylinder
**** Tie the solid with a thread
**** Lower solid into the cylinder until fully immersed
**** Note final volume (Vf) of water and solid
**** Calculate volume of solid as Vf - Vi
** Steps
*** Initial Volume (Vi)
*** Immersion of Solid
*** Final Volume (Vf)
*** Volume of Solid = Vf - Vi
@endmindmap
`,
  },
  {
    question:
      "Define and explain Significant figures. What are the main points to be kept in mind while determining the significant figures of a result?",
    answer: `
        <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    In any measurement, the accurately known digits and the first doubtful digit in an expression are called significant figures. They reflect the precision of a measured value of a physical quantity.
  </p>

  <h3 class="text-lg font-semibold mb-2">Accuracy of Measurement</h3>
  <p class="mb-4">
    The value of a physical quantity is expressed by a number followed by some suitable unit. Every measurement is an attempt to find the true value. The accuracy in measuring a physical quantity depends upon various factors:
  </p>
  <ul class="list-disc pl-5 mb-4">
    <li>The quality of the measuring instrument</li>
    <li>The skill of the observer</li>
    <li>The number of observations made</li>
  </ul>

  <h3 class="text-lg font-semibold mb-2">Example</h3>
  <p class="mb-4">
    A student measures the length of a book as 18 cm using a measuring tape. The number of significant figures in this measurement is two. The left digit is the accurately known digit, while the digit 8 is a doubtful digit, which the student may not be sure about.
  </p>
  <p class="mb-4">
    Another student measures the same book using a ruler and claims its length to be 18.4 cm. In this case, all three figures are significant. The two left digits 1 and 8 are accurately known, while the digit 4 is the doubtful digit.
  </p>
  <p class="mb-4">
    A third student records the length of the book as 18.425 cm using the same ruler. The number of significant figures is again three, consisting of the two accurately known digits 1 and 8, and the first doubtful digit 4. The digits 2 and 5 are not significant because the measurement is limited by the instrument.
  </p>
  <p class="mb-4">
    An improvement in the quality of measurement by using a better instrument increases the significant figures in the measured result. Significant figures include all the digits that are known accurately and the one estimated digit. More significant figures mean greater precision.
  </p>

  <h3 class="text-lg font-semibold mb-2">Rules for Determining Significant Figures</h3>
  <p class="mb-4">The following rules are helpful in identifying significant figures:</p>
  <ul class="list-disc pl-5 mb-4">
    <li>Non-zero digits are always significant.</li>
    <li>Zeros in between two significant figures are also significant. For example, in <code class="bg-gray-100 p-1 rounded">1.406</code>, the number of significant figures is 4.</li>
    <li>In any observation, the zeros on the left side of the decimal point for the purpose of spacing the decimal point are not significant. For example, in <code class="bg-gray-100 p-1 rounded">0.0036</code>, the number of significant figures is 2.</li>
    <li>Final or ending zeros on the right side of decimal fractions are considered significant. For example, the number of significant figures in <code class="bg-gray-100 p-1 rounded">2.450</code> is four.</li>
    <li>In whole numbers that end in one or more zeros without a decimal point, these zeros may or may not be significant. In such cases, express the quantity using scientific notation.</li>
    <li>If numbers are recorded in scientific notation, then all the digits before the power of 10 are significant. For example, in <code class="bg-gray-100 p-1 rounded">1.40 x 10<sup>3</sup></code>, the number of significant figures is three.</li>
  </ul>
</div>

        `,
    uml: `@startmindmap
* Significant Figures
** Definition
*** Accurately known digits + first doubtful digit
*** Reflect precision of a measured value
** Accuracy of Measurement
*** Dependent on:
**** Quality of the measuring instrument
**** Skill of the observer
**** Number of observations
** Examples
*** Measurement of 18 cm
**** Significant Figures: 2 (18)
*** Measurement of 18.4 cm
**** Significant Figures: 3 (18.4)
*** Measurement of 18.425 cm
**** Significant Figures: 5 (18.42)
** Rules for Determining Significant Figures
*** Non-zero digits are always significant
**** Example: 1.406 (4 significant figures)
*** Zeros between significant figures are significant
**** Example: 1.406 (4 significant figures)
*** Leading zeros are not significant
**** Example: 0.0036 (2 significant figures)
*** Trailing zeros in decimal fractions are significant
**** Example: 2.450 (4 significant figures)
*** Trailing zeros in whole numbers without decimal points may or may not be significant
**** Use scientific notation to clarify
*** In scientific notation, all digits before the power of 10 are significant
**** Example: 1.40 x 10^3 (3 significant figures)
@endmindmap
`,
  },
  {
    question: "Write down the rules to round off the numbers.",
    answer: `
       <div class="max-w-4xl mx-auto p-6">
  <p class="mb-4">
    The following rules are used to round off numbers:
  </p>
  <ol class="list-decimal pl-5 mb-4">
    <li>
      If the last digit is less than 5, then it is simply dropped. This decreases the number of significant digits in the figure.
      <br /> 
      <strong>Example:</strong> 1.943 is rounded to 1.94 (3 significant figures)
    </li>
    <li>
      If the last digit is greater than 5, then the digit on its left is increased by one. This also decreases the number of significant digits in the figure.
      <br /> 
      <strong>Example:</strong> 1.47 is rounded to 1.5 (two significant digits)
    </li>
    <li>
      If the last digit is 5, then it is rounded to get the nearest even number.
      <br />
      <strong>Example:</strong>
      <ul class="list-disc pl-5 mt-2">
        <li>1.35 is rounded to 1.4</li>
        <li>1.45 is rounded to 1.4</li>
      </ul>
    </li>
  </ol>
</div>

        `,
    uml: `
@startmindmap
* Rounding Off Numbers
** Rules
*** Last Digit Less Than 5
**** Simply dropped
**** Decreases the number of significant digits
**** Example: 1.943 → 1.94 (3 significant figures)
*** Last Digit Greater Than 5
**** Digit on its left increased by one
**** Decreases the number of significant digits
**** Example: 1.47 → 1.5 (2 significant figures)
*** Last Digit is 5
**** Rounded to the nearest even number
**** Example:
***** 1.35 → 1.4
***** 1.45 → 1.4
@endmindmap

`,
  },
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <h1 className="font-bold text-3xl text-center mb-4 text-blue-700">
        Detailed Questions and Answers on Physics (8 marks each)
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        <Accordion type="single" collapsible>
          {questionsAndAnswers.map((item, index) => (
            <AccordionItem key={index} className="my-5" value={`item-${index}`}>
              <AccordionTrigger className="p-4 bg-blue-500 text-white rounded-t-lg text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white rounded-b-lg text-gray-800">
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                {item.subQuestions &&
                  item.subQuestions.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="mt-4 border-t border-gray-200 pt-4"
                    >
                      <strong>{subItem.question}</strong>
                      <div
                        dangerouslySetInnerHTML={{ __html: subItem.answer }}
                      />
                    </div>
                  ))}
                <PlantUMLDiagram code={item.uml} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Page;
