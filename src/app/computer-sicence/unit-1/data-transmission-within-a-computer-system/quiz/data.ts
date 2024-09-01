export const quiz = {
  totalQuestions: 34,
  questions: [
    {
      id: 2,
      question: "What is the primary function of the Address Bus?",
      answers: [
        "A) To transfer data between the CPU and memory.",
        "B) To carry control signals.",
        "C) To specify memory locations for data transfer.",
        "D) To store instructions for the CPU.",
      ],
      correctAnswer: "C) To specify memory locations for data transfer.",
    },
    {
      id: 3,
      question: "Registers within the CPU are primarily used for:",
      answers: [
        "A) Long-term data storage.",
        "B) Executing instructions directly.",
        "C) Holding data that is frequently used by the CPU.",
        "D) Managing peripheral devices.",
      ],
      correctAnswer: "C) Holding data that is frequently used by the CPU.",
    },
    {
      id: 4,
      question:
        "Which of the following represents the correct order of the instruction cycle?",
      answers: [
        "A) Decode-Fetch-Execute-Store",
        "B) Fetch-Decode-Execute-Store",
        "C) Execute-Fetch-Decode-Store",
        "D) Fetch-Execute-Decode-Store",
      ],
      correctAnswer: "B) Fetch-Decode-Execute-Store",
    },
    {
      id: 5,
      question: "What is the purpose of pipelining in modern CPUs?",
      answers: [
        "A) To store more data in the CPU.",
        "B) To execute multiple instructions simultaneously.",
        "C) To transfer data faster between memory and CPU.",
        "D) To handle interrupts more efficiently.",
      ],
      correctAnswer: "B) To execute multiple instructions simultaneously.",
    },
    {
      id: 6,
      question:
        "Which component within the CPU performs arithmetic and logical operations?",
      answers: [
        "A) Control Unit",
        "B) Registers",
        "C) Arithmetic Logic Unit (ALU)",
        "D) Cache",
      ],
      correctAnswer: "C) Arithmetic Logic Unit (ALU)",
    },
    {
      id: 7,
      question:
        "How does the memory hierarchy improve data transmission efficiency?",
      answers: [
        "A) By storing all data in registers.",
        "B) By using multiple buses for data transfer.",
        "C) By providing faster access to frequently used data.",
        "D) By increasing the size of main memory.",
      ],
      correctAnswer: "C) By providing faster access to frequently used data.",
    },
    {
      id: 8,
      question: "What is an interrupt in the context of computer systems?",
      answers: [
        "A) A signal that temporarily halts CPU operations to handle an important event.",
        "B) A type of memory used for storing frequently accessed data.",
        "C) A method for increasing the speed of data transmission between components.",
        "D) A process of decoding instructions within the CPU.",
      ],
      correctAnswer:
        "A) A signal that temporarily halts CPU operations to handle an important event.",
    },
    {
      id: 9,
      question:
        "Which of the following is NOT a part of the system buses in a computer architecture?",
      answers: [
        "A) Data Bus",
        "B) Control Bus",
        "C) Address Bus",
        "D) Instruction Bus",
      ],
      correctAnswer: "D) Instruction Bus",
    },
    {
      id: 10,
      question:
        "What role do parallelism and multiple cores play in data transmission within a computer system?",
      answers: [
        "A) They reduce the need for memory hierarchy.",
        "B) They increase the speed of data processing and transmission.",
        "C) They improve the efficiency of single-threaded applications.",
        "D) They enhance the control unit&apos;scapability to handle interrupts.",
      ],
      correctAnswer:
        "B) They increase the speed of data processing and transmission.",
    },
    {
      id: 11,
      question:
        "Which of the following is the correct sequence for the components involved in the instruction cycle?",
      answers: [
        "A) MAR, ALU, Registers, Cache",
        "B) Registers, PC, ALU, Cache",
        "C) PC, MAR, MBR, ALU",
        "D) ALU, MAR, MBR, PC",
      ],
      correctAnswer: "C) PC, MAR, MBR, ALU",
    },
    {
      id: 12,
      question:
        "What is the primary function of the Control Bus in a computer system?",
      answers: [
        "A) To carry data between the CPU and memory.",
        "B) To manage control signals for coordinating operations.",
        "C) To address memory locations.",
        "D) To execute instructions directly.",
      ],
      correctAnswer:
        "B) To manage control signals for coordinating operations.",
    },
    {
      id: 13,
      question:
        "Which type of memory is known for being the fastest but has the smallest capacity?",
      answers: ["A) RAM", "B) Cache", "C) SSD", "D) Hard Drive"],
      correctAnswer: "B) Cache",
    },
    {
      id: 14,
      question: "How do input/output devices communicate with the CPU?",
      answers: [
        "A) Through direct memory access.",
        "B) Via control signals on the control bus.",
        "C) Using interrupts.",
        "D) By storing data in registers.",
      ],
      correctAnswer: "C) Using interrupts.",
    },
    {
      id: 15,
      question:
        "What is the primary advantage of using a memory hierarchy in computer systems?",
      answers: [
        "A) Increased storage capacity.",
        "B) Faster data access.",
        "C) Simplified bus architecture.",
        "D) Reduced power consumption.",
      ],
      correctAnswer: "B) Faster data access.",
    },
    {
      id: 16,
      question:
        "Which component acts as a communication pathway for data and control signals within a computer system?",
      answers: ["A) Register", "B) ALU", "C) Bus", "D) Cache"],
      correctAnswer: "C) Bus",
    },
    {
      id: 17,
      question: "What is the primary function of a data bus?",
      answers: [
        "A) To carry memory addresses",
        "B) To transfer data between components",
        "C) To control the timing of data transfer",
        "D) To perform arithmetic and logical operations",
      ],
      correctAnswer: "B) To transfer data between components",
    },
    {
      id: 18,
      question:
        "Data paths are primarily concerned with data movement within the:",
      answers: [
        "A) CPU",
        "B) Memory",
        "C) Input/Output devices",
        "D) System bus",
      ],
      correctAnswer: "A) CPU",
    },
    {
      id: 19,
      question: "Registers are characterized by their:",
      answers: [
        "A) Large capacity and slow access time",
        "B) Small capacity and fast access time",
        "C) Large capacity and fast access time",
        "D) Small capacity and slow access time",
      ],
      correctAnswer: "B) Small capacity and fast access time",
    },
    {
      id: 20,
      question: "Which type of memory typically has the fastest access time?",
      answers: ["A) RAM", "B) Cache", "C) Hard disk", "D) SSD"],
      correctAnswer: "B) Cache",
    },
    {
      id: 21,
      question: "The correct order of the instruction cycle is:",
      answers: [
        "A) Fetch, Decode, Execute, Store",
        "B) Decode, Fetch, Execute, Store",
        "C) Execute, Fetch, Decode, Store",
        "D) Store, Fetch, Decode, Execute",
      ],
      correctAnswer: "A) Fetch, Decode, Execute, Store",
    },
    {
      id: 22,
      question: "Pipelining in a CPU is a technique used to:",
      answers: [
        "A) Increase the size of the cache",
        "B) Improve data transfer speed on the bus",
        "C) Overlap the execution of multiple instructions",
        "D) Reduce the number of registers",
      ],
      correctAnswer: "C) Overlap the execution of multiple instructions",
    },
    {
      id: 23,
      question: "Interrupts are used to:",
      answers: [
        "A) Store data in registers",
        "B) Handle unexpected events during program execution",
        "C) Speed up the instruction cycle",
        "D) Access data from the hard disk",
      ],
      correctAnswer: "B) Handle unexpected events during program execution",
    },
    {
      id: 24,
      question: "Parallelism in computer systems refers to:",
      answers: [
        "A) Using a single core to execute multiple instructions",
        "B) Using multiple cores or processors to perform tasks simultaneously",
        "C) Increasing the clock speed of the CPU",
        "D) Reducing the size of the memory",
      ],
      correctAnswer:
        "B) Using multiple cores or processors to perform tasks simultaneously",
    },
    {
      id: 25,
      question: "What is the primary purpose of a bus in a computer system?",
      answers: [
        "A) To cool down the CPU",
        "B) To store data permanently",
        "C) To provide a communication pathway for data transfer between components",
        "D) To execute program instructions",
      ],
      correctAnswer:
        "C) To provide a communication pathway for data transfer between components",
    },
    {
      id: 26,
      question:
        "Which of the following is NOT a type of bus in a typical computer system?",
      answers: [
        "A) Data Bus",
        "B) Address Bus",
        "C) Control Bus",
        "D) Instruction Bus",
      ],
      correctAnswer: "D) Instruction Bus",
    },
    {
      id: 27,
      question: "What are data paths within a CPU?",
      answers: [
        "A) Physical connections between the CPU and external devices",
        "B) Dedicated circuits for moving data between functional units inside the CPU",
        "C) Software algorithms for data processing",
        "D) Virtual memory allocation techniques",
      ],
      correctAnswer:
        "B) Dedicated circuits for moving data between functional units inside the CPU",
    },
    {
      id: 28,
      question:
        "Which component of a computer system holds data that is frequently used by the CPU during processing?",
      answers: ["A) Hard Drive", "B) RAM", "C) Registers", "D) Cache"],
      correctAnswer: "C) Registers",
    },
    {
      id: 29,
      question:
        "What is the main advantage of using a memory hierarchy in modern computers?",
      answers: [
        "A) It reduces the overall cost of the system",
        "B) It improves data transmission speed by utilizing different levels of memory",
        "C) It increases the physical size of the computer",
        "D) It simplifies the computer&apos;sarchitecture",
      ],
      correctAnswer:
        "B) It improves data transmission speed by utilizing different levels of memory",
    },
    {
      id: 30,
      question: "What is the correct order of the instruction cycle?",
      answers: [
        "A) Execute - Fetch - Decode",
        "B) Fetch - Execute - Decode",
        "C) Decode - Fetch - Execute",
        "D) Fetch - Decode - Execute",
      ],
      correctAnswer: "D) Fetch - Decode - Execute",
    },
    {
      id: 31,
      question: "What is pipelining in CPU processing?",
      answers: [
        "A) A method of cooling the CPU",
        "B) A technique where multiple instructions are in different stages of execution simultaneously",
        "C) A way to increase the physical size of the CPU",
        "D) A process of transferring data between the CPU and hard drive",
      ],
      correctAnswer:
        "B) A technique where multiple instructions are in different stages of execution simultaneously",
    },
    {
      id: 32,
      question:
        "How do input/output devices typically communicate with the CPU?",
      answers: [
        "A) Through direct memory access",
        "B) Using interrupts",
        "C) Via the power supply",
        "D) Through the operating system only",
      ],
      correctAnswer: "B) Using interrupts",
    },
    {
      id: 33,
      question:
        "What is the primary purpose of an interrupt in a computer system?",
      answers: [
        "A) To shut down the computer",
        "B) To signal the CPU to handle an important event",
        "C) To increase the clock speed of the CPU",
        "D) To defragment the hard drive",
      ],
      correctAnswer: "B) To signal the CPU to handle an important event",
    },
    {
      id: 34,
      question:
        "Which of the following best describes parallelism in computer architecture?",
      answers: [
        "A) A method of storing data vertically in memory",
        "B) A technique to improve data transmission speed by using multiple processing units",
        "C) A way to organize files on a hard drive",
        "D) A protocol for communication between the CPU and GPU",
      ],
      correctAnswer:
        "B) A technique to improve data transmission speed by using multiple processing units",
    },
  ],
};
