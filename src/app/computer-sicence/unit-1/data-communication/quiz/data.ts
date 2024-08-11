export const quiz = {
  totalQuestions: 55,
  questions: [
    {
      id: 1,
      question: "What is data communication?",
      answers: [
        "The process of encoding data",
        "The process of exchanging data between devices",
        "The process of storing data",
        "The process of deleting data",
      ],
      correctAnswer: "The process of exchanging data between devices",
    },
    {
      id: 2,
      question:
        "Which component in a network communication system is responsible for sending the message?",
      answers: ["Receiver", "Protocol", "Medium", "Sender"],
      correctAnswer: "Sender",
    },
    {
      id: 3,
      question:
        "What is the data or information to be transmitted in a communication network called?",
      answers: ["Protocol", "Message", "Medium", "Sender"],
      correctAnswer: "Message",
    },
    {
      id: 4,
      question: "Which of the following is NOT a type of transmission medium?",
      answers: ["Cables", "Optical fibers", "Wireless mediums", "Database"],
      correctAnswer: "Database",
    },
    {
      id: 5,
      question:
        "What ensures effective communication between devices in a network?",
      answers: ["Sender", "Protocol", "Medium", "Receiver"],
      correctAnswer: "Protocol",
    },
    {
      id: 6,
      question:
        "In which mode of network communication can data flow in both directions but not simultaneously?",
      answers: ["Simplex", "Half-Duplex", "Full-Duplex", "Asynchronous"],
      correctAnswer: "Half-Duplex",
    },
    {
      id: 7,
      question:
        "Which mode of data transmission involves variable time intervals between characters?",
      answers: ["Synchronous", "Asynchronous", "Half-Duplex", "Full-Duplex"],
      correctAnswer: "Asynchronous",
    },
    {
      id: 8,
      question:
        "Which device connects multiple LAN devices into a single network?",
      answers: ["Router", "Switch", "Hub", "Gateway"],
      correctAnswer: "Hub",
    },
    {
      id: 9,
      question: "What is the primary function of a router in a network?",
      answers: [
        "Connects multiple LAN devices",
        "Forwards data packets by selecting the best pathway",
        "Converts data packet formats",
        "Detects errors in data transmission",
      ],
      correctAnswer: "Forwards data packets by selecting the best pathway",
    },
    {
      id: 10,
      question: "Which network architecture centralizes control of data?",
      answers: [
        "Peer-to-Peer Network",
        "Client/Server Network",
        "Bus Topology",
        "Ring Topology",
      ],
      correctAnswer: "Client/Server Network",
    },
    {
      id: 11,
      question:
        "Which type of network covers a limited area like a single building?",
      answers: ["WAN", "LAN", "MAN", "VPN"],
      correctAnswer: "LAN",
    },
    {
      id: 12,
      question: "Which characteristic is NOT associated with a WAN?",
      answers: [
        "Covers large physical areas",
        "Connects multiple LANs",
        "Offers high-speed connections",
        "Sometimes prone to communication errors",
      ],
      correctAnswer: "Offers high-speed connections",
    },
    {
      id: 13,
      question:
        "What is the primary benefit of a Virtual Private Network (VPN)?",
      answers: [
        "High-speed connections",
        "Cost-effective long-distance communication",
        "Limited area coverage",
        "Reliable wired connections",
      ],
      correctAnswer: "Cost-effective long-distance communication",
    },
    {
      id: 14,
      question:
        "Which wireless network technology is commonly used in homes and offices?",
      answers: [
        "Wi-Fi",
        "Bluetooth",
        "Cellular Networks",
        "Satellite Networks",
      ],
      correctAnswer: "Wi-Fi",
    },
    {
      id: 15,
      question: "What is a common disadvantage of wireless networks?",
      answers: [
        "Mobility",
        "Scalability",
        "Interference",
        "Cost-effective installation",
      ],
      correctAnswer: "Interference",
    },
    {
      id: 16,
      question: "Which network topology uses a central hub?",
      answers: [
        "Bus Topology",
        "Star Topology",
        "Ring Topology",
        "Mesh Topology",
      ],
      correctAnswer: "Star Topology",
    },
    {
      id: 17,
      question: "What is a feature of Mesh Topology?",
      answers: [
        "Central hub",
        "Simple cabling",
        "High robustness",
        "Easy troubleshooting",
      ],
      correctAnswer: "High robustness",
    },
    {
      id: 18,
      question:
        "In the OSI model, which layer is responsible for logical addressing and routing?",
      answers: [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer",
      ],
      correctAnswer: "Network Layer",
    },
    {
      id: 19,
      question: "Which OSI layer handles data encryption and formatting?",
      answers: [
        "Transport Layer",
        "Session Layer",
        "Presentation Layer",
        "Network Layer",
      ],
      correctAnswer: "Presentation Layer",
    },
    {
      id: 20,
      question: "What does guided media use for data transmission?",
      answers: [
        "Wireless signals",
        "Physical cables",
        "Satellite signals",
        "Bluetooth",
      ],
      correctAnswer: "Physical cables",
    },
    {
      id: 21,
      question:
        "What type of guided media consists of pairs of wires twisted together?",
      answers: [
        "Coaxial Cable",
        "Fiber Optic Cable",
        "Twisted Pair Cable",
        "Radio Waves",
      ],
      correctAnswer: "Twisted Pair Cable",
    },
    {
      id: 22,
      question:
        "Which type of unguided media is used for short-range communication?",
      answers: ["Microwaves", "Radio Waves", "Infrared", "Fiber Optic Cable"],
      correctAnswer: "Infrared",
    },
    {
      id: 23,
      question: "Which network protocol is used for transferring web pages?",
      answers: ["FTP", "SMTP", "HTTP", "DNS"],
      correctAnswer: "HTTP",
    },
    {
      id: 24,
      question: "What does DNS stand for?",
      answers: [
        "Data Network Service",
        "Domain Name System",
        "Digital Network Security",
        "Direct Network Service",
      ],
      correctAnswer: "Domain Name System",
    },
    {
      id: 25,
      question: "What is the purpose of a firewall in network security?",
      answers: [
        "Encrypts data",
        "Monitors and controls network traffic",
        "Detects and removes viruses",
        "Manages user authentication",
      ],
      correctAnswer: "Monitors and controls network traffic",
    },
    {
      id: 26,
      question:
        "What is a common threat to network security involving the interception of communication?",
      answers: [
        "Malware",
        "Phishing",
        "Man-in-the-Middle Attack",
        "SQL Injection",
      ],
      correctAnswer: "Man-in-the-Middle Attack",
    },
    {
      id: 27,
      question:
        "Which cloud computing model provides virtualized computing resources over the internet?",
      answers: ["SaaS", "PaaS", "IaaS", "VPN"],
      correctAnswer: "IaaS",
    },
    {
      id: 28,
      question:
        "Which characteristic of cloud computing refers to quickly scaling resources up or down based on demand?",
      answers: [
        "Resource Pooling",
        "On-Demand Self-Service",
        "Rapid Elasticity",
        "Measured Service",
      ],
      correctAnswer: "Rapid Elasticity",
    },
    {
      id: 29,
      question:
        "What type of cloud is dedicated to a single organization for more control and security?",
      answers: [
        "Public Cloud",
        "Private Cloud",
        "Hybrid Cloud",
        "Community Cloud",
      ],
      correctAnswer: "Private Cloud",
    },
    {
      id: 30,
      question: "Which component of IoT collects data from the environment?",
      answers: [
        "Connectivity",
        "Devices and Sensors",
        "Data Processing and Analysis",
        "User Interface",
      ],
      correctAnswer: "Devices and Sensors",
    },
    {
      id: 31,
      question: "Which application of IoT is used to track patient health?",
      answers: ["Smart Home", "Healthcare", "Agriculture", "Transportation"],
      correctAnswer: "Healthcare",
    },
    {
      id: 32,
      question:
        "Which challenge of IoT involves ensuring compatibility between diverse devices?",
      answers: [
        "Security and Privacy",
        "Interoperability",
        "Data Management",
        "Scalability",
      ],
      correctAnswer: "Interoperability",
    },
    {
      id: 33,
      question: "What does 'broad network access' refer to in cloud computing?",
      answers: [
        "Access is limited to certain devices",
        "Access is limited to a local area network",
        "Access to services is available over the internet from a wide range of devices",
        "Access requires physical presence",
      ],
      correctAnswer:
        "Access to services is available over the internet from a wide range of devices",
    },
    {
      id: 34,
      question:
        "Which type of network is limited to a single building or campus?",
      answers: ["WAN", "LAN", "MAN", "VPN"],
      correctAnswer: "LAN",
    },
    {
      id: 35,
      question: "Which protocol is responsible for email transmission?",
      answers: ["HTTP", "FTP", "SMTP", "DNS"],
      correctAnswer: "SMTP",
    },
    {
      id: 36,
      question:
        "Which layer of the OSI model establishes, manages, and terminates sessions?",
      answers: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Session Layer",
      ],
      correctAnswer: "Session Layer",
    },
    {
      id: 37,
      question: "Which medium is used in fiber optic cables to transmit data?",
      answers: [
        "Electrical Signals",
        "Radio Waves",
        "Light Signals",
        "Sound Waves",
      ],
      correctAnswer: "Light Signals",
    },
    {
      id: 38,
      question:
        "What is the main advantage of using fiber optic cables over traditional copper cables?",
      answers: [
        "Lower Cost",
        "Higher Bandwidth and Speed",
        "Ease of Installation",
        "More Flexibility",
      ],
      correctAnswer: "Higher Bandwidth and Speed",
    },
    {
      id: 39,
      question:
        "Which layer of the OSI model is responsible for error detection and correction in node-to-node data transfer?",
      answers: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      correctAnswer: "Data Link Layer",
    },
    {
      id: 40,
      question:
        "What is the primary function of the Transport Layer in the OSI model?",
      answers: [
        "Error Detection and Correction",
        "Logical Addressing and Routing",
        "Ensuring Reliable Data Transfer",
        "Session Management",
      ],
      correctAnswer: "Ensuring Reliable Data Transfer",
    },
    {
      id: 41,
      question: "What is a benefit of using IPv6 over IPv4?",
      answers: [
        "Lower latency",
        "Simpler addressing scheme",
        "Larger address space",
        "More established protocol",
      ],
      correctAnswer: "Larger address space",
    },
    {
      id: 42,
      question:
        "Which type of attack involves overwhelming a network with a flood of traffic?",
      answers: [
        "Phishing Attack",
        "SQL Injection",
        "DDoS Attack",
        "Man-in-the-Middle Attack",
      ],
      correctAnswer: "DDoS Attack",
    },
    {
      id: 43,
      question:
        "What does the term 'latency' refer to in network communication?",
      answers: [
        "Data transfer rate",
        "Amount of data that can be transferred",
        "Delay before a transfer of data begins",
        "Security of the network",
      ],
      correctAnswer: "Delay before a transfer of data begins",
    },
    {
      id: 44,
      question:
        "Which cloud service model provides software applications over the internet?",
      answers: ["SaaS", "PaaS", "IaaS", "VPN"],
      correctAnswer: "SaaS",
    },
    {
      id: 45,
      question: "What is the primary purpose of network segmentation?",
      answers: [
        "Increase network speed",
        "Simplify network configuration",
        "Improve security and performance",
        "Reduce hardware costs",
      ],
      correctAnswer: "Improve security and performance",
    },
    {
      id: 46,
      question:
        "Which protocol is used to securely transfer files over the internet?",
      answers: ["FTP", "SFTP", "SMTP", "HTTP"],
      correctAnswer: "SFTP",
    },
    {
      id: 47,
      question:
        "Which technology is commonly used to create secure connections over the internet?",
      answers: ["Firewall", "VPN", "Antivirus", "Load Balancer"],
      correctAnswer: "VPN",
    },
    {
      id: 48,
      question: "What does 'throughput' measure in a network?",
      answers: [
        "Latency",
        "Bandwidth usage",
        "Amount of successful data transfer",
        "Number of connections",
      ],
      correctAnswer: "Amount of successful data transfer",
    },
    {
      id: 49,
      question:
        "Which layer of the OSI model converts data packets into electrical signals?",
      answers: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      correctAnswer: "Physical Layer",
    },
    {
      id: 50,
      question: "What is an advantage of using a star topology in a network?",
      answers: [
        "Simplifies network management",
        "Minimizes the use of cables",
        "Ensures redundancy",
        "Prevents network collisions",
      ],
      correctAnswer: "Simplifies network management",
    },
    {
      id: 51,
      question:
        "Which protocol is used for assigning IP addresses to devices on a network?",
      answers: ["HTTP", "FTP", "DHCP", "DNS"],
      correctAnswer: "DHCP",
    },
    {
      id: 52,
      question:
        "Which technology uses a centralized control to manage a network?",
      answers: [
        "Peer-to-Peer Network",
        "Client-Server Network",
        "Bus Topology",
        "Ring Topology",
      ],
      correctAnswer: "Client-Server Network",
    },
    {
      id: 53,
      question: "What is the role of the Application Layer in the OSI model?",
      answers: [
        "Handles encryption and compression",
        "Manages end-to-end communication",
        "Provides network services to applications",
        "Ensures reliable data transfer",
      ],
      correctAnswer: "Provides network services to applications",
    },
    {
      id: 54,
      question:
        "Which network topology connects each node to exactly two other nodes?",
      answers: [
        "Bus Topology",
        "Star Topology",
        "Ring Topology",
        "Mesh Topology",
      ],
      correctAnswer: "Ring Topology",
    },
    {
      id: 55,
      question: "What is the purpose of a network switch?",
      answers: [
        "Connects multiple LAN segments",
        "Routes data packets between networks",
        "Converts data formats",
        "Provides internet access",
      ],
      correctAnswer: "Connects multiple LAN segments",
    },
    {
      id: 56,
      question:
        "Which OSI layer is responsible for establishing, managing, and terminating sessions?",
      answers: [
        "Physical Layer",
        "Data Link Layer",
        "Session Layer",
        "Presentation Layer",
      ],
      correctAnswer: "Session Layer",
    },
    {
      id: 57,
      question: "Which network protocol provides error-free delivery of data?",
      answers: ["UDP", "IP", "TCP", "FTP"],
      correctAnswer: "TCP",
    },
    {
      id: 58,
      question: "What is a key characteristic of a peer-to-peer network?",
      answers: [
        "Centralized control",
        "Each node has equal status",
        "Simplifies network management",
        "Requires a central server",
      ],
      correctAnswer: "Each node has equal status",
    },
    {
      id: 59,
      question: "Which protocol is used for secure web communication?",
      answers: ["FTP", "HTTP", "HTTPS", "SMTP"],
      correctAnswer: "HTTPS",
    },
    {
      id: 60,
      question:
        "What is the main function of the Transport Layer in the OSI model?",
      answers: [
        "Error detection and correction",
        "Logical addressing and routing",
        "Ensuring reliable data transfer",
        "Data encryption",
      ],
      correctAnswer: "Ensuring reliable data transfer",
    },
    {
      id: 61,
      question:
        "Which type of network covers a large geographical area, such as a city?",
      answers: ["LAN", "WAN", "MAN", "PAN"],
      correctAnswer: "MAN",
    },
    {
      id: 62,
      question:
        "Which type of cable is least affected by electromagnetic interference?",
      answers: [
        "Coaxial Cable",
        "Fiber Optic Cable",
        "Twisted Pair Cable",
        "Copper Cable",
      ],
      correctAnswer: "Fiber Optic Cable",
    },
    {
      id: 63,
      question:
        "Which type of attack exploits vulnerabilities in software to gain unauthorized access?",
      answers: [
        "DDoS Attack",
        "Phishing Attack",
        "SQL Injection",
        "Man-in-the-Middle Attack",
      ],
      correctAnswer: "SQL Injection",
    },
    {
      id: 64,
      question:
        "Which component in a network architecture acts as an intermediary for requests from clients seeking resources from other servers?",
      answers: ["Firewall", "Proxy Server", "Router", "Switch"],
      correctAnswer: "Proxy Server",
    },
    {
      id: 65,
      question: "What is the primary purpose of a load balancer in a network?",
      answers: [
        "Enhance security",
        "Distribute traffic evenly across multiple servers",
        "Monitor network traffic",
        "Store backup data",
      ],
      correctAnswer: "Distribute traffic evenly across multiple servers",
    },
    {
      id: 66,
      question:
        "Which type of network is designed for personal devices within a range of a few meters?",
      answers: ["LAN", "WAN", "PAN", "MAN"],
      correctAnswer: "PAN",
    },
    {
      id: 67,
      question:
        "Which protocol is used to manage the assignment of IP addresses in a network?",
      answers: ["HTTP", "FTP", "DNS", "DHCP"],
      correctAnswer: "DHCP",
    },
    {
      id: 68,
      question: "What is the main advantage of using a mesh topology?",
      answers: [
        "Simple cabling",
        "Central hub",
        "High robustness",
        "Easy troubleshooting",
      ],
      correctAnswer: "High robustness",
    },
    {
      id: 69,
      question:
        "Which device in a network is used to forward data packets between computer networks?",
      answers: ["Switch", "Router", "Hub", "Bridge"],
      correctAnswer: "Router",
    },
    {
      id: 70,
      question:
        "Which network topology has all nodes connected to a single central cable?",
      answers: [
        "Star Topology",
        "Ring Topology",
        "Bus Topology",
        "Mesh Topology",
      ],
      correctAnswer: "Bus Topology",
    },
    {
      id: 71,
      question: "What does TCP stand for?",
      answers: [
        "Transmission Control Protocol",
        "Transfer Communication Protocol",
        "Transport Connection Protocol",
        "Temporary Control Protocol",
      ],
      correctAnswer: "Transmission Control Protocol",
    },
    {
      id: 72,
      question: "What is the purpose of an IP address?",
      answers: [
        "Identify the physical location of a device",
        "Identify the logical location of a device",
        "Encrypt data during transmission",
        "Control data transfer rate",
      ],
      correctAnswer: "Identify the logical location of a device",
    },
    {
      id: 73,
      question:
        "Which protocol is used for transferring files between computers on a network?",
      answers: ["HTTP", "FTP", "SMTP", "DNS"],
      correctAnswer: "FTP",
    },
    {
      id: 74,
      question:
        "Which component of the OSI model manages data representation and encryption?",
      answers: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Presentation Layer",
      ],
      correctAnswer: "Presentation Layer",
    },
    {
      id: 75,
      question: "What is a benefit of using cloud computing?",
      answers: [
        "Increased hardware costs",
        "Limited scalability",
        "Enhanced flexibility and scalability",
        "Slower data access",
      ],
      correctAnswer: "Enhanced flexibility and scalability",
    },
    {
      id: 76,
      question:
        "Which type of network uses a combination of public and private cloud resources?",
      answers: [
        "Public Cloud",
        "Private Cloud",
        "Hybrid Cloud",
        "Community Cloud",
      ],
      correctAnswer: "Hybrid Cloud",
    },
    {
      id: 77,
      question: "What does 'scalability' refer to in a network context?",
      answers: [
        "Ability to increase or decrease resources as needed",
        "Ability to maintain consistent performance",
        "Ability to prevent unauthorized access",
        "Ability to simplify network management",
      ],
      correctAnswer: "Ability to increase or decrease resources as needed",
    },
    {
      id: 78,
      question: "Which protocol is used to retrieve email from a mail server?",
      answers: ["SMTP", "POP3", "IMAP", "FTP"],
      correctAnswer: "POP3",
    },
    {
      id: 79,
      question: "What is the function of the Data Link Layer in the OSI model?",
      answers: [
        "Provides error-free delivery of data",
        "Routes data packets",
        "Manages end-to-end communication",
        "Converts data packets into electrical signals",
      ],
      correctAnswer: "Provides error-free delivery of data",
    },
    {
      id: 80,
      question:
        "Which technology enables devices to connect to the internet without wires?",
      answers: ["Ethernet", "DSL", "Wi-Fi", "Cable Modem"],
      correctAnswer: "Wi-Fi",
    },
  ],
};
