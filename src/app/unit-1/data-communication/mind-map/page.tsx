"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const umlCode = `
 @startmindmap
<style>
mindmapDiagram {
    .components {
        BackgroundColor lightskyblue
    }
    .modes {
        BackgroundColor lightgreen
    }
    .devices {
        BackgroundColor lightpink
    }
    .architecture {
        BackgroundColor lightsalmon
    }
    .networks {
        BackgroundColor plum
    }
    .topologies {
        BackgroundColor lightcoral
    }
    .osi {
        BackgroundColor lightseagreen
    }
    .media {
        BackgroundColor wheat
    }
    .protocols {
        BackgroundColor lavender
    }
    .security {
        BackgroundColor paleturquoise
    }
    .cloud {
        BackgroundColor peachpuff
    }
    .iot {
        BackgroundColor lightsteelblue
    }
}
</style>

* Data Communication
** Network Components <<components>>
*** Sender
*** Message
*** Medium
*** Receiver
*** Protocol
left side
** Communication Modes <<modes>>
*** Simplex
*** Half-Duplex
*** Full-Duplex
*** Asynchronous
*** Synchronous
** Communication Devices <<devices>>
*** Hub
*** Switch
*** Router
*** Gateway
** Network Architecture <<architecture>>
*** Client/Server
*** Peer-to-Peer
right side
** Types of Networks <<networks>>
*** LAN
*** WAN
*** MAN
*** VPN
*** Wireless Networks
**** Wi-Fi
**** Bluetooth
**** Cellular
**** Satellite
left side
** Network Topologies <<topologies>>
*** Bus
*** Star
*** Ring
*** Mesh
*** Hybrid
** OSI Model <<osi>>
*** Data Link Layer
*** Network Layer
*** Transport Layer
*** Session Layer
*** Presentation Layer
*** Application Layer
right side
** Transmission Media <<media>>
*** Guided
**** Twisted Pair
**** Coaxial
**** Fiber Optic
*** Unguided
**** Radio Waves
**** Microwaves
**** Infrared
left side
** Network Protocols <<protocols>>
*** HTTP/HTTPS
*** FTP
*** SMTP
*** POP3/IMAP
*** DNS
*** TCP/UDP
*** IP
** Network Security <<security>>
*** Authentication
*** Encryption
*** Firewall
*** IDPS
*** VPN
*** Access Control
*** Antivirus
right side
** Cloud Computing <<cloud>>
*** IaaS
*** PaaS
*** SaaS
*** Deployment Models
**** Public
**** Private
**** Hybrid
**** Community
left side
** Internet of Things <<iot>>
*** Devices and Sensors
*** Connectivity
*** Data Processing
*** User Interface
*** Applications
**** Smart Home
**** Healthcare
**** Industrial IoT
**** Agriculture
**** Transportation
**** Smart Cities

