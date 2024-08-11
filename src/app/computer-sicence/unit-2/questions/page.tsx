"use client"
import React, { useEffect, useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from '@/components/PlantUMLDiagram';
import mermaid from 'mermaid';


const Flowchart = ({ steps }: any) => (
    <div className="space-y-4">
        {steps.map((step: any, index: any) => (
            <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-200 border border-black rounded p-4">
                    <p className="text-center text-black">{step.label}</p>
                </div>
                {index < steps.length - 1 && (
                    <div className="w-1 h-8 bg-black my-2" />
                )}
            </div>
        ))}
    </div>
);

const Page = () => {
    const stepsExponent = [
        { label: "Start" },
        { label: "Input Base" },
        { label: "Input Exponent" },
        { label: "Initialize Result to 1" },
        { label: "Repeat Exponent Times: Result = Result * Base" },
        { label: "Output Result" }
    ];

    const stepsOddNumbers = [
        { label: "Start" },
        { label: "Initialize number to 1" },
        { label: "Is number <= 100?" },
        { label: "Print number" },
        { label: "Increment number by 2" },
        { label: "End" }
    ];
    const mermaidRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.run();
    }, []);
    const mermaidDiagram = `
    graph TD
        subgraph Input
            A[Base number]
            B[Exponent]
        end
        subgraph Process
            C[Initialize result to 1]
            D[Multiply result by base number]
            E[Repeat multiplication exponent times]
        end
        subgraph Output
            F[Final result]
        end
        A --> C
        B --> E
        C --> D
        D --> E
        E --> F
  `;
    const mermaidDiagram2 = `
graph TD
    subgraph Input
        A[Upper limit: 100]
    end
    subgraph Process
        B[Initialize number to 1]
        C{Is number <= 100?}
        D[Print number]
        E[Increment number by 2]
    end
    subgraph Output
        F[Odd numbers from 1 to 100]
    end
    A --> B
    B --> C
    C -->|Yes| D
    D --> E
    E --> C
    C -->|No| F
  `;
    const stepsSequence = [
        { label: "Start" },
        { label: "Initialize number to 27" },
        { label: "Print number" },
        { label: "Decrement number by 3" },
        { label: "Is number >= 0?" },
        { label: "Print number" },
        { label: "End" }
    ];

    const stepsMultiplication = [
        { label: "Start" },
        { label: "Input Number" },
        { label: "Initialize Multiplier to 1" },
        { label: "Print Result = Number * Multiplier" },
        { label: "Increment Multiplier by 1" },
        { label: "Is Multiplier > 10?" },
        { label: "End" }
    ];

    const umlCode = `
@startuml
start
:Input number A;
:Input number B;
if (A > B) then (yes)
  :Output TRUE;
else (no)
  :Output FALSE;
endif
stop
@enduml
`;
    const umlCode3 = `
@startuml
!define RECTANGLE class

RECTANGLE Input {
  First Number
  Second Number
  Operation (+ - * /)
}

RECTANGLE Process {
  If Operation is +:
    Result = First Number + Second Number
  If Operation is -:
    Result = First Number - Second Number
  If Operation is *:
    Result = First Number * Second Number
  If Operation is /:
    Result = First Number / Second Number
}

RECTANGLE Output {
  Display Result
}

Input --> Process
Process --> Output

note bottom of Input : User enters data here
note bottom of Process : Calculation happens here
note bottom of Output : Result is shown here
@enduml
`;


const umlCode5 = `
@startuml
skinparam backgroundColor transparent
skinparam defaultTextAlignment center

rectangle Input {
  (No input required)
}

rectangle Process {
  (Initialize counter to 1)
  (While counter <= 100)
  (Print counter)
  (Increment counter by 2)
}

rectangle Output {
  (Odd numbers from 1 to 99)
}

Input --> Process
Process --> Output

@enduml
`;

const umlCode7 = `
@startuml
skinparam backgroundColor transparent
skinparam defaultFontName Arial
skinparam arrowColor #2C3E50
skinparam roundCorner 10

rectangle "Input" {
  (Number n)
}

rectangle "Process" {
  (Generate multiplication table)
}

rectangle "Output" {
  (Multiplication table for n)
}

(Number n) -> (Generate multiplication table)
(Generate multiplication table) -> (Multiplication table for n)

@enduml
`;

const umlCode8 = `
@startuml
skinparam backgroundColor transparent
skinparam defaultFontName Arial
skinparam arrowColor #2C3E50

start
:Input base number x;
:Input exponent n;
:Initialize result = 1;

if (n < 0) then (yes)
  :Set flag for negative exponent;
  :n = -n;
else (no)
endif

while (n > 0)
  if (n is odd) then (yes)
    :result = result * x;
  endif
  :x = x * x;
  :n = n / 2;
endwhile

if (negative exponent flag is set) then (yes)
  :result = 1 / result;
endif

:Output result;
stop
@enduml
`;




