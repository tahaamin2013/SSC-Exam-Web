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
            <li><strong>Geophysics:</strong> Study of Earth's internal structure.</li>
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
   *** Earth's internal structure
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
    question:
      "Write a note on the Screw Gauge",
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
** Use
   *** Measure mass
   *** Compare with known masses
** Construction
   *** Beam
   *** Fulcrum
   *** Pans
** Procedure
   *** Adjust leveling screws
   *** Place object and standard masses
   *** Balance the beam
@endmindmap
`,
    answer: `
        <p><strong>A Physical Balance</strong> is an instrument used to measure mass by comparing it to known masses.</p>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Construction:</strong> Beam, fulcrum, and pans.</li>
            <li><strong>Procedure:</strong> Adjust leveling screws, place object and standard masses, and balance the beam.</li>
        </ul>
        `,
  },
  {
    question:
      "Which one of the following is the most accurate: Beam balance, Physical balance, and Electronic balance?",
    answer: `
        <p><strong>The Electronic Balance</strong> is the most accurate, with precision up to 0.001 g or 1 mg.</p>
        `,
    uml: `@startmindmap
* Most Accurate Balance
** Electronic Balance
   *** Precision up to 0.001 g
   *** 1 mg
@endmindmap
`,
  },
  {
    question: "Write a note on the Stopwatch.",
    answer: `
        <p><strong>A Stopwatch</strong> measures time intervals.</p>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Mechanical Stopwatch:</strong> Measures up to 0.1 seconds.</li>
            <li><strong>Electronic/Digital Stopwatch:</strong> Measures up to 0.01 seconds.</li>
        </ul>
        `,
    uml: `
        @startmindmap
* Stopwatch
** Measures Time Intervals
** Mechanical Stopwatch
   *** Measures up to 0.1 seconds
** Electronic/Digital Stopwatch
   *** Measures up to 0.01 seconds
@endmindmap
`,
  },
  {
    question:
      "What do you know about the Measuring Cylinder? How is the volume of liquids measured using this cylinder?",
    answer: `
        <p><strong>A Measuring Cylinder</strong> measures volumes of liquids and powders.</p>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Construction:</strong> Transparent cylinder with a scale.</li>
            <li><strong>Measurement:</strong> Read volume at the bottom of the meniscus on a horizontal surface.</li>
        </ul>
        `,
    uml: `@startmindmap
* Measuring Cylinder
** Purpose
   *** Measures volumes of liquids and powders
** Construction
   *** Transparent cylinder
   *** Scale
** Measurement
   *** Read bottom of the meniscus
   *** Use horizontal surface
@endmindmap
`,
  },
  {
    question:
      "How is the volume of irregular shapes measured using the displacement method?",
    answer: `
        <ol class="list-decimal list-inside space-y-2">
            <li>Fill a measuring cylinder with liquid and note the initial volume.</li>
            <li>Immerse the irregular solid and note the new volume.</li>
            <li>Volume of the solid = New volume *** Initial volume.</li>
        </ol>
        `,
    uml: `@startmindmap
* Volume of Irregular Shapes
** Displacement Method
** Steps
   *** Fill measuring cylinder with liquid
   *** Note initial volume
   *** Immerse irregular solid
   *** Note new volume
   *** Volume of solid = New volume *** Initial volume
@endmindmap
`,
  },
  {
    question:
      "Define and explain Significant figures. What are the main points to be kept in mind while determining the significant figures of a result?",
    answer: `
        <p><strong>Significant figures</strong> are digits in a measurement that convey precision.</p>
        <ul class="list-disc list-inside space-y-2">
            <li>Non-zero digits are always significant.</li>
            <li>Zeros between significant digits are significant.</li>
            <li>Leading zeros are not significant.</li>
            <li>Trailing zeros in decimals are significant.</li>
            <li>Trailing zeros in whole numbers may or may not be significant.</li>
            <li>Scientific notation ensures all digits before the power of 10 are significant.</li>
        </ul>
        `,
    uml: `@startmindmap
* Significant Figures
** Definition
   *** Digits conveying precision
** Rules
   *** Non-zero digits are significant
   *** Zeros between significant digits are significant
   *** Leading zeros are not significant
   *** Trailing zeros in decimals are significant
   *** Trailing zeros in whole numbers may or may not be significant
   *** Scientific notation ensures all digits before the power of 10 are significant
@endmindmap
`,
  },
  {
    question: "Write down the rules to round off the numbers.",
    answer: `
        <ul class="list-disc list-inside space-y-2">
            <li>If the last digit is less than 5, drop it.</li>
            <li>If the last digit is more than 5, increase the preceding digit by 1.</li>
            <li>If the last digit is exactly 5, round to the nearest even number.</li>
        </ul>
        <p><strong>Examples:</strong></p>
        <ul class="list-disc list-inside space-y-2">
            <li>1.943 rounded to 1.94</li>
            <li>1.35 rounded to 1.4</li>
            <li>1.45 rounded to 1.4</li>
        </ul>
        `,
    uml: `
    @startmindmap
* Rules for Rounding Off Numbers
** Last Digit Less than 5
   *** Drop it
** Last Digit More than 5
   *** Increase preceding digit by 1
** Last Digit Exactly 5
   *** Round to nearest even number
** Examples
   *** 1.943 → 1.94
   *** 1.35 → 1.4
   *** 1.45 → 1.4
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
