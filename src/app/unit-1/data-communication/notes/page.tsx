"use client";

import Image from 'next/image'
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const DataCommunicationPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const networkTypes = [
    {
      title: "Local Area Networks (LAN)",
      description:
        "Local Area Network (LAN) spans a limited area like a single building or nearby buildings. It is used for sharing applications, printers, email, and other tasks. LANs offer high-speed wired or wireless connections and are very reliable.",
      characteristics: [
        "Limited Area: Confined to a small physical area.",
        "High Speed: Uses high-speed connections.",
        "Reliability: Communication errors are rare.",
        "Limited Computers: Consists of a limited number of computers.",
      ],
    },
    {
      title: "Wide Area Networks (WAN)",
      description:
        "Wide Area Network (WAN) covers large physical areas, connecting sites across cities, countries, and continents. It is made up of two or more LANs connected together.",
      characteristics: [
        "Large Area: Spans a large physical area.",
        "Slow Speed: Communication speed is slower compared to LAN.",
        "Public Networks: Connects computers through public networks.",
        "Multiple LANs: Connects multiple LANs.",
        "Complexity: Sometimes prone to communication errors due to complexity.",
      ],
    },
    {
      title: "Metropolitan Area Network (MAN)",
      description:
        "Metropolitan Area Network (MAN) spans from several buildings to entire cities. It connects multiple LANs with high-speed communication lines and is used by organizations like telephone companies and ISPs.",
      characteristics: [
        "Medium Size: Larger than LAN and smaller than WAN.",
        "High Speed: Provides high-speed communication.",
        "Coverage: Covers areas between 5 to 50 km diameter.",
        "Technology: Uses fiber optic cable or microwave transmission.",
      ],
    },
    {
      title: "Virtual Private Network (VPN)",
      description:
        "Virtual Private Network (VPN) provides remote access to organizational networks through public telecommunication infrastructure like the internet. It allows secure communication over long distances.",
      characteristics: [
        "Public Networks: Uses public networks for connectivity.",
        "Security: Provides secure remote access.",
        "Cost-effective: Offers cheap communication over long distances.",
      ],
    },
  ];

  const toggleSection = (index: any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const umlCode = `
    @startuml
    !define RECTANGLE class
    
    skinparam rectangle {
        BackgroundColor White
        BorderColor Black
    }
   
    rectangle "Sender/Transmitter" as sender
    rectangle "Receiver" as receiver
    rectangle "Message" as message
    rectangle "Medium" as medium
    
    sender -right-> message : sends data
    message -right-> medium : travels through
    medium -right-> receiver : delivers to
    
    note top of sender : e.g. computer, cell phone
    note bottom of message : Data (text, audio, video)
    note top of medium : Wired or Wireless
    note bottom of receiver : e.g. computer, TV
    
    note "Protocol\ (governs communication)" as protocol
    protocol .. sender
    protocol .. receiver
    
    @enduml
      `;

  const umlCode2 = `
@startuml

skinparam defaultTextAlignment center
skinparam roundCorner 20
skinparam handwritten false

title Network Communication Modes

rectangle "Directional Modes" {
  rectangle "Simplex Mode" as SM {
    actor "Sender" as S1
    actor "Receiver" as R1
    S1 -right-> R1 : One-way
  }
  
  rectangle "Half-Duplex Mode" as HDM {
    actor "Person A" as A
    actor "Person B" as B
    A <-right-> B : Two-way, taking turns
  }
  
  rectangle "Full-Duplex Mode" as FDM {
    actor "Caller" as C
    actor "Receiver" as R
    C <-[#red]right-> R : Two-way, simultaneous
  }
    note bottom of SM : Like TV broadcast One-way only
note bottom of HDM : Like walkie-talkies Two-way, taking turns
note bottom of FDM : Like phone calls Two-way, simultaneous
}

rectangle "Timing Modes" {
  rectangle "Asynchronous Transmission" as AT {
    actor "Sender" as AS
    actor "Receiver" as AR
    AS .right.> AR : Variable time intervals
  }
  
  rectangle "Synchronous Transmission" as ST {
    actor "Sender" as SS
    actor "Receiver" as SR
    SS =right=> SR : Fixed time intervals
  }
}

note bottom of AT : Like keyboard input Variable intervals between data
note bottom of ST : Like network links Continuous data stream

@enduml`;

  const umlCode3 = `
@startuml
skinparam componentStyle uml2

cloud "Internet" as internet

rectangle "Network A" {
  [Hub] as hub
  [Switch] as switch
  [Router] as router
  
  hub -[hidden]right- switch
  switch -[hidden]right- router
}

rectangle "Network B" {
  [Gateway] as gateway
}

internet -- router
router -- gateway

note bottom of hub
  Broadcasts to all devices
end note

note bottom of switch
  Sends data to specific devices
end note

note bottom of router
  Connects networks and
  chooses best path
end note

note bottom of gateway
  Translates between
  different protocols
end note

@enduml`;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">1.9 Data Communication</h1>
          <div className="overflow-y-auto pr-4">
            <p>
              Data Communication refers to the process of exchanging data or
              information between two or more devices or systems through a
              transmission medium such as cables, optical fibers, or wireless
              mediums. This communication can involve the transfer of various
              types of data, including text, numbers, images, audio, and video.
              It is a fundamental component of modern information technology and
              telecommunications.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Network Communication Components
            </h2>
            <p>Network communication consists of five basic components:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-blue-600 font-sans text-lg">
                  Sender:
                </strong>{" "}
                Also known as the transmitter, it is a computer or device that
                sends the {` `}
                <span className="text-green-600">
                  message (data or information)
                </span>{" "}
                from the source to the destination in a communication network.
                It may be a computer, workstation, cell phone, or camera.
              </li>
              <li>
                <strong className="text-green-600 font-sans text-lg">
                  Message:
                </strong>{" "}
                The data or information to be transmitted, which can be in the
                form of text, audio, video, or any combination of these.
              </li>
              <li>
                <strong className="text-red-600 font-sans text-lg">
                  Medium:
                </strong>{" "}
                The path through which the message travels from source to
                destination. It can be wired (e.g., telephone cable, coaxial
                cable, fiber optics) or wireless (e.g., Bluetooth, Wi-Fi,
                microwave, radio wave, satellite).
              </li>
              <li>
                <strong className="text-yellow-600 font-sans text-lg">
                  Receiver:
                </strong>{" "}
                The device that receives the transmitted message. It can be a
                computer, workstation, telephone handset, or television set.
              </li>
              <li>
                <strong className="text-indigo-600 font-sans text-lg">
                  Protocol:
                </strong>{" "}
                A set of rules that governs data communications. It represents
                an agreement between the communicating devices, ensuring they
                can communicate effectively.
              </li>
            </ul>
            <PlantUMLDiagram code={umlCode} />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Modes of Network Communication
            </h2>
            <p>
              Modes of network communication refer to the methods or ways
              information is transmitted from one place to another. The
              following are different modes of data communication:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Simplex Mode:</strong> Allows communication in only one
                direction. The receiver cannot send data back to the sender.
                Examples include electronic notice boards, radio, and television
                broadcasting.
              </li>
              <li>
                <strong>Half-Duplex Mode:</strong> Allows communication in both
                directions, but not at the same time. The sender and receiver
                take turns sending and receiving data. An example is a
                walkie-talkie, where each party must indicate when they have
                finished speaking.
              </li>
              <li>
                <strong>Full-Duplex Mode:</strong> Allows communication in both
                directions simultaneously. Both sender and receiver can send and
                receive data at the same time. Examples include telephone
                networks, where both parties can talk and listen simultaneously.
              </li>
              <li>
                <strong>Asynchronous Transmission:</strong> Involves variable
                time intervals between two characters. It uses start and stop
                bits for synchronization. This type is ideal for slow-speed
                communication where gaps may occur, such as keyboard data
                transmission.
              </li>
              <li>
                <strong>Synchronous Transmission:</strong> Has fixed time
                intervals between characters. The sender and receiver are
                synchronized, sending data as a continuous stream without start
                and stop bits. It is faster than asynchronous transmission due
                to fewer control bits and is used in network communication
                links.
              </li>
            </ul>
            <div className="my-10">
              <PlantUMLDiagram code={umlCode2} />
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Communication Devices
            </h2>
            <p>
              A Communication Device is used in telecommunication systems to
              transmit data from one location to another. Commonly used devices
              include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hub:</strong> A connectivity device used in LAN. It
                connects multiple LAN devices on one network, making them act as
                a single network. It is non-intelligent and sends output to all
                devices on the network.
              </li>
              <li>
                <strong>Switch:</strong> Performs the same job as a hub but is
                more intelligent. It forwards data packets only to the intended
                recipient node, using information about the data packet.
              </li>
              <li>
                <strong>Router:</strong> Connects two or more networks,
                forwarding data packets by selecting the best pathway based on
                network traffic. It connects local networks to the internet and
                routes data efficiently.
              </li>
              <li>
                <strong>Gateway:</strong> Connects different networks that use
                different protocols. It changes the format of data packets
                without altering the message content to make them conform to the
                application program of the remote computer.
              </li>
            </ul>
            <PlantUMLDiagram code={umlCode3} />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Network Architecture
            </h2>
            <p>
              Network Architecture is the design of a communication system,
              including hardware devices, cabling, network topology, and
              connections. It consists of server computers and client computers.
            </p>
            <div className="sm:grid grid-cols-2 gap-3">
              <div className="bg-orange-100 p-4 my-2 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">
                  Client/Server Networks
                </h3>
                <p>
                  Client/Server Network is a network where computers act as
                  either servers or clients. Servers provide resources like
                  information, software, printers, and internet connections.
                  Clients access these shared resources. This architecture
                  centralizes control of data, enhancing security and
                  management.
                </p>
              </div>

              <div className="bg-green-100 p-4 my-2 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">
                  Peer-to-Peer Networks
                </h3>
                <p>
                  Peer-to-Peer Network allows every computer to act as both
                  client and server. Each computer can share files and access
                  shared resources, making it flexible but difficult to manage
                  as it grows larger.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">
                  Types of Networks
                </h1>
                <p className="text-lg text-center mb-12 text-gray-700">
                  Different types of networks exist based on the size and area
                  they cover:
                </p>

                {networkTypes.map((network, index) => (
                  <div
                    key={index}
                    className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div
                      className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      onClick={() => toggleSection(index)}
                    >
                      <h2 className="text-2xl font-semibold">
                        {network.title}
                      </h2>
                      {expandedSection === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>

                    {expandedSection === index && (
                      <div className="p-6">
                        <p className="text-gray-700 mb-4">
                          {network.description}
                        </p>
                        <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                          Characteristics:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {network.characteristics.map((char, charIndex) => (
                            <li key={charIndex} className="text-gray-700">
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <section className="p-4 bg-green-100 rounded-xl mt-3">
              <h2 className="text-2xl font-semibold mb-3">Wireless Networks</h2>
              <p>
                Wireless Networks use wireless communication technologies to
                transmit data between devices without physical wired
                connections. They can operate over short distances (e.g., within
                a building) or large geographical areas (e.g., cellular
                networks).
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Examples of Wireless Networks
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Wi-Fi (Wireless Fidelity):</strong> Connects devices
                  to local area networks and the internet wirelessly. Common in
                  homes, offices, and public places.
                </li>
                <li>
                  <strong>Bluetooth:</strong> Short-range wireless technology
                  for connecting devices like headsets, keyboards, and mice.
                </li>
                <li>
                  <strong>Cellular Networks:</strong> Provide wireless
                  communication over large areas, enabling mobile voice calls,
                  messaging, and internet access.
                </li>
                <li>
                  <strong>Satellite Networks:</strong> Use satellites for
                  wireless connectivity over large areas, used for internet
                  access, TV broadcasting, and GPS.
                </li>
              </ul>
            </section>

            <div className="sm:grid grid-cols-2 gap-4">
              <div className="bg-teal-100 p-5 my-4">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-teal-600">Advantages</span> of Wireless
                  Networks
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Mobility: Allows users to access the internet and network
                    resources from anywhere within the coverage area.
                  </li>
                  <li>
                    Cost-effective: Easier and cheaper to install without the
                    need for cables.
                  </li>
                  <li>
                    Scalability: Easily expands to accommodate additional
                    devices and users.
                  </li>
                  <li>
                    Flexibility: Supports multiple devices for communication and
                    data sharing.
                  </li>
                  <li>
                    Remote Access: Facilitates remote access to network
                    resources, enabling work from home or on the go.
                  </li>
                </ul>
              </div>
              <div className="bg-red-100 p-5 my-4">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-red-600">Disadvantages</span> of
                  Wireless Networks
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Interference: Affected by interference from other devices
                    and environmental factors.
                  </li>
                  <li>
                    Security Risks: Vulnerable to unauthorized access and data
                    breaches.
                  </li>
                  <li>
                    Limited Range: Requires boosters for extended coverage.
                  </li>
                  <li>Performance: Can be slower in busy environments.</li>
                  <li>
                    Reliability: Issues with dropped signals and slow
                    connections.
                  </li>
                  <li>
                    Power Consumption: Wireless devices consume more power than
                    wired devices.
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Network Topologies
            </h2>
            <p>
              Network Topology refers to the arrangement of network nodes and
              connections between them. It represents the layout of nodes and
              connections in the network.
            </p>
            
           <Image src="https://cdn.ttgtmedia.com/rms/onlineimages/whatis-network_topology_02-f.png" alt="Network Topologies Image" width={400} height={400} className='w-full my-5' />

            <div className="sm:grid grid-cols-2 gap-5">
              <div className="bg-blue-100 p-5">
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Bus Topology
                </h3>
                <p>
                  Bus Topology connects each node along a single piece of cable
                  called a bus. Signals are sent to all devices, and terminators
                  are used to prevent signal reflection.
                </p>

                <p>Features of Bus Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Simple: Suitable for small networks.</li>
                  <li>Easy Connection: Easy to connect devices.</li>
                  <li>Cost-effective: Requires less cable.</li>
                </ul>

                <p>Limitations of Bus Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Single Point of Failure: Cable damage affects the entire
                    network.
                  </li>
                  <li>Troubleshooting: Difficult to identify problems.</li>
                  <li>Scalability: Not suitable for large networks.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Star Topology
                </h3>
                <p>
                  Star Topology connects each node to a central device called a
                  hub. Hubs can be connected to create larger networks.
                </p>
                <p>Features of Star Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Scalability: Suitable for both small and large networks.
                  </li>
                  <li>Fault Detection: Easy to detect and remove faults.</li>
                  <li>
                    Reliability: Cable failure does not affect the entire
                    network.
                  </li>
                </ul>
                <p>Limitations of Star Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hub Failure: Hub failure affects the entire network.</li>
                  <li>Cost: Expensive to implement with lengthy cabling.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Ring Topology
                </h3>
                <p>
                  Ring Topology forms an unbroken circle of network nodes, with
                  data flowing in one direction.
                </p>
                <p>Features of Ring Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Direct Connection: Each node is directly connected to the
                    ring.
                  </li>
                  <li>No Central Device: Does not require a central hub.</li>
                </ul>
                <p>Limitations of Ring Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Single Point of Failure: Node failure affects the entire
                    network.
                  </li>
                  <li>Troubleshooting: Difficult to identify problems.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Mesh Topology
                </h3>
                <p>
                  Mesh Topology connects each node to multiple other nodes. Data
                  is transmitted on the shortest path between nodes.
                </p>
                <p>Features of Mesh Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Robustness: Very robust and reliable.</li>
                  <li>
                    No Single Point of Failure: No single point of failure.
                  </li>
                </ul>
                <p>Limitations of Mesh Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complexity: Complex cabling and connectivity.</li>
                  <li>Cost: High cost due to cabling.</li>
                </ul>
              </div>

              <div className="cols-span-2">
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Hybrid Topology
                </h3>
                <p>Features of Hybrid Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flexibility: Highly flexible.</li>
                  <li>
                    Scalability: Scalable and adaptable to specific needs.
                  </li>
                </ul>
                <p>Limitations of Hybrid Topology:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complexity: Complicated configuration.</li>
                  <li>Cost: Expensive to implement.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Open Systems Interconnection (OSI) Model
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Data Link Layer:</strong> Ensures reliable node-to-node
                data transfer by detecting and correcting errors. It manages MAC
                (Media Access Control) addresses and frame synchronization.
              </li>
              <li>
                <strong>Network Layer:</strong> Responsible for logical
                addressing and routing. It determines the best path for data
                transfer between devices across different networks using
                protocols like IP (Internet Protocol).
              </li>
              <li>
                <strong>Transport Layer:</strong> Ensures end-to-end
                communication and data integrity. It manages flow control, error
                correction, and segmentation of data using protocols like TCP
                (Transmission Control Protocol) and UDP (User Datagram
                Protocol).
              </li>
              <li>
                <strong>Session Layer:</strong> Manages sessions between
                applications. It establishes, maintains, and terminates
                communication sessions between devices, ensuring proper data
                exchange.
              </li>
              <li>
                <strong>Presentation Layer:</strong> Translates data between the
                application layer and the network. It handles data encryption,
                compression, and formatting to ensure compatibility between
                different systems.
              </li>
              <li>
                <strong>Application Layer:</strong> Provides network services
                directly to user applications. It supports protocols like HTTP,
                FTP, SMTP, and DNS, enabling applications to access network
                resources.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Transmission Media
            </h2>
            <p className='mt-2'>Transmission media are the “roads” that allow information to move between devices, like between your computer and the internet.</p>
            <p>
              Transmission Media refers to the physical pathways used to
              transmit data between devices in a network. It can be classified
              into two main types: guided and unguided media.
            </p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <div className="bg-teal-100 h-fit p-5 my-4">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-teal-600">Guided </span> Media (wire)
                </h3>
                <p className="mb-2">
                  Guided media involves physical cables that guide data signals
                  along a specific path.
                </p>
                <p>Types of Guided Media:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Twisted Pair Cable:</strong>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        Unshielded Twisted Pair (UTP): Commonly used in telephones
                        and computer networks, it consists of pairs of wires twisted
                        together to reduce electromagnetic interference.
                      </li>
                      <li>
                        Shielded Twisted Pair (STP): Similar to UTP but with an
                        additional shielding layer to provide better protection
                        against interference.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Coaxial Cable:</strong> Consists of a central conductor,
                    an insulating layer, a metallic shield, and an outer protective
                    layer. It is used for cable TV and broadband internet
                    connections.
                  </li>
                  <li>
                    <strong>Fiber Optic Cable:</strong> Transmits data as light
                    signals through thin strands of glass or plastic fibers. It
                    offers high-speed data transmission and resistance to
                    electromagnetic interference, making it ideal for long-distance
                    communication.
                  </li>
                </ul>
              </div>
              <div className="bg-red-100 h-fit   p-5 my-4">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-red-600">Unguided </span> Media (wireless)
                </h3>
                <p className="mb-2">
                  Unguided media uses wireless signals to transmit data through the
                  air without physical cables.
                </p>
                <p>Types of Unguided Media:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Radio Waves:</strong> Used for wireless communication
                    over long distances, such as AM/FM radio, television
                    broadcasting, and mobile phones.
                  </li>
                  <li>
                    <strong>Microwaves:</strong> Used for point-to-point
                    communication over short and long distances, including satellite
                    communications and wireless LANs.
                  </li>
                  <li>
                    <strong>Infrared:</strong> Used for short-range communication
                    between devices like remote controls and computer peripherals.
                  </li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Comparison of Twisted Pair, Coaxial, Fiber Optic, and Unguided Media</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase">Type</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase">Description</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase">Use Cases</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Unshielded Twisted Pair (UTP)</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Commonly used in telephones and computer networks, UTP consists of pairs of wires twisted together to reduce electromagnetic interference.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Telephones, Ethernet networks.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Shielded Twisted Pair (STP)</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Similar to UTP but with an additional shielding layer to provide better protection against interference.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Environments with higher electromagnetic interference, such as industrial settings.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Coaxial Cable</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Consists of a central conductor, an insulating layer, a metallic shield, and an outer protective layer.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Cable TV, broadband internet connections.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Fiber Optic Cable</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Transmits data as light signals through thin strands of glass or plastic fibers.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        High-speed data transmission, long-distance communication, internet backbone.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Radio Waves</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Used for wireless communication over long distances.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        AM/FM radio, television broadcasting, mobile phones.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700 font-medium">Microwaves</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Used for point-to-point communication over short and long distances.
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                        Satellite communications, wireless LANs.
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">Infrared</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                        Used for short-range communication between devices.
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                        Remote controls, computer peripherals.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Network Protocols
            </h2>
            <p>
              Network Protocols are sets of rules and conventions that govern
              data communication between devices in a network. They ensure
              reliable data transmission, addressing, error handling, and more.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Common Network Protocols
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>HTTP (Hypertext Transfer Protocol):</strong> The
                foundation of data communication on the World Wide Web, used for
                transmitting web pages and other resources.
              </li>
              <li>
                <strong>HTTPS (Hypertext Transfer Protocol Secure):</strong> An
                extension of HTTP with added security for encrypting data
                between the browser and the server using SSL/TLS.
              </li>
              <li>
                <strong>FTP (File Transfer Protocol):</strong> Used for
                transferring files between computers on a network, supporting
                file upload and download.
              </li>
              <li>
                <strong>SMTP (Simple Mail Transfer Protocol):</strong> Used for
                sending and receiving email messages between mail servers.
              </li>
              <li>
                <strong>POP3 (Post Office Protocol 3):</strong> Retrieves emails
                from a mail server to a local client, downloading messages for
                offline access.
              </li>
              <li>
                <strong>IMAP (Internet Message Access Protocol):</strong> Allows
                users to access and manage their email on the server, enabling
                synchronization across multiple devices.
              </li>
              <li>
                <strong>DNS (Domain Name System):</strong> Translates domain
                names into IP addresses, allowing users to access websites using
                easy-to-remember names instead of numerical IP addresses.
              </li>
              <li>
                <strong>TCP (Transmission Control Protocol):</strong> Provides
                reliable, ordered, and error-checked data transmission between
                applications over a network.
              </li>
              <li>
                <strong>UDP (User Datagram Protocol):</strong> Offers a simpler,
                connectionless communication model with no error recovery,
                suitable for applications that require fast transmission, such
                as video streaming and gaming.
              </li>
              <li>
                <strong>IP (Internet Protocol):</strong> Responsible for
                addressing and routing data packets between devices on different
                networks.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Network Security
            </h2>
            <p>
              Network Security involves protecting network infrastructure, data,
              and devices from unauthorized access, attacks, and damage. It
              encompasses various technologies, processes, and practices to
              safeguard information and ensure data integrity.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Key Aspects of Network Security
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Authentication:</strong> Verifying the identity of users
                and devices accessing the network. Common methods include
                passwords, biometrics, and two-factor authentication (2FA).
              </li>
              <li>
                <strong>Encryption:</strong> Converting data into a secure
                format to prevent unauthorized access. Encryption algorithms
                like AES (Advanced Encryption Standard) and RSA
                (Rivest-Shamir-Adleman) are widely used for securing data
                transmission.
              </li>
              <li>
                <strong>Firewall:</strong> A network security device that
                monitors and controls incoming and outgoing network traffic
                based on predetermined security rules. Firewalls help protect
                networks from unauthorized access and cyber threats.
              </li>
              <li>
                <strong>
                  Intrusion Detection and Prevention Systems (IDPS):
                </strong>{" "}
                Monitor network traffic for suspicious activities and take
                action to prevent potential security breaches.
              </li>
              <li>
                <strong>Virtual Private Network (VPN):</strong> Provides secure
                remote access to a network over the internet, encrypting data
                and ensuring privacy for users.
              </li>
              <li>
                <strong>Access Control:</strong> Restricting access to network
                resources based on user roles and permissions, ensuring that
                only authorized users can access sensitive information.
              </li>
              <li>
                <strong>Antivirus and Anti-malware Software:</strong> Protects
                devices and networks from malicious software, including viruses,
                worms, and ransomware, by detecting and removing threats.
              </li>
              <li>
                <strong>Security Policies:</strong> Establishing guidelines and
                procedures for network security management, including user
                behavior, data handling, and incident response.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Common Network Security Threats
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Malware:</strong> Malicious software designed to damage
                or disrupt systems, including viruses, worms, Trojan horses, and
                spyware.
              </li>
              <li>
                <strong>Phishing:</strong> A form of social engineering where
                attackers deceive users into revealing sensitive information,
                such as login credentials or financial data, by posing as a
                trustworthy entity.
              </li>
              <li>
                <strong>Denial of Service (DoS) Attack:</strong> An attempt to
                make a network resource unavailable by overwhelming it with
                traffic, disrupting normal service.
              </li>
              <li>
                <strong>Man-in-the-Middle Attack:</strong> Intercepting and
                altering communication between two parties without their
                knowledge, potentially leading to data theft or manipulation.
              </li>
              <li>
                <strong>SQL Injection:</strong> Exploiting vulnerabilities in a
                web application&apos;s database query execution, allowing
                attackers to execute malicious SQL code and access sensitive
                data.
              </li>
              <li>
                <strong>Zero-Day Exploit:</strong> Attacks targeting software
                vulnerabilities unknown to developers, leaving systems exposed
                until patches are released.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Cloud Computing
            </h2>
            <p>
              Cloud Computing refers to delivering computing resources and
              services, such as servers, storage, databases, networking, and
              software, over the internet (the cloud). It enables organizations
              and individuals to access and use these resources on-demand,
              without the need to own or manage physical infrastructure.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Key Characteristics of Cloud Computing
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>On-Demand Self-Service:</strong> Users can access
                computing resources and services whenever needed without
                requiring human intervention from the service provider.
              </li>
              <li>
                <strong>Broad Network Access:</strong> Resources and services
                are accessible over the internet, supporting a wide range of
                devices, including desktops, laptops, smartphones, and tablets.
              </li>
              <li>
                <strong>Resource Pooling:</strong> Cloud providers pool their
                computing resources to serve multiple users simultaneously,
                optimizing resource utilization and cost-efficiency.
              </li>
              <li>
                <strong>Rapid Elasticity:</strong> Resources can be quickly
                scaled up or down based on user demand, allowing for flexibility
                and responsiveness to changing needs.
              </li>
              <li>
                <strong>Measured Service:</strong> Cloud services are monitored
                and billed based on usage, enabling cost transparency and
                efficient resource management.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Types of Cloud Computing Services
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Infrastructure as a Service (IaaS):</strong> Provides
                virtualized computing resources over the internet, including
                virtual machines, storage, and networking. Users can manage and
                control the underlying infrastructure.
                <p className="mt-1">
                  Examples: Amazon EC2, Google Compute Engine, Microsoft Azure
                  Virtual Machines.
                </p>
              </li>
              <li>
                <strong>Platform as a Service (PaaS):</strong> Provides a
                platform for developing, testing, and deploying applications
                without managing the underlying infrastructure. Users can focus
                on application development and deployment.
                <p className="mt-1">
                  Examples: Google App Engine, Microsoft Azure App Service,
                  Heroku.
                </p>
              </li>
              <li>
                <strong>Software as a Service (SaaS):</strong> Delivers software
                applications over the internet, accessible through web browsers
                or client applications. Users do not need to install or manage
                the software on their devices.
                <p className="mt-1">
                  Examples: Google Workspace, Microsoft Office 365, Salesforce,
                  Zoom.
                </p>
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Deployment Models of Cloud Computing
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Public Cloud:</strong> Cloud infrastructure is owned and
                operated by a third-party service provider and made available to
                the general public. Public clouds offer cost-effective solutions
                and are ideal for businesses with variable workloads.
              </li>
              <li>
                <strong>Private Cloud:</strong> Cloud infrastructure is
                dedicated to a single organization, providing more control and
                security. It is suitable for businesses with specific regulatory
                or security requirements.
              </li>
              <li>
                <strong>Hybrid Cloud:</strong> Combines public and private
                clouds, allowing data and applications to be shared between
                them. It offers greater flexibility and scalability while
                maintaining security and compliance.
              </li>
              <li>
                <strong>Community Cloud:</strong> Shared infrastructure for
                specific communities with common concerns, such as industry
                regulations or security requirements. It is managed by one or
                more organizations or a third-party provider.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Benefits of Cloud Computing
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Cost Savings: Reduces the need for physical infrastructure and
                maintenance, leading to lower IT costs.
              </li>
              <li>
                Scalability: Provides the ability to scale resources up or down
                based on demand, ensuring optimal performance.
              </li>
              <li>
                Flexibility: Enables access to resources and services from
                anywhere with an internet connection, supporting remote work and
                collaboration.
              </li>
              <li>
                Disaster Recovery: Offers data backup and recovery solutions,
                ensuring business continuity during disasters or outages.
              </li>
              <li>
                Automatic Updates: Ensures that software and infrastructure are
                updated with the latest features and security patches.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Challenges of Cloud Computing
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Security and Privacy: Concerns about data protection, privacy,
                and compliance with regulations in shared environments.
              </li>
              <li>
                Downtime and Reliability: Potential for service outages or
                disruptions affecting business operations.
              </li>
              <li>
                Vendor Lock-In: Dependence on a specific cloud provider&apos;s
                infrastructure and services, making it challenging to switch
                providers.
              </li>
              <li>
                Data Transfer and Latency: Concerns about data transfer speeds
                and latency for applications requiring real-time processing.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Internet of Things (IoT) (continued)
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Key Components of IoT
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Devices and Sensors:</strong> Physical objects equipped
                with sensors and actuators collect data from the environment and
                interact with other devices.
              </li>
              <li>
                <strong>Connectivity:</strong> Communication protocols and
                networks enable devices to connect and share data, including
                Wi-Fi, Bluetooth, cellular networks, and LoRaWAN.
              </li>
              <li>
                <strong>Data Processing and Analysis:</strong> Data collected by
                devices is processed and analyzed to derive meaningful insights,
                often using cloud-based platforms and analytics tools.
              </li>
              <li>
                <strong>User Interface:</strong> Applications and dashboards
                allow users to interact with and control IoT devices, providing
                real-time information and control.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Applications of IoT
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Smart Home:</strong> IoT devices enhance home automation
                and energy management, including smart thermostats, lighting,
                and security systems.
              </li>
              <li>
                <strong>Healthcare:</strong> Wearable devices and remote
                monitoring systems track patient health, enabling personalized
                care and early intervention.
              </li>
              <li>
                <strong>Industrial IoT (IIoT):</strong> IoT technologies
                optimize manufacturing processes, predictive maintenance, and
                supply chain management.
              </li>
              <li>
                <strong>Agriculture:</strong> IoT sensors monitor soil
                conditions, weather, and crop health, improving precision
                farming and resource management.
              </li>
              <li>
                <strong>Transportation and Logistics:</strong> IoT solutions
                improve vehicle tracking, fleet management, and supply chain
                efficiency.
              </li>
              <li>
                <strong>Smart Cities:</strong> IoT infrastructure enhances urban
                living through intelligent traffic management, waste management,
                and energy efficiency.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Benefits of IoT</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Efficiency and Automation:</strong> IoT automates
                processes, reducing manual intervention and increasing
                efficiency.
              </li>
              <li>
                <strong>Data-Driven Decision Making:</strong> Real-time data
                collection and analysis enable informed decision-making and
                optimization.
              </li>
              <li>
                <strong>Improved Quality of Life:</strong> IoT applications
                enhance convenience, safety, and comfort in various aspects of
                daily life.
              </li>
              <li>
                <strong>Cost Savings:</strong> IoT solutions optimize resource
                usage, reducing operational costs and improving productivity.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Challenges of IoT
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Security and Privacy:</strong> Concerns about data
                security, unauthorized access, and privacy in connected
                environments.
              </li>
              <li>
                <strong>Interoperability:</strong> Ensuring compatibility and
                communication between diverse devices and platforms.
              </li>
              <li>
                <strong>Data Management:</strong> Handling large volumes of data
                generated by IoT devices requires robust storage and processing
                capabilities.
              </li>
              <li>
                <strong>Scalability:</strong> Managing and scaling IoT networks
                as the number of connected devices grows.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
            <p>
              Understanding the fundamentals of data communication and
              networking is essential in today&apos;s interconnected world. From
              the OSI model and network topologies to cloud computing and the
              Internet of Things, these technologies shape how we communicate,
              work, and live. By leveraging the power of networks, we can
              achieve greater efficiency, security, and innovation across
              various industries and applications.
            </p>
            <p className="mt-2">
              As technology continues to evolve, the field of data communication
              will undoubtedly see new advancements and challenges. Staying
              informed about these developments is crucial for professionals in
              IT, telecommunications, and related fields. The concepts covered
              in this overview provide a solid foundation for understanding
              current technologies and preparing for future innovations in data
              communication and networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCommunicationPage;