const umlCode9 = `
@startuml
skinparam backgroundColor transparent
skinparam defaultFontName Arial
skinparam arrowColor #2C3E50

start
:Initialize number = 1;

while (number <= 100) is (yes)
  if (number % 2 != 0) then (yes)
    :Print number;
  endif
  :Increment number by 1;
endwhile (no)

stop
@enduml
`;


    


    
    const umlCode6 = `
@startuml
skinparam backgroundColor transparent

|Input|
start
:Start = 27;
:Step = 3;
:End = 0;

|Process|
:Initialize current = Start;
:reached_zero = false;

while (current >= End OR NOT reached_zero) is (yes)
  :Print current;
  :current = current - Step;
  if (current < End AND NOT reached_zero) then (yes)
    :reached_zero = true;
    :current = |current|;
  endif
endwhile (no)

|Output|
:Printed sequence:
27 24 21 18 15 12 9 6 3 0 3 6;

stop
@enduml
`;
    const umlCode4 = `
@startuml
skinparam backgroundColor transparent
skinparam componentStyle rectangle

rectangle Input {
  [Base number]
  [Exponent]
}

rectangle Process {
  [Initialize result to 1]
  [Multiply result by base number]
  [Repeat multiplication exponent times]
}

rectangle Output {
  [Final result]
}

[Base number] --> [Initialize result to 1]
[Exponent] --> [Repeat multiplication exponent times]
[Initialize result to 1] --> [Multiply result by base number]
[Multiply result by base number] --> [Repeat multiplication exponent times]
[Repeat multiplication exponent times] --> [Final result]

@enduml     
`;
    const umlCode2 = `
@startuml
!define RECTANGLE class

RECTANGLE Input {
  Age of Boy 1
  Age of Boy 2
  Age of Boy 3
  Age of Boy 4
}

RECTANGLE Process {
  Calculate Total Age: Sum of all ages
  Calculate Average Age: Total Age / 4
}

RECTANGLE Output {
  Display Total Age
  Display Average Age
}

Input --> Process
Process --> Output

note bottom of Input : Data enters here
note bottom of Process : Data is transformed here
note bottom of Output : Results are shown here
@enduml
`;

  const umlCode11 = `
  @startuml
skinparam backgroundColor transparent
skinparam defaultFontName Arial
skinparam arrowColor #2C3E50

start
:Input number n;
:Initialize i = 1;

while (i <= 10) is (yes)
  :result = n * i;
  :Print "n x i = result";
  :Increment i by 1;
endwhile (no)

stop
@enduml

`;


    
    const umlCode10 = `
@startuml
skinparam backgroundColor transparent
skinparam defaultFontName Arial
skinparam arrowColor #2C3E50

start
:Initialize number = 100;

while (number >= 1) is (yes)
  :Print number;
  :Decrement number by 1;
endwhile (no)

stop
@enduml
`;
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Practicals of Computational Thinking & Algorithms
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-0">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw a flowchart that takes input of two numbers A and B and outputs TRUE if A is greater than B; otherwise, it should output FALSE.
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold">
                            Create an IPO chart which will accept the ages of four boys and calculate their total age and average age. The program must display both the total age and their average age.
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode2} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold">
                            Create an IPO chart of a scenario that allows a user to enter two numbers. The operation to be performed is either addition, subtraction, multiplication, or division, and accordingly, the output should be given to the user.
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode3} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw IPO chart and write an algorithm to find the exponent of a given number. Exponent or power of a number means how many times to use the number in multiplication. In other words, it is the product of a number that is multiplied as many times as the exponent.
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode4} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw IPO Chart and write an algorithm to print odd numbers from 1 to 100, such as 1 3 5 7 9 11 … 99.
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode5} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw IPO Chart and write an algorithm to print the following sequence of numbers in descending order: 27 24 21 18 15 12 9 6 3 0 3 6
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode6} />

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw IPO Chart and write an algorithm to print a multiplication table of a given number
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                               <PlantUMLDiagram code={umlCode7} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw a flowchart to find the exponent of a given number
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                               <PlantUMLDiagram code={umlCode8} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw a flowchart to print odd numbers from 1 to 100
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                             <PlantUMLDiagram code={umlCode9} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw a flowchart to print the following sequence of numbers in descending order
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                             <PlantUMLDiagram code={umlCode10} />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="text-lg font-semibold">
                            Draw a flowchart to print a multiplication table of a given number
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            <PlantUMLDiagram code={umlCode11} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
