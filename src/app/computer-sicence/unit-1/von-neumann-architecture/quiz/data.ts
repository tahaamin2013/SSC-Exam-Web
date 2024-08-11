export const quiz = {
  totalQuestions: 38,
  questions: [
    {
      id: 1,
      question:
        "Who first published the concept of the Von Neumann architecture?",
      answers: [
        "A) Alan Turing",
        "B) John von Neumann",
        "C) Ada Lovelace",
        "D) Charles Babbage",
      ],
      correctAnswer: "B) John von Neumann",
    },
    {
      id: 2,
      question: "What are the main components of the Von Neumann architecture?",
      answers: [
        "A) CPU, GPU, RAM, Hard Drive",
        "B) Control Unit, Arithmetic and Logic Unit (ALU), Memory Unit, Registers, Inputs/Outputs",
        "C) Monitor, Keyboard, Mouse, Printer",
        "D) Operating System, Application Software, Hardware, Firmware",
      ],
      correctAnswer:
        "B) Control Unit, Arithmetic and Logic Unit (ALU), Memory Unit, Registers, Inputs/Outputs",
    },
    {
      id: 3,
      question:
        "In the Von Neumann architecture, where are instruction data and program data stored?",
      answers: [
        "A) In separate memory units",
        "B) In the CPU",
        "C) In the same memory",
        "D) In the cache memory",
      ],
      correctAnswer: "C) In the same memory",
    },
    {
      id: 4,
      question:
        "Which component of the CPU is responsible for executing arithmetic and logical operations?",
      answers: [
        "A) Control Unit (CU)",
        "B) Arithmetic and Logic Unit (ALU)",
        "C) Memory Unit",
        "D) Input/Output Controller",
      ],
      correctAnswer: "B) Arithmetic and Logic Unit (ALU)",
    },
    {
      id: 5,
      question: "What does the Control Unit (CU) in the CPU do?",
      answers: [
        "A) Executes arithmetic operations",
        "B) Manages the flow of data between CPU and external devices",
        "C) Controls the operation of the ALU, memory, and input/output devices",
        "D) Stores data temporarily for quick access",
      ],
      correctAnswer:
        "C) Controls the operation of the ALU, memory, and input/output devices",
    },
    {
      id: 6,
      question:
        "Which register holds the memory location of data that needs to be accessed?",
      answers: [
        "A) Accumulator (AC)",
        "B) Program Counter (PC)",
        "C) Memory Address Register (MAR)",
        "D) Memory Data Register (MDR)",
      ],
      correctAnswer: "C) Memory Address Register (MAR)",
    },
    {
      id: 7,
      question: "What is the function of the Program Counter (PC)?",
      answers: [
        "A) Holds data being transferred to or from memory",
        "B) Contains the memory address of the next instruction to be executed",
        "C) Stores intermediate arithmetic and logic results",
        "D) Contains the current instruction during processing",
      ],
      correctAnswer:
        "B) Contains the memory address of the next instruction to be executed",
    },
    {
      id: 8,
      question: "What is stored in the Memory Data Register (MDR)?",
      answers: [
        "A) The next instruction to be executed",
        "B) Data being transferred to or from memory",
        "C) Intermediate arithmetic results",
        "D) The memory location of data",
      ],
      correctAnswer: "B) Data being transferred to or from memory",
    },
    {
      id: 9,
      question:
        "Which type of operations does the Arithmetic and Logic Unit (ALU) perform?",
      answers: [
        "A) Storing data",
        "B) Transmitting data between components",
        "C) Arithmetical and logical operations",
        "D) Controlling timing signals",
      ],
      correctAnswer: "C) Arithmetical and logical operations",
    },
    {
      id: 10,
      question: "What are the three types of buses in a standard CPU system?",
      answers: [
        "A) Address Bus, Data Bus, Control Bus",
        "B) Input Bus, Output Bus, System Bus",
        "C) Serial Bus, Parallel Bus, USB",
        "D) Internal Bus, External Bus, System Bus",
      ],
      correctAnswer: "A) Address Bus, Data Bus, Control Bus",
    },
    {
      id: 11,
      question: "What does the Address Bus do?",
      answers: [
        "A) Carries control signals from the CPU",
        "B) Carries the addresses of data between the processor and memory",
        "C) Carries data between the processor, memory, and input/output devices",
        "D) Controls the timing of operations within the CPU",
      ],
      correctAnswer:
        "B) Carries the addresses of data between the processor and memory",
    },
    {
      id: 12,
      question:
        "Which memory unit is directly accessible by the CPU and is considered fast?",
      answers: [
        "A) Hard Drive",
        "B) Cache Memory",
        "C) USB Storage",
        "D) Optical Drive",
      ],
      correctAnswer: "B) Cache Memory",
    },
    {
      id: 13,
      question: "What is the role of the Input/Output (I/O) Controller?",
      answers: [
        "A) Executes program instructions",
        "B) Manages the flow of data between the CPU and external devices",
        "C) Stores the operating system",
        "D) Controls the power supply to the CPU",
      ],
      correctAnswer:
        "B) Manages the flow of data between the CPU and external devices",
    },
    {
      id: 14,
      question: "What is the function of the Control Bus?",
      answers: [
        "A) Carries addresses between the processor and memory",
        "B) Transmits data between the processor, memory, and input/output devices",
        "C) Carries control signals to coordinate activities within the computer",
        "D) Stores intermediate results during processing",
      ],
      correctAnswer:
        "C) Carries control signals to coordinate activities within the computer",
    },
    {
      id: 15,
      question:
        "What is contained in the Current Instruction Register (CIR) during processing?",
      answers: [
        "A) The memory location of the next instruction",
        "B) The current instruction being executed",
        "C) Data being transferred to or from memory",
        "D) The result of the last arithmetic operation",
      ],
      correctAnswer: "B) The current instruction being executed",
    },
    {
      id: 16,
      question:
        "In which year was the Von Neumann Architecture first published?",
      answers: ["A) 1940", "B) 1945", "C) 1950", "D) 1955"],
      correctAnswer: "B) 1945",
    },
    {
      id: 17,
      question:
        "Which of the following is NOT a component of Von Neumann Architecture?",
      answers: [
        "A) Control Unit",
        "B) Arithmetic and Logic Unit (ALU)",
        "C) Graphics Processing Unit (GPU)",
        "D) Memory Unit",
      ],
      correctAnswer: "C) Graphics Processing Unit (GPU)",
    },
    {
      id: 18,
      question:
        "What is the key concept of Von Neumann architecture regarding program and data storage?",
      answers: [
        "A) Instruction data and program data are stored in separate memories",
        "B) Instruction data and program data are stored in the same memory",
        "C) Only instruction data is stored in memory",
        "D) Only program data is stored in memory",
      ],
      correctAnswer:
        "B) Instruction data and program data are stored in the same memory",
    },
    {
      id: 19,
      question:
        "Which component of the CPU is responsible for executing arithmetic and logical operations?",
      answers: [
        "A) Control Unit",
        "B) Arithmetic and Logic Unit (ALU)",
        "C) Memory Unit",
        "D) Registers",
      ],
      correctAnswer: "B) Arithmetic and Logic Unit (ALU)",
    },
    {
      id: 20,
      question: "What is the function of the Memory Address Register (MAR)?",
      answers: [
        "A) Holds data being transferred to or from memory",
        "B) Holds the memory location of data that needs to be accessed",
        "C) Stores intermediate arithmetic and logic results",
        "D) Contains the current instruction during processing",
      ],
      correctAnswer:
        "B) Holds the memory location of data that needs to be accessed",
    },
    {
      id: 21,
      question:
        "Which register contains the memory address of the next instruction to be executed?",
      answers: [
        "A) Memory Address Register (MAR)",
        "B) Memory Data Register (MDR)",
        "C) Program Counter (PC)",
        "D) Current Instruction Register (CIR)",
      ],
      correctAnswer: "C) Program Counter (PC)",
    },
    {
      id: 22,
      question: "What is the primary function of the Control Unit (CU)?",
      answers: [
        "A) Perform arithmetic operations",
        "B) Store data temporarily",
        "C) Control the operation of other computer components",
        "D) Manage input/output operations",
      ],
      correctAnswer: "C) Control the operation of other computer components",
    },
    {
      id: 23,
      question:
        "Which bus carries the addresses of data between the processor and memory?",
      answers: [
        "A) Data Bus",
        "B) Address Bus",
        "C) Control Bus",
        "D) System Bus",
      ],
      correctAnswer: "B) Address Bus",
    },
    {
      id: 24,
      question:
        "What type of memory is directly accessible by the CPU in Von Neumann architecture?",
      answers: [
        "A) Secondary Storage",
        "B) Virtual Memory",
        "C) RAM and Cache Memory",
        "D) ROM",
      ],
      correctAnswer: "C) RAM and Cache Memory",
    },
    {
      id: 25,
      question:
        "Which component manages the flow of data between the CPU and external devices?",
      answers: [
        "A) Memory Unit",
        "B) Control Unit",
        "C) Arithmetic and Logic Unit",
        "D) Input/Output (I/O) Controller",
      ],
      correctAnswer: "D) Input/Output (I/O) Controller",
    },
    {
      id: 26,
      question: "What does the Accumulator (AC) register do?",
      answers: [
        "A) Holds the memory address of the next instruction",
        "B) Stores intermediate arithmetic and logic results",
        "C) Contains the current instruction during processing",
        "D) Holds the memory location of data that needs to be accessed",
      ],
      correctAnswer: "B) Stores intermediate arithmetic and logic results",
    },
    {
      id: 27,
      question:
        "Which of the following is NOT a type of bus in a standard CPU system?",
      answers: [
        "A) Address Bus",
        "B) Data Bus",
        "C) Control Bus",
        "D) Instruction Bus",
      ],
      correctAnswer: "D) Instruction Bus",
    },
    {
      id: 28,
      question: "What does RAM stand for in the context of computer memory?",
      answers: [
        "A) Read Access Memory",
        "B) Random Access Memory",
        "C) Rapid Access Memory",
        "D) Remote Access Memory",
      ],
      correctAnswer: "B) Random Access Memory",
    },
    {
      id: 29,
      question:
        "Which component of Von Neumann Architecture interprets and executes program instructions?",
      answers: [
        "A) Memory Unit",
        "B) Input/Output Controller",
        "C) Central Processing Unit (CPU)",
        "D) Secondary Storage",
      ],
      correctAnswer: "C) Central Processing Unit (CPU)",
    },
    {
      id: 30,
      question: "The core components of Von Neumann architecture include:",
      answers: [
        "A) Control Unit, ALU, Memory Unit, Registers, Input/Output",
        "B) Keyboard, Monitor, CPU, Memory",
        "C) Operating System, Applications, Hardware",
        "D) Motherboard, Graphics Card, Hard Drive",
      ],
      correctAnswer:
        "A) Control Unit, ALU, Memory Unit, Registers, Input/Output",
    },
    {
      id: 31,
      question:
        "The concept of storing both data and instructions in the same memory is known as:",
      answers: [
        "A) Stored-program concept",
        "B) Cache memory",
        "C) Parallel processing",
        "D) Pipelining",
      ],
      correctAnswer: "A) Stored-program concept",
    },
    {
      id: 32,
      question:
        "The part of the CPU responsible for performing arithmetic and logical operations is:",
      answers: [
        "A) Control Unit",
        "B) Arithmetic Logic Unit (ALU)",
        "C) Memory Unit",
        "D) Registers",
      ],
      correctAnswer: "B) Arithmetic Logic Unit (ALU)",
    },
    {
      id: 33,
      question:
        "Which register holds the memory address of the next instruction to be executed?",
      answers: ["A) MAR", "B) MDR", "C) AC", "D) PC"],
      correctAnswer: "D) PC",
    },
    {
      id: 34,
      question: "The high-speed storage areas within the CPU are called:",
      answers: ["A) Cache memory", "B) Registers", "C) RAM", "D) Hard drive"],
      correctAnswer: "B) Registers",
    },
    {
      id: 35,
      question:
        "The component that manages the flow of data between the CPU and external devices is:",
      answers: [
        "A) ALU",
        "B) Control Unit",
        "C) Input/Output Controller",
        "D) Memory Unit",
      ],
      correctAnswer: "C) Input/Output Controller",
    },
    {
      id: 36,
      question: "The bus that carries the addresses of data is:",
      answers: [
        "A) Control Bus",
        "B) Data Bus",
        "C) Address Bus",
        "D) System Bus",
      ],
      correctAnswer: "C) Address Bus",
    },
    {
      id: 37,
      question:
        "The primary memory in a Von Neumann architecture typically consists of:",
      answers: [
        "A) RAM and Cache",
        "B) Hard drive and SSD",
        "C) ROM and BIOS",
        "D) Registers and ALU",
      ],
      correctAnswer: "A) RAM and Cache",
    },
    {
      id: 38,
      question: "Cache memory is used to:",
      answers: [
        "A) Store permanent data",
        "B) Increase the speed of data access",
        "C) Store the operating system",
        "D) Control input/output operations",
      ],
      correctAnswer: "B) Increase the speed of data access",
    },
  ],
};
