// import React, { useState, useCallback, useEffect } from "react";
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   BackgroundVariant,
//   addEdge,
//   Node,
//   Edge,
//   NodeChange,
//   EdgeChange,
//   Connection,
// } from "reactflow";
// import "reactflow/dist/style.css";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "./ui/button";

// type CustomNode = Node<{ label: string; backgroundColor: string }>;

// function MindMap() {
//   const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode[]>([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   // Check if localStorage is available
//   const isLocalStorageAvailable = () => {
//     try {
//       localStorage.setItem('test', 'test');
//       localStorage.removeItem('test');
//       return true;
//     } catch (e) {
//       return false;
//     }
//   }

//   // Load data from localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined' && isLocalStorageAvailable()) {
//       const savedUserId = localStorage.getItem('mindmap-userId');
//       if (savedUserId) {
//         setUserId(savedUserId);
//         const savedNodes = localStorage.getItem(`mindmap-nodes-${savedUserId}`);
//         const savedEdges = localStorage.getItem(`mindmap-edges-${savedUserId}`);

//         if (savedNodes) {
//           const parsedNodes = JSON.parse(savedNodes);
//           setNodes(parsedNodes);
//         }
//         if (savedEdges) {
//           const parsedEdges = JSON.parse(savedEdges);
//           setEdges(parsedEdges);
//         }
//       }
//     }
//   }, []);

//   // Save data to localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined' && isLocalStorageAvailable() && userId) {
//       localStorage.setItem(`mindmap-nodes-${userId}`, JSON.stringify(nodes));
//       localStorage.setItem(`mindmap-edges-${userId}`, JSON.stringify(edges));
//     }
//   }, [nodes, edges, userId]);

//   const onConnect = useCallback(
//     (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const addNode = () => {
//     const newNode: CustomNode = {
//       id: Date.now().toString(),
//       data: { label: `Node ${nodes.length + 1}`, backgroundColor: '#ffffff' },
//       position: { x: Math.random() * 500, y: Math.random() * 500 },
//     };
//     // @ts-expect-error
//     setNodes((nds) => nds.concat(newNode));
//   };

//   const handleLogin = () => {
//     const newUserId = prompt("Enter your user ID:");
//     if (newUserId) {
//       setUserId(newUserId);
//       localStorage.setItem('mindmap-userId', newUserId);
//       // Load user&apos;snodes and edges here
//     }
//   };

//   const handleLogout = () => {
//     setUserId(null);
//     localStorage.removeItem('mindmap-userId');
//     setNodes([]);
//     setEdges([]);
//   };

//   const handleSave = () => {
//     if (userId) {
//       localStorage.setItem(`mindmap-nodes-${userId}`, JSON.stringify(nodes));
//       localStorage.setItem(`mindmap-edges-${userId}`, JSON.stringify(edges));
//     } else {
//       alert("Please log in to save your mind map.");
//     }
//   };



//   const handleChangeUserId = () => {
//     const newUserId = prompt("Enter your new user ID:");
//     if (newUserId) {
//       setUserId(newUserId);
//       localStorage.setItem('mindmap-userId', newUserId);
//       // Note: Not changing data on user ID change as per the requirement
//     }
//   };

//   return (
//     <div>
//       <div style={{ padding: '10px', background: '#f0f0f0' }}>
//         {userId ? (
//           <>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button>{userId}</Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuLabel>User Options</DropdownMenuLabel>
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem onClick={handleChangeUserId}>Settings</DropdownMenuItem>
//                   <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
//                 </DropdownMenuGroup>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </>
//         ) : (
//           <Button onClick={handleLogin}>Login</Button>
//         )}
//         <Button onClick={addNode} style={{ marginLeft: '10px' }}>Add Node</Button>
//         <Button onClick={handleSave} style={{ marginLeft: '10px' }}>Save</Button>
//       </div>
//       <div style={{ width: "100%", height: "500px" }}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           fitView
//         >
//           <Controls />
//           <MiniMap />
//           <Background variant={"dots" as BackgroundVariant} gap={12} size={1} />
//         </ReactFlow>
//       </div>
//     </div>
//   );
// }

// export default MindMap;
import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Web Development' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Frontend' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Backend' },
    position: { x: 250, y: 100 },
  },
  {
    id: '4',
    data: { label: 'DevOps' },
    position: { x: 400, y: 100 },
  },
  // Add more nodes as needed
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  // Add more edges as needed
];

function MindMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={'dots' as BackgroundVariant} gap={12} size={1} />

      </ReactFlow>
    </div>
  );
}

export default MindMap;