@endmindmap
`;
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);
    const mermaidContainerRef = useRef<HTMLDivElement>(null);

    const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
    const mermaidContainerRef2 = useRef<HTMLDivElement>(null);
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));

    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    useEffect(() => {
        if (mermaidContainerRef1.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel1]);

    useEffect(() => {
        if (mermaidContainerRef2.current) {
            mermaid.contentLoaded();
        }
    }, [zoomLevel2]);
    return (
        <div>
            <div className="container mx-auto p-4">
                <h2 className="text-xl font-bold mb-4">Network Communication Components</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Sender</td>
                            <td className="py-2 px-4 border-b">Device that sends the message (e.g., computer, cell phone)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Message</td>
                            <td className="py-2 px-4 border-b">Data or information to be transmitted (text, audio, video)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Medium</td>
                            <td className="py-2 px-4 border-b">Path through which the message travels (wired or wireless)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Receiver</td>
                            <td className="py-2 px-4 border-b">Device that receives the transmitted message</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Protocol</td>
                            <td className="py-2 px-4 border-b">Set of rules governing data communications</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className='text-xl font-bold mb-3'>Modes of Network Communication
                </h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Mode</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Simplex</td>
                            <td className="py-2 px-4 border-b">One-way communication; Receiver cannot send data back	</td>
                            <td className="py-2 px-4 border-b">Electronic notice boards, radio, television broadcasting</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Half-Duplex</td>
                            <td className="py-2 px-4 border-b">Two-way communication, but not simultaneous; Parties take turns sending and receiving	</td>
                            <td className="py-2 px-4 border-b">Walkie-talkies
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Full-Duplex	</td>
                            <td className="py-2 px-4 border-b">Two-way communication simultaneously; Both parties can send and receive at the same time	</td>
                            <td className="py-2 px-4 border-b">Telephone networks
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Asynchronous Transmission</td>
                            <td className="py-2 px-4 border-b">Variable time intervals between characters; Uses start and stop bits for synchronization; Ideal for slow-speed communication	</td>
                            <td className="py-2 px-4 border-b">Keyboard data transmission</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Synchronous Transmission	</td>
                            <td className="py-2 px-4 border-b">Fixed time intervals between characters; Sender and receiver are synchronized; Faster than asynchronous transmission	</td>
                            <td className="py-2 px-4 border-b">Network communication links</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-xl font-bold mb-4">Open Systems Interconnection (OSI) Model</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">Layer</th>
                            <th className="py-2 px-4 border-b">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Application</td>
                            <td className="py-2 px-4 border-b">Provides network services to applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Presentation</td>
                            <td className="py-2 px-4 border-b">Translates, encrypts, and compresses data</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Session</td>
                            <td className="py-2 px-4 border-b">Manages sessions between applications</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Transport</td>
                            <td className="py-2 px-4 border-b">Ensures end-to-end communication and data integrity</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Network</td>
                            <td className="py-2 px-4 border-b">Handles logical addressing and routing</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Data Link</td>
                            <td className="py-2 px-4 border-b">Ensures reliable node-to-node data transfer</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Physical</td>
                            <td className="py-2 px-4 border-b">Transmits raw bit stream over physical medium</td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Communication Devices</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Device</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Hub</td>
                                <td className="py-2 px-4 border-b">
                                    A connectivity device used in LAN. It connects multiple LAN devices on one network, making them act as a single network. It is non-intelligent and sends output to all devices on the network.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Switch</td>
                                <td className="py-2 px-4 border-b">
                                    Performs the same job as a hub but is more intelligent. It forwards data packets only to the intended recipient node, using information about the data packet.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Router</td>
                                <td className="py-2 px-4 border-b">
                                    Connects two or more networks, forwarding data packets by selecting the best pathway based on network traffic. It connects local networks to the internet and routes data efficiently.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Gateway</td>
                                <td className="py-2 px-4 border-b">
                                    Connects different networks that use different protocols. It changes the format of data packets without altering the message content to make them conform to the application program of the remote computer.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Network Architecture</h2>
                    <p className="mb-4">
                        Network Architecture is the design of a communication system, including hardware devices, cabling, network topology, and connections. It consists of server computers and client computers.
                    </p>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Client/Server Networks</td>
                                <td className="py-2 px-4 border-b">
                                    Client/Server Network is a network where computers act as either servers or clients. Servers provide resources like information, software, printers, and internet connections. Clients access these shared resources. This architecture centralizes control of data, enhancing security and management.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Peer-to-Peer Networks</td>
                                <td className="py-2 px-4 border-b">
                                    Peer-to-Peer Network allows every computer to act as both client and server. Each computer can share files and access shared resources, making it flexible but difficult to manage as it grows larger.
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Types of Networks</h2>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Network Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                                <th className="py-2 px-4 border-b">Characteristics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Local Area Networks (LAN)</td>
                                <td className="py-2 px-4 border-b">
                                    Local Area Network (LAN) spans a limited area like a single building or nearby buildings. It is used for sharing applications, printers, email, and other tasks. LANs offer high-speed wired or wireless connections and are very reliable.
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <ul className="list-disc list-inside">
                                        <li><span className="font-semibold">Limited Area:</span> Confined to a small physical area.</li>
                                        <li><span className="font-semibold">High Speed:</span> Uses high-speed connections.</li>
                                        <li><span className="font-semibold">Reliability:</span> Communication errors are rare.</li>
                                        <li><span className="font-semibold">Limited Computers:</span> Consists of a limited number of computers.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Wide Area Networks (WAN)</td>
                                <td className="py-2 px-4 border-b">
                                    Wide Area Network (WAN) covers large physical areas, connecting sites across cities, countries, and continents. It is made up of two or more LANs connected together.
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <ul className="list-disc list-inside">
                                        <li><span className="font-semibold">Large Area:</span> Spans a large physical area.</li>
                                        <li><span className="font-semibold">Slow Speed:</span> Communication speed is slower compared to LAN.</li>
                                        <li><span className="font-semibold">Public Networks:</span> Connects computers through public networks.</li>
                                        <li><span className="font-semibold">Multiple LANs:</span> Connects multiple LANs.</li>
                                        <li><span className="font-semibold">Complexity:</span> Sometimes prone to communication errors due to complexity.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Metropolitan Area Network (MAN)</td>
                                <td className="py-2 px-4 border-b">
                                    Metropolitan Area Network (MAN) spans from several buildings to entire cities. It connects multiple LANs with high-speed communication lines and is used by organizations like telephone companies and ISPs.
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <ul className="list-disc list-inside">
                                        <li><span className="font-semibold">Medium Size:</span> Larger than LAN and smaller than WAN.</li>
                                        <li><span className="font-semibold">High Speed:</span> Provides high-speed communication.</li>
                                        <li><span className="font-semibold">Coverage:</span> Covers areas between 5 to 50 km diameter.</li>
                                        <li><span className="font-semibold">Technology:</span> Uses fiber optic cable or microwave transmission.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Virtual Private Network (VPN)</td>
                                <td className="py-2 px-4 border-b">
                                    Virtual Private Network (VPN) provides remote access to organizational networks through public telecommunication infrastructure like the internet. It allows secure communication over long distances.
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <ul className="list-disc list-inside">
                                        <li><span className="font-semibold">Public Networks:</span> Uses public networks for connectivity.</li>
                                        <li><span className="font-semibold">Security:</span> Provides secure remote access.</li>
                                        <li><span className="font-semibold">Cost-effective:</span> Offers cheap communication over long distances.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Wireless Networks</h2>
                    <p className="mb-4">
                        Wireless Networks use wireless communication technologies to transmit data between devices without physical wired connections. They can operate over short distances (e.g., within a building) or large geographical areas (e.g., cellular networks).
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Examples of Wireless Networks</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Wi-Fi (Wireless Fidelity)</td>
                                <td className="py-2 px-4 border-b">
                                    Connects devices to local area networks and the internet wirelessly. Common in homes, offices, and public places.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Bluetooth</td>
                                <td className="py-2 px-4 border-b">
                                    Short-range wireless technology for connecting devices like headsets, keyboards, and mice.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cellular Networks</td>
                                <td className="py-2 px-4 border-b">
                                    Provide wireless communication over large areas, enabling mobile voice calls, messaging, and internet access.
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Satellite Networks</td>
                                <td className="py-2 px-4 border-b">
                                    Use satellites for wireless connectivity over large areas, used for internet access, TV broadcasting, and GPS.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Advantages of Wireless Networks</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Advantage</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Mobility</td>
                                <td className="py-2 px-4 border-b">Allows users to access the internet and network resources from anywhere within the coverage area.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost-effective</td>
                                <td className="py-2 px-4 border-b">Easier and cheaper to install without the need for cables.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Easily expands to accommodate additional devices and users.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Flexibility</td>
                                <td className="py-2 px-4 border-b">Supports multiple devices for communication and data sharing.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Remote Access</td>
                                <td className="py-2 px-4 border-b">Facilitates remote access to network resources, enabling work from home or on the go.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Disadvantages of Wireless Networks</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Disadvantage</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Interference</td>
                                <td className="py-2 px-4 border-b">Affected by interference from other devices and environmental factors.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Security Risks</td>
                                <td className="py-2 px-4 border-b">Vulnerable to unauthorized access and data breaches.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Limited Range</td>
                                <td className="py-2 px-4 border-b">Requires boosters for extended coverage.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Performance</td>
                                <td className="py-2 px-4 border-b">Can be slower in busy environments.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Reliability</td>
                                <td className="py-2 px-4 border-b">Issues with dropped signals and slow connections.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Power Consumption</td>
                                <td className="py-2 px-4 border-b">Wireless devices consume more power than wired devices.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Network Topologies</h2>
                    <p className="mb-4">
                        Network Topology refers to the arrangement of network nodes and connections between them. It represents the layout of nodes and connections in the network.
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Bus Topology</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Simple</td>
                                <td className="py-2 px-4 border-b">Suitable for small networks.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Easy Connection</td>
                                <td className="py-2 px-4 border-b">Easy to connect devices.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost-effective</td>
                                <td className="py-2 px-4 border-b">Requires less cable.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-semibold mb-2">Limitations of Bus Topology</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Limitation</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Single Point of Failure</td>
                                <td className="py-2 px-4 border-b">Cable damage affects the entire network.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Troubleshooting</td>
                                <td className="py-2 px-4 border-b">Difficult to identify problems.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Not suitable for large networks.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Star Topology</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Suitable for both small and large networks.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Fault Detection</td>
                                <td className="py-2 px-4 border-b">Easy to detect and remove faults.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Reliability</td>
                                <td className="py-2 px-4 border-b">Cable failure does not affect the entire network.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-semibold mb-2">Limitations of Star Topology</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Limitation</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Hub Failure</td>
                                <td className="py-2 px-4 border-b">Hub failure affects the entire network.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost</td>
                                <td className="py-2 px-4 border-b">Expensive to implement with lengthy cabling.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Ring Topology</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Direct Connection</td>
                                <td className="py-2 px-4 border-b">Each node is directly connected to the ring.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">No Central Device</td>
                                <td className="py-2 px-4 border-b">Does not require a central hub.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-semibold mb-2">Limitations of Ring Topology</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Limitation</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Single Point of Failure</td>
                                <td className="py-2 px-4 border-b">Node failure affects the entire network.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Troubleshooting</td>
                                <td className="py-2 px-4 border-b">Difficult to identify problems.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Mesh Topology</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Robustness</td>
                                <td className="py-2 px-4 border-b">Very robust and reliable.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">No Single Point of Failure</td>
                                <td className="py-2 px-4 border-b">No single point of failure.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-semibold mb-2">Limitations of Mesh Topology</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Limitation</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Complexity</td>
                                <td className="py-2 px-4 border-b">Complex cabling and connectivity.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost</td>
                                <td className="py-2 px-4 border-b">High cost due to cabling.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-lg font-semibold mb-2">Hybrid Topology</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Feature</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Flexibility</td>
                                <td className="py-2 px-4 border-b">Highly flexible.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Scalable and adaptable to specific needs.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-semibold mb-2">Limitations of Hybrid Topology</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Limitation</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Complexity</td>
                                <td className="py-2 px-4 border-b">Complicated configuration.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost</td>
                                <td className="py-2 px-4 border-b">Expensive to implement.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Transmission Media</h2>
                    <p className="mb-4">
                        Transmission Media refers to the physical pathways used to transmit data between devices in a network. It can be classified into two main types: guided and unguided media.
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Guided Media</h3>
                    <p className="mb-4">
                        Guided media involves physical cables that guide data signals along a specific path.
                    </p>
                    <h4 className="text-md font-semibold mb-2">Types of Guided Media:</h4>

                    <h5 className="font-semibold mb-2">Twisted Pair Cable</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Unshielded Twisted Pair (UTP)</td>
                                <td className="py-2 px-4 border-b">Commonly used in telephones and computer networks, it consists of pairs of wires twisted together to reduce electromagnetic interference.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Shielded Twisted Pair (STP)</td>
                                <td className="py-2 px-4 border-b">Similar to UTP but with an additional shielding layer to provide better protection against interference.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="font-semibold mb-2">Coaxial Cable</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Coaxial Cable</td>
                                <td className="py-2 px-4 border-b">Consists of a central conductor, an insulating layer, a metallic shield, and an outer protective layer. It is used for cable TV and broadband internet connections.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="font-semibold mb-2">Fiber Optic Cable</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Fiber Optic Cable</td>
                                <td className="py-2 px-4 border-b">Transmits data as light signals through thin strands of glass or plastic fibers. It offers high-speed data transmission and resistance to electromagnetic interference, making it ideal for long-distance communication.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Unguided Media</h3>
                    <p className="mb-4">
                        Unguided media uses wireless signals to transmit data through the air without physical cables.
                    </p>
                    <h4 className="text-md font-semibold mb-2">Types of Unguided Media:</h4>

                    <h5 className="font-semibold mb-2">Radio Waves</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Radio Waves</td>
                                <td className="py-2 px-4 border-b">Used for wireless communication over long distances, such as AM/FM radio, television broadcasting, and mobile phones.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="font-semibold mb-2">Microwaves</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Microwaves</td>
                                <td className="py-2 px-4 border-b">Used for point-to-point communication over short and long distances, including satellite communications and wireless LANs.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 className="font-semibold mb-2">Infrared</h5>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Infrared</td>
                                <td className="py-2 px-4 border-b">Used for short-range communication between devices like remote controls and computer peripherals.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Network Protocols</h2>
                    <p className="mb-4">
                        Network Protocols are sets of rules and conventions that govern data communication between devices in a network. They ensure reliable data transmission, addressing, error handling, and more.
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Common Network Protocols</h3>

                    <h4 className="text-md font-semibold mb-2">HTTP (Hypertext Transfer Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">HTTP</td>
                                <td className="py-2 px-4 border-b">The foundation of data communication on the World Wide Web, used for transmitting web pages and other resources.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">HTTPS (Hypertext Transfer Protocol Secure)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">HTTPS</td>
                                <td className="py-2 px-4 border-b">An extension of HTTP with added security for encrypting data between the browser and the server using SSL/TLS.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">FTP (File Transfer Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">FTP</td>
                                <td className="py-2 px-4 border-b">Used for transferring files between computers on a network, supporting file upload and download.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">SMTP (Simple Mail Transfer Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">SMTP</td>
                                <td className="py-2 px-4 border-b">Used for sending and receiving email messages between mail servers.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">POP3 (Post Office Protocol 3)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">POP3</td>
                                <td className="py-2 px-4 border-b">Retrieves emails from a mail server to a local client, downloading messages for offline access.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">IMAP (Internet Message Access Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">IMAP</td>
                                <td className="py-2 px-4 border-b">Allows users to access and manage their email on the server, enabling synchronization across multiple devices.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">DNS (Domain Name System)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">DNS</td>
                                <td className="py-2 px-4 border-b">Translates domain names into IP addresses, allowing users to access websites using easy-to-remember names instead of numerical IP addresses.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">TCP (Transmission Control Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">TCP</td>
                                <td className="py-2 px-4 border-b">Provides reliable, ordered, and error-checked data transmission between applications over a network.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">UDP (User Datagram Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">UDP</td>
                                <td className="py-2 px-4 border-b">Offers a simpler, connectionless communication model with no error recovery, suitable for applications that require fast transmission, such as video streaming and gaming.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4 className="text-md font-semibold mb-2">IP (Internet Protocol)</h4>
                    <table className="min-w-full bg-white border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Protocol</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">IP</td>
                                <td className="py-2 px-4 border-b">Responsible for addressing and routing data packets between devices on different networks.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Network Security</h2>
                    <p className="mb-4">
                        Network Security involves protecting network infrastructure, data, and devices from unauthorized access, attacks, and damage. It encompasses various technologies, processes, and practices to safeguard information and ensure data integrity.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Key Aspects of Network Security</h3>

                    <table className="min-w-full bg-white border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Aspect</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Authentication</td>
                                <td className="py-2 px-4 border-b">Verifying the identity of users and devices accessing the network. Common methods include passwords, biometrics, and two-factor authentication (2FA).</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Encryption</td>
                                <td className="py-2 px-4 border-b">Converting data into a secure format to prevent unauthorized access. Encryption algorithms like AES (Advanced Encryption Standard) and RSA (Rivest-Shamir-Adleman) are widely used for securing data transmission.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Firewall</td>
                                <td className="py-2 px-4 border-b">A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Firewalls help protect networks from unauthorized access and cyber threats.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">IDPS</td>
                                <td className="py-2 px-4 border-b">Monitor network traffic for suspicious activities and take action to prevent potential security breaches.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">VPN</td>
                                <td className="py-2 px-4 border-b">Provides secure remote access to a network over the internet, encrypting data and ensuring privacy for users.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Access Control</td>
                                <td className="py-2 px-4 border-b">Restricting access to network resources based on user roles and permissions, ensuring that only authorized users can access sensitive information.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Antivirus and Anti-malware Software</td>
                                <td className="py-2 px-4 border-b">Protects devices and networks from malicious software, including viruses, worms, and ransomware, by detecting and removing threats.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Security Policies</td>
                                <td className="py-2 px-4 border-b">Establishing guidelines and procedures for network security management, including user behavior, data handling, and incident response.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Common Network Security Threats</h3>

                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Threat</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Malware</td>
                                <td className="py-2 px-4 border-b">Malicious software designed to damage or disrupt systems, including viruses, worms, Trojan horses, and spyware.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Phishing</td>
                                <td className="py-2 px-4 border-b">A form of social engineering where attackers deceive users into revealing sensitive information, such as login credentials or financial data, by posing as a trustworthy entity.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Denial of Service (DoS) Attack</td>
                                <td className="py-2 px-4 border-b">An attempt to make a network resource unavailable by overwhelming it with traffic, disrupting normal service.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Man-in-the-Middle Attack</td>
                                <td className="py-2 px-4 border-b">Intercepting and altering communication between two parties without their knowledge, potentially leading to data theft or manipulation.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">SQL Injection</td>
                                <td className="py-2 px-4 border-b">Exploiting vulnerabilities in a web application&apos;s database query execution, allowing attackers to execute malicious SQL code and access sensitive data.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Zero-Day Exploit</td>
                                <td className="py-2 px-4 border-b">Attacks targeting software vulnerabilities unknown to developers, leaving systems exposed until patches are released.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                +<div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Cloud Computing</h2>
                    <p className="mb-4">
                        Cloud Computing refers to delivering computing resources and services, such as servers, storage, databases, networking, and software, over the internet (the cloud). It enables organizations and individuals to access and use these resources on-demand, without the need to own or manage physical infrastructure.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Key Characteristics of Cloud Computing</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Characteristic</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">On-Demand Self-Service</td>
                                <td className="py-2 px-4 border-b">Users can access computing resources and services whenever needed without requiring human intervention from the service provider.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Broad Network Access</td>
                                <td className="py-2 px-4 border-b">Resources and services are accessible over the internet, supporting a wide range of devices, including desktops, laptops, smartphones, and tablets.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Resource Pooling</td>
                                <td className="py-2 px-4 border-b">Cloud providers pool their computing resources to serve multiple users simultaneously, optimizing resource utilization and cost-efficiency.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Rapid Elasticity</td>
                                <td className="py-2 px-4 border-b">Resources can be quickly scaled up or down based on user demand, allowing for flexibility and responsiveness to changing needs.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Measured Service</td>
                                <td className="py-2 px-4 border-b">Cloud services are monitored and billed based on usage, enabling cost transparency and efficient resource management.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Types of Cloud Computing Services</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Service Type</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Infrastructure as a Service (IaaS)</td>
                                <td className="py-2 px-4 border-b">Provides virtualized computing resources over the internet, including virtual machines, storage, and networking. Users can manage and control the underlying infrastructure.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Platform as a Service (PaaS)</td>
                                <td className="py-2 px-4 border-b">Provides a platform for developing, testing, and deploying applications without managing the underlying infrastructure. Users can focus on application development and deployment.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Software as a Service (SaaS)</td>
                                <td className="py-2 px-4 border-b">Delivers software applications over the internet, accessible through web browsers or client applications. Users do not need to install or manage the software on their devices.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Deployment Models of Cloud Computing</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Deployment Model</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Public Cloud</td>
                                <td className="py-2 px-4 border-b">Cloud infrastructure is owned and operated by a third-party service provider and made available to the general public. Public clouds offer cost-effective solutions and are ideal for businesses with variable workloads.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Private Cloud</td>
                                <td className="py-2 px-4 border-b">Cloud infrastructure is dedicated to a single organization, providing more control and security. It is suitable for businesses with specific regulatory or security requirements.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Hybrid Cloud</td>
                                <td className="py-2 px-4 border-b">Combines public and private clouds, allowing data and applications to be shared between them. It offers greater flexibility and scalability while maintaining security and compliance.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Community Cloud</td>
                                <td className="py-2 px-4 border-b">Shared infrastructure for specific communities with common concerns, such as industry regulations or security requirements. It is managed by one or more organizations or a third-party provider.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Benefits of Cloud Computing</h3>
                    <table className="min-w-full bg-white border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Benefit</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost Savings</td>
                                <td className="py-2 px-4 border-b">Reduces the need for physical infrastructure and maintenance, leading to lower IT costs.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Provides the ability to scale resources up or down based on demand, ensuring optimal performance.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Flexibility</td>
                                <td className="py-2 px-4 border-b">Enables access to resources and services from anywhere with an internet connection, supporting remote work and collaboration.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Disaster Recovery</td>
                                <td className="py-2 px-4 border-b">Offers data backup and recovery solutions, ensuring business continuity during disasters or outages.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Automatic Updates</td>
                                <td className="py-2 px-4 border-b">Ensures that software and infrastructure are updated with the latest features and security patches.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Challenges of Cloud Computing</h3>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Challenge</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Security and Privacy</td>
                                <td className="py-2 px-4 border-b">Concerns about data protection, privacy, and compliance with regulations in shared environments.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Downtime and Reliability</td>
                                <td className="py-2 px-4 border-b">Potential for service outages or disruptions affecting business operations.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Vendor Lock-In</td>
                                <td className="py-2 px-4 border-b">Dependence on a specific cloud provider&apos;s infrastructure and services, making it challenging to switch providers.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Data Transfer and Latency</td>
                                <td className="py-2 px-4 border-b">Concerns about data transfer speeds and latency for applications requiring real-time processing.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>





                <div className="p-4">
                    {/* Key Components of IoT */}
                    <h2 className="text-2xl font-semibold mb-4">Internet of Things (IoT)
                    </h2>
                    <h2 className="text-xl font-semibold mb-4">Key Components of IoT</h2>
                    <table className="min-w-full bg-white border border-gray-300 mb-8">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Component</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Devices and Sensors</td>
                                <td className="py-2 px-4 border-b">Physical objects equipped with sensors and actuators to collect data from the environment and interact with other devices.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Connectivity</td>
                                <td className="py-2 px-4 border-b">Communication protocols and networks (e.g., Wi-Fi, Bluetooth, cellular networks, LoRaWAN) enable devices to connect and share data.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Data Processing and Analysis</td>
                                <td className="py-2 px-4 border-b">Data collected by devices is processed and analyzed to derive meaningful insights, often using cloud-based platforms and analytics tools.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">User Interface</td>
                                <td className="py-2 px-4 border-b">Applications and dashboards allow users to interact with and control IoT devices, providing real-time information and control.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Applications of IoT */}
                    <h2 className="text-xl font-semibold mb-4">Applications of IoT</h2>
                    <table className="min-w-full bg-white border border-gray-300 mb-8">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Application</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Smart Home</td>
                                <td className="py-2 px-4 border-b">Enhances home automation and energy management, including smart thermostats, lighting, and security systems.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Healthcare</td>
                                <td className="py-2 px-4 border-b">Wearable devices and remote monitoring systems track patient health, enabling personalized care and early intervention.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Industrial IoT (IIoT)</td>
                                <td className="py-2 px-4 border-b">Optimizes manufacturing processes, predictive maintenance, and supply chain management.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Agriculture</td>
                                <td className="py-2 px-4 border-b">Sensors monitor soil conditions, weather, and crop health, improving precision farming and resource management.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Transportation and Logistics</td>
                                <td className="py-2 px-4 border-b">Improves vehicle tracking, fleet management, and supply chain efficiency.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Smart Cities</td>
                                <td className="py-2 px-4 border-b">Enhances urban living through intelligent traffic management, waste management, and energy efficiency.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Benefits of IoT */}
                    <h2 className="text-xl font-semibold mb-4">Benefits of IoT</h2>
                    <table className="min-w-full bg-white border border-gray-300 mb-8">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Benefit</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Efficiency and Automation</td>
                                <td className="py-2 px-4 border-b">Automates processes, reducing manual intervention and increasing efficiency.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Data-Driven Decision Making</td>
                                <td className="py-2 px-4 border-b">Real-time data collection and analysis enable informed decision-making and optimization.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Improved Quality of Life</td>
                                <td className="py-2 px-4 border-b">Enhances convenience, safety, and comfort in various aspects of daily life.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Cost Savings</td>
                                <td className="py-2 px-4 border-b">Optimizes resource usage, reducing operational costs and improving productivity.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Challenges of IoT */}
                    <h2 className="text-xl font-semibold mb-4">Challenges of IoT</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Challenge</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Security and Privacy</td>
                                <td className="py-2 px-4 border-b">Concerns about data security, unauthorized access, and privacy in connected environments.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Interoperability</td>
                                <td className="py-2 px-4 border-b">Ensuring compatibility and communication between diverse devices and platforms.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Data Management</td>
                                <td className="py-2 px-4 border-b">Handling large volumes of data generated by IoT devices requires robust storage and processing capabilities.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">Scalability</td>
                                <td className="py-2 px-4 border-b">Managing and scaling IoT networks as the number of connected devices grows.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <PlantUMLDiagram code={umlCode} />

        </div>
    );
};

export default Page;
