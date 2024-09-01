import React from "react";
import MermaidDiagram from "@/components/mermaiddiagram";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const HistoryTable = () => {

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
*[#FFD700] Evolution of Computing Devices
++[#FF6347] Ancient to 17th Century
+++[#FFA07A] Abacus
++++_ Unknown origin, ancient times
++++_ Beads on rods or wires
++++_ Manual arithmetic calculations
++++_ Earliest counting device
++++_ Used in various cultures for centuries
+++[#FFA07A] Napier&apos;sBones
++++_ John Napier, Scotland, 17th century
++++_ 9 separate strips (bones)
++++_ Multiplication and division
++++_ First decimal-calculating device
++[#FF8C00] 17th to 19th Century
+++[#FFD700] Pascaline
++++_ Blaise Pascal, France, 1642
++++_ Wooden box with gears and wheels
++++_ Automated arithmetic calculations
++++_ First mechanical and automated calculator
++++_ Motivated by Pascal&apos;sfather&apos;stax calculations
+++[#FFD700] Stepped Reckoner
++++_ Wilhelm Leibniz, Germany, 1673
++++_ Grooved wheels
++++_ Improved arithmetic calculations
++++_ Digital mechanical calculator
++++_ Could do addition, subtraction, multiplication, and division
+++[#FFD700] Difference Engine
++++_ Charles Babbage, England, 1820s
++++_ Steam-powered mechanical computer
++++_ Solving numerical problems
++++_ Mechanical computer for basic computations
+++[#FFD700] Analytical Engine
++++_ Charles Babbage, England, 1830
++++_ Punch card input
++++_ Advanced computations and data storage
++++_ Could solve mathematical problems and store data
--[#4682B4] Late 19th to Early 20th Century
---[#87CEEB] Tabulating Machine
----_ Herman Hollerith, USA, 1890
----_ Punch card-based mechanical calculator
----_ Computing statistics, census calculations
----_ Led to the formation of IBM in 1924
---[#87CEEB] Differential Analyzer
----_ Vannevar Bush, USA, 1930
----_ First electrical computer
----_ Complex scientific computations
----_ Could perform 25 calculations per minute
--[#32CD32] Mid 20th Century
---[#90EE90] Mark 1
----_ Howard Aiken, USA, 1944
----_ Digital computer
----_ Fast arithmetic operations
----_ Complex calculations
----_ Could add three 8-digit numbers in one second
----_ Massive size: 50 feet long, 8 feet high, 5 tons
@endmindmap
`;
  const umlCode2 = `
@startmindmap
*[#FFD700] Computer Generations
++[#FF6347] First Generation (1940-1956)
+++[#FFA07A] Vacuum tube technology
+++[#FFA07A] Slow processing speed
+++[#FFA07A] Limited memory capacity
+++[#FFA07A] Massive size
+++[#FFA07A] High cost and unreliability
++[#FF8C00] Second Generation (1956-1963)
+++[#FFD700] Transition to transistors
+++[#FFD700] Enhanced efficiency
+++[#FFD700] Smaller size
+++[#FFD700] Improved speed and memory
--[#4682B4] Third Generation (1963-1971)
---[#87CEEB] Use of integrated circuits (ICs)
---[#87CEEB] Enhanced speed and memory
---[#87CEEB] Improved energy efficiency
---[#87CEEB] Multiple application programs
--[#32CD32] Fourth Generation (1971-Present)
---[#90EE90] Microprocessor development
---[#90EE90] Exceptional speed and storage
---[#90EE90] Small size and high reliability
---[#90EE90] Diverse software availability
--[#9932CC] Fifth Generation
---[#DDA0DD] Artificial Intelligence focus
---[#DDA0DD] Advanced parallel processing
---[#DDA0DD] Natural Language Processing
---[#DDA0DD] Expert Systems
@endmindmap
`;
  const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
  const computerGenerationsChart = `
  classDiagram
    class FirstGeneration {
      +Technology: Vacuum tubes
      +ProcessingSpeed: Slow
      +MemoryCapacity: Limited
      +Size: Massive, occupying entire rooms
      +Cost: High
      +Reliability: Unreliable
      +PowerConsumption: High
      +InputOutputMethods: Punched cards, electric typewriters
      +ProgrammingLanguage: Machine language
      +Examples: ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC
      +UserInteraction: Via punched cards
      +SoftwareCapability: Very limited
    }

    class SecondGeneration {
      +Technology: Transistors
      +ProcessingSpeed: Improved
      +MemoryCapacity: Improved
      +Size: Smaller
      +Cost: Reduced
      +Reliability: Increased
      +PowerConsumption: Reduced
      +InputOutputMethods: Punch card readers, magnetic tapes, printers
      +ProgrammingLanguage: Assembly language, high-level languages (FORTRAN, COBOL)
      +Examples: UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604
      +UserInteraction: Punch card readers, magnetic tapes, printers
      +SoftwareCapability: Improved, high-level programming
    }

    class ThirdGeneration {
      +Technology: Integrated Circuits (ICs)
      +ProcessingSpeed: Enhanced
      +MemoryCapacity: Enhanced
      +Size: Reduced
      +Cost: Reduced
      +Reliability: Improved
      +PowerConsumption: Improved energy efficiency
      +InputOutputMethods: Keyboards, monitors
      +ProgrammingLanguage: High-level languages
      +Examples: IBM System/360, Control Data Corporation 3300, 6600
      +UserInteraction: Keyboards, monitors
      +SoftwareCapability: Multiple applications concurrently
    }

    class FourthGeneration {
      +Technology: LSI and VLSI chips, microprocessors
      +ProcessingSpeed: Exceptional
      +MemoryCapacity: Large
      +Size: Small
      +Cost: Affordable
      +Reliability: High
      +PowerConsumption: Low
      +InputOutputMethods: Portable and wireless devices
      +ProgrammingLanguage: Modern programming languages
      +Examples: Intel Pentium series, IBM ThinkPad, HP Pavilion, Dell Inspiron, MacBook Pro, MacBook Air
      +UserInteraction: GUIs
      +SoftwareCapability: Diverse software, multimedia support
    }

    class FifthGeneration {
      +Technology: AI technologies, advanced parallel processing
      +ProcessingSpeed: Advanced
      +MemoryCapacity: Advanced
      +Size: Varies, generally compact
      +Cost: Varies, generally high due to advanced tech
      +Reliability: High
      +PowerConsumption: Varies
      +InputOutputMethods: Voice recognition, gesture-based controls
      +ProgrammingLanguage: Natural Language Processing
      +Examples: Advanced AI systems
      +UserInteraction: Voice, gesture-based controls
      +SoftwareCapability: Expert Systems, AI-based applications
    }

    FirstGeneration <|-- SecondGeneration
    SecondGeneration <|-- ThirdGeneration
    ThirdGeneration <|-- FourthGeneration
    FourthGeneration <|-- FifthGeneration
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          History of Computer Systems
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Early Computing Devices
          </h2>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-scroll">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Device", "Inventor/Origin", "Date", "Key Features", "Usage"].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Abacus", "Unknown, used in various cultures", "Ancient times", "Beads or stones on rods or wires; manually operated", "Arithmetic calculations by sliding beads to represent numerical values"],
                    ["Napier&apos;sBones", "John Napier, Scotland", "17th century", "9 separate strips (bones) marked with numerals; first decimal-calculating device", "Multiplication and division"],
                    ["Pascaline", "Blaise Pascal, France", "1642", "Wooden box with gears and wheels; mechanical and automated calculator", "Arithmetic calculations; early mechanical device"],
                    ["Stepped Reckoner", "Wilhelm Leibniz, Germany", "1673", "Grooved wheels; digital mechanical calculator", "Improved on Pascal&apos;sinvention; used for arithmetic calculations"],
                    ["Difference Engine", "Charles Babbage, England", "1820s", "Mechanical computer capable of basic computations; steam-powered", "Solving numerical problems"],
                    ["Analytical Engine", "Charles Babbage, England", "1830", "Mechanical computer; input from punch cards; capable of solving mathematical problems and storing data", "More advanced computations and data storage"],
                    ["Tabulating Machine", "Herman Hollerith, USA", "1890", "Punch card-based mechanical calculator", "Computing statistics and recording data; used in census calculations World Wide"],
                    ["Differential Analyzer", "Vannevar Bush, USA", "1930", "First electrical computer; made up of vacuum tubes used as switches", "Capable of performing complex calculations; used for scientific computations"],
                    ["Mark 1", "Howard Aiken, USA", "1944", "Digital computer; could add three numbers with eight digits in one second; printed results on punched cards or electric typewriter", "Early digital computing; performed arithmetic operations quickly; used for complex calculations"]
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Timeline of Early Computing Devices</h3>
            <PlantUMLDiagram code={umlCode} />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Computer Generations
          </h2>
          <div className="bg-white shadow-xl w-full rounded-lg overflow-hidden">
            <div className="overflow-x-scroll">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Feature", "First Generation (1940-1956)", "Second Generation (1956-1963)", "Third Generation (1963-1971)", "Fourth Generation (1971-Present)", "Fifth Generation"].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Technology", "Vacuum tubes", "Transistors", "Integrated Circuits (ICs)", "LSI and VLSI chips, microprocessors", "AI technologies, advanced parallel processing"],
                    ["Processing Speed", "Slow", "Improved", "Enhanced", "Exceptional", "Advanced"],
                    ["Memory Capacity", "Limited", "Improved", "Enhanced", "Large", "Advanced"],
                    ["Size", "Massive, occupying entire rooms", "Smaller", "Reduced", "Small", "Varies, generally compact"],
                    ["Cost", "High", "Reduced", "Reduced", "Affordable", "Varies, generally high due to advanced tech"],
                    ["Reliability", "Unreliable", "Increased", "Improved", "High", "High"],
                    ["Power Consumption", "High, significant heat generation", "Reduced", "Improved energy efficiency", "Low", "Varies"],
                    ["Input/Output Methods", "Punched cards, electric typewriters", "Punch card readers, magnetic tapes, printers", "Keyboards, monitors", "Portable and wireless devices", "Voice recognition, gesture-based controls"],
                    ["Programming Language", "Machine language", "Assembly language, high-level languages (FORTRAN, COBOL)", "High-level languages", "Modern programming languages", "Natural Language Processing"],
                    ["Examples", "ENIAC, UNIVAC I, IBM 604, Mark-1, EDSAC", "UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604", "IBM System/360, Control Data Corporation 3300, 6600", "Intel Pentium series, IBM ThinkPad, HP Pavilion, Dell Inspiron, MacBook Pro, MacBook Air", "Advanced AI systems"],
                    ["User Interaction", "Via punched cards", "Punch card readers, magnetic tapes, printers", "Keyboards, monitors", "GUIs", "Voice, gesture-based controls"],
                    ["Software Capability", "Very limited", "Improved, high-level programming", "Multiple applications concurrently", "Diverse software, multimedia support", "Expert Systems, AI-based applications"]
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Computer Generations Overview</h3>
            <PlantUMLDiagram code={umlCode2} />

          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryTable;